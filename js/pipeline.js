/* ─────────────────────────────────────────────
   DJ SORREN — Pipeline Page JS
   Renders: featured banner, Spotify track list,
   platform pills strip
───────────────────────────────────────────── */

/**
 * Main entry — called from persian.html / house.html
 * @param {'persian'|'house'} category
 */
function renderPipelinePage(category) {
  // ── Live Player at top ────────────────────
  renderLivePlayer(category);
  // ── Platform Playlists Grid ───────────────
  renderPlatformPlaylistsHub(category);
}

/* ── Featured banner ───────────────────────── */
function buildFeaturedHTML(release, isPersian) {
  const eyebrow = isPersian ? 'Latest Release · Persian' : 'Latest Release · House';
  const hasSub = release.titleLatin && release.titleLatin !== release.title;
  return `
    <div class="track-featured">
      <div class="track-featured-art">
        <img src="${release.artwork}" alt="${release.title}" loading="eager">
      </div>
      <div class="track-featured-info">
        <p class="track-featured-eyebrow">${eyebrow}</p>
        <h2 class="track-featured-title">${release.title}</h2>
        ${hasSub ? `<p class="track-featured-latin">${release.titleLatin}</p>` : ''}
        <p class="track-featured-artist">${release.artist}</p>
        <div class="track-featured-actions">
          <button class="btn-primary btn-sm listen-btn" data-id="${release.id}">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="margin-right:4px"><path d="M8 5v14l11-7z"/></svg>
            Listen Now
          </button>
        </div>
      </div>
    </div>
  `;
}

/* ── Spotify-style track row ───────────────── */
function buildTrackRowHTML(release, num) {
  const hasSub = release.titleLatin && release.titleLatin !== release.title;
  return `
    <div class="track-row" role="listitem" data-id="${release.id}" tabindex="0" aria-label="${release.title}">
      <span class="track-num">${num}</span>
      <span class="track-row-play" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
      </span>
      <div class="track-art">
        <img src="${release.artwork}" alt="" loading="lazy">
      </div>
      <div class="track-info">
        <p class="track-name">${release.title}</p>
        ${hasSub ? `<p class="track-name-latin">${release.titleLatin}</p>` : ''}
      </div>
      <span class="track-date">${formatDate(release.releaseDate)}</span>
      <div class="track-row-action">
        <button class="btn-sm btn-ghost listen-btn" data-id="${release.id}">Listen</button>
      </div>
    </div>
  `;
}

/* ── Platform strip ────────────────────────── */
function renderPlatformStrip(containerId, releases, accentColor, isPersian) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const platformOrder = ['spotify', 'appleMusic', 'youtube', 'youtubeMusic', 'amazonMusic', 'deezer', 'tidal', 'soundcloud'];

  // Collect all available URLs across all releases for each platform
  const platformUrls = {};
  platformOrder.forEach(key => {
    const found = releases.find(r => r.platforms[key]);
    if (found) platformUrls[key] = found.platforms[key];
  });

  el.innerHTML = platformOrder.map(key => {
    const meta = PLATFORM_META[key];
    if (!meta) return '';
    const url = platformUrls[key];
    const tag = url ? 'a' : 'div';
    const attrs = url ? `href="${url}" target="_blank" rel="noopener"` : `role="button" tabindex="0" aria-label="Listen on ${meta.label} — coming soon"`;
    const comingSoon = url ? '' : `<span class="platform-pill-coming">Soon</span>`;
    return `
      <${tag} class="platform-pill" ${attrs} data-platform="${key}">
        <svg viewBox="0 0 24 24"><path d="${meta.icon}"/></svg>
        <span class="platform-pill-label">${meta.label}</span>
        ${comingSoon}
      </${tag}>
    `;
  }).join('');
}

/* ── Bind click / keyboard on rows & buttons ─ */
function initPipelineInteractions() {
  // Listen buttons → platform modal
  document.querySelectorAll('.listen-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id || btn.closest('[data-id]')?.dataset.id;
      const release = RELEASES.find(r => r.id === id);
      if (release) openModal(release);
    });
  });

  // Clicking the whole track row also opens modal
  document.querySelectorAll('.track-row').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('.listen-btn')) return; // handled above
      const id = row.dataset.id;
      const release = RELEASES.find(r => r.id === id);
      if (release) openModal(release);
    });
    row.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        row.click();
      }
    });
  });
}

/* ── Render Platform Playlists Hub ─────────── */
function renderPlatformPlaylistsHub(category) {
  const container = document.getElementById(`${category}-platform-hub`);
  if (!container) return;

  const data = getStreamingPlaylists(category);
  const platformKeys = ['spotify', 'appleMusic', 'youtubeMusic', 'youtube', 'soundcloud'];
  const isPersian = category === 'persian';
  const themeClass = isPersian ? 'persian-theme' : 'house-theme';

  container.innerHTML = platformKeys.map(key => {
    const meta = PLATFORM_META[key];
    const playlists = data[key] || [];
    if (!meta) return '';

    const playlistRows = playlists.map((item, index) => {
      const num = index + 1;
      const isActive = item.active !== false && item.url;
      if (isActive) {
        return `
          <a href="${item.url}" target="_blank" rel="noopener" class="platform-playlist-row active">
            <span class="playlist-row-num">${num}</span>
            <div class="playlist-row-info">
              <span class="playlist-row-title">${item.title}</span>
              <span class="playlist-row-sub">${item.subtitle || `Playlist ${num}`}</span>
            </div>
            <svg class="playlist-row-arrow" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3zM5 5h6v2H5v12h12v-6h2v7a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"/>
            </svg>
          </a>
        `;
      } else {
        return `
          <div class="platform-playlist-row disabled">
            <span class="playlist-row-num muted">${num}</span>
            <div class="playlist-row-info">
              <span class="playlist-row-title muted">${item.title}</span>
              <span class="playlist-row-sub muted">${item.subtitle || `Playlist ${num} (Coming Soon)`}</span>
            </div>
            <span class="playlist-row-badge-soon">Soon</span>
          </div>
        `;
      }
    }).join('');

    const countLabel = playlists.length === 1 ? '1 Playlist' : `${playlists.length} Playlists`;

    return `
      <div class="platform-hub-square-card ${themeClass}">
        <div class="platform-square-header">
          <div class="platform-square-brand">
            <svg viewBox="0 0 24 24" class="platform-square-icon"><path d="${meta.icon}"/></svg>
            <h3>${meta.label}</h3>
          </div>
          <span class="platform-square-tag">${countLabel}</span>
        </div>

        <div class="platform-square-body">
          ${playlistRows}
        </div>
      </div>
    `;
  }).join('');
}

/* ── Live SoundCloud player (top of Listen) ─ */
function renderLivePlayer(category) {
  const container = document.getElementById(`${category}-live-player`);
  if (!container) return;

  const data = getStreamingPlaylists(category);
  const scPlaylists = (data.soundcloud || []);
  const embedItem = scPlaylists.find(p => p.embedUrl);
  if (!embedItem) return;

  const isPersian = category === 'persian';
  const themeClass = isPersian ? 'persian-theme' : 'house-theme';
  const dotClass = isPersian ? 'persian' : 'house';
  const scMeta = PLATFORM_META.soundcloud;

  container.innerHTML = `
    <div class="listen-live-player ${themeClass}">
      <div class="live-player-header">
        <div class="live-player-badge">
          <span class="live-dot ${dotClass}"></span>
          <span>Live ${isPersian ? 'Persian' : 'House'} Playlist · Auto-Updated Daily</span>
        </div>
        <a href="${embedItem.url}" target="_blank" rel="noopener" class="soundcloud-direct-link">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="${scMeta.icon}"/></svg>
          Open in SoundCloud ↗
        </a>
      </div>
      <iframe
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="${embedItem.embedUrl}"
        title="${embedItem.title}">
      </iframe>
    </div>
  `;
}
