# Kandungan Slaid Modul 3

## Panduan penggunaan

- Jumlah: 30 slaid
- Modul 3A: analisis data, 120 minit
- Modul 3B: pengurusan rekod teknikal, 90 minit
- Format dicadangkan: 16:9
- Gunakan data terbuka kerajaan atau data rekaan sahaja.
- Jangan masukkan data peribadi, dokumen terperingkat atau rekod operasi sebenar ke platform AI awam.

---

## Slaid 1 - Pendekatan sistematik dalam analisis data

Daripada soalan yang jelas kepada hasil yang boleh diaudit. Sahkan pengiraan, rekodkan sumber dan simpan hasil rasmi di luar platform AI.

**Nota penyampai:** Terangkan pembahagian Modul 3A dan 3B.

---

## Slaid 2 - Apa yang peserta hasilkan dalam 3A?

Soalan dan skop; kamus data; laporan kualiti; jadual dan carta; pakej rekod dengan versi serta lokasi.

**Nota penyampai:** Carta ialah satu hasil, bukan titik mula.

---

## Slaid 3 - AI membantu; manusia mengesahkan

AI membantu menghasilkan profil, formula, jadual dan draf tafsiran. Manusia menyemak sumber, unit, pengiraan, konteks dan batasan. Pegawai memutuskan penggunaan rasmi, status dan tindakan.

---

## Slaid 4 - Tujuh langkah yang boleh dijejak

**Tanya -> Kenal -> Semak -> Bersih -> Analisis -> Sah -> Rekod**

Setiap langkah menghasilkan bukti sebelum bergerak ke langkah berikutnya.

---

## Slaid 5 - Had dan kawalan keselamatan platform percuma

Tiada data peribadi; tiada dokumen terperingkat; gunakan sampel jika kuota terhad; semak semula jumlah dan carta; sejarah chat bukan rekod rasmi.

---

## Slaid 6 - Prompt kabur, hasil kabur

Contoh: `Analisis data ini dan beri insight.` Soalan tidak jelas, kaedah tidak diketahui, carta mungkin hiasan dan dakwaan boleh berlebihan.

---

## Slaid 7 - Tanya: keputusan apa yang perlu disokong?

> Bagi tempoh **[TEMPOH]**, bagaimanakah **[UKURAN]** berubah antara **[KATEGORI]**, untuk membantu **[PENGGUNA]** membuat **[KEPUTUSAN]**?

---

## Slaid 8 - Kenal: fahami data sebelum mengira

Kenal pasti tarikh, kategori, ukuran, unit dan sumber. Semak metadata rasmi serta kategori agregat yang tidak boleh dijumlahkan dua kali.

---

## Slaid 9 - Dataset kerajaan: Penggunaan Elektrik Bulanan

Medan: `date`, `sector`, `consumption`. Unit: juta kilowatt-jam (MKWh). Enam bulan terkini mungkin bersifat sementara.

- [Metadata data.gov.my](https://data.gov.my/ms-MY/data-catalogue/electricity_consumption)
- [Fail CSV](https://storage.data.gov.my/energy/electricity_consumption.csv)

---

## Slaid 10 - Semak: lengkap, sah, konsisten dan unik

Periksa tarikh sah, gabungan unik, nilai bernombor, nilai negatif, tempoh lengkap dan nilai luar biasa. Pencilan perlu disiasat, bukan terus dipadam.

---

## Slaid 11 - Bersih: jangan ubah fail sumber

```text
Fail sumber (tidak berubah) -> Data kerja -> Log perubahan
```

Log merekodkan nilai asal, nilai baharu, sebab dan penyemak.

---

## Slaid 12 - Analisis: kira hanya yang menjawab soalan

Kira nilai tertinggi dan terendah, purata tahunan, perubahan tahun ke tahun serta perbandingan sektor. Semak sekurang-kurangnya dua pengiraan dalam hamparan.

---

## Slaid 13 - Carta yang jujur menjawab satu soalan

Gunakan carta garis untuk trend dan carta bar untuk perbandingan. Nyatakan tajuk, paksi, unit, tempoh, sumber dan kaveat.

---

## Slaid 14 - Sah: audit angka dan dakwaan

Perkataan “meningkat” mesti disertai tempoh, nilai asas, nilai akhir dan unit. Nyatakan formula dan sumber.

---

## Slaid 15 - Rekod: bina pakej hasil yang boleh dijejak

Pisahkan fail sumber, data kerja, kamus data, log kualiti, analisis dan ringkasan. Gunakan nama fail yang menyatakan projek, jenis hasil, tarikh atau versi.

---

## Slaid 16 - Latihan kumpulan: aliran lengkap

| Minit | Tindakan |
|---|---|
| 0-15 | Soalan dan kamus |
| 15-35 | Kualiti dan log |
| 35-60 | Analisis dan carta |
| 60-72 | Pengesahan dan rekod |

---

## Slaid 17 - Bukti siap Modul 3A

Soalan analisis; kamus data; laporan kualiti; log perubahan; jadual ringkasan; carta bersumber; dua semakan kiraan; nota batasan.

---

## Slaid 18 - Pengurusan rekod teknikal

Daripada data kerja kepada rekod yang mempunyai identiti, autoriti, versi dan status.

---

## Slaid 19 - Tiga jenis rekod, satu fail latihan

Buku Log untuk aktiviti harian; KEW.PA-9 untuk pergerakan aset; lembaran Ujian MCCB untuk bacaan, unit dan keputusan. Semua data latihan adalah rekaan.

---

## Slaid 20 - Anatomi rekod teknikal

Medan utama: `record_id`, `record_type`, `asset_id`, `record_date`, `activity`, `reading`, `unit`, `status`, `source_file`, `version` dan `reviewer`.

---

## Slaid 21 - Audit dahulu, jangan terus membetulkan

Cari ID aset berbeza, tarikh bercampur, status bercanggah, rekod pendua, bacaan tanpa unit, kelulusan tanpa penyemak, versi hilang dan sumber tiada. Petik nombor baris sebagai bukti.

---

## Slaid 22 - Rujuk sumber autoritatif

Daftar aset disahkan untuk aset; KEW.PA-9 diluluskan untuk pergerakan; Buku Log bertarikh untuk aktiviti; laporan bertandatangan untuk ujian; pegawai diberi kuasa untuk kelulusan.

---

## Slaid 23 - Cadangkan peraturan, kemudian semak

Gunakan format ID aset terkawal, tarikh ISO `YYYY-MM-DD`, kamus status dan unit wajib. Tanda pendua serta nilai `[PERLU PENGESAHAN]`; jangan terus memadam atau mengisi nilai.

---

## Slaid 24 - Jejak aset -> ujian -> tindakan

```text
Aset -> Ujian -> Keputusan -> Tindakan
```

ID aset dan sumber membolehkan rekod disambungkan tanpa kehilangan konteks.

---

## Slaid 25 - Siapa boleh menetapkan status?

| Status | Pihak bertanggungjawab |
|---|---|
| Draf | Penyedia |
| Dalam Semakan | Penyedia atau penyemak |
| Disahkan | Penyemak ditetapkan |
| Diluluskan | Pegawai diberi kuasa |

AI tidak boleh menetapkan status Disahkan atau Diluluskan.

---

## Slaid 26 - Struktur folder yang memelihara jejak

```text
01_Sumber_Asal
02_Data_Kerja
03_Log_Perubahan
04_Analisis_Draf
05_Hasil_Disahkan
06_Rekod_Rasmi
```

---

## Slaid 27 - Latihan audit rekod

Audit isu; cadangkan standardisasi; hubungkan rekod; bina daftar dan versi; lakukan semakan silang. Setiap isu mesti mempunyai bukti baris dan autoriti rujukan.

---

## Slaid 28 - Tanda bahaya dalam output AI

Berhenti dan semak jika AI menukar kosong kepada sifar, membuang pencilan, menggabungkan unit, menjumlah kategori dua kali, menyamakan korelasi dengan sebab, mencipta lajur atau status, atau memberi status lulus.

---

## Slaid 29 - Bukti penyempurnaan Modul 3

Laporan isu berserta baris; kamus status dan ID; log perubahan; daftar rekod; peta autoriti; struktur folder; nota batasan; lokasi rekod rasmi.

---

## Slaid 30 - Analisis yang baik meninggalkan jejak

1. Jangan mula dengan carta - mulakan dengan soalan dan metadata.
2. Jangan terima angka tanpa semakan - hasilkan semula pengiraan.
3. Jangan simpan rekod rasmi dalam chat - gunakan repositori jabatan.

**Penutup:** Soalan jelas, data difahami, pengiraan disahkan dan rekod dikawal.
