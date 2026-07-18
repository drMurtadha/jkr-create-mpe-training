# Latihan — Automasi Terkawal KEW.PA-9 dan MCCB

Semua nama, nombor aset dan bacaan di bawah ialah rekaan.

## Laluan A — Pergerakan atau pinjaman aset

### Data latihan

| Medan | Nilai rekaan |
|---|---|
| Pemohon | Peserta A |
| Jawatan/Bahagian | Juruteknik / MPE |
| Tujuan | Demonstrasi ujian di ruang latihan |
| Tempat digunakan | Makmal Latihan B |
| No. siri pendaftaran | MPE-LAT-014 |
| Keterangan aset | Digital clamp meter latihan |
| Tarikh dipinjam | 2026-07-29 |
| Dijangka pulang | 2026-07-29 |
| Status awal | Draf |

### Peraturan yang perlu direka

- aset, tujuan dan tarikh wajib diisi;
- tarikh dijangka pulang tidak boleh lebih awal daripada tarikh dipinjam;
- hanya pelulus aset boleh memberi keputusan;
- pemulangan memerlukan tarikh dipulangkan dan penerima;
- perubahan status merekod masa dan pelaku.

## Laluan B — Pengujian MCCB

### Data latihan

| Medan | Nilai rekaan |
|---|---|
| No. rujukan ujian | LAT-MCCB-004 |
| Jenama/model | Contoh X / Model 100 |
| Arus terkadar | 100 A |
| Suhu ambien mula/akhir | 28°C / 29°C |
| Faktor TCD | 0.98 |
| Status kalibrasi clamp meter | Ya |
| Fungsi peralatan | Ya |
| Tetapan ujian | 1.30 × arus pada suhu ujian |
| Masa trip | 42 minit |
| Status awal | Sedia Disemak |

### Peraturan yang perlu direka

- medan peralatan, kalibrasi, bacaan dan masa wajib;
- formula arus ujian dipaparkan untuk semakan;
- sistem memberi amaran jika kalibrasi “Tidak” atau kosong;
- keputusan automatik hanya cadangan semakan, bukan pengesahan teknikal;
- penguji dan penyemak/pengesah mesti individu atau peranan berasingan.

## Kes ujian minimum

Lengkapkan hasil sebenar dan status. Ruang ini disimpan secara automatik pada peranti dan boleh dieksport sebagai CSV.

| ID | Senario | Hasil dijangka | Hasil sebenar | Status |
|---|---|---|---|---|
| UAT-01 | Laluan biasa yang lengkap | Rekod disimpan sekali dengan ID, status dan bukti lengkap |  |  |
| UAT-02 | Tarikh pulang lebih awal daripada tarikh pinjam | Penghantaran disekat dan ralat tarikh diterangkan |  |  |
| UAT-03 | Lampiran bukti tiada | Rekod tidak dilengkapkan tanpa bukti wajib |  |  |
| UAT-04 | Status kalibrasi peralatan tiada | Amaran dipaparkan dan pengesahan teknikal disekat |  |  |
| UAT-05 | Notifikasi gagal dihantar | Rekod kekal boleh dijejak dan laluan cuba semula/manual ditunjukkan |  |  |
| UAT-06 | Penyemak mengembalikan rekod dengan sebab | Status, sebab, masa dan pelaku direkodkan |  |  |

## Hasil kumpulan

- kamus medan;
- kamus status;
- matriks peranan;
- enam kes ujian;
- spesifikasi percubaan kecil;
- pelan manual ketika sistem gagal.
