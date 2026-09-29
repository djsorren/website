/**
 * DJ Sorren — Release Data Model
 * Add new releases here. The site renders automatically.
 * Leave a platform URL as null/empty to hide it.
 */

const RELEASES = [
  {
    id: "avaye-vesal",
    title: "آوای وصال",
    titleLatin: "Avaye Vesal",
    artist: "DJ Sorren",
    category: "persian",
    releaseDate: "2026-09-21",
    artwork: "assets/images/persian_artwork.png",
    featured: true,
    platforms: {
      spotify: "https://open.spotify.com/artist/2Uvuy5M0SDG2kkVX1qzsko?si=yrdIbSuCRb-G71K2yuxM9Q&utm_source=copy-link",
      appleMusic: "https://music.apple.com/ca/artist/dj-sorren/6797307652",
      youtube: "https://youtube.com/@djsorren?si=6t2F5J3O4fQqA8gt",
      youtubeMusic: "https://music.youtube.com/channel/UCqDvYl2Xt5xO_blKQSOP15w?si=y2bjgDdsIZwltHli",
      amazonMusic: null,
      deezer: null,
      tidal: null,
      soundcloud: "https://on.soundcloud.com/2WnMlVAQejn05gcF1L",
    },
  },
  {
    id: "jame-saaghi",
    title: "جام ساقی",
    titleLatin: "Jame Saaghi",
    artist: "DJ Sorren",
    category: "persian",
    releaseDate: "2026-09-23",
    artwork: "assets/images/persian_artwork.png",
    featured: false,
    platforms: {
      spotify: "https://open.spotify.com/artist/2Uvuy5M0SDG2kkVX1qzsko?si=yrdIbSuCRb-G71K2yuxM9Q&utm_source=copy-link",
      appleMusic: "https://music.apple.com/ca/artist/dj-sorren/6797307652",
      youtube: "https://youtube.com/@djsorren?si=6t2F5J3O4fQqA8gt",
      youtubeMusic: "https://music.youtube.com/channel/UCqDvYl2Xt5xO_blKQSOP15w?si=y2bjgDdsIZwltHli",
      amazonMusic: null,
      deezer: null,
      tidal: null,
      soundcloud: "https://on.soundcloud.com/2WnMlVAQejn05gcF1L",
    },
  },
  {
    id: "rokhe-mahtab",
    title: "رخ مهتاب",
    titleLatin: "Rokhe Mahtab",
    artist: "DJ Sorren",
    category: "persian",
    releaseDate: "2026-09-25",
    artwork: "assets/images/persian_artwork.png",
    featured: false,
    platforms: {
      spotify: "https://open.spotify.com/artist/2Uvuy5M0SDG2kkVX1qzsko?si=yrdIbSuCRb-G71K2yuxM9Q&utm_source=copy-link",
      appleMusic: "https://music.apple.com/ca/artist/dj-sorren/6797307652",
      youtube: "https://youtube.com/@djsorren?si=6t2F5J3O4fQqA8gt",
      youtubeMusic: "https://music.youtube.com/channel/UCqDvYl2Xt5xO_blKQSOP15w?si=y2bjgDdsIZwltHli",
      amazonMusic: null,
      deezer: null,
      tidal: null,
      soundcloud: "https://on.soundcloud.com/2WnMlVAQejn05gcF1L",
    },
  },
  {
    id: "deep-tide",
    title: "Deep Tide",
    titleLatin: "Deep Tide",
    artist: "DJ Sorren",
    category: "house",
    releaseDate: "2026-09-23",
    artwork: "assets/images/house_artwork.png",
    featured: true,
    platforms: {
      spotify: "https://open.spotify.com/artist/2Uvuy5M0SDG2kkVX1qzsko?si=yrdIbSuCRb-G71K2yuxM9Q&utm_source=copy-link",
      appleMusic: "https://music.apple.com/ca/artist/dj-sorren/6797307652",
      youtube: "https://youtube.com/@djsorren?si=6t2F5J3O4fQqA8gt",
      youtubeMusic: "https://music.youtube.com/channel/UCqDvYl2Xt5xO_blKQSOP15w?si=y2bjgDdsIZwltHli",
      amazonMusic: null,
      deezer: null,
      tidal: null,
      soundcloud: "https://on.soundcloud.com/MvKuTBKp712rOVZY88",
    },
  },
  {
    id: "midnight-frequency",
    title: "Midnight Frequency",
    titleLatin: "Midnight Frequency",
    artist: "DJ Sorren",
    category: "house",
    releaseDate: "2026-09-25",
    artwork: "assets/images/house_artwork.png",
    featured: false,
    platforms: {
      spotify: "https://open.spotify.com/artist/2Uvuy5M0SDG2kkVX1qzsko?si=yrdIbSuCRb-G71K2yuxM9Q&utm_source=copy-link",
      appleMusic: "https://music.apple.com/ca/artist/dj-sorren/6797307652",
      youtube: "https://youtube.com/@djsorren?si=6t2F5J3O4fQqA8gt",
      youtubeMusic: "https://music.youtube.com/channel/UCqDvYl2Xt5xO_blKQSOP15w?si=y2bjgDdsIZwltHli",
      amazonMusic: null,
      deezer: null,
      tidal: null,
      soundcloud: "https://on.soundcloud.com/MvKuTBKp712rOVZY88",
    },
  },
];

const PLATFORM_META = {
  spotify: { label: "Spotify", icon: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" },
  appleMusic: { label: "Apple Music", icon: "M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208a5.494 5.494 0 00-.35 1.48 71.58 71.58 0 00-.124 2.03C.005 6.76 0 6.802 0 6.845v10.31c.004.44.017.88.05 1.316.053.655.15 1.305.34 1.935.25.84.688 1.57 1.327 2.17.64.604 1.4.994 2.25 1.21.61.155 1.23.22 1.87.27.29.024.577.04.866.053.04.004.082.01.124.013h12.01c.442-.004.884-.017 1.32-.05.66-.054 1.307-.15 1.937-.343.978-.298 1.78-.855 2.38-1.638.515-.672.82-1.442.942-2.262.09-.582.13-1.166.138-1.75.004-.037.01-.073.013-.11V6.845c-.003-.24-.013-.48-.02-.72zm-8.32 10.15c0 .92-.75 1.66-1.67 1.66-.92 0-1.67-.74-1.67-1.66V9.62c0-.92.75-1.66 1.67-1.66.92 0 1.67.74 1.67 1.66v6.653zm-5.01 0c0 .92-.75 1.66-1.67 1.66-.92 0-1.67-.74-1.67-1.66V9.62c0-.92.75-1.66 1.67-1.66.92 0 1.67.74 1.67 1.66v6.653z" },
  youtube: { label: "YouTube", icon: "M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" },
  youtubeMusic: { label: "YouTube Music", icon: "M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12z" },
  amazonMusic: { label: "Amazon Music", icon: "M.057 18.814a.75.75 0 001.04.183c1.52-1.077 3.09-1.753 4.95-1.753 1.99 0 3.59.74 5.24 1.51 1.66.77 3.37 1.57 5.63 1.57 2.52 0 4.7-.9 6.64-2.37a.75.75 0 00-.9-1.2c-1.73 1.3-3.57 2.07-5.74 2.07-1.99 0-3.59-.74-5.24-1.51-1.66-.77-3.37-1.57-5.63-1.57-2.22 0-4.12.79-5.8 1.99a.75.75 0 00-.19 1.08zM12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm0 18A8.25 8.25 0 1120.25 12 8.26 8.26 0 0112 20.25zm1.5-8.25H12V7.5a.75.75 0 00-1.5 0V12a.75.75 0 00.75.75h1.5a.75.75 0 000-1.5z" },
  deezer: { label: "Deezer", icon: "M0 13.061h3.6v2.126H0zm0-3.127h3.6v2.126H0zm0-3.127h3.6v2.126H0zM4.8 6.807h3.6v2.126H4.8zm0 3.127h3.6v2.126H4.8zm0 3.127h3.6v2.126H4.8zM9.6 3.68h3.6v2.125H9.6zm0 3.127h3.6v2.126H9.6zm0 3.127h3.6v2.126H9.6zm0 3.127h3.6v2.126H9.6zM14.4.553h3.6v2.126h-3.6zm0 3.127h3.6v2.125h-3.6zm0 3.127h3.6v2.126h-3.6zm0 3.127h3.6v2.126h-3.6zm0 3.127h3.6v2.126h-3.6zM19.2 6.807h3.6v2.126h-3.6zm0 3.127H24v2.126h-4.8zm0 3.127H24v2.126h-4.8z" },
  tidal: { label: "Tidal", icon: "M12.012 3.992L8.008 7.996 4.004 3.992 0 7.996l4.004 4.004L8.008 7.996l4.004 4.004 4.004-4.004L12.012 3.992zM8.008 11.988L4.004 7.996 0 12l4.004 4.004L8.008 12l4.004 4.004L16.016 12l-4.004-4.004z" },
  soundcloud: { label: "SoundCloud", icon: "M1.175 12.225c-.015 0-.03.01-.03.03-.002.01 0 .02.01.03.01.01.02.02.03.02.016 0 .03-.01.03-.025.003-.017-.01-.055-.04-.055zm-.899.828c-.017.013-.03.03-.04.048-.007.02-.01.03-.01.04s.003.02.01.025c.007.01.015.014.025.014.01 0 .025-.005.038-.015.025-.02.028-.026.034-.05.003-.012.004-.025.004-.03 0-.015-.01-.025-.02-.03-.012-.007-.027-.007-.04-.002zM24 11.37c0-2.86-2.317-5.18-5.174-5.18-.354 0-.703.037-1.044.108C17.1 3.82 14.474 1.5 11.274 1.5c-.975 0-1.91.228-2.748.644-.83.41-1.55.99-2.108 1.71-.54.71-.91 1.54-1.082 2.43-.2-.04-.4-.06-.602-.06-2.066 0-3.745 1.676-3.745 3.752 0 .58.13 1.13.36 1.63C.66 12.03 0 13.02 0 14.16c0 1.79 1.448 3.24 3.235 3.24h16.63C22.03 17.4 24 15.43 24 13.05c0-.575-.12-1.12-.33-1.614-.01-.024-.038-.05-.04-.066z" },
  instagram: { label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  facebook: { label: "Facebook", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  telegram: { label: "Telegram", icon: "M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.16l-1.97 9.28c-.15.67-.54.83-1.1.52l-3.02-2.23-1.46 1.4c-.16.16-.3.3-.61.3l.22-3.09 5.62-5.07c.24-.22-.05-.34-.37-.13l-6.95 4.37-2.99-.93c-.65-.2-.66-.65.14-.97l11.7-4.51c.54-.2 1.02.12.83.97z" },
};

const SOCIAL_LINKS = {
  persian: {
    instagram: "https://www.instagram.com/djsorren_persian?igsh=MTRtNDJkMjVud3lkMg%3D%3D&utm_source=qr",
    facebook: "https://www.facebook.com/djsorren.persian",
    telegram: "https://t.me/djsorrenp",
  },
  house: {
    instagram: "https://www.instagram.com/djsorren_house?igsh=MXZkN2FzZXduM3M4Ng%3D%3D&utm_source=qr",
    facebook: null,
    telegram: "https://t.me/djsorrenh",
  }
};

/**
 * Pipeline Streaming Playlists Directory
 * Each platform card displays 2 active playlist links by default.
 * Adding more links to this configuration will automatically show a scrollbar.
 */
const STREAMING_PLAYLISTS = {
  persian: {
    spotify: [
      {
        title: "DJ Sorren - Persian Music Playlist vol 1",
        subtitle: "Official Persian Playlist 1",
        url: "https://open.spotify.com/album/28zyBPD2h33K45XIQk7wUe?si=c_O43oeNQ2CXaEQ2gF_DyA",
        active: true
      },
      {
        title: "DJ Sorren - Persian Music Playlist vol 2",
        subtitle: "Official Persian Playlist 2",
        url: "https://open.spotify.com/album/0dSbmvJHvmPOt32UXsei4O?si=3ojD2WBQROybEhs3qUi3lA",
        active: true
      }
    ],
    appleMusic: [
      {
        title: "DJ Sorren - Persian Music Playlist vol 1",
        subtitle: "Official Persian Playlist 1",
        url: "https://music.apple.com/ca/album/persian-dance-music-vol1/6803008873",
        active: true
      },
      {
        title: "DJ Sorren - Persian Music Playlist vol 2",
        subtitle: "Official Persian Playlist 2",
        url: "https://music.apple.com/ca/album/persian-dance-music-vol2/6809371512",
        active: true
      }
    ],
    youtubeMusic: [
      {
        title: "DJ Sorren - Persian Music Playlist vol 1",
        subtitle: "Audio Playlist 1",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_nbdyaY7zZqMhUwbEOD5QdwYZR_zwSL9SM&si=l6WtndGNkOMow_hL",
        active: true
      },
      {
        title: "DJ Sorren - Persian Music Playlist vol 2",
        subtitle: "Audio Playlist 2",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_nS3PVc9zwnMEIajuub2YiHlc_iW-otNac&si=pjfsk7LMP4IOXO6h",
        active: true
      }
    ],
    youtube: [
      {
        title: "DJ Sorren - Persian Music Playlist vol 1",
        subtitle: "Video Playlist 1",
        url: "https://youtube.com/playlist?list=OLAK5uy_kXRd4DmRRk7rr-OkB9b-zon7888RI2RHs&si=0UW6zNY7eivzgRJD",
        active: true
      },
      {
        title: "DJ Sorren - Persian Music Playlist vol 2",
        subtitle: "Video Playlist 2",
        url: "https://youtube.com/playlist?list=OLAK5uy_mDdcevzNr-zngafu3tGmHm58nbqxmz5cw&si=WyDi27FvyupXE_Rk",
        active: true
      }
    ],
    soundcloud: [
      {
        title: "DJ Sorren - Persian Music Playlist vol 1",
        subtitle: "Official Live Playlist 1",
        url: "https://on.soundcloud.com/mQXCHNwulPO45mBmDN",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pouyan-parsi/sets/persian-music&color=%23c8a96e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        active: true
      }
    ]
  },
  house: {
    spotify: [
      {
        title: "DJ Sorren - House Music Playlist vol 1",
        subtitle: "Official House Playlist 1",
        url: "https://open.spotify.com/album/1VfKxqQLdY4oRTgAPmKbRJ?si=rkJ5GIM8R0ya4cUsRLcb4Q",
        active: true
      },
      {
        title: "DJ Sorren - House Music Playlist vol 2",
        subtitle: "Official House Playlist 2",
        url: "https://open.spotify.com/album/5JuWaSigCkyQvdDjhC4XoM?si=s1RAUdMPSqyeCmQ3AnvigQ",
        active: true
      }
    ],
    appleMusic: [
      {
        title: "DJ Sorren - House Music Playlist vol 1",
        subtitle: "Official House Playlist 1",
        url: "https://music.apple.com/ca/album/house-music-vol1/6802964340",
        active: true
      },
      {
        title: "DJ Sorren - House Music Playlist vol 2",
        subtitle: "Official House Playlist 2",
        url: "https://music.apple.com/ca/album/house-music-vol2-ep/6809351756",
        active: true
      }
    ],
    youtubeMusic: [
      {
        title: "DJ Sorren - House Music Playlist vol 1",
        subtitle: "Audio Playlist 1",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_kBSgtp3SW2YxJgJyqaHsHWmKT_clIq-fs&si=XWYSdc4wwZvR0SUI",
        active: true
      },
      {
        title: "DJ Sorren - House Music Playlist vol 2",
        subtitle: "Audio Playlist 2",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_nUYiDlAImyApY0Ab-T7evf8Vl792T2zcs&si=hOBPWxei1mkiYVK8",
        active: true
      }
    ],
    youtube: [
      {
        title: "DJ Sorren - House Music Playlist vol 1",
        subtitle: "Video Playlist 1",
        url: "https://youtube.com/playlist?list=OLAK5uy_mk-hsBIbY5B7iW8JAN6JouIAgadFxfZVI&si=Kb_ApzUmyHtF3jYt",
        active: true
      },
      {
        title: "DJ Sorren - House Music Playlist vol 2",
        subtitle: "Video Playlist 2",
        url: "https://youtube.com/playlist?list=OLAK5uy_mMMAauBcvBo-nE2RCsgUNI2HlNQqzyC68&si=Vg01smCd3InG4bAk",
        active: true
      }
    ],
    soundcloud: [
      {
        title: "DJ Sorren - House Music Playlist vol 1",
        subtitle: "Official Live Playlist 1",
        url: "https://on.soundcloud.com/3G2GDk4e2lC5ydwt0k",
        embedUrl: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/pouyan-parsi/sets/house-music&color=%237eb8d4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
        active: true
      }
    ]
  }
};

function getStreamingPlaylists(category) {
  return STREAMING_PLAYLISTS[category] || {};
}

function getPersianReleases() {
  return RELEASES.filter(r => r.category === "persian").sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

function getHouseReleases() {
  return RELEASES.filter(r => r.category === "house").sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}

function getLatestPersian() {
  return getPersianReleases()[0];
}

function getLatestHouse() {
  return getHouseReleases()[0];
}

function getFeaturedRelease() {
  return RELEASES.find(r => r.featured && r.category === "persian") || RELEASES.find(r => r.featured);
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

function buildPlatformLinks(platforms) {
  return Object.entries(platforms)
    .filter(([key, url]) => url && PLATFORM_META[key])
    .map(([key, url]) => ({ key, url, ...PLATFORM_META[key] }));
}
