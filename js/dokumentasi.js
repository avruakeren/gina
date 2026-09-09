/* ============================================================
   DATA DOKUMENTASI KEGIATAN — dirender sebagai album di #album-grid.
   Pola sama seperti js/dokumen.js: tambah/ubah entri di bawah,
   kartu + modal galeri + lightbox ikut otomatis.

   CARA MENAMBAH FOTO (nanti saat foto sudah ada):
   1. Taruh file foto di assets/images/dokumentasi/<id>/,
      mis. assets/images/dokumentasi/sosialisasi/01.webp
      (disarankan .webp/.jpg, < 300 KB per foto, landscape).
   2. Daftarkan di array images album yang sesuai:
      images: [{ src: 'assets/images/dokumentasi/sosialisasi/01.webp',
                 alt: 'Judul singkat foto',
                 desc: 'Rincian kegiatan pada foto (tampil di lightbox).' }]
   3. Foto pertama otomatis jadi cover album (atau isi manual
      lewat properti "cover"). Tidak perlu ubah HTML/CSS/JS lain.

   MENGUBAH RINCIAN: cukup edit teks "alt" (judul singkat, tampil
   sebagai caption thumbnail) dan "desc" (rincian, tampil di
   lightbox) pada entri fotonya masing-masing.
   ============================================================ */
window.DOKUMENTASI_ALBUMS = [
  {
    id: 'pengabdian',
    title: 'Kegiatan Pengabdian / Sukarelawan',
    desc: 'Dokumentasi kegiatan pengabdian kepada masyarakat dan aksi sukarelawan di bidang pendidikan.',
    icon: 'fas fa-hands-helping',
    images: [
      { src: 'assets/images/dokumentasi/pengabdian/01.jpg', alt: 'Foto bersama peserta pengabdian', desc: 'Sesi foto bersama peserta setelah kegiatan pengabdian.' },
      { src: 'assets/images/dokumentasi/pengabdian/02.jpg', alt: 'Foto bersama anak-anak', desc: 'Kebersamaan dengan anak-anak peserta kegiatan.' },
      { src: 'assets/images/dokumentasi/pengabdian/03.jpg', alt: 'Foto bersama di aula', desc: 'Foto bersama seluruh peserta di aula kegiatan.' },
      { src: 'assets/images/dokumentasi/pengabdian/04.jpg', alt: 'Foto kelas bersama siswa', desc: 'Foto bersama siswa di ruang kelas.' },
      { src: 'assets/images/dokumentasi/pengabdian/05.jpg', alt: 'Anak membaca buku', desc: 'Peserta membaca buku bacaan anak.' },
      { src: 'assets/images/dokumentasi/pengabdian/06.jpg', alt: 'Mendampingi anak membaca', desc: 'Mendampingi peserta membaca buku cerita.' },
      { src: 'assets/images/dokumentasi/pengabdian/07.jpg', alt: 'Belajar membaca bersama', desc: 'Aktivitas membaca terbimbing bersama peserta.' },
      { src: 'assets/images/dokumentasi/pengabdian/08.jpg', alt: 'Foto bersama panitia', desc: 'Foto bersama panitia dan peserta kegiatan.' },
      { src: 'assets/images/dokumentasi/pengabdian/09.jpg', alt: 'Foto akbar Milad', desc: 'Foto akbar seluruh peserta acara Milad.' },
      { src: 'assets/images/dokumentasi/pengabdian/10.jpg', alt: 'Foto akbar Milad', desc: 'Sesi foto bersama pada acara Milad.' },
      { src: 'assets/images/dokumentasi/pengabdian/11.jpg', alt: 'Foto bersama Milad', desc: 'Penutupan acara Milad dengan foto bersama.' }
    ]
  },
  {
    id: 'pelatihan',
    title: 'Pelatihan',
    desc: 'Dokumentasi keikutsertaan dan kepanitiaan dalam berbagai pelatihan, workshop, dan webinar.',
    icon: 'fas fa-chalkboard-teacher',
    images: [
      { src: 'assets/images/dokumentasi/pelatihan/01.jpg', alt: 'Diskusi persiapan', desc: 'Diskusi santai sebelum kegiatan dimulai.' },
      { src: 'assets/images/dokumentasi/pelatihan/02.jpg', alt: 'Koordinasi persiapan', desc: 'Koordinasi dan persiapan materi kegiatan.' },
      { src: 'assets/images/dokumentasi/pelatihan/03.jpg', alt: 'Foto tim pengajar', desc: 'Foto bersama tim di ruang kelas.' },
      { src: 'assets/images/dokumentasi/pelatihan/04.jpg', alt: 'Pelatihan daring', desc: 'Sesi pembukaan pelatihan secara daring.' },
      { src: 'assets/images/dokumentasi/pelatihan/05.jpg', alt: 'Materi pelatihan daring', desc: 'Penyampaian materi pelatihan secara daring.' },
      { src: 'assets/images/dokumentasi/pelatihan/06.jpg', alt: 'Diskusi pelatihan daring', desc: 'Diskusi interaktif pada pelatihan daring.' },
      { src: 'assets/images/dokumentasi/pelatihan/07.jpg', alt: 'Sesi pelatihan daring', desc: 'Mengikuti sesi pelatihan secara daring.' },
      { src: 'assets/images/dokumentasi/pelatihan/08.jpg', alt: 'Foto bersama guru', desc: 'Foto bersama guru setelah sosialisasi media SI PINTAR.' },
      { src: 'assets/images/dokumentasi/pelatihan/09.jpg', alt: 'Koordinasi di sekolah', desc: 'Diskusi koordinasi dengan pihak sekolah.' }
    ]
  },
  {
    id: 'pembelajaran',
    title: 'Kegiatan Pembelajaran',
    desc: 'Dokumentasi aktivitas mengajar dan pembelajaran bersama siswa di sekolah dasar.',
    icon: 'fas fa-book-open',
    featured: true,
    images: [
      { src: 'assets/images/dokumentasi/pembelajaran/01.jpg', alt: 'Membimbing kelompok belajar', desc: 'Membimbing diskusi kelompok siswa.' },
      { src: 'assets/images/dokumentasi/pembelajaran/02.jpg', alt: 'Foto bersama siswa', desc: 'Foto bersama siswa di depan kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/03.jpg', alt: 'Belajar dengan laptop', desc: 'Siswa mengerjakan media interaktif di laptop.' },
      { src: 'assets/images/dokumentasi/pembelajaran/04.jpg', alt: 'Media digital di kelas', desc: 'Pembelajaran menggunakan laptop.' },
      { src: 'assets/images/dokumentasi/pembelajaran/05.jpg', alt: 'Presentasi siswa', desc: 'Siswa mempresentasikan hasil kerja di depan kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/06.jpg', alt: 'Kerja kelompok', desc: 'Diskusi kelompok mengerjakan tugas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/07.jpg', alt: 'Belajar kelompok', desc: 'Suasana belajar kelompok yang aktif.' },
      { src: 'assets/images/dokumentasi/pembelajaran/08.jpg', alt: 'Menulis bersama', desc: 'Siswa mengerjakan tugas menulis.' },
      { src: 'assets/images/dokumentasi/pembelajaran/09.jpg', alt: 'Suasana kelas', desc: 'Kegiatan belajar mengajar di kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/10.jpg', alt: 'Foto bersama kelas', desc: 'Foto bersama seluruh siswa.' },
      { src: 'assets/images/dokumentasi/pembelajaran/11.jpg', alt: 'Foto kelas', desc: 'Kebersamaan dengan siswa di kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/12.jpg', alt: 'Foto bersama siswa', desc: 'Sesi foto dengan siswa.' },
      { src: 'assets/images/dokumentasi/pembelajaran/13.jpg', alt: 'Presentasi media', desc: 'Menampilkan media pembelajaran di depan kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/14.jpg', alt: 'Apresiasi siswa', desc: 'Foto bersama siswa penerima apresiasi.' },
      { src: 'assets/images/dokumentasi/pembelajaran/15.jpg', alt: 'Kelas besar', desc: 'Suasana pembelajaran di kelas besar.' },
      { src: 'assets/images/dokumentasi/pembelajaran/16.jpg', alt: 'Diskusi kelompok', desc: 'Siswa berdiskusi dalam kelompok kecil.' },
      { src: 'assets/images/dokumentasi/pembelajaran/17.jpg', alt: 'Kunjungan perpustakaan', desc: 'Siswa memilih buku di perpustakaan sekolah.' },
      { src: 'assets/images/dokumentasi/pembelajaran/18.jpg', alt: 'Mengerjakan tugas', desc: 'Siswa fokus mengerjakan tugas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/19.jpg', alt: 'Praktik keterampilan', desc: 'Siswa membuat karya praktik.' },
      { src: 'assets/images/dokumentasi/pembelajaran/20.jpg', alt: 'Latihan soal', desc: 'Siswa mengerjakan lembar kerja.' },
      { src: 'assets/images/dokumentasi/pembelajaran/21.jpg', alt: 'Menggambar berkelompok', desc: 'Siswa menggambar bersama dalam kelompok.' },
      { src: 'assets/images/dokumentasi/pembelajaran/22.jpg', alt: 'Menulis di kelas', desc: 'Siswi mengerjakan tugas menulis.' },
      { src: 'assets/images/dokumentasi/pembelajaran/23.jpg', alt: 'Hasil karya siswa', desc: 'Siswa menunjukkan gambar buatannya.' },
      { src: 'assets/images/dokumentasi/pembelajaran/24.jpg', alt: 'Foto bersama di halaman', desc: 'Foto bersama siswa di halaman sekolah.' },
      { src: 'assets/images/dokumentasi/pembelajaran/25.jpg', alt: 'Belajar di kelas', desc: 'Suasana belajar di dalam kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/26.jpg', alt: 'Belajar di luar kelas', desc: 'Siswa mengerjakan tugas di luar kelas.' },
      { src: 'assets/images/dokumentasi/pembelajaran/27.jpg', alt: 'Foto kostum daerah', desc: 'Foto bersama siswa berkostum daerah.' }
    ]
  },
  {
    id: 'lainnya',
    title: 'Dokumentasi Lainnya',
    desc: 'Dokumentasi kegiatan lainnya, termasuk stand pameran PLP Holistik SDN Rawu 2025.',
    icon: 'fas fa-images',
    images: [
      { src: 'assets/images/dokumentasi/lainlain/01.jpg', alt: 'Stand PLP Holistik SDN Rawu 2025', desc: 'Menjaga stand pameran hasil PLP Holistik SDN Rawu 2025.' },
      { src: 'assets/images/dokumentasi/lainlain/02.jpg', alt: 'Sosialisasi Tabligh Akbar', desc: 'Sosialisasi pada acara Tabligh Akbar.' }
    ]
  }
];

/* Render kartu album — jalan sebelum main.js (defer) sehingga
   kartu ikut reveal animation dan hover premium. */
(function () {
  var grid = document.getElementById('album-grid');
  if (!grid || !window.DOKUMENTASI_ALBUMS) return;

  function countLabel(n) {
    return n === 0 ? 'Foto menyusul' : n + (n === 1 ? ' foto' : ' foto');
  }

  var html = window.DOKUMENTASI_ALBUMS.map(function (al, i) {
    var coverSrc = al.cover || (al.images[0] && al.images[0].src) || null;
    var cover = coverSrc
      ? '<img src="' + coverSrc + '" alt="Sampul album ' + al.title + '" loading="lazy">'
      : '<span class="album-cover-empty"><i class="' + al.icon + '"></i>' +
        '<span>Foto menyusul</span></span>';
    return '' +
      '<article class="album-card reveal' + (al.featured ? ' featured' : '') + '" data-album="' + al.id + '">' +
        '<button type="button" class="album-cover' + (coverSrc ? ' has-photo' : '') + '" data-album-open="' + i + '" ' +
          'aria-label="Buka album ' + al.title + '" aria-haspopup="dialog">' +
          cover +
          '<span class="album-view" aria-hidden="true"><i class="fas fa-expand"></i></span>' +
          '<span class="album-count"><i class="fas fa-images"></i> ' + countLabel(al.images.length) + '</span>' +
        '</button>' +
        '<div class="album-body">' +
          '<h3>' + al.title + '</h3>' +
          '<p>' + al.desc + '</p>' +
          '<button type="button" class="doc-link" data-album-open="' + i + '">' +
            '<i class="fas fa-images"></i> Lihat Galeri' +
          '</button>' +
        '</div>' +
      '</article>';
  }).join('');

  grid.insertAdjacentHTML('beforeend', html);

  /* Ringkasan "N album · M foto" di bawah subjudul section */
  (function () {
    var stats = document.getElementById('album-stats');
    if (!stats) return;
    var photos = window.DOKUMENTASI_ALBUMS.reduce(function (n, al) { return n + al.images.length; }, 0);
    stats.innerHTML =
      '<span><i class="fas fa-folder-open"></i> ' + window.DOKUMENTASI_ALBUMS.length + ' Album</span>' +
      '<span><i class="fas fa-camera"></i> ' + photos + ' Foto</span>';
  })();
})();

/* Modal galeri album + lightbox foto (Opsi A).
   Alur: klik kartu album → modal berisi grid foto → klik foto → lightbox. */
(function () {
  var grid = document.getElementById('album-grid');
  var modal = document.getElementById('album-modal');
  if (!grid || !modal) return;

  var mTitle = document.getElementById('album-modal-title');
  var mMeta = document.getElementById('album-modal-meta');
  var mDesc = document.getElementById('album-modal-desc');
  var gallery = document.getElementById('album-gallery');
  var mClose = document.getElementById('album-modal-close');

  var lightbox = document.getElementById('lightbox');
  var lbFig = document.getElementById('lightbox-figure');
  var lbImg = document.getElementById('lightbox-img');
  var lbCap = document.getElementById('lightbox-caption');
  var lbClose = document.getElementById('lightbox-close');
  var lbPrev = document.getElementById('lightbox-prev');
  var lbNext = document.getElementById('lightbox-next');

  var currentAlbum = null;
  var currentPhoto = 0;
  var lastFocus = null;
  var touchX = null;

  /* ── Modal galeri ── */
  function openAlbum(i) {
    var al = window.DOKUMENTASI_ALBUMS[i];
    if (!al) return;
    currentAlbum = al;
    lastFocus = document.activeElement;
    mTitle.textContent = al.title;
    mMeta.textContent = al.images.length === 0
      ? 'Belum ada foto'
      : al.images.length + (al.images.length === 1 ? ' foto' : ' foto');
    mDesc.textContent = al.desc;

    if (al.images.length === 0) {
      gallery.innerHTML =
        '<div class="album-empty">' +
          '<i class="' + al.icon + '"></i>' +
          '<p>Foto kegiatan segera ditambahkan.</p>' +
        '</div>';
    } else {
      gallery.innerHTML = al.images.map(function (ph, j) {
        var cap = ph.alt || al.title;
        return '<button type="button" class="album-thumb" data-photo="' + j + '" ' +
          'aria-label="Perbesar foto: ' + cap + '">' +
          '<img src="' + ph.src + '" alt="' + cap + '" loading="lazy">' +
          '<span class="album-thumb-cap">' + cap + '</span>' +
        '</button>';
      }).join('');
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    mClose.focus();
  }

  function closeAlbum() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (!lightbox.classList.contains('open')) document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* ── Lightbox ── */
  function showPhoto(j) {
    var photos = currentAlbum.images;
    if (!photos.length) return;
    currentPhoto = (j + photos.length) % photos.length;
    var ph = photos[currentPhoto];
    lbImg.src = ph.src;
    lbImg.alt = ph.alt || currentAlbum.title;
    lbCap.innerHTML = '<strong>' + (ph.alt || currentAlbum.title) + '</strong>' +
      (ph.desc ? '<span class="lb-desc">' + ph.desc + '</span>' : '') +
      '<span class="lb-count">' + (currentPhoto + 1) + ' / ' + photos.length + '</span>';
    /* Animasi transisi tiap ganti foto */
    if (lbFig) {
      lbFig.classList.remove('swap');
      void lbFig.offsetWidth;
      lbFig.classList.add('swap');
    }
    var multi = photos.length > 1;
    lbPrev.style.display = multi ? '' : 'none';
    lbNext.style.display = multi ? '' : 'none';
  }

  function openLightbox(j) {
    if (!currentAlbum || !currentAlbum.images.length) return;
    lastFocus = lastFocus || document.activeElement;
    showPhoto(j);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.removeAttribute('src');
    if (!modal.classList.contains('open')) {
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    } else {
      mClose.focus();
    }
  }

  grid.addEventListener('click', function (e) {
    var btn = e.target.closest ? e.target.closest('[data-album-open]') : null;
    if (!btn || !grid.contains(btn)) return;
    openAlbum(parseInt(btn.getAttribute('data-album-open'), 10));
  });

  gallery.addEventListener('click', function (e) {
    var thumb = e.target.closest ? e.target.closest('[data-photo]') : null;
    if (!thumb) return;
    openLightbox(parseInt(thumb.getAttribute('data-photo'), 10));
  });

  lbPrev.addEventListener('click', function () { showPhoto(currentPhoto - 1); });
  lbNext.addEventListener('click', function () { showPhoto(currentPhoto + 1); });
  lbClose.addEventListener('click', closeLightbox);
  mClose.addEventListener('click', closeAlbum);

  modal.addEventListener('click', function (e) { if (e.target === modal) closeAlbum(); });
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  /* Geser (swipe) di layar sentuh untuk pindah foto */
  lightbox.addEventListener('touchstart', function (e) {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  lightbox.addEventListener('touchend', function (e) {
    if (touchX === null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) < 40) return;
    showPhoto(currentPhoto + (dx < 0 ? 1 : -1));
  }, { passive: true });

  document.addEventListener('keydown', function (e) {
    if (lightbox.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') showPhoto(currentPhoto + 1);
      else if (e.key === 'ArrowLeft') showPhoto(currentPhoto - 1);
    } else if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeAlbum();
    }
  });
})();

/* Tautan "bagian Proyek → Sertifikat & Pelatihan": aktifkan filter
   sertifikat dulu supaya daftar yang relevan langsung tampil. */
(function () {
  document.querySelectorAll('[data-filter-link]').forEach(function (a) {
    a.addEventListener('click', function () {
      var btn = document.querySelector('.filter-btn[data-filter="' + a.getAttribute('data-filter-link') + '"]');
      if (btn) btn.click();
    });
  });
})();

/* Hover premium untuk kartu album (meniru main.js, sudah termasuk
   guard .visible supaya tidak bentrok dengan animasi reveal). */
(function () {
  if (typeof anime === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.album-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      if (!el.classList.contains('visible')) return;
      anime.remove(el);
      anime({ targets: el, translateY: -6, scale: 1.02, duration: 350, easing: 'easeOutCubic' });
    });
    el.addEventListener('mouseleave', function () {
      if (!el.classList.contains('visible')) return;
      anime.remove(el);
      anime({ targets: el, translateY: 0, scale: 1, duration: 450, easing: 'easeOutQuart' });
    });
  });
})();
