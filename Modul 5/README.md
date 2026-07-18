# Modul 5 - Daripada Idea kepada MPE Hub: Aplikasi Web Operasi Makmal

## Maklumat sesi

- **Tarikh:** 29 Julai 2026
- **Masa:** 2.30-4.30 petang
- **Tempoh keseluruhan:** 120 minit
- **Latihan amali utama:** 80 minit
- **Kaedah:** salin templat, konfigurasi akaun, isi tiga modul, uji, ubah dan terbit
- **Platform:** AI generatif percuma, GitHub Pages, Google Apps Script, Google Sheets dan Google Drive

Modul ini menyepadukan hasil Modul 1-4 dengan membimbing peserta menyediakan salinan **MPE Hub** sedia ada. Peserta tidak menulis aplikasi lengkap dari halaman kosong. Mereka menghubungkan salinan aplikasi kepada storan Google sendiri, memasukkan data rekaan bagi Buku Log, KEW.PA-9 dan MCCB, membuat satu perubahan dengan bantuan AI serta menguji penerbitan GitHub Pages.

## Hasil akhir peserta

1. Satu salinan repositori MPE Hub dalam akaun GitHub kumpulan;
2. Satu URL aplikasi melalui GitHub Pages;
3. Satu Google Apps Script Web App sebagai API;
4. Satu Google Spreadsheet dengan tab `logbook`, `asset` dan `mccb`;
5. Satu folder Google Drive bagi lampiran latihan;
6. Sekurang-kurangnya satu rekod rekaan bagi setiap modul;
7. Satu perubahan antaramuka atau medan yang dicadangkan dengan AI;
8. Keputusan ujian penerimaan dan checklist serahan.

## Seni bina yang digunakan

```text
Pengguna
   -> GitHub Pages (HTML, CSS, JavaScript)
      -> Google Apps Script Web API (GET/POST)
         -> Google Sheets (data)
         -> Google Drive (lampiran)
```

Kredensial Google tidak diletakkan dalam kod pelayar. Namun endpoint yang boleh dicapai oleh sesiapa masih memerlukan kawalan tambahan dan hanya digunakan dengan data rekaan semasa latihan.

## Prasyarat wajib

### Akaun dan akses

- [ ] Akaun Google aktif.
- [ ] Boleh membuka Google Drive dan Google Sheets.
- [ ] Boleh membuka dan menjalankan Google Apps Script.
- [ ] Akaun organisasi membenarkan penerbitan Apps Script Web App.
- [ ] Akaun GitHub aktif.
- [ ] Boleh mencipta atau menyalin repositori.
- [ ] Boleh mengaktifkan GitHub Pages.
- [ ] Sudah log masuk ke Google, GitHub dan satu platform AI percuma.

### Peralatan

- [ ] Komputer riba dengan pelayar moden.
- [ ] Sambungan internet stabil.
- [ ] Akses kepada `github.com`, `script.google.com` dan Google Drive melalui rangkaian latihan.
- [ ] Data latihan rekaan; tiada data operasi sebenar.

### Bahan yang perlu dibuka

- [Aplikasi MPE Hub](https://drmurtadha.github.io/mpe-hub/)
- [Dokumentasi lengkap MPE Hub](https://drmurtadha.github.io/mpe-hub/docs.html)
- [Repositori templat MPE Hub](https://github.com/drMurtadha/mpe-hub)
- [Nota PDF](https://drmurtadha.github.io/mpe-hub/downloads/Nota_Latihan_MPE_Hub.pdf)
- [Slaid PPTX](https://drmurtadha.github.io/mpe-hub/downloads/Slaid_Latihan_MPE_Hub.pptx)

## Sambungan Modul 1-5

| Modul | Sumbangan kepada MPE Hub |
|---|---|
| 1 | Masalah, pengguna dan peluang produktiviti |
| 2 | Struktur dokumen dan semakan manusia |
| 3 | Medan data, analisis dan kawalan rekod |
| 4 | Aliran kerja, status, peranan dan pengecualian |
| 5 | Konfigurasi, pengujian dan penerbitan MPE Hub |

## Aliran sesi 120 minit

| Minit | Aktiviti | Hasil |
|---|---|---|
| 0-15 | Semak prasyarat dan demonstrasi seni bina | Akaun serta bahan tersedia |
| 15-95 | Latihan amali mengikut dokumentasi MPE Hub | Aplikasi, storan dan perubahan diuji |
| 95-105 | Audit keselamatan dan checklist serahan | Kawalan disahkan |
| 105-115 | Demonstrasi kumpulan | Bukti hasil |
| 115-120 | Kuiz dan exit ticket | Penilaian akhir |

## Pecahan latihan amali 80 minit

| Masa | Aktiviti |
|---|---|
| 15 minit | Peta medan |
| 20 minit | Isi Buku Log, KEW.PA-9 dan MCCB |
| 15 minit | Semak Google Sheets dan Google Drive |
| 20 minit | Buat satu perubahan dan commit |
| 10 minit | Semak GitHub Pages |

## Panduan peserta langkah demi langkah

Gunakan urutan ini semasa latihan. Jangan bergerak ke langkah seterusnya sehingga tanda **Selesai apabila** dipenuhi. Pembahagian masa ialah panduan; fasilitator boleh menggunakan laluan demonstrasi jika akses organisasi menyekat sesuatu langkah.

### Langkah 1 — Tetapkan peranan dan buka bahan, 5 minit

1. Bentuk kumpulan dua hingga empat orang.
2. Tetapkan seorang **pemilik akaun**, seorang **pencatat**, seorang **penguji** dan, jika ada, seorang **penyemak keselamatan**.
3. Buka dalam tab berasingan:
   - [Aplikasi contoh MPE Hub](https://drmurtadha.github.io/mpe-hub/);
   - [Dokumentasi MPE Hub](https://drmurtadha.github.io/mpe-hub/docs.html);
   - [Repositori templat](https://github.com/drMurtadha/mpe-hub);
   - [Kit persediaan dan prompt](./03-Kit-Binaan-dan-Pustaka-Prompt.md).

**Selesai apabila:** semua ahli tahu peranan masing-masing dan sekurang-kurangnya seorang ahli boleh membuka GitHub serta Google Drive.

### Langkah 2 — Salin repositori latihan, 5 minit

1. Pada repositori templat, pilih **Use this template** atau **Fork** mengikut arahan fasilitator.
2. Namakan repositori `mpe-hub-latihan`.
3. Pastikan repositori tidak mengandungi token, ID fail, URL deployment atau data operasi sebenar.
4. Buka tab **Code** dan kenal pasti fail HTML, CSS, JavaScript serta konfigurasi contoh.

**Selesai apabila:** repositori muncul dalam akaun kumpulan dan ahli boleh melihat senarai failnya.

**Jika tersekat:** seorang ahli yang mempunyai akses menjadi pemilik repositori; ahli lain bekerja sebagai penyemak atau menggunakan salinan demonstrasi fasilitator.

### Langkah 3 — Fahami tiga modul dan peta medan, 10 minit

1. Buka **Buku Log**, **KEW.PA-9** dan **MCCB** pada aplikasi contoh.
2. Bagi setiap modul, pilih sekurang-kurangnya satu medan:
   - Wajib;
   - Pilihan;
   - Terbitan sistem;
   - Teknikal.
3. Catat siapa yang mengisi, menyemak dan membetulkan rekod.
4. Padankan modul kepada tab storan: `logbook`, `asset` dan `mccb`.

**Hasil langkah:** satu jadual ringkas medan, tab storan dan pemilik tindakan.

### Langkah 4 — Sediakan Google Sheets dan Apps Script, 10 minit

1. Ikuti bahagian persediaan dalam [dokumentasi MPE Hub](https://drmurtadha.github.io/mpe-hub/docs.html).
2. Cipta atau salin Google Spreadsheet latihan.
3. Buka projek Google Apps Script dan jalankan fungsi persediaan yang dinyatakan dalam dokumentasi.
4. Benarkan akses hanya melalui akaun kumpulan yang diluluskan.
5. Sahkan tab `logbook`, `asset` dan `mccb` telah diwujudkan.

**Selesai apabila:** ketiga-tiga tab wujud dan tiada data sebenar dimasukkan.

**Jika tersekat:** gunakan spreadsheet dan deployment demonstrasi fasilitator; jangan cuba memintas sekatan akaun organisasi.

### Langkah 5 — Terbitkan Web App dan sambungkan frontend, 10 minit

1. Dalam Apps Script, pilih **Deploy → New deployment → Web app**.
2. Pilih tetapan akses latihan yang diterangkan oleh fasilitator.
3. Salin URL yang berakhir dengan `/exec` ke lokasi konfigurasi yang ditetapkan dalam dokumentasi.
4. Jangan tampal URL tersebut ke platform AI, ruang sembang umum atau tangkap layar yang akan diterbitkan.
5. Buka aplikasi dan semak status sambungan.

**Selesai apabila:** aplikasi tidak memaparkan status luar talian dan satu permintaan ujian tidak menghasilkan ralat sambungan.

### Langkah 6 — Masukkan tiga rekod rekaan, 15 minit

Masukkan satu rekod bagi setiap modul:

1. **Buku Log:** aktiviti makmal rekaan dan lampiran contoh jika dibenarkan.
2. **KEW.PA-9:** permohonan atau butiran aset rekaan.
3. **MCCB:** bacaan teknikal rekaan yang munasabah.

Selepas setiap penghantaran, catat ID rekod dan mesej yang dipaparkan.

**Selesai apabila:** tiga mesej berjaya atau tiga ID rekod telah direkodkan. Jangan gunakan nama, nombor aset, tandatangan atau bacaan sebenar.

### Langkah 7 — Sahkan Google Sheets dan Drive, 10 minit

1. Cari ID Buku Log pada tab `logbook`.
2. Cari ID KEW.PA-9 pada tab `asset`.
3. Cari ID MCCB pada tab `mccb`.
4. Pastikan satu penghantaran menghasilkan satu baris lengkap.
5. Jika lampiran digunakan, semak fail dan URLnya dalam folder Drive latihan.
6. Bandingkan nilai pada aplikasi dengan nilai dalam storan.

**Hasil langkah:** tiga baris dapat dijejak dan sebarang lampiran rekaan boleh dikenal pasti.

### Langkah 8 — Pilih dan gunakan satu gaya antaramuka, 5 minit

1. Buka halaman [Pilih gaya antaramuka](./06-Pilih-Gaya-Antaramuka.md).
2. Bandingkan tema Korporat Cerah, Makmal Gelap, Minimal dan Dashboard Operasi.
3. Muat turun satu fail CSS atau pek lengkap.
4. Tukar hanya pautan stylesheet atau pemboleh ubah warna yang berkaitan.
5. Pastikan perubahan tidak menjejaskan borang, label dan navigasi papan kekunci.

**Selesai apabila:** tema baharu kelihatan pada pratonton tempatan dan semua kandungan masih boleh dibaca.

### Langkah 9 — Commit, terbitkan dan uji GitHub Pages, 5 minit

1. Semak perbezaan kod dan pastikan tiada rahsia atau data sebenar.
2. Commit dengan mesej yang menerangkan tujuan perubahan, contohnya `Apply accessible corporate interface theme`.
3. Push perubahan ke repositori kumpulan.
4. Aktifkan atau semak GitHub Pages melalui **Settings → Pages**.
5. Tunggu workflow bertukar hijau, kemudian lakukan hard refresh.

**Selesai apabila:** URL GitHub Pages boleh dibuka dan perubahan gaya dipaparkan.

### Langkah 10 — Jalankan UAT dan sediakan bukti, 5 minit

1. Buka aplikasi pada desktop dan paparan telefon.
2. Hantar satu rekod ujian tambahan.
3. Semak mesej ralat dengan satu input wajib dikosongkan.
4. Pastikan dashboard dan storan masih sepadan.
5. Rekod keputusan dalam [halaman Latihan 80 minit](./04-Latihan-Bina-MPE-Hub.md).
6. Sediakan URL aplikasi, ID commit dan ringkasan satu perubahan untuk demonstrasi kumpulan.

**Selesai apabila:** aplikasi boleh dibuka, tiga modul telah diuji, storan disahkan, satu perubahan diterbitkan dan checklist serahan dilengkapkan.

> **Peringatan keselamatan:** gunakan data rekaan sahaja. Jangan paparkan atau serahkan URL deployment, ID Google, token, maklumat akaun atau data operasi sebenar.

## Bahan modul

| Bahan | Kegunaan |
|---|---|
| [Nota fasilitator](./01-Nota-Fasilitator.md) | Pelaksanaan sesi dan laluan sandaran |
| [Kandungan slaid untuk cetakan](./02-Kandungan-Slaid.md) | Sumber slaid Modul 5 |
| [Kit persediaan dan prompt](./03-Kit-Binaan-dan-Pustaka-Prompt.md) | Prasyarat, konfigurasi dan prompt bantuan AI |
| [Latihan MPE Hub](./04-Latihan-Bina-MPE-Hub.md) | Arahan amali 80 minit |
| [Pilih gaya antaramuka](./06-Pilih-Gaya-Antaramuka.md) | Pratonton dan pek tema CSS peserta |
| [Penilaian akhir](./05-Penilaian-Akhir.md) | Kuiz, rubrik, exit ticket dan penilaian program |

## Had dan kawalan keselamatan

- Gunakan data rekaan sahaja.
- Jangan masukkan nama, nombor aset, tandatangan, rekod atau lampiran sebenar.
- Jangan tampal URL deployment, ID Google, token atau maklumat akaun ke platform AI.
- Kod GitHub Pages boleh dilihat umum.
- Google Sheets dan folder Drive hendaklah kekal private atau terhad kepada kumpulan.
- Endpoint Apps Script `Anyone` tidak sesuai untuk data sensitif tanpa autentikasi dan kawalan tambahan.
- MPE Hub latihan bukan sistem pengeluaran atau repositori rasmi jabatan.

## Penilaian akhir program

### Maklum balas peserta

<div class="final-evaluation" data-final-evaluation="participant"></div>

### Ringkasan penilaian fasilitator

<div class="final-evaluation" data-final-evaluation="facilitator"></div>
