/* ── Shared HTML Components ─────────────────────────────────────
   Injected into every page via JS to keep nav/footer/modal DRY
─────────────────────────────────────────────────────────────── */

function injectNav(activePage) {
  const navLinks = [
    { href: 'persian.html', label: 'Persian' },
    { href: 'house.html', label: 'House' },
    { href: 'music.html', label: 'Music' },
    { href: 'about.html', label: 'About' },
  ];

  const linksHTML = navLinks.map(l =>
    `<a href="${l.href}" class="${activePage === l.href ? 'active' : ''}">${l.label}</a>`
  ).join('');

  const mobileLinks = navLinks.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <nav id="site-nav">
      <div class="container nav-inner">
        <a href="index.html" class="nav-logo">DJ <span>Sorren</span></a>
        <div class="nav-links">${linksHTML}</div>
        <div class="nav-right">
          <a href="music.html" class="btn-listen">Listen</a>
          <button id="nav-hamburger" class="nav-hamburger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </nav>
    <div id="nav-mobile" class="nav-mobile">
      ${mobileLinks}
      <a href="music.html" class="btn-listen" style="margin-top:16px;">Listen Now</a>
    </div>
  `);
}

function injectModal() {
  document.body.insertAdjacentHTML('beforeend', `
    <div id="platform-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-label="Listen on platforms">
      <div class="modal-panel">
        <div class="modal-header">
          <div class="modal-header-info">
            <p class="modal-title">—</p>
            <p class="modal-subtitle">DJ Sorren</p>
          </div>
          <button class="modal-close" aria-label="Close">
            <svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>
          </button>
        </div>
        <div class="platform-list"></div>
      </div>
    </div>
  `);
}

function injectFooter() {
  const year = new Date().getFullYear();
  const socials = [
    { key: 'instagram', href: SOCIAL_LINKS.persian?.instagram || SOCIAL_LINKS.house?.instagram, icon: PLATFORM_META.instagram?.icon },
    { key: 'facebook', href: SOCIAL_LINKS.persian?.facebook || SOCIAL_LINKS.house?.facebook, icon: PLATFORM_META.facebook?.icon },
    { key: 'telegram', href: SOCIAL_LINKS.persian?.telegram || SOCIAL_LINKS.house?.telegram, icon: PLATFORM_META.telegram?.icon },
  ].filter(s => s.href && s.icon);

  const socialsHTML = socials.map(s => `
    <a href="${s.href}" target="_blank" rel="noopener" class="social-icon" aria-label="${s.key}">
      <svg viewBox="0 0 24 24"><path d="${s.icon}"/></svg>
    </a>
  `).join('');

  document.body.insertAdjacentHTML('beforeend', `
    <footer>
      <div class="container">
        <div class="footer-inner">
          <p class="footer-logo">DJ <span>Sorren</span></p>
          <nav class="footer-links">
            <a href="persian.html">Persian</a>
            <a href="house.html">House</a>
            <a href="music.html">Music</a>
            <a href="about.html">About</a>
          </nav>
          <div class="footer-social">${socialsHTML}</div>
          <p class="footer-copy">© ${year} DJ Sorren. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `);
}
