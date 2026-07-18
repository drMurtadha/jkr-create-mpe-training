# Nota Fasilitator Modul 3

## Mesej utama

> Analisis yang baik bukan bermula dengan carta. Ia bermula dengan soalan yang jelas, data yang difahami, semakan kualiti dan jejak perubahan. AI boleh membantu setiap langkah, tetapi tidak boleh mengesahkan data atau meluluskan rekod teknikal.

Paparkan sepanjang sesi:

> **DATA TERBUKA ATAU REKAAN SAHAJA · SAHKAN PENGIRAAN · SIMPAN REKOD RASMI DI LUAR PLATFORM AI**

## Persediaan

- buka ChatGPT, Gemini dan Claude; satu platform bagi setiap kumpulan memadai;
- muat turun CSV Penggunaan Elektrik Bulanan daripada data.gov.my;
- sediakan `data/rekod-teknikal-mpe-rekaan.csv`;
- pastikan peserta boleh membuka CSV dalam Excel atau Google Sheets;
- sediakan pelan sandaran: tampal 10–20 baris data terus ke ruangan chat;
- kumpulkan username GitHub peserta dan sediakan pembahagian tiga kumpulan beranggotakan tiga orang;
- pastikan sekurang-kurangnya seorang peserta setiap kumpulan boleh mencipta repositori dan menjemput kolaborator;
- jangan menjanjikan model, bilangan muat naik atau kuota tertentu.

## Modul 3A — 120 minit

| Masa | Aktiviti | Hasil |
|---:|---|---|
| 0–30 | GitHub asas secara hands-on: kumpulan, kolaborator, branch, PR dan merge | Tiga repositori kumpulan dan satu PR dimerge |
| 30–38 | Sambungan Modul 2 serta had dan kawalan keselamatan data | Data dibenarkan dikenal pasti |
| 38–50 | Tanya: bina soalan analisis | Soalan, pengguna dan keputusan |
| 50–62 | Kenal: baca metadata dan kamus data | Definisi lajur, unit dan sumber |
| 62–78 | Semak: profil kualiti data | Isu lengkap, sah, konsisten dan unik |
| 78–90 | Bersih: cadangan pembetulan | Log perubahan tanpa mengubah sumber |
| 90–105 | Analisis: trend dan perbandingan | Jadual ringkasan dan carta |
| 105–114 | Sah: audit pengiraan dan dakwaan | Bukti serta batasan |
| 114–120 | Rekod: pakej hasil | Nama fail, versi dan lokasi rasmi |

Gunakan halaman [GitHub Asas dan Kerja Berpasukan](./06-GitHub-Asas-dan-Kerja-Berpasukan.md) sebagai lembaran aktiviti pada 30 minit pertama. Elakkan syarahan panjang; fasilitator menunjukkan satu tindakan, kemudian peserta terus melakukannya dalam kumpulan.

### Demonstrasi wajib

1. Tunjukkan prompt kabur: `Analisis data ini dan beri insight.`
2. Catat masalah: soalan tidak jelas, kaedah tidak diketahui, kemungkinan carta hiasan dan dakwaan berlebihan.
3. Jalankan Prompt 1 hingga Prompt 5 daripada pustaka secara berurutan.
4. Minta peserta mencari satu angka dalam output AI dan mengiranya semula dalam hamparan.
5. Tegaskan bahawa perkataan “meningkat” perlu mempunyai tempoh, nilai asas, nilai akhir dan unit.

## Modul 3B — 90 minit

| Masa | Aktiviti | Hasil |
|---:|---|---|
| 0–10 | Imbas kembali tujuh langkah | Peta proses lengkap |
| 10–30 | Audit rekod MPE rekaan | Senarai isu dengan baris bukti |
| 30–48 | Standardisasi dan deduplikasi | Cadangan data kerja |
| 48–65 | Hubung rekod aset–ujian–tindakan | Jejak silang dan jurang bukti |
| 65–78 | Daftar rekod dan kawalan versi | Pemilik, status, versi, lokasi |
| 78–87 | Semakan silang kumpulan | Rubrik dan pembetulan |
| 87–90 | Exit ticket | Satu amalan yang akan digunakan |

## Soalan debrief

- Apakah keputusan yang boleh disokong oleh data ini, dan apakah yang tidak boleh?
- Isu mana boleh dibetulkan secara mekanikal, dan isu mana perlu dirujuk kepada pemilik rekod?
- Jika dua rekod bercanggah, sumber autoritatif mana perlu dirujuk?
- Bolehkah orang lain menghasilkan semula angka dan carta yang sama?
- Fail manakah sumber asal, data kerja, output AI, hasil disahkan dan rekod rasmi?

## Tanda bahaya dalam output AI

- menganggap nilai hilang sebagai sifar;
- membuang pencilan tanpa alasan;
- menggabungkan unit berbeza;
- mengira jumlah bagi kategori yang bertindih;
- menyatakan sebab hanya berdasarkan korelasi;
- mencipta nama lajur, tarikh, status atau rekod;
- menyebut data “bersih” tanpa laporan semakan;
- memberi status lulus, sah atau diluluskan.

## Pelan sandaran had platform

Jika muat naik fail tidak tersedia, gunakan 12 baris pertama CSV. Minta AI menghasilkan pelan dan formula, kemudian lakukan pengiraan dalam Excel. Matlamatnya ialah kaedah sistematik, bukan penggunaan alat analisis tertentu.
