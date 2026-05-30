// hero.jsx — Editorial cultural-entertainment hero
// Focus: content / immersive experience / entertainment company aesthetic

const { useRef, useEffect, useState } = React;

/* ---------- Sea 3D wave grid — fills entire hero background ---------- */
function HeroCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let raf = 0;
    let w = 0,h = 0,dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;

    const resize = () => {
      const rect = cv.getBoundingClientRect();
      w = rect.width;h = rect.height;
      cv.width = w * dpr;cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = cv.getBoundingClientRect();
      mouseRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const GRID_X = 56;
    const GRID_Z = 30;
    const SPACING = 1;

    const project = (x, y, z, camY, camZ) => {
      const px = x;
      const py = y - camY;
      const pz = z + camZ;
      if (pz <= 0.01) return null;
      const persp = 1.6;
      const f = persp / pz;
      const baseScale = Math.min(w, h) * 0.55;
      return {
        sx: w / 2 + px * f * baseScale,
        sy: h * 0.62 + py * f * baseScale,
        f,
        depth: pz
      };
    };

    const draw = () => {
      t += 0.012;
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.05;

      // White → very soft aqua gradient (sky → water) — brighter
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "#FFFFFF");
      bg.addColorStop(0.45, "#F0F6FB");
      bg.addColorStop(0.75, "#DCEBF5");
      bg.addColorStop(1, "#C2DEEE");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      const camY = 0.35 + mouseRef.current.y * 0.10;
      const camZ = 0.55;
      const yawTilt = mouseRef.current.x * 0.15;

      const waveY = (x, z) => {
        return (
          Math.sin(x * 0.32 + t * 1.1) * 0.13 +
          Math.sin(z * 0.40 + t * 0.85) * 0.11 +
          Math.sin((x + z) * 0.26 + t * 1.25) * 0.075 +
          Math.cos(x * 0.52 - z * 0.38 + t * 0.65) * 0.05);

      };

      // build projected points
      const pts = [];
      for (let zi = 0; zi < GRID_Z; zi++) {
        const row = [];
        for (let xi = 0; xi < GRID_X; xi++) {
          const xWorld = (xi - GRID_X / 2) * SPACING * 0.10 + yawTilt * 0.4;
          const zWorld = zi * SPACING * 0.16 - 0.05;
          const yWorld = waveY(xi - GRID_X / 2, zi);
          const p = project(xWorld, yWorld, zWorld, camY, camZ);
          row.push({ ...(p || {}), yWorld });
        }
        pts.push(row);
      }

      // depth lines (left-right contour lines)
      for (let zi = 0; zi < GRID_Z; zi++) {
        ctx.beginPath();
        let started = false;
        for (let xi = 0; xi < GRID_X; xi++) {
          const p = pts[zi][xi];
          if (!p || !p.sx) {started = false;continue;}
          if (!started) {ctx.moveTo(p.sx, p.sy);started = true;} else
          ctx.lineTo(p.sx, p.sy);
        }
        const depthRatio = 1 - zi / GRID_Z;
        const isHighlight = zi % 4 === 0;
        const alpha = isHighlight ? 0.85 * depthRatio + 0.18 : 0.45 * depthRatio + 0.06;
        const color = isHighlight ? "15, 60, 100" : "60, 140, 185";
        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.lineWidth = isHighlight ? 1.0 : 0.7;
        ctx.stroke();
      }

      // vertical depth lines (sparse, fade with distance)
      for (let xi = 0; xi < GRID_X; xi += 2) {
        ctx.beginPath();
        let started = false;
        for (let zi = 0; zi < GRID_Z; zi++) {
          const p = pts[zi][xi];
          if (!p || !p.sx) {started = false;continue;}
          if (!started) {ctx.moveTo(p.sx, p.sy);started = true;} else
          ctx.lineTo(p.sx, p.sy);
        }
        const closest = pts[0][xi];
        const farthest = pts[GRID_Z - 1][xi];
        if (closest && farthest && closest.sx && farthest.sx) {
          const grd = ctx.createLinearGradient(closest.sx, closest.sy, farthest.sx, farthest.sy);
          grd.addColorStop(0, "rgba(20, 75, 120, 0.65)");
          grd.addColorStop(1, "rgba(80, 160, 200, 0)");
          ctx.strokeStyle = grd;
        } else {
          ctx.strokeStyle = "rgba(80, 160, 200, 0.35)";
        }
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // gold sun-reflection point (drifts) — more vibrant
      const goldX = Math.sin(t * 0.45) * 0.35;
      const goldZ = 0.85 + Math.cos(t * 0.35) * 0.25;
      const goldP = project(goldX, waveY(goldX * 8, goldZ * 5) - 0.05, goldZ, camY, camZ);
      if (goldP && goldP.sx) {
        const glow = ctx.createRadialGradient(goldP.sx, goldP.sy, 0, goldP.sx, goldP.sy, 80);
        glow.addColorStop(0, "rgba(212, 168, 42, 0.75)");
        glow.addColorStop(0.4, "rgba(212, 168, 42, 0.28)");
        glow.addColorStop(1, "rgba(212, 168, 42, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(goldP.sx, goldP.sy, 80, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 220, 100, 0.98)";
        ctx.beginPath();
        ctx.arc(goldP.sx, goldP.sy, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // top sky fade (cinematic)
      const topFade = ctx.createLinearGradient(0, 0, 0, h * 0.35);
      topFade.addColorStop(0, "rgba(250, 252, 254, 0.6)");
      topFade.addColorStop(1, "rgba(250, 252, 254, 0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, w, h * 0.35);

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

/* ---------- Sea-themed 3D VR Diorama (water contour lines, depth perception) ---------- */
function XRCreativeDiorama({ isJa }) {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  React.useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    let raf = 0;
    let w = 0,h = 0,dpr = Math.min(window.devicePixelRatio || 1, 2);
    let t = 0;

    const resize = () => {
      const rect = cv.getBoundingClientRect();
      w = rect.width;h = rect.height;
      cv.width = w * dpr;cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const rect = cv.getBoundingClientRect();
      mouseRef.current.tx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseRef.current.ty = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    // 3D wave grid — points on a 2D plane projected with perspective
    const GRID_X = 36;
    const GRID_Z = 22;
    const SPACING = 1;

    const project = (x, y, z, camY, camZ) => {
      // y is height (up), z is depth (into screen)
      const px = x;
      const py = y - camY;
      const pz = z + camZ;
      if (pz <= 0.01) return null;
      const persp = 1.6;
      const f = persp / pz;
      return {
        sx: w / 2 + px * f * Math.min(w, h) * 0.5,
        sy: h * 0.55 + py * f * Math.min(w, h) * 0.55,
        f,
        depth: pz
      };
    };

    const draw = () => {
      t += 0.014;
      mouseRef.current.x += (mouseRef.current.tx - mouseRef.current.x) * 0.06;
      mouseRef.current.y += (mouseRef.current.ty - mouseRef.current.y) * 0.06;

      // soft light water background gradient
      const bg = ctx.createLinearGradient(0, 0, 0, h);
      bg.addColorStop(0, "rgba(232, 244, 251, 0)");
      bg.addColorStop(0.4, "rgba(213, 235, 247, 0.15)");
      bg.addColorStop(1, "rgba(178, 213, 234, 0.35)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // camera tilt with mouse
      const camY = 0.35 + mouseRef.current.y * 0.15;
      const camZ = 0.6;
      const yawTilt = mouseRef.current.x * 0.18;

      // wave height function — multiple sine layers for organic ocean motion
      const waveY = (x, z) => {
        return (
          Math.sin(x * 0.35 + t * 1.1) * 0.12 +
          Math.sin(z * 0.42 + t * 0.8) * 0.10 +
          Math.sin((x + z) * 0.28 + t * 1.3) * 0.07 +
          Math.cos(x * 0.55 - z * 0.4 + t * 0.6) * 0.05);

      };

      // build all projected points first (so we can connect with lines)
      const pts = [];
      for (let zi = 0; zi < GRID_Z; zi++) {
        const row = [];
        for (let xi = 0; xi < GRID_X; xi++) {
          const xWorld = (xi - GRID_X / 2) * SPACING * 0.12 + yawTilt * 0.4;
          const zWorld = zi * SPACING * 0.18 - 0.1;
          const yWorld = waveY(xi - GRID_X / 2, zi);
          const p = project(xWorld, yWorld, zWorld, camY, camZ);
          row.push({ ...(p || {}), yWorld });
        }
        pts.push(row);
      }

      // draw connecting lines (contour grid)
      // Z-lines (going into distance) — vertical depth lines
      for (let xi = 0; xi < GRID_X; xi += 2) {
        ctx.beginPath();
        let started = false;
        for (let zi = 0; zi < GRID_Z; zi++) {
          const p = pts[zi][xi];
          if (!p || !p.sx) {started = false;continue;}
          if (!started) {ctx.moveTo(p.sx, p.sy);started = true;} else
          ctx.lineTo(p.sx, p.sy);
        }
        // gradient — closer = brighter aqua, far = fade to nothing
        const closest = pts[0][xi];
        const farthest = pts[GRID_Z - 1][xi];
        if (closest && farthest && closest.sx && farthest.sx) {
          const grd = ctx.createLinearGradient(closest.sx, closest.sy, farthest.sx, farthest.sy);
          grd.addColorStop(0, "rgba(46, 130, 178, 0.55)");
          grd.addColorStop(1, "rgba(111, 184, 216, 0)");
          ctx.strokeStyle = grd;
        } else {
          ctx.strokeStyle = "rgba(111, 184, 216, 0.3)";
        }
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }

      // X-lines (left-right, the wave contour lines)
      for (let zi = 0; zi < GRID_Z; zi++) {
        ctx.beginPath();
        let started = false;
        for (let xi = 0; xi < GRID_X; xi++) {
          const p = pts[zi][xi];
          if (!p || !p.sx) {started = false;continue;}
          if (!started) {ctx.moveTo(p.sx, p.sy);started = true;} else
          ctx.lineTo(p.sx, p.sy);
        }
        // depth-based opacity (closer rows = stronger)
        const depthRatio = 1 - zi / GRID_Z;
        const isHighlight = zi % 4 === 0;
        const alpha = isHighlight ? 0.7 * depthRatio + 0.15 : 0.35 * depthRatio + 0.05;
        const color = isHighlight ? "27, 90, 130" : "111, 184, 216";
        ctx.strokeStyle = `rgba(${color}, ${alpha})`;
        ctx.lineWidth = isHighlight ? 0.85 : 0.55;
        ctx.stroke();
      }

      // accent gold particle at a wave crest — like sun reflection
      const goldX = Math.sin(t * 0.5) * 0.3;
      const goldZ = 0.8 + Math.cos(t * 0.4) * 0.3;
      const goldP = project(goldX, waveY(goldX * 8, goldZ * 5) - 0.05, goldZ, camY, camZ);
      if (goldP && goldP.sx) {
        const glow = ctx.createRadialGradient(goldP.sx, goldP.sy, 0, goldP.sx, goldP.sy, 28);
        glow.addColorStop(0, "rgba(201, 166, 72, 0.85)");
        glow.addColorStop(0.4, "rgba(201, 166, 72, 0.3)");
        glow.addColorStop(1, "rgba(201, 166, 72, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(goldP.sx, goldP.sy, 28, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(255, 215, 110, 0.95)";
        ctx.beginPath();
        ctx.arc(goldP.sx, goldP.sy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // surface highlight (top edge fade for cinematic feel)
      const topFade = ctx.createLinearGradient(0, 0, 0, h * 0.25);
      topFade.addColorStop(0, "rgba(245, 250, 254, 0.55)");
      topFade.addColorStop(1, "rgba(245, 250, 254, 0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, w, h * 0.25);

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const tagline = isJa ? "VR · XR Creative Studio" : "VR · XR Creative Studio";
  const labels = ["VR", "AR", "MR", "SPATIAL", "AI", "IMMERSIVE"];

  return (
    <div className="xr-diorama" aria-hidden="true">
      <div className="xr-diorama-canvas-wrap">
        <canvas ref={canvasRef} className="xr-diorama-canvas" />
      </div>
      <div className="xr-diorama-meta">
        <div className="xr-diorama-tagline">
          <span className="xr-dot"></span>
          <span>{tagline}</span>
        </div>
        <div className="xr-chip-row" aria-hidden="true">
          {labels.map((l, i) =>
          <span key={i} className="xr-chip" style={{ animationDelay: `${i * 0.7}s` }}>{l}</span>
          )}
        </div>
      </div>
    </div>);

}

/* ---------- Hero ---------- */
function Hero({ copy, lang }) {
  const h = copy.hero;
  const isJa = lang === 'ja';
  return (
    <section id="vision" className="hero hero-editorial" data-screen-label="Hero">
      <HeroCanvas />

      <div className="hero-content hero-editorial-content">
        <div className="hero-editorial-eyebrow reveal in">
          <span className="line"></span>
          <span>{isJa ? "XRエンターテイメント × カルチャー体験" : "XR Entertainment × Cultural Experience"}</span>
        </div>

        <h1 className="hero-editorial-headline reveal in">
          <span className="line-1">Dive Into</span>
          <span className="line-2" style={{ color: "rgb(28, 58, 93)" }}>New Reality</span>
        </h1>

        <p className="hero-editorial-lede reveal in" style={{ maxWidth: "680px" }}>
          {h.headline_jp.split('\n').map((line, li) =>
          <React.Fragment key={li}>{li > 0 && <br />}{line}</React.Fragment>
          )}
        </p>
      </div>
    </section>);

}

window.Hero = Hero;