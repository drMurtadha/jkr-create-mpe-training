# Kawalan Rekod dan Semakan Manusia

## Prinsip utama

AI generatif ialah ruang menyediakan draf. Ia bukan sistem rekod rasmi, bukan pihak berkuasa melulus dan bukan tempat simpanan muktamad dokumen kerajaan.

## Had dan kawalan keselamatan maklumat sebelum menggunakan AI

| Warna | Contoh | Tindakan latihan |
|---|---|---|
| Hijau | Data rekaan, kandungan awam, templat kosong | Boleh digunakan mengikut dasar jabatan |
| Kuning | Data dalaman, data peribadi, maklumat operasi sebenar | Berhenti dan dapatkan pengesahan dasar/pegawai keselamatan |
| Merah | Rahsia Besar, Rahsia, Sulit, Terhad; kata laluan; data sensitif | Jangan masukkan ke platform AI awam |

Status “tidak terperingkat” bukan lesen automatik untuk memuat naik semua maklumat. Semak juga privasi, sensitiviti operasi, hak akses dan arahan jabatan.

## Enam semakan wajib

1. **Fakta** — setiap nama, angka, tarikh dan keputusan mempunyai sumber.
2. **Format** — struktur mematuhi templat serta tatacara jabatan.
3. **Bahasa** — maksud, kuasa dan tahap komitmen tidak berubah.
4. **Keselamatan** — tiada maklumat yang tidak dibenarkan dihantar kepada platform.
5. **Kuasa** — pegawai yang betul menyemak, melulus dan menandatangani.
6. **Rekod** — versi akhir didaftar dan disimpan dalam sistem/lokasi rasmi.

## Aliran kerja terkawal

```text
Fakta disahkan → Saringan maklumat → Draf AI → Audit terhadap sumber
→ Semakan manusia → Kelulusan/edaran mengikut kuasa → Pendaftaran rekod rasmi
```

## Penamaan versi

Gunakan pola yang mudah dijejak:

```text
SIMULASI_[Jenis]_[Topik]_[Status]_vNN_YYYYMMDD.ext
```

Contoh:

- `SIMULASI_Surat-Kalibrasi_DRAF_v01_20260728.md`
- `SIMULASI_Surat-Kalibrasi_SEMAKAN_v02_20260728.docx`
- `SIMULASI_Minit-Operasi_DRAF_v01_20260728.md`

Jangan gunakan nama seperti `final_baru_latest2.docx`.

## Metadata minimum rekod kerja

| Medan | Contoh simulasi |
|---|---|
| Tajuk | Permohonan pengesahan lawatan kalibrasi |
| Pemilik dokumen | Unit Operasi Makmal |
| Sumber fakta | Lembaran Fakta Surat v01 |
| Status | DRAF / SEMAKAN / DILULUSKAN |
| Versi | v01 |
| Tarikh | 2026-07-28 |
| Penyemak | [PERLU PENGESAHAN] |
| Lokasi rekod rasmi | [SISTEM/FAIL RASMI JABATAN] |
| Catatan penggunaan AI | Platform dan tujuan draf, jika dikehendaki dasar jabatan |

## Jika data sebenar tersalah dimasukkan

1. Hentikan interaksi dan jangan salin atau sebarkan respons.
2. Catat platform, masa, jenis maklumat dan akaun yang digunakan tanpa memperluas pendedahan.
3. Ikut prosedur insiden jabatan serta hubungi pegawai keselamatan/penyelia yang berkaitan.
4. Gunakan kawalan privasi atau fungsi pemadaman platform jika diarahkan.
5. Jangan cuba “menutup” insiden dengan hanya memadam sejarah tempatan.

## Senarai semak serahan

- [ ] Dokumen masih bertanda DRAF sehingga diluluskan.
- [ ] Semua fakta telah dipadankan dengan sumber.
- [ ] Tiada fakta atau kuasa rekaan AI.
- [ ] Medan belum lengkap ditanda `[PERLU PENGESAHAN]`.
- [ ] Semakan format dan bahasa telah dibuat.
- [ ] Penyemak dan pelulus mempunyai kuasa.
- [ ] Versi, tarikh dan pemilik dokumen direkodkan.
- [ ] Rekod akhir disimpan dalam sistem rasmi, bukan dalam sejarah chat.

## Rujukan rasmi

- [MyPPSM — elemen surat rasmi kerajaan](https://docs.jpa.gov.my/docs/myppsm/PPSM/PO/Pentadbiran-dan-Pengurusan-Pejabat/53/)
- [Arkib Negara Malaysia — Panduan Pengurusan Rekod Sektor Awam](https://www.arkib.gov.my/images/akta-pekeliling-garis-panduan/Panduan%20Pengurusan%20Rekod%20Sektor%20Awam.pdf)
- [CGSO — pengurusan dan pengendalian rahsia rasmi](https://www.cgso.gov.my/wp-content/uploads/2024/09/SPA-8-TAHUN-2024-GARIS-PANDUAN-PENGURUSAN-DAN-PENGENDALIAN-RAHSIA-RASMI-DALAM-PERKHIDMATAN-AWAM.pdf)
