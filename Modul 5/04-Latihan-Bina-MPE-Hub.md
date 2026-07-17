# Latihan Hands-on: Bina MPE Hub

## Objektif

Menghasilkan prototaip kecil yang menerima rekod rekaan, menyimpan ke Google Sheets dan menjana Google Doc.

## Langkah 1 - Tetapkan skop

Lengkapkan ayat:

> MPE Hub kami membantu **[PENGGUNA]** merekod **[JENIS REKOD]**, menyemak **[PERATURAN]** dan menghasilkan **[DOKUMEN]** tanpa mengambil alih keputusan **[PERANAN MANUSIA]**.

## Langkah 2 - Cipta Google Sheet

1. Cipta Sheet baharu dalam akaun kumpulan.
2. Namakan tab `Records`.
3. Masukkan tajuk lajur daripada kit binaan.
4. Bekukan baris pertama.
5. Jangan kongsi ID Sheet dalam platform AI.

## Langkah 3 - Cipta Apps Script

1. Dari Google Sheet pilih **Extensions -> Apps Script**.
2. Tampal kod `Code.gs`.
3. Tambah `Index.html` dan tampal antaramuka.
4. Masukkan ID Sheet secara manual.
5. Jalankan fungsi yang diperlukan dan baca skop kebenaran.

## Langkah 4 - Cipta templat Google Doc

1. Cipta Doc baharu.
2. Tampal templat dengan penanda `{{...}}`.
3. Masukkan ID Doc secara manual ke `Code.gs`.
4. Pastikan Doc kekal dalam akaun kumpulan.

## Langkah 5 - Sesuaikan dengan AI

Pilih maksimum dua perubahan:

- tukar tajuk dan penerangan;
- tambah satu jenis rekod;
- tambah satu medan rekaan;
- ubah warna atau susun atur;
- tambah penapis paparan.

Gunakan prompt daripada kit. Jangan ubah banyak fungsi serentak.

## Langkah 6 - Terbit dan uji

1. Terbitkan Web App dengan akses minimum.
2. Buka pautan dalam tab baharu.
3. Hantar satu rekod lengkap.
4. Sahkan rekod muncul dalam Sheet.
5. Jalankan penjanaan dokumen bagi rekod tersebut.
6. Sahkan URL Doc direkodkan.

## Langkah 7 - Ujian gagal dengan selamat

| Ujian | Input | Hasil dijangka | Hasil sebenar | Status |
|---|---|---|---|---|
| Lengkap | Semua medan wajib | Rekod Draf disimpan |  |  |
| Tidak lengkap | Pemilik kosong | Rekod ditolak dengan sebab |  |  |

## Langkah 8 - Audit kawalan

- [ ] Semua data adalah rekaan.
- [ ] Tiada ID, pautan peribadi atau data sebenar dihantar kepada AI.
- [ ] Akses Web App tidak lebih luas daripada keperluan.
- [ ] AI tidak menetapkan status Disahkan atau Diluluskan.
- [ ] Sheet menyimpan masa, ID, status dan pemilik.
- [ ] Ujian input tidak lengkap mempunyai mesej jelas.
- [ ] Kumpulan boleh menerangkan batasan prototaip.
- [ ] Laluan manual dikenal pasti jika Web App gagal.

## Demonstrasi dua minit

1. Nyatakan masalah kerja.
2. Tunjukkan borang MPE Hub.
3. Hantar satu rekod rekaan.
4. Tunjukkan baris dalam Sheet.
5. Tunjukkan Google Doc.
6. Nyatakan satu kawalan dan satu penambahbaikan.

## Bukti penyempurnaan

Catat pautan Web App, ID rekod rekaan, pautan Doc, keputusan dua ujian, pemilik prototaip dan nota bahawa ia bukan sistem pengeluaran.
