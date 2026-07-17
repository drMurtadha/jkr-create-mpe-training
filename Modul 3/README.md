# Modul 3 — Pendekatan Sistematik dalam Analisis Data dan Pengurusan Rekod Teknikal

[Buka slaid web Modul 3](./slaid/)

- **Modul 3A:** 28 Julai 2026, 2.30–4.30 petang — 120 minit
- **Modul 3B:** 29 Julai 2026, 9.00–10.30 pagi — 90 minit
- **Jumlah:** 210 minit
- **Platform:** ChatGPT, Gemini atau Claude melalui pelan percuma
- **Prinsip:** AI membantu meneroka dan menyusun; manusia mengesahkan data, kaedah, tafsiran dan rekod rasmi

## Hasil pembelajaran

Pada akhir modul, peserta boleh:

1. menggunakan aliran sistematik **Tanya–Kenal–Semak–Bersih–Analisis–Sah–Rekod**;
2. membezakan pemerhatian, pengiraan, tafsiran dan keputusan;
3. mengesan data hilang, pendua, format tidak seragam, julat luar biasa dan konflik rekod;
4. meminta AI menerangkan kaedah serta menunjukkan pengiraan yang boleh disemak;
5. menghasilkan jadual atau carta yang menjawab soalan kerja tertentu;
6. membina daftar rekod teknikal dengan ID, sumber, versi, status dan pemilik;
7. menyimpan hanya hasil yang telah disahkan ke dalam repositori rekod rasmi.

## Tiga jalur modul

### 1. Cara sistematik

| Langkah | Soalan kawalan | Hasil |
|---|---|---|
| Tanya | Keputusan apa yang perlu disokong? | Soalan analisis dan skop |
| Kenal | Apakah setiap baris, lajur, unit dan sumber? | Kamus data |
| Semak | Adakah data lengkap, sah dan konsisten? | Laporan kualiti data |
| Bersih | Apakah perubahan yang dibenarkan? | Data kerja dan log perubahan |
| Analisis | Pengiraan atau carta apa menjawab soalan? | Jadual, statistik dan visual |
| Sah | Bolehkah hasil diterbitkan semula dan dijejak? | Semakan manusia dan bukti |
| Rekod | Versi mana rasmi, siapa pemilik dan di mana disimpan? | Pakej rekod teknikal |

### 2. Analisis data

Demonstrasi menggunakan dataset kerajaan terbuka **Penggunaan Elektrik Bulanan** daripada data.gov.my. Peserta membina soalan, memeriksa metadata, membandingkan sektor, mengira perubahan dan menghasilkan carta trend. Data enam bulan terkini boleh bersifat sementara; ini digunakan untuk mengajar kepentingan kaveat dan versi sumber.

- [Buka dataset Penggunaan Elektrik Bulanan](https://data.gov.my/ms-MY/data-catalogue/electricity_consumption)
- [Muat turun CSV rasmi](https://storage.data.gov.my/energy/electricity_consumption.csv)
- [Buka dataset Bekalan Elektrik](https://data.gov.my/data-catalogue/electricity_supply)

### 3. Pengurusan rekod teknikal

Latihan menggunakan rekod MPE rekaan yang menyerupai Buku Log Makmal, KEW.PA-9 dan rekod ujian MCCB. Kesalahan dimasukkan dengan sengaja supaya peserta boleh mengesan:

- ID aset tidak seragam;
- tarikh dalam pelbagai format;
- rekod pendua;
- unit tidak dinyatakan;
- status bercanggah;
- keputusan tanpa bukti atau penyemak;
- fail tanpa versi dan lokasi rekod rasmi.

## Bahan modul

| Bahan | Kegunaan |
|---|---|
| [Nota fasilitator](./01-Nota-Fasilitator.md) | Pelaksanaan Modul 3A dan 3B |
| [Pustaka prompt boleh salin](./02-Pustaka-Prompt-Analisis-dan-Rekod.md) | Arahan lengkap, neutral platform |
| [Latihan analisis data](./03-Latihan-Analisis-Data.md) | Dataset kerajaan dan lembaran kerja |
| [Latihan rekod teknikal](./04-Pengurusan-Rekod-Teknikal.md) | Audit, pembersihan dan daftar rekod |
| [Penilaian](./05-Penilaian.md) | Kuiz, rubrik dan bukti penyempurnaan |
| [Data latihan MPE rekaan](./data/rekod-teknikal-mpe-rekaan.csv) | CSV kecil untuk muat naik atau salin-tampal |

## Had dan kawalan keselamatan penggunaan platform percuma

- Jangan gunakan data peribadi, kata laluan, maklumat kontrak sensitif atau dokumen terperingkat.
- Keupayaan muat naik dan analisis mempunyai had yang boleh berubah mengikut platform dan akaun.
- Semua latihan boleh diteruskan dengan menampal sampel 10–20 baris jika muat naik fail tidak tersedia.
- Jangan menerima jumlah, carta, kod atau tafsiran AI tanpa semakan terhadap data sumber.
- Sejarah chat dan fail dalam platform AI bukan repositori rekod rasmi jabatan.

Rujukan semasa: [ChatGPT Free Tier](https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq), [analisis data dengan ChatGPT](https://help.openai.com/en/articles/8437071-data-analysis-with-chatgpt), [had Gemini tanpa pelan AI](https://support.google.com/gemini/answer/16275805) dan [pelan Claude](https://www.anthropic.com/pricing). Had boleh berubah; sebab itu latihan tidak bergantung pada kuota atau satu ciri platform tertentu.

## Hasil akhir peserta

1. satu pernyataan soalan analisis;
2. satu kamus data ringkas;
3. satu laporan kualiti data;
4. satu dataset kerja dengan log perubahan;
5. satu jadual ringkasan dan satu carta yang disahkan;
6. satu daftar rekod teknikal dan cadangan kawalan;
7. satu nota batasan dan jejak sumber.
