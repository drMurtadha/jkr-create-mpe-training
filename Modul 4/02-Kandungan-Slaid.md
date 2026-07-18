# Kandungan Slaid Modul 4

## Panduan penggunaan

- Jumlah: 23 slaid
- Tempoh: 120 minit
- Format dicadangkan: 16:9
- Gunakan data, nama, nombor aset dan bacaan rekaan sahaja.
- Dokumen asal JKR CREaTE tidak dimuat naik ke platform AI pengguna.
- Setiap perubahan status mesti meninggalkan jejak.

---

## Slaid 1 - Automasi aliran kerja dan proses makmal

**Petakan proses -> kekalkan keputusan manusia -> uji sebelum guna**

Data rekaan sahaja. Setiap perubahan status mesti meninggalkan jejak.

**Nota penyampai:** Perkenalkan sumber proses JKR CREaTE tanpa memaparkan nama atau rekod sebenar.

---

## Slaid 2 - Apa yang akan dihasilkan?

Satu spesifikasi automasi kecil yang boleh diuji, terdiri daripada:

1. Peta semasa;
2. Senarai isu;
3. Peta cadangan;
4. Kamus medan;
5. Matriks peranan;
6. Kes ujian;
7. Pelan sandaran;
8. Ukuran kejayaan.

**Nota penyampai:** Hasil ini ialah reka bentuk proses, bukan aplikasi pengeluaran.

---

## Slaid 3 - Empat bahan JKR CREaTE

| Bahan | Konteks proses |
|---|---|
| Buku log | Aktiviti, tarikh dan kehadiran |
| Aliran QR | Masuk, pilih, rekod dan bukti |
| KEW.PA-9 | Pinjaman dan pemulangan aset |
| Datasheet MCCB | Bacaan, peralatan dan pengesahan |

---

## Slaid 4 - Jangan mengautomasi kekeliruan

1. **Petakan** - apa berlaku sekarang?
2. **Kawal** - siapa memutuskan?
3. **Uji** - apa berlaku apabila gagal?

Masalah kabur yang diautomasi menjadi masalah yang bergerak lebih pantas.

---

## Slaid 5 - Tujuh unsur aliran terkawal

**Pencetus -> Rekod -> Semak -> Keputusan -> Tindakan -> Bukti -> Simpan**

Gunakan urutan ini untuk kedua-dua cabang latihan.

---

## Slaid 6 - Siapa melakukan apa?

Setiap langkah proses mesti menyatakan:

- Pelaku;
- Tindakan;
- Data masuk;
- Keputusan;
- Bukti atau hasil.

Gunakan kata kerja yang boleh diperhatikan, bukan istilah umum seperti “proses” atau “urus”.

---

## Slaid 7 - Cari kehilangan nilai

Cari data berulang, masa menunggu, serahan manual, medan kosong, status kabur, bukti hilang, versi bercampur dan ketiadaan pemilik. Jangan mulakan dengan nama aplikasi.

---

## Slaid 8 - Peraturan, bantuan AI atau keputusan manusia?

| Jenis kerja | Contoh |
|---|---|
| Peraturan | Medan wajib, format dan pengiraan |
| Bantuan AI | Draf, ringkasan dan cadangan |
| Keputusan manusia | Meluluskan, mengesahkan dan menerima risiko |

Sistem dan AI tidak menjadi pegawai bertanggungjawab.

---

## Slaid 9 - Lengkap bukan bermaksud disahkan

```text
Draf -> Tidak Lengkap -> Sedia Disemak -> Dalam Semakan -> Disahkan -> Ditutup
```

Sediakan status **Dikembalikan** sebagai laluan pembetulan. Setiap status mesti mempunyai maksud dan pemilik yang jelas.

---

## Slaid 10 - Peta proses semasa: 25 minit

| Minit | Tindakan |
|---|---|
| 0-7 | Ekstrak langkah |
| 7-14 | Tanda keputusan |
| 14-20 | Cari isu |
| 20-25 | Semak silang |

Setiap kumpulan memilih satu cabang: buku log, aliran QR, KEW.PA-9 atau MCCB.

---

## Slaid 11 - Daripada QR kepada rekod rasmi

```text
Imbas QR -> Pilih aktiviti -> Isi rekod -> Lampir bukti
-> Semak peraturan -> Semak pegawai -> Simpan rasmi
```

Automasi menyusun perjalanan kerja, bukan mengambil alih kuasa. Notifikasi bukan bukti kelulusan.

---

## Slaid 12 - Cabang pinjaman aset KEW.PA-9

Jejak aset melalui permohonan, butiran aset dan tarikh, keputusan pelulus, serahan, pemulangan, penerimaan, catatan dan penutupan.

Gunakan identiti dan nombor aset rekaan.

---

## Slaid 13 - Peraturan membantu; pelulus memutuskan

| Boleh diautomasi | Wajib diputuskan manusia |
|---|---|
| Medan wajib, tarikh, format ID dan kelengkapan | Lulus atau tidak lulus, pengecualian dan penerimaan |

Sistem boleh mengesan ralat tetapi tidak memberi kelulusan.

---

## Slaid 14 - Cabang pengujian MCCB

Medan utama:

- Rujukan ujian;
- Butiran MCCB;
- Keadaan kerja;
- Peralatan dan kalibrasi;
- Tetapan arus;
- Masa trip;
- Penguji dan penyemak.

Gunakan struktur `F-CREaTE-ERL-TP02-01`, tetapi semua nilai latihan mestilah rekaan.

---

## Slaid 15 - Apa yang boleh diperiksa sistem?

- Medan wajib dan format;
- Formula `(a) x TCD`;
- Status kalibrasi dan fungsi peralatan;
- Unit serta masa bagi bacaan;
- Penguji berbeza daripada penyemak;
- Keputusan dihantar untuk semakan pegawai.

Formula sahaja tidak menentukan penerimaan teknikal.

---

## Slaid 16 - Setiap perubahan meninggalkan jejak

Jejak audit mesti merekodkan masa, pelaku, status asal, status baharu, sebab, bukti, versi dan lokasi rasmi. Sejarah chat bukan jejak audit rasmi.

---

## Slaid 17 - Reka untuk kegagalan

Uji medan kosong, tarikh tidak sah, kegagalan lampiran, status kalibrasi tidak diketahui, kegagalan notifikasi dan rekod yang dikembalikan.

Setiap kegagalan perlu mempunyai hasil dijangka serta laluan pemulihan.

---

## Slaid 18 - Uji tiga laluan minimum

| Laluan | Hasil yang diharapkan |
|---|---|
| Lengkap | Bergerak ke semakan |
| Tidak lengkap | Dikembalikan dengan sebab |
| Sistem gagal | Gunakan laluan manual |

Catat hasil sebenar, bukan hanya hasil yang dijangka.

---

## Slaid 19 - Percubaan kecil, terukur dan boleh dihentikan

Tetapkan objektif, skop, pengguna, tempoh, ukuran, kriteria henti, pelan manual dan keputusan akhir. Percubaan tidak menggunakan rekod sebenar sebelum kawalan disahkan.

---

## Slaid 20 - Ukur nilai dan kawalan

| Aspek | Contoh ukuran |
|---|---|
| Masa | Minit bagi setiap rekod |
| Kualiti | Peratus medan lengkap |
| Kebolehkesanan | Status boleh dijejak |
| Keselamatan | Pengecualian terkawal |

Tetapkan garis dasar sebelum percubaan. Cepat sahaja tidak mencukupi.

---

## Slaid 21 - Had dan kawalan keselamatan

- Gunakan data rekaan;
- Jangan masukkan tandatangan atau nombor aset sebenar;
- AI tidak meluluskan;
- Simpan log perubahan;
- Kawal akses mengikut peranan;
- Gunakan repositori rasmi;
- Sediakan pelan manual.

Foto buku log asal tidak diedarkan kerana mengandungi nama individu.

---

## Slaid 22 - Bukti penyempurnaan

Peserta menyediakan peta semasa, isu dan risiko, peta cadangan, kamus medan dan status, matriks peranan, kes ujian, spesifikasi percubaan kecil serta pelan sandaran.

Orang lain mesti boleh menilai cadangan tanpa sejarah chat.

---

## Slaid 23 - Automasi yang baik tahu bila perlu berhenti

1. **Petakan dahulu** - jangan automasi kekeliruan.
2. **Uji kegagalan** - jangan uji laluan biasa sahaja.
3. **Simpan rasmi** - chat bukan repositori.

**Penutup:** Peraturan jelas, manusia berkuasa, pengecualian terkawal dan rekod boleh diaudit.
