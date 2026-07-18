# Latihan Analisis Data — Penggunaan Elektrik Bulanan

## Senario

Ketua unit meminta ringkasan neutral tentang perubahan penggunaan elektrik mengikut sektor. Tujuan latihan ialah menunjukkan kaedah yang boleh diaudit, bukan membuat ramalan atau cadangan dasar.

## Sumber rasmi

- [Halaman metadata data.gov.my](https://data.gov.my/ms-MY/data-catalogue/electricity_consumption)
- [CSV Penggunaan Elektrik Bulanan](https://storage.data.gov.my/energy/electricity_consumption.csv)

Dataset mempunyai medan `date`, `sector` dan `consumption`. Unit penggunaan ialah juta kilowatt-jam (MKWh). Data enam bulan terkini pada dataset boleh bersifat sementara dan mungkin disemak.

## Tugasan kumpulan

### A. Tanya

Lengkapkan pernyataan:

> Bagi tempoh __________, bagaimanakah __________ berubah, dan apakah perbezaannya antara __________, untuk membantu __________ membuat __________?

Soalan latihan cadangan:

> Bagi 2019–2023, bagaimanakah penggunaan elektrik tempatan berubah mengikut sektor komersial dan domestik, dan bulan manakah menunjukkan nilai tertinggi serta terendah?

### B. Kenal

1. Salin metadata sumber.
2. Gunakan Prompt 2 untuk draf kamus data.
3. Sahkan sendiri unit, kategori sektor dan kaveat.
4. Tandakan kategori agregat yang tidak boleh dijumlahkan sekali lagi bersama subkategori.

### C. Semak

Gunakan Prompt 3. Periksa sekurang-kurangnya:

- Tarikh boleh ditafsir sebagai tarikh;
- Gabungan tarikh dan sektor unik;
- Nilai penggunaan bernombor dan tidak negatif;
- Semua kategori mempunyai tempoh yang dijangka;
- Nilai kosong atau perubahan luar biasa;
- Data sementara dikenal pasti.

### D. Bersih

Jangan ubah fail asal. Simpan salinan kerja dan logkan:

| ID | Rekod/lajur | Nilai asal | Nilai baharu | Sebab | Penyemak |
|---|---|---|---|---|---|
| C001 | Contoh | — | — | — | — |

Jika dataset tidak memerlukan pembetulan, catat `Tiada perubahan; semakan kualiti selesai` dan senaraikan penapis analisis.

### E. Analisis

Gunakan Prompt 5 untuk menghasilkan:

1. Penggunaan bulanan tertinggi dan terendah bagi setiap sektor;
2. Purata tahunan mengikut sektor;
3. Perubahan peratus tahun ke tahun;
4. Perbandingan komersial dengan domestik;
5. Satu jadual data yang akan diplot.

Semak sekurang-kurangnya dua pengiraan secara manual atau menggunakan formula hamparan.

### F. Sah

Gunakan Prompt 7. Setiap dapatan perlu menyatakan tempoh, sektor, nilai dan unit. Tukar ayat seperti `penggunaan meningkat dengan ketara` kepada ayat yang mempunyai bukti angka.

### G. Rekod

Cadangan pakej fail:

```text
M3_Elektrik_Sumber_20240930.csv
M3_Elektrik_KamusData_v01.xlsx
M3_Elektrik_LogKualiti_v01.xlsx
M3_Elektrik_DataKerja_v01.csv
M3_Elektrik_Analisis_v01.xlsx
M3_Elektrik_Ringkasan_v01.docx
```

## Hasil serahan

- Soalan analisis;
- Kamus data;
- Laporan kualiti;
- Jadual ringkasan;
- Satu carta dengan unit dan nota sumber;
- Dua pengiraan semula;
- Nota batasan;
- Senarai fail dan versi.

## Rubrik ringkas

| Kriteria | 0 | 1 | 2 |
|---|---|---|---|
| Soalan | Tiada/kabur | Ada tetapi skop lemah | Keputusan, tempoh dan kategori jelas |
| Kualiti data | Tidak diperiksa | Pemeriksaan umum | Bukti baris/lajur dan kaedah jelas |
| Pengiraan | Tidak boleh disemak | Sebahagian formula | Formula dan semakan semula lengkap |
| Carta | Hiasan/mengelirukan | Menjawab sebahagian | Menjawab soalan, unit dan sumber jelas |
| Tafsiran | Dakwaan berlebihan | Batasan separa | Pemerhatian dan tafsiran dibezakan |
| Rekod | Tiada versi/sumber | Sebahagian metadata | Sumber, versi, pemilik dan lokasi jelas |

Skor maksimum: 12.
