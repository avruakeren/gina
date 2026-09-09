/* ============================================================
   DATA DOKUMEN PUBLIK — dirender sebagai kartu di #projects-grid.
   File fisik ada di assets/docs/. Tambah entri baru di sini
   untuk memunculkan kartu baru (otomatis ikut filter + animasi).
   ============================================================ */
window.DOKUMEN_ITEMS = [
  /* ── KARYA & PUBLIKASI ── */
  {
    cat: 'karya', badge: 'Karya & Publikasi', icon: 'fas fa-book-open',
    title: 'Optimalisasi Perkembangan Kognisi Bahasa Peserta Didik Kelas 4',
    desc: 'Artikel jurnal tentang karakteristik dan bentuk optimalisasi perkembangan kognisi bahasa pada peserta didik kelas 4 SDN Kadujangkung 02.',
    tags: ['Jurnal IKA 2023', 'PGSD Untirta'],
    thumb: 'assets/images/docs/thumb-jurnal-ika.jpg',
    file: 'assets/docs/karya/jurnal-ika-kognisi-bahasa-2023.pdf',
    fileLabel: 'PDF · 9 hal · 193 KB'
  },
  {
    cat: 'karya', badge: 'Karya & Publikasi', icon: 'fas fa-gamepad',
    title: 'Media Pembelajaran Interaktif Berbasis Gamifikasi (Genially)',
    desc: 'Artikel jurnal tentang pengembangan dan validasi media interaktif Genially serta dampaknya terhadap hasil belajar Bahasa Indonesia siswa SD.',
    tags: ['CJPE 2026', 'Genially'],
    thumb: 'assets/images/docs/thumb-jurnal-cjpe.jpg',
    file: 'assets/docs/karya/jurnal-cjpe-media-genially-2026.pdf',
    fileLabel: 'PDF · 17 hal · 467 KB'
  },
  {
    cat: 'karya', badge: 'Karya & Publikasi', icon: 'fas fa-pen-nib',
    title: 'Esai: Siapa Pengelola Ekosistem Bahasa?',
    desc: 'Esai tentang peran generasi muda dalam pemartabatan Bahasa Indonesia di tengah maraknya campur kode bahasa asing. Konteks: Krida Duta Bahasa.',
    tags: ['Esai', 'Duta Bahasa'],
    file: 'assets/docs/karya/esai-siapa-pengelola-ekosistem-bahasa.pdf',
    thumb: 'assets/images/docs/thumb-esai.jpg',
    fileLabel: 'PDF · 10 hal · 177 KB'
  },
  {
    cat: 'karya', badge: 'Karya & Publikasi', icon: 'fas fa-dice',
    title: 'Gobak Sodor',
    desc: 'Karya permainan edukatif yang telah terdaftar hak cipta di PDKI DJKI.',
    tags: ['HKI', 'Hak Cipta'],
    link: 'https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    chipLabel: 'HKI · PDKI'
  },
  {
    cat: 'karya', badge: 'Karya & Publikasi', icon: 'fas fa-suitcase',
    title: 'Koper Bilbul',
    desc: 'Karya edukatif yang telah terdaftar hak cipta di PDKI DJKI.',
    tags: ['HKI', 'Hak Cipta'],
    link: 'https://pdki-indonesia.dgip.go.id:/link/45433030323032343236323235397c636f70797269676874',
    chipLabel: 'HKI · PDKI'
  },
  /* ── PERANGKAT PEMBELAJARAN ── */
  {
    cat: 'perangkat', badge: 'Perangkat Pembelajaran', icon: 'fas fa-globe-asia',
    title: 'Modul Ajar IPAS Kelas IV Bab 5 — Kehidupan Masyarakat Daerah',
    desc: 'Perangkat pembelajaran IPAS SD kelas IV lengkap dengan pemetaan kesiapan belajar berdiferensiasi.',
    tags: ['IPAS', 'Kelas IV', '31 hal'],
    thumb: 'assets/images/docs/thumb-modul-ipas.jpg',
    file: 'assets/docs/perangkat/modul-ipas-kelas-4-bab-5.pdf',
    fileLabel: 'PDF · 31 hal · 3,8 MB'
  },
  {
    cat: 'perangkat', badge: 'Perangkat Pembelajaran', icon: 'fas fa-lightbulb',
    title: 'Perangkat Pembelajaran Ide Pokok Bab 4 Kelas 5',
    desc: 'Perangkat pembelajaran materi ide pokok untuk kelas 5, dilengkapi pemetaan kesiapan belajar siswa.',
    tags: ['B. Indonesia', 'Kelas V', '76 hal'],
    thumb: 'assets/images/docs/thumb-ide-pokok.jpg',
    file: 'assets/docs/perangkat/perangkat-ide-pokok-kelas-5-bab-4.pdf',
    fileLabel: 'PDF · 76 hal · 3,2 MB'
  },
  {
    cat: 'perangkat', badge: 'Perangkat Pembelajaran', icon: 'fas fa-calculator',
    title: 'Modul Ajar Matematika Kelas IV Bab 1 — Bilangan Cacah Besar',
    desc: 'Modul ajar Kurikulum Merdeka (SDN Rawu): domain Bilangan, Fase B/IV, topik nilai tempat bilangan cacah besar.',
    tags: ['Matematika', 'Kelas IV', '33 hal'],
    thumb: 'assets/images/docs/thumb-modul-mtk.jpg',
    file: 'assets/docs/perangkat/modul-matematika-kelas-4-bab-1.pdf',
    fileLabel: 'PDF · 33 hal · 5,1 MB'
  },
  {
    cat: 'perangkat', badge: 'Perangkat Pembelajaran', icon: 'fas fa-wand-magic-sparkles',
    title: 'SI PINTAR: Simak, dan Pahami Inti Paragraf',
    desc: 'Media pembelajaran interaktif Genially tentang ide pokok dan ide pendukung untuk siswa sekolah dasar.',
    tags: ['Genially', 'B. Indonesia'],
    thumb: 'assets/images/docs/thumb-si-pintar.jpg',
    link: 'https://view.genially.com/6943a2d9f4a57ed704cd820a',
    chipLabel: 'Genially · Interaktif'
  },
  /* ── SERTIFIKAT & PELATIHAN ── */
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-award',
    title: 'Penghargaan Lulusan Terbaik',
    desc: 'Sertifikat penghargaan lulusan terbaik untuk Gina Martiana Pratiwi.',
    tags: ['Penghargaan', 'Untirta'],
    thumb: 'assets/images/docs/thumb-sert-lulusan-terbaik.jpg',
    file: 'assets/docs/sertifikat/lulusan-terbaik.pdf',
    fileLabel: 'PDF · 1,1 MB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-users-cog',
    title: 'Panitia Workshop RPS OBE — PGSD Untirta',
    desc: 'Sertifikat kepanitiaan Workshop RPS OBE Program Studi PGSD Untirta.',
    tags: ['Panitia', 'PGSD Untirta'],
    thumb: 'assets/images/docs/thumb-sert-panitia-rps-obe.jpg',
    file: 'assets/docs/sertifikat/panitia-workshop-rps-obe.pdf',
    fileLabel: 'PDF · 202 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-users-cog',
    title: 'Panitia Workshop Kontinuitas Kurikulum Merdeka',
    desc: 'Sertifikat kepanitiaan Workshop Kontinuitas Kurikulum Merdeka PGSD Untirta.',
    tags: ['Panitia', 'PGSD Untirta'],
    thumb: 'assets/images/docs/thumb-sert-panitia-kontinuitas.jpg',
    file: 'assets/docs/sertifikat/panitia-workshop-kontinuitas-kurikulum-merdeka.pdf',
    fileLabel: 'PDF · 206 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-user-check',
    title: 'Peserta Workshop Kontinuitas Kurikulum Merdeka',
    desc: 'Sertifikat peserta Workshop Kontinuitas Kurikulum Merdeka PGSD Untirta.',
    tags: ['Peserta', 'PGSD Untirta'],
    thumb: 'assets/images/docs/thumb-sert-peserta-kontinuitas.jpg',
    file: 'assets/docs/sertifikat/peserta-workshop-kontinuitas-kurikulum-merdeka.pdf',
    fileLabel: 'PDF · 206 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-user-check',
    title: 'Peserta Workshop Perancangan Kurikulum Merdeka Berbasis OBE',
    desc: 'Sertifikat peserta Workshop Perancangan Kurikulum Merdeka Berbasis OBE PGSD Untirta.',
    tags: ['Peserta', 'PGSD Untirta'],
    thumb: 'assets/images/docs/thumb-sert-peserta-obe.jpg',
    file: 'assets/docs/sertifikat/peserta-workshop-perancangan-kurikulum-obe.pdf',
    fileLabel: 'PDF · 222 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-pen-fancy',
    title: 'Lokakarya Penulisan Esai — Kantor Bahasa Banten 2026',
    desc: 'Peserta Krida Duta Bahasa: Lokakarya Penulisan Esai bagi Generasi Muda (20 JP, daring, Juni 2026).',
    tags: ['Duta Bahasa', '2026'],
    thumb: 'assets/images/docs/thumb-sert-esai-banten.jpg',
    file: 'assets/docs/sertifikat/lokakarya-esai-kantor-bahasa-banten-2026.pdf',
    fileLabel: 'PDF · 2 hal · 1,3 MB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-clipboard-check',
    title: 'Pelatihan Nasional Menyusun Asesmen Pembelajaran',
    desc: 'Sertifikat Pelatihan Nasional Menyusun Asesmen Pembelajaran.',
    tags: ['Pelatihan Nasional', 'Asesmen'],
    thumb: 'assets/images/docs/thumb-sert-asesmen.jpg',
    file: 'assets/docs/sertifikat/pelatihan-nasional-asesmen-pembelajaran.pdf',
    fileLabel: 'PDF · 517 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-chalkboard-teacher',
    title: 'Webinar Praktik Baik Peningkatan Profesional Guru',
    desc: 'Sertifikat Webinar Praktik Baik Peningkatan Profesional Guru.',
    tags: ['Webinar', 'Profesional Guru'],
    thumb: 'assets/images/docs/thumb-sert-webinar.jpg',
    file: 'assets/docs/sertifikat/webinar-praktik-baik-guru.pdf',
    fileLabel: 'PDF · 613 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-book-reader',
    title: 'Pelatihan Perpustakaan: Implementasi Standar Nasional',
    desc: 'Sertifikat Pelatihan Perpustakaan: Implementasi Standar Nasional Perpustakaan.',
    tags: ['Perpustakaan', 'SNP'],
    thumb: 'assets/images/docs/thumb-sert-perpustakaan.jpg',
    file: 'assets/docs/sertifikat/pelatihan-perpustakaan-standar-nasional.pdf',
    fileLabel: 'PDF · 783 KB'
  },
  {
    cat: 'sertifikat', badge: 'Sertifikat & Pelatihan', icon: 'fas fa-puzzle-piece',
    title: 'Pelatihan Nasional Merancang Kuis Interaktif',
    desc: 'Sertifikat Pelatihan Nasional Merancang Kuis Interaktif.',
    tags: ['Pelatihan Nasional', 'Kuis Interaktif'],
    thumb: 'assets/images/docs/thumb-sert-kuis.jpg',
    file: 'assets/docs/sertifikat/pelatihan-nasional-kuis-interaktif.pdf',
    fileLabel: 'PDF · 561 KB'
  },
  /* ── SKRIPSI ── */
  {
    cat: 'skripsi', badge: 'Skripsi', icon: 'fas fa-graduation-cap',
    title: 'Skripsi: Media Genially untuk Hasil Belajar Kognitif B. Indonesia',
    desc: 'Penelitian R&D pengembangan media interaktif gamifikasi Genially pada kelas V SDN Mekarjaya, Kab. Pandeglang. PGSD FKIP Untirta, 2026.',
    tags: ['R&D', 'Genially', '244 hal'],
    thumb: 'assets/images/docs/thumb-skripsi.jpg',
    file: 'assets/docs/skripsi/skripsi-full-text-2026.pdf',
    fileLabel: 'PDF · 244 hal · 11,5 MB'
  }
];

/* Render kartu ke grid — jalan sebelum main.js (defer) sehingga
   kartu ikut filter, reveal, dan hover premium. */
(function () {
  var grid = document.getElementById('projects-grid');
  if (!grid || !window.DOKUMEN_ITEMS) return;

  var html = window.DOKUMEN_ITEMS.map(function (it, i) {
    var tags = it.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('');
    var chip = it.chipLabel || it.fileLabel.split('·').slice(0, 2).join('·').trim();
    var coverImg = '<img src="' + it.thumb + '" alt="Pratinjau ' + it.title + '" loading="lazy">' +
        '<span class="doc-chip">' + chip + '</span>';
    var cover = it.thumb
      ? (it.link
        ? '<a class="doc-thumb" href="' + it.link + '" target="_blank" rel="noopener" aria-label="Kunjungi ' + it.title + '">' + coverImg + '</a>'
        : '<a class="doc-thumb" href="#" data-doc="' + i + '" aria-label="Pratinjau ' + it.title + '">' + coverImg + '</a>')
      : '<div class="doc-cover doc-' + it.cat + '">' +
        '<i class="' + it.icon + '"></i>' +
        '<span>' + chip + '</span>' +
        '</div>';
    var action = it.link
      ? '<a class="doc-link" href="' + it.link + '" target="_blank" rel="noopener">' +
        '<i class="fas fa-external-link-alt"></i> Kunjungi Tautan' +
        '</a>'
      : '<a class="doc-link" href="#" data-doc="' + i + '">' +
        '<i class="fas fa-file-pdf"></i> Buka Dokumen' +
        '</a>';
    return '' +
      '<article class="project-card reveal" data-category="' + it.cat + '">' +
        cover +
        '<div class="project-body">' +
          '<span class="cat-badge ' + it.cat + '">' + it.badge + '</span>' +
          '<h3>' + it.title + '</h3>' +
          '<p>' + it.desc + '</p>' +
          '<div class="tech-tags">' + tags + '</div>' +
          action +
        '</div>' +
      '</article>';
  }).join('');

  grid.insertAdjacentHTML('beforeend', html);

  /* Isi counter filter otomatis dari data (ikut update saat tambah dokumen) */
  (function () {
    var counts = { all: window.DOKUMEN_ITEMS.length };
    window.DOKUMEN_ITEMS.forEach(function (it) {
      counts[it.cat] = (counts[it.cat] || 0) + 1;
    });
    document.querySelectorAll('.filter-count').forEach(function (el) {
      var n = counts[el.getAttribute('data-count-for')];
      if (n !== undefined) el.textContent = '(' + n + ')';
    });
  })();
})();

/* Modal pratinjau PDF — dibuka dari thumbnail / tombol kartu.
   Unduh + tab baru tetap tersedia di dalam modal. */
(function () {
  var modal = document.getElementById('doc-modal');
  var grid = document.getElementById('projects-grid');
  if (!modal || !grid) return;

  var frame = document.getElementById('doc-modal-frame');
  var title = document.getElementById('doc-modal-title');
  var meta = document.getElementById('doc-modal-meta');
  var dl = document.getElementById('doc-modal-download');
  var tab = document.getElementById('doc-modal-newtab');
  var loading = document.getElementById('doc-modal-loading');
  var closeBtn = document.getElementById('doc-modal-close');
  var lastFocus = null;

  function openModal(i) {
    var it = window.DOKUMEN_ITEMS[i];
    if (!it) return;
    lastFocus = document.activeElement;
    title.textContent = it.title;
    meta.textContent = it.badge + ' · ' + it.fileLabel;
    loading.style.display = 'block';
    frame.removeAttribute('src');
    dl.href = it.file;
    dl.setAttribute('download', it.file.split('/').pop());
    tab.href = it.file;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    frame.src = it.file;
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    frame.removeAttribute('src');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  frame.addEventListener('load', function () { loading.style.display = 'none'; });

  grid.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-doc]') : null;
    if (!a || !grid.contains(a)) return;
    e.preventDefault();
    openModal(parseInt(a.getAttribute('data-doc'), 10));
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal || (e.target.closest && e.target.closest('#doc-modal-close'))) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();
