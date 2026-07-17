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

1. Laluan biasa yang lengkap.
2. Tarikh pulang lebih awal daripada tarikh pinjam.
3. Lampiran bukti tiada.
4. Peralatan ujian tidak mempunyai status kalibrasi.
5. Notifikasi gagal dihantar.
6. Penyemak mengembalikan rekod dengan sebab.

## Hasil kumpulan

- kamus medan;
- kamus status;
- matriks peranan;
- enam kes ujian;
- spesifikasi percubaan kecil;
- pelan manual ketika sistem gagal.
