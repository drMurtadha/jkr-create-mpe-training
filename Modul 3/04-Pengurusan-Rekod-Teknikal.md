# Latihan Pengurusan Rekod Teknikal

## Senario

Satu fail latihan menggabungkan rekod Buku Log, pergerakan aset KEW.PA-9 dan ujian MCCB. Semua data adalah rekaan. Penggabungan awal mempunyai kesalahan yang disengajakan dan belum boleh dianggap sebagai rekod rasmi.

[Muat turun data latihan MPE rekaan](./data/rekod-teknikal-mpe-rekaan.csv)

## Objektif

1. Mengesan isu identiti, format, pendua, status dan bukti;
2. Membezakan pembetulan automatik daripada pengesahan pemilik rekod;
3. Menghubungkan rekod dengan ID aset dan sumber;
4. Membina daftar rekod teknikal;
5. Menentukan versi, pemilik, penyemak dan lokasi simpanan rasmi.

## Struktur medan

| Medan | Maksud |
|---|---|
| `record_id` | ID unik rekod |
| `record_type` | LOG, KEWPA9 atau MCCB_TEST |
| `asset_id` | ID aset yang sepatutnya konsisten |
| `record_date` | Tarikh rekod, sasaran ISO `YYYY-MM-DD` |
| `activity` | Aktiviti/peristiwa teknikal |
| `reading` | Nilai bacaan jika berkenaan |
| `unit` | Unit bacaan |
| `status` | Status kerja atau rekod |
| `source_file` | Nama fail sumber rekaan |
| `version` | Versi fail/rekod |
| `reviewer` | Penyemak manusia |

## Prosedur sistematik

### 1. Kekalkan sumber

Jangan menulis ganti fail asal. Salin sebagai data kerja dan rekodkan checksum atau sekurang-kurangnya nama, tarikh muat turun dan saiz fail.

### 2. Audit tanpa membetulkan

Gunakan Prompt 8. Cari isu berikut dan petik baris bukti:

- `MPE-MCCB-01`, `mpe-mccb-01` dan `MCCB01`;
- Tarikh ISO, format `DD/MM/YYYY` dan tarikh tidak sah;
- `Pass`, `LULUS`, `Passed` dan status kosong;
- Satu ID rekod pendua;
- Bacaan tanpa unit;
- Rekod “Diluluskan” tanpa penyemak;
- Versi atau fail sumber yang tiada.

### 3. Tentukan autoriti

| Konflik | Rujukan utama latihan |
|---|---|
| Identiti aset | Daftar aset yang disahkan |
| Pergerakan aset | KEW.PA-9 yang diluluskan |
| Aktiviti harian | Buku Log bertarikh |
| Keputusan ujian | Laporan ujian bertandatangan |
| Status kelulusan | Pegawai diberi kuasa |

AI tidak boleh memilih rekod “paling masuk akal” apabila sumber bercanggah.

### 4. Standardisasi

Cadangkan peraturan, tetapi jangan laksanakan tanpa semakan:

- ID aset kepada pola `MPE-[JENIS]-NN`;
- Tarikh kepada ISO 8601;
- Kamus status terkawal;
- Unit wajib bagi bacaan;
- Rekod pendua ditanda, bukan terus dipadam;
- Nilai hilang menggunakan `[PERLU PENGESAHAN]`, bukan sifar.

### 5. Daftar dan pakej rekod

Gunakan Prompt 9 untuk draf daftar. Gunakan Prompt 10 untuk semakan pakej.

Cadangan struktur folder:

```text
01_Sumber_Asal/
02_Data_Kerja/
03_Log_Perubahan/
04_Analisis_Draf/
05_Hasil_Disahkan/
06_Rekod_Rasmi/
```

## Matriks status

| Status | Maksud | Siapa boleh menetapkan |
|---|---|---|
| Draf | Belum disemak | Penyedia |
| Dalam Semakan | Sedang diperiksa | Penyedia/penyemak |
| Disahkan | Fakta dan pengiraan diperiksa | Penyemak ditetapkan |
| Diluluskan | Diterima untuk tujuan rasmi | Pegawai diberi kuasa |

AI tidak boleh menetapkan `Disahkan` atau `Diluluskan`.

## Hasil serahan

- Laporan isu dengan nombor baris;
- Kamus status dan pola ID;
- Log perubahan cadangan;
- Daftar rekod teknikal;
- Peta sumber autoritatif;
- Struktur folder dan kaedah penamaan versi;
- Senarai perkara yang perlu dirujuk kepada pemilik rekod.
