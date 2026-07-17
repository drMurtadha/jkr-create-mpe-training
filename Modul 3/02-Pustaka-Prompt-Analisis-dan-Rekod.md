# Pustaka Prompt — Analisis Data dan Rekod Teknikal

Tekan **Salin prompt** pada portal web. Gantikan kandungan dalam kurungan siku. Semua prompt menggunakan K–T–B–F–S: **Konteks, Tugas, Bahan, Format dan Semakan**.

## Buka platform percuma

- [ChatGPT](https://chatgpt.com/)
- [Google Gemini](https://gemini.google.com/app)
- [Claude](https://claude.ai/new)

> Gunakan data kerajaan terbuka atau data latihan rekaan sahaja. Jika muat naik CSV tidak tersedia, tampal sampel data sebagai teks.

## Prompt 1 — Rancang analisis secara sistematik

```text
KONTEKS:
Anda membantu merancang analisis bagi dataset kerajaan terbuka atau data latihan rekaan. Anda belum diminta membuat kesimpulan.

TUGAS:
Bina pelan kerja mengikut tujuh langkah: Tanya, Kenal, Semak, Bersih, Analisis, Sah dan Rekod.

BAHAN:
Tujuan kerja: [nyatakan tujuan]
Pengguna hasil: [nyatakan pengguna]
Keputusan yang hendak disokong: [nyatakan keputusan]
Penerangan dataset: [tampal metadata atau penerangan]

FORMAT:
Hasilkan jadual dengan lajur Langkah | Soalan yang perlu dijawab | Tindakan | Bukti/hasil | Semakan manusia. Akhiri dengan tiga soalan penjelasan yang paling kritikal.

SEMAKAN:
Jangan analisis atau membuat kesimpulan sebelum soalan, skop, unit, tempoh dan sumber jelas. Jangan mereka maklumat dataset.
```

## Prompt 2 — Bina kamus data

```text
KONTEKS:
Dataset berikut akan digunakan untuk latihan analisis. Nama lajur sahaja tidak mencukupi untuk menentukan maksudnya.

TUGAS:
Bina draf kamus data dan tandakan definisi yang perlu disahkan.

BAHAN:
Metadata sumber: [tampal metadata]
Tajuk lajur dan 10 baris sampel: [tampal di sini]

FORMAT:
Jadual: Lajur | Maksud | Jenis data | Unit/format | Nilai dibenarkan | Boleh kosong? | Sumber definisi | Perlu pengesahan. Selepas jadual, senaraikan risiko salah tafsir.

SEMAKAN:
Bezakan fakta daripada metadata dengan inferens berdasarkan sampel. Label inferens sebagai [ANDAIAN—PERLU PENGESAHAN]. Jangan cipta unit atau kod kategori.
```

## Prompt 3 — Profil kualiti data

```text
KONTEKS:
Anda ialah pembantu audit kualiti data. Dataset belum dianggap bersih.

TUGAS:
Periksa kelengkapan, kesahan, konsistensi, keunikan, ketepatan masa dan kebolehkesanan.

BAHAN:
[Muat naik CSV atau tampal data]
Kamus data: [tampal jika tersedia]

FORMAT:
Berikan (A) ringkasan bilangan baris/lajur, (B) jadual isu dengan Kategori | Lajur/baris | Nilai asal | Sebab | Tahap risiko | Tindakan cadangan, dan (C) semakan yang tidak boleh dibuat tanpa sumber tambahan.

SEMAKAN:
Jangan ubah data. Jangan anggap kosong sebagai sifar. Nyatakan kaedah mengesan pendua dan nilai luar biasa. Petik nombor baris atau nilai bukti bagi setiap isu.
```

## Prompt 4 — Pelan pembersihan dan log perubahan

```text
KONTEKS:
Laporan kualiti data telah dihasilkan tetapi data sumber mesti dikekalkan tanpa perubahan.

TUGAS:
Cadangkan peraturan pembersihan yang boleh diaudit dan bina log perubahan.

BAHAN:
Laporan kualiti: [tampal laporan]
Kamus data: [tampal kamus]

FORMAT:
Jadual 1: Isu | Peraturan pembetulan | Automatik/Manual | Risiko | Penyemak.
Jadual 2: ID perubahan | Baris/rekod | Nilai asal | Nilai cadangan | Sebab | Sumber autoritatif | Status kelulusan.

SEMAKAN:
Jangan memadam rekod, menggantikan nilai atau mengisi data hilang tanpa peraturan dan bukti. Gunakan [RUJUK PEMILIK REKOD] apabila pembetulan tidak dapat ditentukan.
```

## Prompt 5 — Analisis deskriptif yang boleh disemak

```text
KONTEKS:
Gunakan hanya dataset kerja yang telah melalui semakan kualiti. Analisis bertujuan menyokong soalan berikut, bukan mencari “insight” secara umum.

TUGAS:
Jawab soalan analisis dan tunjukkan kaedah serta pengiraan.

BAHAN:
Soalan analisis: [nyatakan soalan]
Dataset kerja: [muat naik atau tampal]
Definisi lajur/unit: [tampal]

FORMAT:
1. Kaedah dan penapis yang digunakan.
2. Jadual ringkasan dengan nilai, unit dan tempoh.
3. Pengiraan utama atau formula yang boleh disemak.
4. Pemerhatian yang disokong data.
5. Batasan dan data tambahan yang diperlukan.

SEMAKAN:
Bezakan pemerhatian daripada tafsiran. Jangan mendakwa sebab-akibat. Jangan bundarkan angka secara berlebihan. Jika pengiraan tidak dapat dibuat, jelaskan sebab dan jangan meneka.
```

## Prompt 6 — Cadangkan carta yang jujur

```text
KONTEKS:
Carta mesti menjawab satu soalan kerja dan tidak boleh mengelirukan pembaca.

TUGAS:
Cadangkan satu carta utama dan, jika perlu, satu carta sokongan.

BAHAN:
Soalan analisis: [tampal]
Jadual ringkasan: [tampal]

FORMAT:
Nyatakan jenis carta, paksi X/Y, unit, siri, penapis, tajuk berbentuk mesej neutral dan sebab pemilihan. Berikan jadual data tepat yang akan diplot serta teks alternatif untuk aksesibiliti.

SEMAKAN:
Jangan potong paksi untuk membesar-besarkan perbezaan. Jangan gunakan carta pai untuk terlalu banyak kategori. Nyatakan data sementara, hilang atau dikecualikan. Jangan cipta nilai antara titik data.
```

## Prompt 7 — Audit pengiraan dan dakwaan

```text
KONTEKS:
Anda menyemak hasil analisis sebelum dibentangkan kepada pegawai.

TUGAS:
Audit setiap angka dan dakwaan terhadap data serta kaedah.

BAHAN:
Data/jadual sumber: [tampal]
Kaedah dan formula: [tampal]
Dapatan atau naratif: [tampal]

FORMAT:
Jadual: Dakwaan | Status (Disokong/Tidak disokong/Perlu pengesahan) | Pengiraan/bukti | Isu | Pembetulan. Akhiri dengan keputusan: Belum sedia / Sedia untuk semakan pegawai.

SEMAKAN:
Semak tempoh, unit, penyebut, penapis dan pembundaran. Jangan memberikan status Diluluskan. Hanya pegawai berkuasa boleh menerima analisis sebagai rekod rasmi.
```

## Prompt 8 — Audit rekod teknikal

```text
KONTEKS:
Rekod berikut ialah data latihan rekaan yang menyerupai rekod aset, log makmal dan keputusan ujian.

TUGAS:
Kenal pasti isu rekod serta jurang kebolehkesanan tanpa membetulkan data dahulu.

BAHAN:
[Muat naik atau tampal rekod teknikal]

FORMAT:
Jadual: ID isu | Baris/ID rekod | Jenis isu | Bukti | Kesan operasi/audit | Sumber yang perlu dirujuk | Tindakan. Kelaskan isu kepada identiti, tarikh, unit, status, pendua, bukti, versi atau pemilik.

SEMAKAN:
Jangan menganggap dua rekod merujuk aset sama hanya kerana namanya serupa. Jangan mencipta ID, keputusan ujian, status kelulusan atau pemilik.
```

## Prompt 9 — Bina daftar rekod teknikal

```text
KONTEKS:
Daftar ini mengawal rekod latihan; ia bukan bukti bahawa rekod telah disahkan atau diluluskan.

TUGAS:
Susun rekod kepada daftar yang boleh dijejak.

BAHAN:
Rekod yang telah disemak manusia: [tampal]

FORMAT:
CSV dalam satu blok kod dengan tajuk tepat:
ID_Rekod,Jenis_Rekod,ID_Aset,Tarikh_Rekod,Sumber,Versi,Status,Pemilik,Penyemak,Lokasi_Rasmi,Catatan

SEMAKAN:
Gunakan [PERLU PENGESAHAN] bagi nilai tiada. Jangan cipta laluan fail, versi, pemilik atau status. Bezakan Draf, Dalam Semakan, Disahkan dan Diluluskan.
```

## Prompt 10 — Semakan pakej rekod sebelum simpanan rasmi

```text
KONTEKS:
Pakej mengandungi data sumber, data kerja, log perubahan, analisis dan visual. Ia akan diperiksa manusia sebelum disimpan dalam sistem rekod rasmi.

TUGAS:
Semak kelengkapan, kebolehhasilan semula dan kawalan rekod.

BAHAN:
Senarai fail dan metadata: [tampal]
Ringkasan analisis: [tampal]

FORMAT:
Senarai semak Lulus/Gagal/Perlu pengesahan bagi: sumber, lesen/kebenaran, kamus data, kualiti, log perubahan, formula, carta, batasan, nama fail, versi, pemilik, penyemak, status dan lokasi rasmi. Senaraikan tindakan sebelum penutupan.

SEMAKAN:
Sejarah chat bukan rekod rasmi. Jangan menyatakan pakej diluluskan. Jangan cadangkan menyimpan maklumat sensitif dalam platform AI.
```
