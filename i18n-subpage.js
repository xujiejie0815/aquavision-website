/* Lightweight bilingual toggle for static subpages.
   - Japanese text lives in the HTML as default content.
   - English lives in data-en (text) or data-en-html (rich) attributes.
   - Choice persists in localStorage('av_lang') and syncs across subpages. */
(function () {
  var KEY = 'av_lang';
  function getLang() {
    try { return localStorage.getItem(KEY) || 'ja'; } catch (e) { return 'ja'; }
  }
  function setLang(l) {
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    // text swaps
    document.querySelectorAll('[data-en]').forEach(function (el) {
      if (!el.hasAttribute('data-ja')) el.setAttribute('data-ja', el.textContent);
      el.textContent = (lang === 'en') ? el.getAttribute('data-en') : el.getAttribute('data-ja');
    });
    // rich (innerHTML) swaps
    document.querySelectorAll('[data-en-html]').forEach(function (el) {
      if (!el.hasAttribute('data-ja-html')) el.setAttribute('data-ja-html', el.innerHTML);
      el.innerHTML = (lang === 'en') ? el.getAttribute('data-en-html') : el.getAttribute('data-ja-html');
    });
    // attribute swaps: data-en-attr="placeholder:Your message|alt:..."
    document.querySelectorAll('[data-en-attr]').forEach(function (el) {
      var spec = el.getAttribute('data-en-attr');
      spec.split('|').forEach(function (pair) {
        var idx = pair.indexOf(':');
        if (idx === -1) return;
        var attr = pair.slice(0, idx).trim();
        var enVal = pair.slice(idx + 1);
        var jaKey = 'data-ja-attr-' + attr;
        if (!el.hasAttribute(jaKey)) el.setAttribute(jaKey, el.getAttribute(attr) || '');
        el.setAttribute(attr, (lang === 'en') ? enVal : el.getAttribute(jaKey));
      });
    });

    // toggle button states
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });

    // let page-specific code react (e.g. job popup data)
    window.AV_LANG = lang;
    window.dispatchEvent(new CustomEvent('av-lang', { detail: lang }));
  }

  function init() {
    apply(getLang());
    document.querySelectorAll('.lang-toggle button[data-lang]').forEach(function (b) {
      b.addEventListener('click', function () {
        var l = b.getAttribute('data-lang');
        setLang(l);
        apply(l);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // expose for inline scripts
  window.AV_getLang = getLang;
})();
