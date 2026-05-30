function RES(p){ return (typeof window!=="undefined" && window.__resources && window.__resources[p]) || p; }
// app.jsx — root with nav, scroll reveal, and Tweaks (language toggle)

const { useState, useEffect } = React;

function Nav({ copy, lang, setLang, accent, setAccent }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const items = [
  ["index.html#vision", copy.nav.vision],
  ["index.html#about", copy.nav.about],
  ["index.html#news", copy.nav.news],
  ["index.html#works", copy.nav.works],
  ["index.html#business", copy.nav.business || "BUSINESS"],
  ["competence.html", copy.nav.services],
  ["index.html#team", copy.nav.team]];


  return (
    <>
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="index.html#vision" className="brand nav-brand-logo">
        <img src={RES("assets/logo-mark.png")} alt="" className="nav-logo-mark" style={{ height: "30px", width: "auto" }} />
        <img src={RES("assets/logo-wordmark.png")} alt="AquaVision" className="nav-logo-wordmark" style={{ height: "16px", width: "auto" }} />
      </a>
      <ul className="nav-menu">
        {items.map(([href, label]) =>
        <li key={href}><a href={href}>{label}</a></li>
        )}
      </ul>
      <div className="nav-right">
        <div className="lang-toggle" role="group" aria-label="Language">
          <button className={lang === 'ja' ? 'active' : ''} onClick={() => setLang('ja')}>JA</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <a href="#contact" className="cta-pill primary" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-contact')); }}>{copy.nav.contact}</a>
      </div>

      <div className="nav-mobile-right">
        <div className="nav-mobile-lang lang-toggle" role="group" aria-label="Language">
          <button className={lang === 'ja' ? 'active' : ''} onClick={() => setLang('ja')}>JA</button>
          <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
        </div>
        <button
          type="button"
          className={`nav-burger ${menuOpen ? 'open' : ''}`}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div className={`nav-drawer-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}></div>

    <div className={`nav-drawer ${menuOpen ? 'open' : ''}`}>
      <button type="button" className="nav-drawer-close" aria-label="Close" onClick={() => setMenuOpen(false)}>
        <span></span><span></span>
      </button>
      <ul className="nav-drawer-menu">
        {items.map(([href, label]) =>
        <li key={href}><a href={href} onClick={() => setMenuOpen(false)}>{label}</a></li>
        )}
      </ul>
      <a href="index.html#contact" className="cta-pill primary nav-drawer-cta" onClick={(e) => { e.preventDefault(); setMenuOpen(false); window.dispatchEvent(new CustomEvent('open-contact')); }}>{copy.nav.contact}</a>
    </div>
    </>);

}

/* ---------------- Scroll Reveal ---------------- */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ---------------- App ---------------- */
function App() {
  const defaults = window.__TWEAK_DEFAULTS__ || { lang: 'ja', accent: 'aqua' };
  const [t, setTweak] = useTweaks(defaults);
  const lang = t.lang;
  const accent = t.accent || 'aqua';
  const copy = COPY[lang];

  // sync data-accent on html
  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  // sync lang on html
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useScrollReveal();

  const setLang = (l) => setTweak('lang', l);
  const setAccent = (a) => setTweak('accent', a);

  return (
    <>
      <Nav copy={copy} lang={lang} setLang={setLang} accent={accent} setAccent={setAccent} />
      <main>
        <Hero copy={copy} lang={lang} />
        <About copy={copy} />
        <News copy={copy} />
        <Works copy={copy} />
        <Business copy={copy} />
        <Services copy={copy} />
        <Team copy={copy} />
        <Partners copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Language">
          <TweakRadio label="Lang" value={lang} options={[
          { value: 'ja', label: '日本語' },
          { value: 'en', label: 'English' }]
          } onChange={(v) => setTweak('lang', v)} />
        </TweakSection>
        <TweakSection label="Accent color">
          <TweakRadio label="Tone" value={accent} options={[
          { value: 'aqua', label: 'Aqua' },
          { value: 'violet', label: 'Violet' },
          { value: 'amber', label: 'Amber' },
          { value: 'mint', label: 'Mint' }]
          } onChange={(v) => setTweak('accent', v)} />
        </TweakSection>
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);