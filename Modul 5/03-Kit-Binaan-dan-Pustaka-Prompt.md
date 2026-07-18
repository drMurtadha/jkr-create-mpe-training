# Kit Persediaan dan Pustaka Prompt MPE Hub

## 1. Semakan sebelum hari latihan

Peserta perlu menyelesaikan perkara berikut sebelum sesi hands-on bermula:

1. Log masuk akaun Google dan GitHub;
2. Buka [Google Apps Script](https://script.google.com) dan pastikan projek boleh dicipta;
3. Buka [repositori MPE Hub](https://github.com/drMurtadha/mpe-hub);
4. Pastikan GitHub Pages tidak disekat;
5. Pilih ChatGPT, Gemini atau Claude percuma;
6. Gunakan komputer riba dan data rekaan sahaja.

Jika akaun organisasi menyekat Apps Script, peserta perlu menggunakan akaun Google lain yang dibenarkan atau bekerja bersama pemilik akaun kumpulan. Jangan cuba memintas polisi organisasi.

## 2. Dapatkan salinan MPE Hub

Pilihan tanpa terminal:

1. Buka repositori MPE Hub;
2. Gunakan **Use this template** atau **Fork** jika tersedia;
3. Namakan repositori `mpe-hub-latihan`;
4. Pastikan fail `index.html`, `styles.css`, `app.js`, `config.js` dan folder `apps-script` tersedia.

Peserta hanya menyesuaikan salinan sendiri. Jangan membuat perubahan terus pada repositori sumber fasilitator.

## 3. Sediakan Google Apps Script

1. Buka `script.google.com` dan cipta projek.
2. Salin kandungan `apps-script/Code.gs` daripada repositori peserta.
3. Jalankan fungsi `ensureSetup`.
4. Semak permintaan kebenaran Google Sheets dan Google Drive.
5. Pilih **Deploy -> New deployment -> Web app**.
6. Tetapkan **Execute as: Me** dan tahap akses yang dibenarkan untuk latihan.
7. Salin URL yang berakhir dengan `/exec`.
8. Masukkan URL tersebut dalam `config.js` pada repositori peserta.

Jangan hantar URL `/exec` kepada AI. Gantikan dengan `[URL_APPS_SCRIPT]` apabila meminta bantuan.

## 4. Semak storan Google

Fungsi `ensureSetup` menyediakan:

- Spreadsheet dengan tab `logbook`, `asset` dan `mccb`;
- Folder Google Drive untuk lampiran;
- Tajuk lajur yang diperlukan aplikasi.

Google Sheets dan folder Drive kekal dalam akaun pemilik deployment. Catat pemilik, pentadbir kedua dan kaedah sandaran.

## 5. Terbitkan GitHub Pages

1. Buka **Settings -> Pages** dalam repositori peserta.
2. Pilih **Deploy from a branch**.
3. Pilih `main` dan folder `/(root)`.
4. Simpan dan tunggu URL GitHub Pages.
5. Buka URL dan semak bahawa dashboard tidak memaparkan status luar talian.

## 6. Prompt bantuan AI

### Terangkan struktur aplikasi

```text
KONTEKS: Saya menyesuaikan salinan MPE Hub latihan. Frontend menggunakan GitHub Pages dan backend menggunakan Google Apps Script, Sheets dan Drive.
TUGAS: Terangkan peranan index.html, styles.css, app.js, config.js dan apps-script/Code.gs.
BATASAN: Jangan meminta atau mencipta URL deployment, ID Google, token atau data sebenar. Jangan ubah kod dahulu.
FORMAT: Fail | Peranan | Data masuk | Data keluar | Risiko | Cara uji.
```

### Ubah satu label atau medan

```text
KONTEKS: MPE Hub latihan mempunyai Buku Log, KEW.PA-9 dan MCCB. Semua data rekaan.
TUGAS: Tukar [LABEL_ASAL] kepada [LABEL_BAHARU] tanpa mengubah nama medan data atau API.
SEMAKAN: Nyatakan fail dan baris konsep yang terlibat. Berikan perubahan minimum sahaja. Kekalkan validasi, paparan mudah alih dan mesej ralat.
```

### Audit perubahan sebelum commit

```text
Audit perubahan kod berikut. Semak: data sebenar atau rahsia, URL/ID terdedah, medan frontend tidak sepadan dengan backend, validasi hilang, status manusia diautomasi, dan kegagalan rangkaian tanpa mesej. Format Isu | Bukti | Risiko | Pembetulan | Ujian.
```

### Bantu menyelesaikan ralat

```text
KONTEKS: MPE Hub GitHub Pages menghantar JSON kepada Google Apps Script.
GEJALA: [SALIN MESEJ RALAT TANPA ID, URL ATAU DATA SEBENAR]
HASIL DIJANGKA: [NYATAKAN]
TUGAS: Cadangkan tiga punca paling mungkin mengikut urutan. Bagi setiap punca, nyatakan semakan selamat dan pembetulan minimum. Jangan reka kredensial atau endpoint.
```

## 7. Pautan rujukan

- [Dokumentasi MPE Hub](https://drmurtadha.github.io/mpe-hub/docs.html)
- [Aplikasi contoh](https://drmurtadha.github.io/mpe-hub/)
- [Repositori GitHub](https://github.com/drMurtadha/mpe-hub)
- [Nota PDF](https://drmurtadha.github.io/mpe-hub/downloads/Nota_Latihan_MPE_Hub.pdf)
- [Slaid PPTX](https://drmurtadha.github.io/mpe-hub/downloads/Slaid_Latihan_MPE_Hub.pptx)
