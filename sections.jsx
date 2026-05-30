function RES(p){ return (typeof window!=="undefined" && window.__resources && window.__resources[p]) || p; }
// sections.jsx — About, Services, Works, Technology, News, Partners, Team, Contact, Footer

function SectionHeader({ label, title, subtitle, lede, id }) {
  return (
    <div className="section-header reveal" style={{ lineHeight: "1" }}>
      <div className="label">{label}</div>
      <div>
        <h2 className="h-section">{title}</h2>
        {subtitle ? <div className="h-jp-sub">{subtitle}</div> : null}
        {lede ? <p className="lede" style={{ marginTop: '20px', width: "576px" }}>{lede}</p> : null}
      </div>
    </div>);

}

/* ---------------- About ---------------- */
function About({ copy }) {
  const a = copy.about;
  const sub = copy === COPY.ja ? "AquaVisionについて" : "About AquaVision";
  return (
    <section id="about" className="section" data-screen-label="About">
      <div className="container">
        <SectionHeader label={a.label} title={a.title} subtitle={sub} />
        <div className="about-grid simple">
          <div className="reveal">
            <p className="about-lede" style={{ fontSize: "14px" }}>{a.body.split("\n\n")[0]}</p>
            <div className="about-image">
              <img src={RES("assets/bosch-scene.png")} alt="Bosch VR scene" />
              <span className="about-image-cap" style={{ color: "rgb(255, 255, 255)" }}>MUSEO DEL PRADO VR -2025 TOKYO</span>
            </div>
          </div>
          <div className="reveal delay-1">
            <dl className="about-meta">
              {a.meta.map(([k, v], i) =>
              <React.Fragment key={i}>
                  <dt>{k}</dt><dd style={{ fontSize: "15px" }}>{v}</dd>
                </React.Fragment>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>);

}

/* ---------------- Services (Core Competence) ---------------- */
const ServiceGlyph = ({ kind }) => {
  // simple geometric glyphs only — no AI illustration
  if (kind === 0) return (// Creativity — orbit
    <svg viewBox="0 0 64 64" className="service-glyph" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="32" cy="32" r="22" />
      <ellipse cx="32" cy="32" rx="22" ry="9" />
      <ellipse cx="32" cy="32" rx="9" ry="22" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
    </svg>);

  if (kind === 1) return (// Large scale — building w/ scale marker
    <svg viewBox="0 0 64 64" className="service-glyph" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="8" y="14" width="48" height="34" />
      <rect x="14" y="20" width="20" height="22" />
      <line x1="38" y1="20" x2="50" y2="20" />
      <line x1="38" y1="26" x2="50" y2="26" />
      <line x1="38" y1="32" x2="46" y2="32" />
      <line x1="14" y1="48" x2="14" y2="56" />
      <line x1="50" y1="48" x2="50" y2="56" />
    </svg>);

  if (kind === 2) return (// Multi-sensor — concentric senses
    <svg viewBox="0 0 64 64" className="service-glyph" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="32" cy="32" r="6" />
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="22" />
      <circle cx="32" cy="32" r="2.5" fill="currentColor" stroke="none" />
      <line x1="32" y1="2" x2="32" y2="10" />
      <line x1="32" y1="54" x2="32" y2="62" />
      <line x1="2" y1="32" x2="10" y2="32" />
      <line x1="54" y1="32" x2="62" y2="32" />
    </svg>);

  if (kind === 3) return (// Cutting-edge tech — XR triangle
    <svg viewBox="0 0 64 64" className="service-glyph" fill="none" stroke="currentColor" strokeWidth="1.25">
      <polygon points="32,8 56,52 8,52" />
      <polygon points="32,20 46,46 18,46" />
      <line x1="32" y1="8" x2="32" y2="20" />
      <circle cx="32" cy="38" r="2.5" fill="currentColor" stroke="none" />
    </svg>);

  // kind 4 — Total art — composition
  return (
    <svg viewBox="0 0 64 64" className="service-glyph" fill="none" stroke="currentColor" strokeWidth="1.25">
      <rect x="10" y="10" width="20" height="20" />
      <rect x="34" y="10" width="20" height="20" />
      <rect x="10" y="34" width="20" height="20" />
      <circle cx="44" cy="44" r="11" />
    </svg>);

};

function Services({ copy }) {
  const s = copy.services;
  const isJa = copy === COPY.ja;
  return (
    <section id="services" className="section section-compact" data-screen-label="Services">
      <div className="container">
        <SectionHeader label={s.label} title={s.title} lede={s.lede} />
        <div className="competence-cta reveal">
          <a href="competence.html" className="cta-pill primary">
            {isJa ? "詳しく見る" : "View more"}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.6">
              <line x1="0" y1="5" x2="12" y2="5" />
              <polyline points="9,1 13,5 9,9" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}

/* ---------------- Works ---------------- */
const WorkPlaceholder = ({ i }) => {
  // varied abstract SVG placeholders — clearly placeholder but on-brand
  const variants = [
  // 0 — radial rings
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#0B1422" />
      <g transform="translate(200 150)" fill="none" stroke="#2EB5E6" strokeWidth="0.6" opacity="0.7" className="accent-stroke">
        {Array.from({ length: 24 }).map((_, k) => <circle key={k} r={8 + k * 9} />)}
      </g>
      <g transform="translate(200 150)" fill="none" stroke="#D4A82A" strokeWidth="0.4" opacity="0.5">
        {Array.from({ length: 12 }).map((_, k) => <line key={k} x1="-160" y1="0" x2="160" y2="0" transform={`rotate(${k * 15})`} />)}
      </g>
    </svg>,
  // 1 — flow field arcs
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#0B1422" />
      {Array.from({ length: 40 }).map((_, k) =>
    <path key={k} d={`M ${-20 + k * 12} 300 Q ${100 + k * 8} ${150 - k * 4}, ${420 - k * 8} 0`}
    fill="none" stroke="#2EB5E6" strokeWidth="0.5" opacity={0.35 + Math.sin(k * 0.3) * 0.2} className="accent-stroke" />
    )}
    </svg>,
  // 2 — grid + dot
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#0B1422" />
      <g stroke="rgba(255,255,255,0.08)" strokeWidth="0.5">
        {Array.from({ length: 17 }).map((_, k) => <line key={`v${k}`} x1={k * 25} y1="0" x2={k * 25} y2="300" />)}
        {Array.from({ length: 13 }).map((_, k) => <line key={`h${k}`} x1="0" y1={k * 25} x2="400" y2={k * 25} />)}
      </g>
      <circle cx="240" cy="160" r="80" fill="none" stroke="#D4A82A" strokeWidth="1" />
      <circle cx="240" cy="160" r="50" fill="#2EB5E6" opacity="0.6" />
      <circle cx="240" cy="160" r="4" fill="#F2F6FA" />
    </svg>,
  // 3 — wave fold
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#0B1422" />
      {Array.from({ length: 22 }).map((_, k) => {
      const off = k * 12;
      return <path key={k} d={`M 0 ${off + 50} Q 100 ${off}, 200 ${off + 30} T 400 ${off + 40}`}
      fill="none" stroke="#2EB5E6" strokeWidth="0.5" opacity={0.6 - k * 0.02} className="accent-stroke" />;
    })}
    </svg>,
  // 4 — sphere wireframe
  <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="300" fill="#0B1422" />
      <g transform="translate(200 150)" fill="none" stroke="#2EB5E6" strokeWidth="0.6" className="accent-stroke">
        <circle r="100" />
        {Array.from({ length: 9 }).map((_, k) => <ellipse key={`y${k}`} rx="100" ry={10 + k * 12} />)}
        {Array.from({ length: 9 }).map((_, k) => <ellipse key={`x${k}`} ry="100" rx={10 + k * 12} />)}
      </g>
    </svg>];

  return variants[i % variants.length];
};

function Works({ copy }) {
  const w = copy.works;
  const [open, setOpen] = React.useState(null);
  React.useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {if (e.key === 'Escape') setOpen(null);};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
  const item = open != null ? w.items[open] : null;

  const findItem = (key) => w.items.find((it) => it.key === key);
  const segments = w.segments || [{ itemKeys: w.items.map((it) => it.key || it.title) }];

  return (
    <section id="works" className="section" data-screen-label="Works">
      <div className="container">
        <SectionHeader label={w.label} title={w.title} lede={w.lede} />

        {segments.map((seg, sIdx) =>
        <div key={sIdx} className={`work-segment ${sIdx === 1 ? 'reverse' : ''}`}>
            <div className="work-segment-intro reveal">
              <div className="work-segment-eyebrow">{seg.eyebrow}</div>
              <h3 className="work-segment-title">
                {seg.title}
                {seg.en && <span className="en">{seg.en}</span>}
              </h3>
              <p className="work-segment-lede">{seg.lede}</p>
              <div className="work-segment-cta">
                {seg.comingSoon ?
              <span className="cta-pill" aria-disabled="true">
                      {copy === COPY.ja ? "Coming Soon" : "Coming Soon"}
                    </span> :
              <a href={seg.ctaUrl || "#"}
              className="cta-pill"
              {...seg.ctaUrl ?
              { target: "_blank", rel: "noopener noreferrer" } :
              { "aria-disabled": "true" }}>
                      {copy === COPY.ja ? "詳しく見る" : "View more"}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <line x1="0" y1="5" x2="12" y2="5" />
                        <polyline points="9,1 13,5 9,9" />
                      </svg>
                    </a>}
              </div>
            </div>

            <div className="work-segment-cards">
              {seg.itemKeys.map((key) => {
              const it = findItem(key);
              if (!it) return null;
              const i = w.items.indexOf(it);
              return (
                <button
                  type="button"
                  key={key}
                  className="work"
                  onClick={() => setOpen(i)}
                  aria-label={`${it.title} — ${it.jp}`}>
                  
                    <div className="work-thumb">
                      <span className="work-tag" style={{ color: "rgb(255, 255, 255)" }}>{it.tag}</span>
                      {it.image ?
                    <img src={it.image} alt={it.title} className="work-img" /> :
                    <WorkPlaceholder i={i} />}
                      <span className="work-plus" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6">
                          <line x1="12" y1="4" x2="12" y2="20" />
                          <line x1="4" y1="12" x2="20" y2="12" />
                        </svg>
                      </span>
                    </div>
                    <div className="work-info">
                      <h4 className="work-title">{it.title}<span className="jp">{it.jp}</span></h4>
                      <div className="work-meta">{it.year} · {it.venue}</div>
                    </div>
                    {it.tagline && <div className="work-tagline">{it.tagline}</div>}
                  </button>);

            })}
            </div>
          </div>
        )}
      </div>
      {item && <WorkModal item={item} onClose={() => setOpen(null)} />}
    </section>);

}

function WorkModal({ item, onClose }) {
  const [active, setActive] = React.useState(0);
  const gallery = item.gallery && item.gallery.length ? item.gallery : item.image ? [item.image] : [];
  return (
    <div className="work-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="work-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="member-modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
        <div className="work-modal-gallery">
          {gallery.length > 0 &&
          <div className="work-modal-hero">
              <img src={gallery[active]} alt={item.title} />
            </div>
          }
          {gallery.length > 1 &&
          <div className="work-modal-thumbs">
              {gallery.map((g, i) =>
            <button
              key={i}
              type="button"
              className={`work-modal-thumb ${active === i ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Image ${i + 1}`}>
              
                  <img src={g} alt="" />
                </button>
            )}
            </div>
          }
        </div>
        <div className="work-modal-body">
          <div className="work-modal-tag">{item.tag}</div>
          <h3 className="work-modal-title" style={{ fontSize: "24px" }}>{item.title}</h3>
          <div className="work-modal-sub" style={{ fontSize: "24px" }}>{item.jp}</div>
          {item.tagline && <div className="work-modal-tagline">{item.tagline}</div>}
          {item.intro && <p className="work-modal-intro" style={{ color: "rgb(51, 178, 230)", letterSpacing: "0px", fontFamily: "\"Noto Sans JP\"", fontSize: "14px" }}>{item.intro}</p>}
          {item.body && item.body.split("\n\n").map((p, i) =>
          <p key={i} className="work-modal-p">{p}</p>
          )}
          {item.meta &&
          <dl className="work-modal-meta">
              {item.meta.map(([k, v], i) =>
            <React.Fragment key={i}><dt>{k}</dt><dd>{v}</dd></React.Fragment>
            )}
            </dl>
          }
        </div>
      </div>
    </div>);

}

/* ---------------- Business (parallel to Services, list style) ---------------- */
function BusinessRow({ item }) {
  const [open, setOpen] = React.useState(false);
  return (
    <li className={`business-row ${item.image ? 'has-image' : ''}`}>
      <span className="tech-num">{item.num}</span>
      <div className="business-text">
        <h4 className="tech-name">{item.en}<span className="jp">{item.jp}</span></h4>
        <p className="business-body">{item.body}</p>
        {item.capabilities && item.capabilities.length > 0 &&
        <div className={`business-acc ${open ? 'open' : ''}`}>
            <button
            type="button"
            className="business-acc-trigger"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}>
            
              <span>Capabilities  ／  ケイパビリティ</span>
              <span className="business-acc-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <line x1="7" y1="1.5" x2="7" y2="12.5" />
                  <line x1="1.5" y1="7" x2="12.5" y2="7" />
                </svg>
              </span>
            </button>
            <div className="business-acc-panel" hidden={!open}>
              <ol className="business-caps">
                {item.capabilities.map((cap, j) =>
              <li key={j}>
                    <span className="business-cap-num">{String(j + 1).padStart(2, '0')}</span>
                    <span className="business-cap-text">{cap}</span>
                  </li>
              )}
              </ol>
            </div>
          </div>
        }
      </div>
      {item.image &&
      <div className="business-image">
          <img src={item.image} alt={item.imageCap || ''} />
          {item.imageCap && <span className="business-image-cap" style={{ color: "rgb(255, 255, 255)" }}>{item.imageCap}</span>}
        </div>
      }
    </li>);

}

function Business({ copy }) {
  if (!copy.business) return null;
  const b = copy.business;
  return (
    <section id="business" className="section" data-screen-label="Business">
      <div className="container">
        <SectionHeader label={b.label} title={b.title} lede={b.lede} />
        <ul className="business-list reveal">
          {b.items.map((it, i) => <BusinessRow key={i} item={it} />)}
        </ul>
      </div>
    </section>);

}

/* ---------------- CEO Message ---------------- */
function CEOMessage({ copy }) {
  if (!copy.ceo) return null;
  const c = copy.ceo;
  return (
    <section id="message" className="section ceo-section" data-screen-label="CEO Message">
      <div className="container">
        <div className="ceo-grid">
          <div className="ceo-aside reveal">
            <div className="eyebrow no-line">{c.label}</div>
            <h2 className="h-section ceo-title">{c.title}</h2>
            <div className="ceo-sign">
              <div className="ceo-sign-role">{c.sign_role}</div>
              <div className="ceo-sign-name">{c.sign_name}</div>
            </div>
          </div>
          <div className="ceo-body reveal delay-1">
            {c.body.split("\n\n").map((p, i) =>
            <p key={i}>{p}</p>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ---------------- Technology ---------------- */
function TechVis() {
  // ambient animated SVG — wireframe globe + scanning line
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id="techgrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(46,181,230,0.10)" />
          <stop offset="60%" stopColor="rgba(46,181,230,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#techgrad)" />
      <g transform="translate(200 200)" fill="none" stroke="rgba(242,246,250,0.18)" strokeWidth="0.6">
        <circle r="140" />
        {Array.from({ length: 13 }).map((_, k) =>
        <ellipse key={`y${k}`} rx="140" ry={10 + k * 10} stroke={k === 6 ? "rgba(46,181,230,0.6)" : "rgba(242,246,250,0.16)"} />
        )}
        {Array.from({ length: 9 }).map((_, k) =>
        <line key={`r${k}`} x1="-140" y1="0" x2="140" y2="0" transform={`rotate(${k * 20})`} stroke="rgba(242,246,250,0.08)" />
        )}
      </g>
      {/* scanning line */}
      <line x1="60" y1="200" x2="340" y2="200" stroke="rgba(212,168,42,0.5)" strokeWidth="0.6">
        <animate attributeName="y1" values="60;340;60" dur="6s" repeatCount="indefinite" />
        <animate attributeName="y2" values="60;340;60" dur="6s" repeatCount="indefinite" />
      </line>
      {/* corner ticks */}
      {[[20, 20], [380, 20], [20, 380], [380, 380]].map(([x, y], k) =>
      <g key={k} stroke="rgba(242,246,250,0.4)" strokeWidth="1">
          <line x1={x} y1={y} x2={x + (k % 2 === 0 ? 12 : -12)} y2={y} />
          <line x1={x} y1={y} x2={x} y2={y + (k < 2 ? 12 : -12)} />
        </g>
      )}
      {/* readout */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(242,246,250,0.5)">
        <text x="30" y="40">N 35.6917°</text>
        <text x="30" y="54">E 139.7300°</text>
        <text x="300" y="40">SCAN</text>
        <text x="300" y="54" fill="#D4A82A">ACTIVE</text>
        <text x="30" y="375">FOV 0.42 RAD</text>
        <text x="300" y="375">REAL · TIME</text>
      </g>
    </svg>);

}

function Technology({ copy }) {
  const t = copy.tech;
  return (
    <section id="tech" className="section" data-screen-label="Technology">
      <div className="container">
        <SectionHeader label={t.label} title={t.title} lede={t.lede} />
        <div className="tech-wrap">
          <div className="tech-vis reveal">
            <div className="tech-vis-label"><span className="dot"></span>SYS / REALTIME</div>
            <TechVis />
          </div>
          <ul className="tech-list reveal delay-1">
            {t.items.map((it, i) =>
            <li key={i} className="tech-item">
                <span className="tech-num">{it.num}</span>
                <h4 className="tech-name">{it.en}<span className="jp">{it.jp}</span></h4>
                <span className="tech-keyword">{it.k}</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}

/* ---------------- News ---------------- */
function News({ copy }) {
  const n = copy.news;
  return (
    <section id="news" className="section" data-screen-label="News">
      <div className="container">
        <SectionHeader label={n.label} title={n.title} />
        <ul className="news-list reveal">
          {n.items.map((it, i) => {
            const slug = String(i + 1).padStart(2, '0');
            return (
              <li key={i} className="news-item">
                <a href={`news/${slug}.html`} className="news-item-link" aria-label={it.title}>
                  <span className="news-date">{it.date}</span>
                  <span className={`news-cat ${it.catCls}`}>{it.cat}</span>
                  <span className="news-title">{it.title}</span>
                  <span className="news-arrow">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="currentColor" strokeWidth="1">
                      <line x1="0" y1="6" x2="18" y2="6" />
                      <polyline points="13,1 19,6 13,11" />
                    </svg>
                  </span>
                </a>
              </li>);

          })}
        </ul>
        <div style={{ marginTop: '32px', textAlign: 'right' }}>
          <a href="news.html" className="cta-pill" style={{ borderColor: 'var(--line-2)' }}>
            {n.more}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1">
              <line x1="0" y1="5" x2="12" y2="5" />
              <polyline points="9,1 13,5 9,9" />
            </svg>
          </a>
        </div>
      </div>
    </section>);

}

/* ---------------- Partners ---------------- */
function Partners({ copy }) {
  const p = copy.partners;
  return (
    <section id="partners" className="section" data-screen-label="Partners">
      <div className="container">
        <SectionHeader label={p.label} title={p.title} lede={p.lede} />
        <div className="partners reveal">
          {p.items.map((it, i) =>
          <div key={i} className="partner">
              <span className="partner-sub">P—{String(i + 1).padStart(2, '0')}</span>
              {it.logo ?
            <div className="partner-logo-box">
                  <img src={it.logo} alt={it.name} />
                </div> :

            <span className="partner-name">{it.name}</span>
            }
              <span className="partner-tag">{it.sub}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------------- Team ---------------- */
function MemberPortrait({ i }) {
  // Real photo for specific members
  const photos = { 0: RES("assets/team-fu.jpg"), 2: RES("assets/team-xu.png") };
  if (photos[i]) {
    return <img src={photos[i]} alt="" className="member-portrait-img" />;
  }
  // Playful character-style placeholders — distinctive geometric "personas"
  const palettes = [
  { bg: "#1a3a5c", skin: "#f4d8b8", hair: "#1a1a1a", acc: "#2EB5E6" }, // Stephanie — CEO
  { bg: "#2d2a4a", skin: "#e8c9a0", hair: "#3d2818", acc: "#D4A82A" }, // Aiko — Creative
  { bg: "#1a4a3c", skin: "#e6c4a0", hair: "#2a1a0a", acc: "#7ed957" }, // Ryo — Tech
  { bg: "#4a2a3c", skin: "#d9b48a", hair: "#1a1a1a", acc: "#ff6b6b" } // Marcus — Producer
  ];
  const p = palettes[i % palettes.length];
  const variations = [
  // 0 — woman with bob, glasses, headset
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill={p.bg} />
      {/* subtle grid pattern */}
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
        {Array.from({ length: 11 }).map((_, k) => <line key={`v${k}`} x1={k * 20} y1="0" x2={k * 20} y2="200" />)}
      </g>
      {/* shoulders */}
      <path d={`M 30 200 Q 100 130, 170 200 Z`} fill="#1a1a1a" />
      {/* neck */}
      <rect x="86" y="125" width="28" height="22" fill={p.skin} />
      {/* face */}
      <ellipse cx="100" cy="100" rx="38" ry="42" fill={p.skin} />
      {/* hair — bob style */}
      <path d="M 60 95 Q 60 50, 100 48 Q 140 50, 140 95 L 140 110 L 130 105 Q 130 88, 100 88 Q 70 88, 70 105 L 60 110 Z" fill={p.hair} />
      {/* glasses */}
      <circle cx="86" cy="100" r="9" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="114" cy="100" r="9" fill="none" stroke="#1a1a1a" strokeWidth="2" />
      <line x1="95" y1="100" x2="105" y2="100" stroke="#1a1a1a" strokeWidth="1.5" />
      {/* eyes inside glasses */}
      <circle cx="86" cy="100" r="2" fill="#1a1a1a" />
      <circle cx="114" cy="100" r="2" fill="#1a1a1a" />
      {/* smile */}
      <path d="M 90 118 Q 100 124, 110 118" fill="none" stroke="#8a6e5a" strokeWidth="1.5" strokeLinecap="round" />
      {/* accent dot */}
      <circle cx="170" cy="30" r="6" fill={p.acc} opacity="0.8" />
    </svg>,
  // 1 — long-haired creative
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill={p.bg} />
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
        {Array.from({ length: 11 }).map((_, k) => <line key={`v${k}`} x1={k * 20} y1="0" x2={k * 20} y2="200" />)}
      </g>
      <path d={`M 25 200 Q 100 135, 175 200 Z`} fill="#2a1a1a" />
      <rect x="86" y="125" width="28" height="22" fill={p.skin} />
      <ellipse cx="100" cy="100" rx="36" ry="42" fill={p.skin} />
      {/* long wavy hair */}
      <path d="M 55 95 Q 55 45, 100 45 Q 145 45, 145 95 L 148 175 Q 140 165, 135 175 L 138 145 L 132 110 Q 130 95, 100 95 Q 70 95, 68 110 L 62 145 L 65 175 Q 60 165, 52 175 Z" fill={p.hair} />
      {/* eyes — closed/peaceful */}
      <path d="M 82 100 Q 87 104, 92 100" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 108 100 Q 113 104, 118 100" fill="none" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* small smile */}
      <path d="M 92 118 Q 100 122, 108 118" fill="none" stroke="#8a6e5a" strokeWidth="1.5" strokeLinecap="round" />
      {/* earring */}
      <circle cx="64" cy="108" r="2" fill={p.acc} />
      <circle cx="136" cy="108" r="2" fill={p.acc} />
    </svg>,
  // 2 — tech guy with cap
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill={p.bg} />
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
        {Array.from({ length: 11 }).map((_, k) => <line key={`v${k}`} x1={k * 20} y1="0" x2={k * 20} y2="200" />)}
      </g>
      <path d={`M 30 200 Q 100 130, 170 200 Z`} fill="#2d3748" />
      <rect x="88" y="125" width="24" height="22" fill={p.skin} />
      <ellipse cx="100" cy="100" rx="35" ry="40" fill={p.skin} />
      {/* cap brim */}
      <path d="M 55 78 Q 100 76, 145 78 L 148 84 L 52 84 Z" fill={p.hair} />
      {/* cap top */}
      <path d="M 62 78 Q 62 50, 100 48 Q 138 50, 138 78 Z" fill={p.hair} />
      {/* cap accent stripe */}
      <rect x="92" y="55" width="16" height="3" fill={p.acc} />
      {/* eyes — focused */}
      <circle cx="86" cy="103" r="2.5" fill="#1a1a1a" />
      <circle cx="114" cy="103" r="2.5" fill="#1a1a1a" />
      <circle cx="86.5" cy="102" r="0.8" fill="white" />
      <circle cx="114.5" cy="102" r="0.8" fill="white" />
      {/* eyebrows */}
      <line x1="80" y1="94" x2="92" y2="95" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="108" y1="95" x2="120" y2="94" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
      {/* slight smile */}
      <path d="M 92 120 Q 100 124, 108 120" fill="none" stroke="#8a6e5a" strokeWidth="1.5" strokeLinecap="round" />
      {/* badge */}
      <circle cx="170" cy="30" r="6" fill={p.acc} opacity="0.8" />
    </svg>,
  // 3 — producer with beard
  <svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
      <rect width="200" height="200" fill={p.bg} />
      <g stroke="rgba(255,255,255,0.04)" strokeWidth="0.5">
        {Array.from({ length: 11 }).map((_, k) => <line key={`v${k}`} x1={k * 20} y1="0" x2={k * 20} y2="200" />)}
      </g>
      <path d={`M 25 200 Q 100 128, 175 200 Z`} fill="#1a2a3a" />
      <rect x="88" y="125" width="24" height="22" fill={p.skin} />
      <ellipse cx="100" cy="100" rx="36" ry="42" fill={p.skin} />
      {/* hair — short side */}
      <path d="M 62 85 Q 62 55, 100 50 Q 138 55, 138 85 L 138 92 Q 120 80, 100 80 Q 80 80, 62 92 Z" fill={p.hair} />
      {/* beard/stubble */}
      <path d="M 70 115 Q 75 138, 100 142 Q 125 138, 130 115 Q 125 128, 100 130 Q 75 128, 70 115 Z" fill={p.hair} opacity="0.85" />
      {/* eyes */}
      <circle cx="86" cy="103" r="2.5" fill="#1a1a1a" />
      <circle cx="114" cy="103" r="2.5" fill="#1a1a1a" />
      {/* glasses (rectangular) */}
      <rect x="76" y="96" width="20" height="12" fill="none" stroke="#1a1a1a" strokeWidth="1.5" rx="2" />
      <rect x="104" y="96" width="20" height="12" fill="none" stroke="#1a1a1a" strokeWidth="1.5" rx="2" />
      <line x1="96" y1="100" x2="104" y2="100" stroke="#1a1a1a" strokeWidth="1.2" />
      {/* smile under beard */}
      <path d="M 90 122 Q 100 126, 110 122" fill="none" stroke="#5a4030" strokeWidth="1.5" strokeLinecap="round" />
      {/* accent */}
      <circle cx="170" cy="30" r="6" fill={p.acc} opacity="0.8" />
    </svg>];

  return variations[i % variations.length];
}

function Team({ copy }) {
  const t = copy.team;
  const [open, setOpen] = React.useState(null);
  // close on escape
  React.useEffect(() => {
    if (open == null) return;
    const onKey = (e) => {if (e.key === 'Escape') setOpen(null);};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const m = open != null ? t.items[open] : null;
  return (
    <section id="team" className="section" data-screen-label="Team">
      <div className="container">
        <SectionHeader label={t.label} title={t.title} lede={t.lede} />
        <div className="team-grid reveal">
          {t.items.map((mem, i) =>
          <button
            type="button"
            key={i}
            className="member"
            onClick={() => setOpen(i)}
            aria-label={`${mem.role} — ${mem.en}`}>
            
              <div className="member-photo">
                <MemberPortrait i={i} />
                <span className="member-plus" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                  </svg>
                </span>
              </div>
              <div className="member-role" style={{ lineHeight: "1.7" }}>{mem.role}</div>
              <h4 className="member-name" style={{ lineHeight: "1" }}>{mem.en}<span className="jp" style={{ lineHeight: "1.7" }}>{mem.jp}</span></h4>
              <div className="member-cta">
                <span>View Profile</span>
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <line x1="0" y1="5" x2="12" y2="5" />
                  <polyline points="9,1 13,5 9,9" />
                </svg>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Member modal */}
      {m &&
      <div className="member-modal" role="dialog" aria-modal="true" onClick={() => setOpen(null)}>
          <div className="member-modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="member-modal-close" onClick={() => setOpen(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </svg>
            </button>
            <div className="member-modal-photo">
              <MemberPortrait i={open} />
            </div>
            <div className="member-modal-body">
              <div className="member-modal-role">{m.role}</div>
              <h3 className="member-modal-name">{m.en}<span className="jp">{m.jp}</span></h3>
              <p className="member-modal-bio">{m.bio}</p>
              {m.tags &&
            <div className="member-modal-tags">
                  {m.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
                </div>
            }
            </div>
          </div>
        </div>
      }
    </section>);

}

/* ---------------- Contact ---------------- */
function Contact({ copy }) {
  const c = copy.contact;
  const [openForm, setOpenForm] = React.useState(false);
  React.useEffect(() => {
    const h = () => setOpenForm(true);
    window.addEventListener('open-contact', h);
    return () => window.removeEventListener('open-contact', h);
  }, []);
  const isJa = copy === COPY.ja;

  React.useEffect(() => {
    if (!openForm) return;
    const onKey = (e) => {if (e.key === 'Escape') setOpenForm(false);};
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openForm]);

  return (
    <section id="contact" className="contact" data-screen-label="Contact">
      <div className="contact-bg" />
      <div className="container contact-inner">
        <div className="eyebrow reveal" style={{ marginBottom: '32px' }}>{c.eyebrow}</div>
        <h2 className="contact-line reveal delay-1">{c.line_en}</h2>
        <p className="lede reveal delay-2" style={{ margin: '24px auto 0', textAlign: 'center' }}>{c.line_jp}</p>
        <div className="contact-cta reveal delay-3">
          <button type="button" onClick={() => setOpenForm(true)} className="cta-pill primary">
            {c.cta1}
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="0" y1="5" x2="12" y2="5" />
              <polyline points="9,1 13,5 9,9" />
            </svg>
          </button>
          <a href="recruit.html" className="cta-pill">{c.cta2}</a>
        </div>
        <div className="contact-meta reveal delay-4">
          {c.meta.map(([k, v], i) =>
          <span key={i}><span style={{ color: 'var(--fg-dim)', marginRight: '8px' }}>{k}</span><a href={k === 'Email' || k === 'Press' ? `mailto:${v}` : '#'}>{v}</a></span>
          )}
        </div>
      </div>
      {openForm && <ContactModal lang={isJa ? 'ja' : 'en'} onClose={() => setOpenForm(false)} />}
    </section>);
}

function ContactModal({ lang, onClose }) {
  const t = lang === 'ja' ? {
    title: "Contact",
    sub: "お問い合わせ",
    intro: "ご相談・お見積もり・取材・出展のご依頼など、\n下記フォームよりお気軽にご連絡ください。3営業日以内に担当よりご返信します。",
    type: "ご用件",
    types: ["プロジェクト相談", "出展・コラボレーション", "メディア・取材", "投資家・パートナー", "採用について", "その他"],
    name: "お名前",
    company: "会社・組織名",
    email: "メールアドレス",
    message: "ご相談内容",
    messagePh: "プロジェクトの概要・規模・時期など、わかる範囲でご記入ください。",
    privacy: "送信いただいた内容は弊社プライバシーポリシーに基づいて取り扱います。",
    submit: "送信する",
    sent: "送信ありがとうございました。",
    sentMsg: "3営業日以内に担当よりご連絡いたします。",
    closeLabel: "閉じる"
  } : {
    title: "Contact",
    sub: "Contact us",
    intro: "Reach out for project inquiries, quotes, press, or exhibition requests using the form below. We'll respond within 3 business days.",
    type: "Inquiry type",
    types: ["Project inquiry", "Exhibition / Collaboration", "Press / Media", "Investors / Partners", "Careers", "Other"],
    name: "Name",
    company: "Company / Organization",
    email: "Email",
    message: "Message",
    messagePh: "Project outline, scope, and timing where possible.",
    privacy: "We handle the information you submit in accordance with our Privacy Policy.",
    submit: "Send",
    sent: "Message sent. Thank you.",
    sentMsg: "We'll be in touch within 3 business days.",
    closeLabel: "Close"
  };
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({ type: t.types[0], name: '', company: '', email: '', message: '' });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const submit = (e) => {e.preventDefault();setDone(true);};
  return (
    <div className="contact-modal" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="member-modal-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
            <line x1="5" y1="5" x2="19" y2="19" />
            <line x1="19" y1="5" x2="5" y2="19" />
          </svg>
        </button>
        {!done ?
        <>
            <div className="contact-modal-head">
              <div className="contact-modal-eyebrow">{t.sub}</div>
              <h3 className="contact-modal-title">{t.title}</h3>
              <p className="contact-modal-intro" style={{ whiteSpace: 'pre-line' }}>{t.intro}</p>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <div className="cf-row">
                <label className="cf-label">{t.type}</label>
                <div className="cf-types">
                  {t.types.map((tp) =>
                <button
                  key={tp}
                  type="button"
                  className={`cf-type ${form.type === tp ? 'active' : ''}`}
                  onClick={() => setForm((f) => ({ ...f, type: tp }))}>
                  {tp}</button>
                )}
                </div>
              </div>
              <div className="cf-grid">
                <div className="cf-row">
                  <label className="cf-label">{t.name} *</label>
                  <input required type="text" className="cf-input" value={form.name} onChange={update('name')} />
                </div>
                <div className="cf-row">
                  <label className="cf-label">{t.company}</label>
                  <input type="text" className="cf-input" value={form.company} onChange={update('company')} />
                </div>
              </div>
              <div className="cf-row">
                <label className="cf-label">{t.email} *</label>
                <input required type="email" className="cf-input" value={form.email} onChange={update('email')} />
              </div>
              <div className="cf-row">
                <label className="cf-label">{t.message} *</label>
                <textarea required className="cf-textarea" rows="5" placeholder={t.messagePh} value={form.message} onChange={update('message')} />
              </div>
              <p className="cf-privacy">{t.privacy}</p>
              <button type="submit" className="cta-pill primary cf-submit">
                {t.submit}
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="0" y1="5" x2="12" y2="5" />
                  <polyline points="9,1 13,5 9,9" />
                </svg>
              </button>
            </form>
          </> :

        <div className="contact-modal-sent">
            <div className="contact-sent-icon">
              <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="var(--aqua)" strokeWidth="1.5">
                <circle cx="32" cy="32" r="28" />
                <polyline points="20,33 28,42 46,22" />
              </svg>
            </div>
            <h3 className="contact-modal-title" style={{ marginTop: '20px' }}>{t.sent}</h3>
            <p className="contact-modal-intro">{t.sentMsg}</p>
            <button type="button" className="cta-pill" onClick={onClose} style={{ marginTop: '24px' }}>{t.closeLabel}</button>
          </div>
        }
      </div>
    </div>);

}

/* ---------------- Partner Marquee → bottom static strip ---------------- */
function PartnerMarquee({ copy }) {
  const partners = ["TKP", "APAMAN", "東京タワー", "MRX"];
  const partnersEn = ["TKP", "APAMAN", "Tokyo Tower", "MRX"];
  const isJa = copy === COPY.ja;
  const list = isJa ? partners : partnersEn;
  return (
    <div className="marquee-strip static">
      <div className="container">
        <div className="label">{isJa ? "提携先" : "Partners"}</div>
        <div className="marquee-static">
          {list.map((p, i) =>
          <span key={i} className="marquee-item">
              <span className="dot"></span>
              {p}
            </span>
          )}
        </div>
      </div>
    </div>);

}

/* ---------------- Tagline Band ---------------- */
function TaglineBand({ copy }) {
  const isJa = copy === COPY.ja;
  return (
    <section className="tagline-band">
      <div className="container">
        <h2 className="tagline-band-text">
          {isJa ? <>Dive Into <span className="it">New Reality.</span></> : <>Dive Into <span className="it">New Reality.</span></>}
        </h2>
        <div className="tagline-band-jp">
          {isJa ? "現実と仮想の境界を越えて、感情に深く潜る" : "Beyond the boundary of the real and the virtual"}
        </div>
      </div>
    </section>);

}

/* ---------------- Footer ---------------- */
function Footer({ copy }) {
  const f = copy.footer;
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo-card">
          <img src={RES("assets/logo-vertical-transparent.png")} alt="AquaVision — Dive Into New Reality" />
        </div>
        {f.tag && <p className="footer-tag">{f.tag}</p>}
      </div>
      {f.cols.map((col, i) =>
      <div key={i} className={col.h === 'Menu' ? 'footer-col footer-col-menu' : 'footer-col'}>
          <h5>{col.h}</h5>
          <ul>
            {col.items.map((it, j) => {
            const [label, href] = Array.isArray(it) ? it : [it, "#"];
            const isExt = href.startsWith("http");
            return (
              <li key={j}>
                  <a href={href} target={isExt ? "_blank" : undefined} rel={isExt ? "noopener noreferrer" : undefined}>
                    {label}
                  </a>
                </li>);

          })}
          </ul>
        </div>
      )}
      <div className="footer-bottom">
        <span>{f.legal}</span>
        <a href="#">{f.privacy}</a>
      </div>
    </footer>);

}

Object.assign(window, { About, Services, Business, Works, Technology, News, Partners, Team, CEOMessage, Contact, Footer, PartnerMarquee, TaglineBand });