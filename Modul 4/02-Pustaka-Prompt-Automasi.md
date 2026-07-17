# Pustaka Prompt — Automasi Aliran Kerja Makmal

Tekan **Salin prompt** pada portal. Gunakan data latihan rekaan sahaja.

## Prompt 1 — Ekstrak proses semasa

```text
KONTEKS:
Anda membantu memetakan proses makmal berdasarkan penerangan latihan rekaan. Anda tidak mereka langkah yang tiada.

TUGAS:
Ekstrak pencetus, pelaku, langkah, keputusan, input, output, bukti, status dan sistem simpanan.

BAHAN:
[Tampal penerangan proses yang telah dinyahidentiti]

FORMAT:
Jadual: Bil | Pelaku | Langkah | Input | Keputusan/peraturan | Output/bukti | Status | Risiko. Akhiri dengan senarai maklumat yang perlu disahkan oleh pemilik proses.

SEMAKAN:
Labelkan andaian sebagai [PERLU PENGESAHAN]. Jangan cipta pelulus, tempoh, nombor dokumen atau keperluan undang-undang.
```

## Prompt 2 — Cari isu proses tanpa mencadangkan alat

```text
KONTEKS:
Peta proses semasa telah disahkan secara awal. Fokus pada masalah kerja, bukan nama teknologi.

TUGAS:
Kenal pasti pengulangan data, menunggu, serahan manual, risiko ralat, jurang bukti, status kabur dan kegagalan kebolehkesanan.

BAHAN:
[Tampal peta proses]

FORMAT:
Jadual: Isu | Langkah terlibat | Bukti | Kesan | Kekerapan | Risiko | Soalan kepada pemilik proses. Susun mengikut nilai dan kebolehlaksanaan.

SEMAKAN:
Jangan terus mencadangkan aplikasi. Bezakan bukti daripada andaian.
```

## Prompt 3 — Reka proses cadangan terkawal

```text
KONTEKS:
Proses melibatkan rekod makmal, dokumen sokongan dan pengesahan pegawai.

TUGAS:
Reka proses cadangan menggunakan urutan Pencetus–Rekod–Semak–Keputusan–Tindakan–Bukti–Simpan.

BAHAN:
Peta semasa: [tampal]
Isu keutamaan: [tampal]
Peranan berkuasa: [tampal]

FORMAT:
Berikan (A) aliran bernombor, (B) jadual peraturan automatik, (C) titik semakan manusia, (D) laluan pembetulan, dan (E) pelan manual jika sistem gagal.

SEMAKAN:
Jangan benarkan AI meluluskan, mengesahkan ujian atau menetapkan rekod rasmi. Kekalkan bukti, pemilik dan jejak masa.
```

## Prompt 4 — Bina kamus medan dan status

```text
KONTEKS:
Aliran latihan mempunyai cabang KEW.PA-9 dan pengujian MCCB.

TUGAS:
Bina draf kamus data dan kamus status untuk prototaip latihan.

BAHAN:
Medan diketahui: [tampal senarai medan]
Status dicadangkan: Draf, Tidak Lengkap, Sedia Disemak, Dalam Semakan, Dikembalikan, Disahkan, Ditutup

FORMAT:
Jadual medan: Medan | Jenis | Wajib bila | Sumber | Peraturan | Boleh diedit oleh | Bukti | Sensitiviti.
Jadual status: Status | Maksud | Siapa menetapkan | Syarat masuk | Tindakan seterusnya.

SEMAKAN:
Jangan cipta nombor aset, bacaan atau identiti. Bezakan Lengkap daripada Disahkan atau Diluluskan.
```

## Prompt 5 — Matriks peranan RACI ringkas

```text
KONTEKS:
Automasi mesti mengekalkan akauntabiliti manusia.

TUGAS:
Cadangkan matriks peranan bagi Penyedia, Penguji, Penyemak Teknikal, Pelulus Aset, Penerima Aset dan Pentadbir Rekod.

BAHAN:
[Tampal aliran proses cadangan]

FORMAT:
Jadual aktiviti × peranan menggunakan R=melaksana, A=bertanggungjawab akhir, C=dirujuk dan I=dimaklumkan. Senaraikan konflik tugas atau peranan yang belum disahkan.

SEMAKAN:
Setiap aktiviti hanya mempunyai satu A. Jangan menganggap AI atau sistem sebagai pegawai bertanggungjawab.
```

## Prompt 6 — Bina kes ujian

```text
KONTEKS:
Prototaip aliran kerja perlu diuji sebelum penggunaan sebenar.

TUGAS:
Bina kes ujian bagi laluan biasa, medan wajib kosong, lampiran gagal, tarikh tidak sah, peralatan tidak dikalibrasi, rekod dikembalikan dan notifikasi gagal.

BAHAN:
Peraturan proses: [tampal]
Kamus status: [tampal]

FORMAT:
Jadual: ID ujian | Prasyarat | Input rekaan | Langkah | Hasil dijangka | Jejak audit dijangka | Penyemak | Keputusan sebenar.

SEMAKAN:
Jangan gunakan data sebenar. Pastikan sekurang-kurangnya satu ujian membuktikan sistem berhenti dengan selamat.
```

## Prompt 7 — Spesifikasi percubaan kecil

```text
KONTEKS:
Kumpulan perlu mencadangkan percubaan kecil, bukan sistem pengeluaran penuh.

TUGAS:
Ringkaskan skop percubaan automasi selama [tempoh] untuk [kumpulan pengguna].

BAHAN:
Proses: [tampal]
Masalah keutamaan: [tampal]
Kawalan: [tampal]

FORMAT:
Nyatakan objektif, dalam skop, luar skop, pengguna, data rekaan, peranan, ukuran masa/kualiti/kebolehkesanan, kriteria henti, pelan manual, bukti penerimaan dan keputusan selepas percubaan.

SEMAKAN:
Jangan menjanjikan integrasi atau kelulusan yang belum disahkan. Nyatakan semua kebergantungan.
```
