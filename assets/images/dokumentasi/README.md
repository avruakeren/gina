# Folder Dokumentasi Kegiatan

Taruh foto tiap album di subfolder sesuai `id` di `js/dokumentasi.js`:

| Album (id)     | Folder          | Isi |
|----------------|-----------------|-----|
| Pengabdian     | `pengabdian/`   | 11 foto (`01.jpg`–`11.jpg`) |
| Pelatihan      | `pelatihan/`    | 9 foto (`01.jpg`–`09.jpg`) |
| Pembelajaran   | `pembelajaran/` | 27 foto (`01.jpg`–`27.jpg`) |
| Lainnya        | `lainlain/`     | 2 foto (`01.jpg`–`02.jpg`: stand PLP Holistik + Tabligh Akbar) |

Aturan:
- Format `.webp` / `.jpg`, usahakan < 300 KB per foto (bisa kompres via squoosh.app).
- Nama file berurutan: `01.webp`, `02.webp`, dst.
- Setelah menaruh file, daftarkan di `js/dokumentasi.js` pada array
  `images` album yang sesuai: `{ src: '...', alt: '...' }`.
- Foto pertama otomatis jadi cover album (atau isi properti `cover` manual).

File `.gitkeep` di tiap subfolder hanya penanda agar folder ikut ter-commit;
boleh dihapus setelah foto asli masuk.
