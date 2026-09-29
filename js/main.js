/* ─────────────────────────────────────────────
   DJ SORREN — Main JavaScript
   Handles: nav scroll, mobile menu, platform
   modal, release card rendering, page routing
───────────────────────────────────────────── */

/* ── Nav: scroll state ─────────────────────── */
function initNav() {
    const nav = document.getElementById('site-nav');
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Hamburger toggle
    const burger = document.getElementById('nav-hamburger');
    const mobileNav = document.getElementById('nav-mobile');
    if (burger && mobileNav) {
        burger.addEventListener('click', () => {
            const open = burger.classList.toggle('open');
            mobileNav.classList.toggle('open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        });
        mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            burger.classList.remove('open');
            mobileNav.classList.remove('open');
            document.body.style.overflow = '';
        }));
    }

    // Active link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
        const href = a.getAttribute('href');
        if (href === path || (path === 'index.html' && href === '#')) {
            a.classList.add('active');
        }
    });
}

/* ── Platform Modal ────────────────────────── */
let modalEl = null;

function openModal(release) {
    if (!modalEl) return;
    const links = buildPlatformLinks(release.platforms);

    modalEl.querySelector('.modal-title').textContent = release.title;
    modalEl.querySelector('.modal-subtitle').textContent = `${release.artist} · ${release.category === 'persian' ? 'Persian Music' : 'House Music'}`;

    const list = modalEl.querySelector('.platform-list');
    if (links.length === 0) {
        list.innerHTML = `<p class="platform-empty">Music coming soon to all platforms ✦</p>`;
    } else {
        list.innerHTML = links.map(p => `
      <a href="${p.url}" target="_blank" rel="noopener" class="platform-link">
        <span class="platform-icon">
          <svg viewBox="0 0 24 24"><path d="${p.icon}"/></svg>
        </span>
        <span class="platform-label">${p.label}</span>
        <span class="platform-arrow">↗</span>
      </a>
    `).join('');
    }

    modalEl.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modalEl) return;
    modalEl.classList.remove('open');
    document.body.style.overflow = '';
}

function initModal() {
    modalEl = document.getElementById('platform-modal');
    if (!modalEl) return;
    modalEl.addEventListener('click', e => { if (e.target === modalEl) closeModal(); });
    const closeBtn = modalEl.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

/* ── Release Card HTML ─────────────────────── */
function releaseCardHTML(release, options = {}) {
    const { showBadge = true } = options;
    const badgeClass = release.category === 'persian' ? 'badge-persian' : 'badge-house';
    const badgeLabel = release.category === 'persian' ? 'Persian' : 'House';

    return `
    <article class="release-card" data-id="${release.id}">
      <div class="release-artwork">
        <img src="${release.artwork}" alt="${release.title}" loading="lazy">
        <div class="play-overlay">
          <button class="play-btn-lg" aria-label="Listen to ${release.title}">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </div>
      <div class="release-info">
        ${showBadge ? `<span class="badge ${badgeClass}">${badgeLabel}</span>` : ''}
        <p class="release-title">${release.title}</p>
        ${release.titleLatin !== release.title ? `<p class="release-title-latin">${release.titleLatin}</p>` : ''}
        <p class="release-artist">${release.artist}</p>
        <div class="release-actions">
          <button class="btn-sm btn-ghost listen-btn" data-id="${release.id}">Listen</button>
        </div>
      </div>
    </article>
  `;
}

/* ── Featured Release HTML ─────────────────── */
function featuredReleaseHTML(release, options = {}) {
    const { className = '' } = options;
    const badgeClass = release.category === 'persian' ? 'badge-persian' : 'badge-house';
    const badgeLabel = release.category === 'persian' ? 'Persian Music' : 'House Music';

    return `
    <div class="release-featured ${className}">
      <div class="release-featured-artwork">
        <img src="${release.artwork}" alt="${release.title}">
        <div class="featured-overlay">
          <button class="featured-play-btn" aria-label="Listen to ${release.title}">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </div>
      <div class="release-featured-info">
        <span class="featured-label">Latest Release</span>
        <span class="badge ${badgeClass}">${badgeLabel}</span>
        <h2 class="release-featured-title">${release.title}</h2>
        ${release.titleLatin !== release.title ? `<p class="release-featured-latin">${release.titleLatin}</p>` : ''}
        <p class="release-featured-artist">${release.artist}</p>
        <p class="release-featured-date">${formatDate(release.releaseDate)}</p>
        <div class="release-featured-actions">
          <button class="btn-primary listen-btn" data-id="${release.id}">Listen Now</button>
        </div>
      </div>
    </div>
  `;
}

/* ── Small world release HTML ──────────────── */
function worldReleaseHTML(release, category) {
    const isCurrent = category === release.category;
    if (!isCurrent) return '';
    const accent = category === 'persian' ? 'var(--persian-color)' : 'var(--house-color)';
    return `
    <div class="world-release">
      <div class="world-artwork">
        <img src="${release.artwork}" alt="${release.title}">
      </div>
      <div class="world-release-info">
        <p class="world-release-title">${release.title}</p>
        ${release.titleLatin !== release.title ? `<p class="world-release-latin">${release.titleLatin}</p>` : ''}
        <p class="world-release-artist">${release.artist}</p>
        <div class="world-release-actions">
          <button class="btn-sm btn-ghost listen-btn" data-id="${release.id}">Listen</button>
        </div>
      </div>
    </div>
  `;
}

/* ── Bind listen buttons ───────────────────── */
function bindListenButtons(container) {
    container = container || document;
    container.querySelectorAll('.listen-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            const release = RELEASES.find(r => r.id === id);
            if (release) openModal(release);
        });
    });
}

/* ── Platform section on homepage ─────────── */
function renderPlatformCards(containerId, clickFn) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const platforms = [
        'spotify', 'appleMusic', 'youtube', 'youtubeMusic',
        'amazonMusic', 'deezer', 'tidal', 'soundcloud'
    ];

    el.innerHTML = platforms.map(key => {
        const meta = PLATFORM_META[key];
        if (!meta) return '';
        const url = SOCIAL_LINKS[key]; // Check if we have a global link
        const tag = url ? 'a' : 'div';
        const attrs = url ? `href="${url}" target="_blank" rel="noopener"` : `role="button" tabindex="0"`;
        return `
      <${tag} class="platform-card" ${attrs} data-platform="${key}">
        <span class="platform-card-icon">
          <svg viewBox="0 0 24 24"><path d="${meta.icon}"/></svg>
        </span>
        <span class="platform-card-name">${meta.label}</span>
      </${tag}>
    `;
    }).join('');
}

/* ── Scroll to section ─────────────────────── */
function initScrollHint() {
    const btn = document.getElementById('scroll-hint');
    if (!btn) return;
    btn.addEventListener('click', () => {
        const target = document.getElementById('latest');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
}

/* ── Init ──────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initModal();
    initScrollHint();
    renderPlatformCards('platform-cards-grid');
    bindListenButtons();
});
