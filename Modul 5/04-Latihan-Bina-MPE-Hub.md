# Latihan Amali MPE Hub - 80 Minit

## Sasaran

Peserta menyediakan salinan MPE Hub, menghubungkannya kepada Google Apps Script, mengisi tiga modul dengan data rekaan, membuat satu perubahan serta menguji GitHub Pages.

> Latihan ini menyesuaikan templat sedia ada. Ia bukan latihan menulis keseluruhan aplikasi dari kosong.

## Sebelum pemasa dimulakan

- [ ] Akaun Google dan GitHub telah log masuk.
- [ ] Repositori MPE Hub telah disalin atau difork.
- [ ] Apps Script boleh dibuka.
- [ ] URL GitHub Pages boleh dicapai.
- [ ] Data latihan rekaan tersedia.
- [ ] Seorang pemilik akaun ditetapkan bagi setiap kumpulan.

## Aktiviti 1 - Peta medan, 15 minit

1. Buka Buku Log, KEW.PA-9 dan MCCB dalam aplikasi contoh.
2. Pilih satu medan bagi setiap kategori: wajib, pilihan, terbitan dan teknikal.
3. Bandingkan medan antaramuka dengan tab `logbook`, `asset` dan `mccb`.
4. Catat siapa mengisi, menyemak dan membetulkan setiap jenis rekod.

**Bukti:** jadual medan dan peranan ringkas.

## Aktiviti 2 - Isi tiga modul, 20 minit

Gunakan data rekaan untuk menghantar:

1. satu rekod Buku Log;
2. satu permohonan KEW.PA-9;
3. satu laporan MCCB.

Catat ID rekod selepas setiap penghantaran. Jangan gunakan nama, nombor aset, tandatangan atau bacaan sebenar.

**Bukti:** tiga ID rekod dan mesej berjaya.

## Aktiviti 3 - Semak storan, 15 minit

1. Buka Google Spreadsheet yang dicipta oleh `ensureSetup`.
2. Cari setiap ID pada tab yang betul.
3. Semak bahawa satu rekod ialah satu baris.
4. Semak senarai aset, peralatan atau bacaan JSON jika berkenaan.
5. Jika Buku Log mempunyai lampiran rekaan, semak fail dan URL dalam folder Drive.

**Bukti:** tiga baris wujud dan lampiran boleh dijejak.

## Aktiviti 4 - Ubah dan commit, 20 minit

Pilih satu perubahan kecil sahaja:

- ubah label atau arahan;
- tambah satu pilihan rekaan;
- perkemas satu mesej ralat;
- ubah satu unsur warna atau susun atur;
- tambah nota keselamatan.

Gunakan AI untuk menerangkan atau mencadangkan perubahan. Jangan berikan `config.js`, URL `/exec`, ID Google atau data sebenar kepada AI.

Selepas semakan:

1. commit perubahan dalam repositori peserta;
2. gunakan mesej yang menerangkan tujuan perubahan;
3. pastikan tiada maklumat rahsia dalam perbezaan kod.

**Bukti:** satu commit baharu.

## Aktiviti 5 - Semak GitHub Pages, 10 minit

1. Tunggu penerbitan selesai.
2. Buat hard refresh.
3. Semak perubahan muncul.
4. Hantar satu rekod ujian tambahan.
5. Pastikan dashboard dan storan masih berfungsi.

**Bukti:** URL GitHub Pages dan keputusan ujian selepas commit.

## Ujian penerimaan minimum

| ID | Senario | Hasil dijangka | Hasil sebenar | Status |
|---|---|---|---|---|
| T01 | Buka pada skrin kecil | Tiada skrol mendatar |  |  |
| T02 | Hantar Buku Log | ID, baris dan lampiran wujud |  |  |
| T03 | Hantar KEW.PA-9 | Senarai item lengkap |  |  |
| T04 | Hantar MCCB | Nilai teknikal tepat |  |  |
| T05 | Input tidak lengkap | Mesej jelas; tiada rekod separuh |  |  |
| T06 | Dashboard | Metrik sepadan dengan storan |  |  |

## Jika sesuatu gagal

| Gejala | Semakan | Tindakan |
|---|---|---|
| Dashboard luar talian | URL `/exec` dan deployment | Gunakan URL deployment terkini |
| Data tidak muncul | Execution log dan nama tab | Semak kuota, kebenaran dan struktur data |
| Lampiran gagal | Saiz, MIME dan kuota | Kecilkan fail rekaan atau semak folder |
| Pages belum berubah | Commit dan status Pages | Tunggu kemudian hard refresh |

## Checklist serahan

- [ ] URL aplikasi dan dokumentasi boleh dibuka.
- [ ] Tiga rekod rekaan wujud dalam storan yang betul.
- [ ] Repositori mempunyai satu commit perubahan peserta.
- [ ] Apps Script menggunakan deployment terkini.
- [ ] Google Sheets dan Drive dimiliki akaun kumpulan yang sesuai.
- [ ] Tiada ID, URL peribadi atau data sebenar dihantar kepada AI.
- [ ] Sandaran dan pentadbir kedua dikenal pasti.
- [ ] Batasan prototaip diterangkan.
