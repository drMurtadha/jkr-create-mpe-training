# Skrip Demonstrasi MPE Hub

## Tujuan demonstrasi

Demonstrasi 12 minit ini menunjukkan bagaimana prinsip aplikasi pintar diterjemahkan kepada pengalaman kerja. Ia bukan tutorial kod dan bukan latihan mengkonfigurasi Google Apps Script.

Pada akhir demonstrasi, peserta perlu dapat mengenal pasti:

- Data yang dikumpul sekali;
- Validasi atau pengiraan yang mengurangkan ralat;
- Status dan rekod yang boleh dijejaki;
- Keputusan yang masih memerlukan manusia.

## Pautan

- Aplikasi: [https://drmurtadha.github.io/mpe-hub/](https://drmurtadha.github.io/mpe-hub/)
- Dokumentasi: [https://drmurtadha.github.io/mpe-hub/docs.html](https://drmurtadha.github.io/mpe-hub/docs.html)
- Repositori: [https://github.com/drMurtadha/mpe-hub](https://github.com/drMurtadha/mpe-hub)

## Persediaan demonstrasi

### Tab yang perlu dibuka

1. Dashboard MPE Hub.
2. Buku Log Makmal.
3. KEW.PA-9.
4. MCCB Test Report.
5. Dokumentasi MPE Hub.

### Semakan fungsi

- Halaman utama dimuatkan tanpa ralat.
- Navigasi antara modul berfungsi.
- Borang dipaparkan dengan baik pada saiz telefon.
- Data contoh tersedia atau semua medan contoh telah dicatat.
- Dashboard mempunyai keadaan contoh yang boleh diterangkan.
- Jika backend produksi tidak sesuai untuk rekod latihan, jangan tekan hantar; gunakan tangkap layar kejayaan.

### Data contoh

Gunakan data rekaan berikut. Jangan gunakan data pekerja, aset atau keputusan ujian sebenar.

#### Buku Log

| Medan | Data contoh |
|---|---|
| Nama/pegawai | Peserta Demo 01 |
| Lokasi | Makmal Energy Efficiency |
| Tarikh | Tarikh latihan |
| Aktiviti | Pemeriksaan persediaan ruang ujian |
| Status | Selesai |
| Catatan | Data demonstrasi Modul 1 |

#### KEW.PA-9

| Medan | Data contoh |
|---|---|
| Pemohon | Peserta Demo 01 |
| Tujuan | Demonstrasi latihan |
| Tempat | Bilik Latihan MPE |
| Aset | DEMO-ASSET-001 |
| Perihal | Meter ujian latihan |
| Status | Draf |

#### MCCB

| Medan | Data contoh |
|---|---|
| Rujukan kerja | DEMO-MCCB-001 |
| Rated current | 100 A |
| TCD | 1.000 |
| Ambient mula | 25.0 °C |
| Kelembapan mula | 60.0% |
| Penguji | Peserta Demo 01 |
| Keputusan | Data latihan sahaja |

## Soalan pemerhatian

Paparkan atau sebut sebelum membuka aplikasi:

1. Apakah data yang dikumpul sekali?
2. Apakah kesilapan yang dicegah semasa input?
3. Apakah status yang boleh dilihat tanpa bertanya kepada orang lain?
4. Apakah keputusan yang masih memerlukan pegawai?

## Pelaksanaan 12 minit

### 0:00–1:00 — Tetapkan konteks

**Tindakan:** Paparkan tiga rekod sumber: Buku Log, KEW.PA-9 dan laporan ujian MCCB melalui imej atau slaid “sebelum”.

**Skrip:**

> Tiga proses ini mempunyai pengguna, medan dan tujuan yang berbeza. Masalah bermula apabila data dimasukkan semula, fail dinamakan secara tidak konsisten dan status hanya diketahui melalui mesej atau ingatan individu.

**Mesej:** Matlamat bukan menghapuskan borang rasmi, tetapi menambah baik cara data dikumpul, disemak dan dijejaki.

### 1:00–2:15 — Dashboard sebagai pandangan kerja

**Tindakan:** Buka dashboard MPE Hub dan tunjuk kad metrik serta aktiviti terkini.

**Skrip:**

> Pengguna tidak perlu membuka setiap fail untuk mengetahui keadaan semasa. Dashboard memaparkan perkara yang memerlukan perhatian, tetapi sumber rekod masih boleh diperiksa.

**Tunjuk:**

- Jumlah rekod;
- Pinjaman aktif;
- Kadar lulus atau status;
- Tindakan belum selesai;
- Aktiviti terkini.

**Hubungkan dengan keupayaan:** Memantau dan menyusun.

### 2:15–5:15 — Buku Log: kumpul sekali

**Tindakan:** Buka Buku Log pada paparan bersaiz telefon.

**Skrip:**

> Rekod dibuat di tempat kerja berlaku. Label, pilihan dan medan wajib membantu konsistensi. Lampiran boleh dikaitkan dengan rekod yang sama, bukan disimpan tanpa konteks.

**Tunjuk:**

- Maklumat kehadiran;
- Aktiviti dan status;
- Medan wajib;
- Lampiran;
- Paparan responsif.

**Jika selamat menghantar data:** Isi data contoh dan hantar. Tunjuk ID rekod yang dijana.

**Jika tidak selamat:** Jangan hantar. Paparkan tangkap layar mesej kejayaan.

**Hubungkan dengan keupayaan:** Mengumpul, menyemak dan menyusun.

### 5:15–6:45 — KEW.PA-9: rekod berstruktur

**Tindakan:** Buka modul KEW.PA-9 dan tambah satu baris aset contoh.

**Skrip:**

> Borang rasmi mempunyai struktur dan tanggungjawab yang perlu dikekalkan. Pendigitalan yang baik tidak membuang maklumat penting; ia menjadikan senarai aset, status dan rekod lebih mudah dijejaki.

**Tunjuk:**

- Maklumat pemohon;
- Senarai aset berulang;
- Pengesahan;
- Status.

**Hubungkan dengan keupayaan:** Menyusun dan mengautomasi.

### 6:45–9:15 — MCCB: validasi dan pengiraan

**Tindakan:** Buka MCCB Test Report dan masukkan `Rated current = 100` serta `TCD = 1.000`.

**Skrip:**

> Nilai asal mesti kekal boleh diaudit. Sistem boleh membantu mengira dan menyemak, tetapi penguji serta pegawai verifikasi masih bertanggungjawab terhadap kesahihan keadaan ujian dan keputusan.

**Tunjuk:**

- Unit pada label;
- Keadaan kerja;
- Senarai peralatan;
- Pengiraan 1.05 dan 1.30 jika tersedia;
- Ruang penguji dan verifikasi.

**Hubungkan dengan keupayaan:** Menyemak, membantu dan memantau.

### 9:15–10:30 — Hubungan data dan storan

**Tindakan:** Kembali ke dashboard atau gunakan rajah ringkas.

**Skrip:**

> Antara muka hanyalah satu lapisan. Rekod perlu mempunyai ID, storan, pemilik, kawalan akses, sandaran dan dokumentasi. Aplikasi pintar tanpa tadbir urus hanya memindahkan risiko.

**Rajah:**

```text
Pengguna → GitHub Pages → Apps Script → Sheets/Drive → Dashboard
```

**Peringatan:** GitHub Pages dan kod klien boleh dilihat umum; data sensitif tidak boleh diletakkan dalam kod awam.

### 10:30–11:30 — Semak empat soalan

Minta peserta memberikan jawapan pendek:

- Data dikumpul sekali: butiran pengguna, aktiviti, aset atau bacaan.
- Ralat dicegah: medan kosong, format, unit atau pengiraan.
- Status dijejaki: rekod, pinjaman, tindakan atau keputusan.
- Manusia mengesahkan: data teknikal, kelulusan rasmi dan keputusan akhir.

### 11:30–12:00 — Jambatan kepada aktiviti

**Skrip:**

> MPE Hub bukan jawapan bagi semua masalah. Nilainya ialah menunjukkan corak: kumpul sekali, semak awal, jejak status dan kekalkan manusia pada keputusan penting. Sekarang pilih satu masalah kerja anda dan tentukan corak mana yang benar-benar diperlukan.

Paparkan slaid Kanvas Peluang Produktiviti.

## Pelan sandaran jika internet gagal

### Tahap 1 — Versi tempatan

Jalankan pelayan statik daripada folder projek MPE Hub:

```bash
python3 -m http.server 4173
```

Buka `http://localhost:4173`. Terangkan bahawa penghantaran ke backend mungkin tidak tersedia, tetapi antaramuka dan validasi masih boleh ditunjukkan.

### Tahap 2 — Tangkap layar

Susunan tangkap layar minimum:

1. Dashboard;
2. Buku Log pada telefon;
3. KEW.PA-9 dengan dua aset;
4. MCCB dengan pengiraan;
5. Mesej ID rekod;
6. Rajah storan.

### Tahap 3 — Demonstrasi naratif

Gunakan slaid 16–18 dan terangkan “sebelum → tindakan aplikasi → selepas”. Kekalkan empat soalan pemerhatian supaya demonstrasi masih aktif.

## Kesilapan demonstrasi yang perlu dielakkan

- Menerangkan HTML, JavaScript atau Apps Script secara terperinci dalam Modul 1.
- Menggunakan rekod sebenar untuk menjadikan demo kelihatan realistik.
- Menekan hantar berulang kali apabila rangkaian gagal.
- Menjanjikan bahawa sistem sesuai untuk produksi tanpa penilaian keselamatan dan pemilik proses.
- Membiarkan demo melebihi 12 minit sehingga aktiviti kumpulan dipotong.
- Menunjukkan token, URL sensitif, e-mel peribadi atau kandungan Google Drive private.

## Checklist selepas demonstrasi

- [ ] Peserta melihat sekurang-kurangnya satu aliran lengkap.
- [ ] Empat soalan pemerhatian dijawab.
- [ ] Peranan semakan manusia dinyatakan.
- [ ] Risiko akses awam diterangkan secara ringkas.
- [ ] Demo tamat dalam 12 minit.
- [ ] Peralihan kepada kanvas dibuat dengan jelas.

