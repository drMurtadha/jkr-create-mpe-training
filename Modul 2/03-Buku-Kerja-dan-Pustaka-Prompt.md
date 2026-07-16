# Buku Kerja dan Pustaka Prompt

Halaman ini boleh digunakan terus semasa latihan. Di GitHub, tekan ikon salin pada penjuru blok kod. Di portal web, tekan **Salin prompt**.

## Buka platform AI generatif

- [Buka ChatGPT](https://chatgpt.com/)
- [Buka Google Gemini](https://gemini.google.com/app)
- [Buka Claude](https://claude.ai/new)

> Gunakan hanya data latihan rekaan dan tidak terperingkat. Jangan masukkan dokumen sebenar, data peribadi, kata laluan, nombor pengenalan, maklumat kontrak sensitif atau apa-apa bahan berlabel Rahsia Besar, Rahsia, Sulit atau Terhad.

## Formula K–T–B–F–S

| Unsur | Maksud | Soalan panduan |
|---|---|---|
| K | Konteks | Siapa penulis, penerima dan tujuan? |
| T | Tugas | Apakah hasil yang perlu dijana? |
| B | Bahan | Fakta sah apa yang boleh digunakan? |
| F | Format | Apakah struktur dan gaya keluaran? |
| S | Semakan | Apakah larangan dan pemeriksaan wajib? |

## Prompt 1 — Draf surat rasmi

```text
KONTEKS:
Anda membantu menyediakan DRAF surat rasmi kerajaan berdasarkan data latihan rekaan dan tidak terperingkat.

TUGAS:
Sediakan draf surat rasmi untuk tujuan yang dinyatakan dalam BAHAN.

BAHAN:
[Tampal lembaran fakta yang diluluskan di sini]

FORMAT:
Susun sebagai: nombor rujukan, tarikh, penerima, sapaan, tajuk huruf besar, perenggan bernombor, penutup, blok tandatangan bertanda DRAF dan senarai s.k. jika diberikan. Gunakan Bahasa Melayu rasmi, jelas dan ringkas.

SEMAKAN:
Gunakan fakta yang diberikan sahaja. Jangan mereka nama, jawatan, tarikh, nombor rujukan, keputusan atau komitmen. Jika maklumat penting tiada, tulis [PERLU PENGESAHAN]. Jangan gambarkan draf ini sebagai telah diluluskan atau dihantar. Akhiri dengan senarai maklumat yang masih perlu disahkan manusia.
```

## Prompt 2 — Audit fakta surat

```text
KONTEKS:
Anda ialah pembantu semakan. Ini ialah data latihan rekaan dan tidak terperingkat.

TUGAS:
Bandingkan DRAF SURAT dengan FAKTA SUMBER. Jangan tulis semula surat dahulu.

FAKTA SUMBER:
[Tampal lembaran fakta]

DRAF SURAT:
[Tampal draf]

FORMAT:
Hasilkan jadual dengan lajur: Pernyataan dalam draf | Status (Disokong/Tidak disokong/Perlu pengesahan) | Bukti daripada fakta sumber | Cadangan pembetulan. Selepas jadual, senaraikan fakta sumber yang tertinggal.

SEMAKAN:
Anggap setiap butiran yang tiada dalam fakta sumber sebagai tidak disokong. Jangan membuat andaian dan jangan menambah fakta baharu.
```

## Prompt 3 — Baiki surat selepas audit

```text
KONTEKS:
Ini ialah draf latihan bagi dokumen tidak terperingkat.

TUGAS:
Baiki DRAF SURAT berdasarkan LAPORAN AUDIT sahaja.

DRAF SURAT:
[Tampal draf]

LAPORAN AUDIT:
[Tampal jadual audit yang telah disemak manusia]

FORMAT:
Kekalkan struktur surat rasmi. Tandakan maklumat belum pasti dengan [PERLU PENGESAHAN]. Selepas surat, berikan log perubahan ringkas.

SEMAKAN:
Jangan menambah fakta, keputusan, penerima, pemilik tindakan atau tarikh baharu. Keluaran kekal DRAF dan mesti disemak serta diluluskan pegawai berkuasa.
```

## Prompt 4 — Ringkaskan bahasa tanpa mengubah fakta

```text
KONTEKS:
Teks berikut ialah draf latihan tidak terperingkat.

TUGAS:
Perkemas bahasa supaya rasmi, mudah difahami dan tidak berulang.

TEKS:
[Tampal perenggan]

FORMAT:
Berikan (A) versi diperkemas dan (B) senarai perubahan bahasa.

SEMAKAN:
Jangan mengubah fakta, maksud, skop, tahap komitmen, tarikh atau angka. Jika ayat kabur, tandakan [PERLU PENGESAHAN] dan jangan meneka.
```

## Prompt 5 — Draf minit dan tindakan

```text
KONTEKS:
Anda membantu menstruktur catatan mesyuarat latihan yang rekaan dan tidak terperingkat. Catatan mungkin tidak lengkap.

TUGAS:
Hasilkan DRAF minit mesyuarat dan daftar tindakan menggunakan CATATAN SUMBER sahaja.

CATATAN SUMBER:
[Tampal catatan mesyuarat]

FORMAT:
Bahagian 1: maklumat mesyuarat, kehadiran, agenda, perbincangan dan keputusan.
Bahagian 2: jadual tindakan dengan lajur ID | Tindakan | Pemilik | Tarikh sasaran | Status | Bukti sumber.

SEMAKAN:
Bezakan perbincangan, keputusan dan tindakan. Jangan mereka keputusan, pemilik atau tarikh. Gunakan [PERLU PENGESAHAN] apabila catatan tidak jelas. Jangan tukar cadangan kepada keputusan. Keluaran mesti dilabel DRAF.
```

## Prompt 6 — Audit minit

```text
KONTEKS:
Ini ialah semakan minit latihan tidak terperingkat.

TUGAS:
Audit DRAF MINIT terhadap CATATAN SUMBER.

CATATAN SUMBER:
[Tampal catatan asal]

DRAF MINIT:
[Tampal draf minit]

FORMAT:
Senaraikan: (1) keputusan yang disokong, (2) dakwaan yang tidak disokong, (3) tindakan tanpa pemilik/tarikh yang sah, (4) perkara tertinggal, dan (5) soalan pengesahan kepada urus setia.

SEMAKAN:
Petik bukti ringkas daripada catatan bagi setiap penemuan. Jangan membetulkan dengan fakta rekaan.
```

## Prompt 7 — Daftar tindakan dalam CSV

```text
KONTEKS:
Gunakan hanya minit latihan yang telah disahkan manusia.

TUGAS:
Tukarkan bahagian tindakan kepada CSV.

MINIT DISAHKAN:
[Tampal bahagian tindakan]

FORMAT:
Gunakan tepat tajuk lajur berikut:
ID,Tindakan,Pemilik,Tarikh Sasaran,Status,Rujukan Minit
Letakkan keseluruhan CSV dalam satu blok kod dan jangan tambah ulasan di dalam blok.

SEMAKAN:
Jangan mereka nilai yang tiada. Gunakan [PERLU PENGESAHAN] dalam sel berkaitan.
```

## Prompt 8 — Banding dua draf

```text
KONTEKS:
Draf A dan Draf B dihasilkan daripada fakta latihan yang sama menggunakan dua platform AI.

TUGAS:
Bandingkan kedua-dua draf tanpa menganggap mana-mana platform sentiasa lebih baik.

FAKTA SUMBER:
[Tampal fakta]

DRAF A:
[Tampal draf A]

DRAF B:
[Tampal draf B]

FORMAT:
Beri skor 0–2 untuk setiap kriteria: ketepatan fakta, kelengkapan, format rasmi, kejelasan bahasa dan keselamatan/ketelusan. Sertakan bukti serta risiko utama. Cadangkan unsur terbaik untuk draf gabungan, bukan terus menggabungkannya.

SEMAKAN:
Fakta sumber ialah rujukan utama. Gaya penulisan tidak boleh mengatasi ketepatan fakta.
```

## Prompt 9 — Semakan akhir sebelum kelulusan

```text
KONTEKS:
Dokumen ini masih DRAF dan akan diperiksa pegawai berkuasa.

TUGAS:
Jalankan semakan pra-kelulusan tanpa menulis semula dokumen.

DOKUMEN:
[Tampal draf latihan]

FORMAT:
Hasilkan senarai semak Lulus/Gagal/Perlu pengesahan bagi: fakta, penerima, nombor rujukan, tarikh, kuasa/komitmen, format, bahasa, lampiran, keselamatan maklumat, pemilik tindakan, kawalan versi dan lokasi simpanan rasmi. Akhiri dengan keputusan: Belum sedia / Sedia untuk semakan pegawai.

SEMAKAN:
Jangan memberi status Diluluskan. Hanya manusia yang diberi kuasa boleh meluluskan, menandatangani, menghantar atau mendaftarkan dokumen.
```

## Prompt 10 — Bina templat tanpa mendedahkan dokumen sebenar

```text
KONTEKS:
Saya mahu templat generik bagi dokumen rasmi tidak terperingkat. Jangan minta atau gunakan dokumen sebenar.

TUGAS:
Bina templat dengan medan tempat letak untuk surat rasmi berkaitan [nyatakan tujuan umum].

FORMAT:
Gunakan medan seperti [NOMBOR RUJUKAN], [TARIKH], [NAMA PENERIMA], [FAKTA DISAHKAN] dan [PEGAWAI PELULUS]. Sertakan senarai fakta minimum yang perlu dikumpul sebelum draf dijana.

SEMAKAN:
Jangan cipta contoh yang kelihatan seperti rekod sebenar. Letakkan amaran bahawa hanya data rekaan atau data yang diluluskan untuk platform tersebut boleh digunakan.
```

## Catatan perbandingan kumpulan

| Perkara | Platform A | Platform B | Keputusan kumpulan |
|---|---|---|---|
| Fakta tepat |  |  |  |
| Tiada fakta rekaan |  |  |  |
| Format sesuai |  |  |  |
| Bahasa jelas |  |  |  |
| Mudah disemak |  |  |  |

