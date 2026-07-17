# Modul 5 - Siapkan dan Sesuaikan MPE Hub

- **Tarikh:** 29 Julai 2026
- **Masa:** 2.30-4.30 petang
- **Tempoh keseluruhan:** 120 minit
- **Latihan amali utama:** 80 minit
- **Kaedah:** salin templat, konfigurasi akaun, isi tiga modul, uji, ubah dan terbit
- **Platform:** AI generatif percuma, GitHub Pages, Google Apps Script, Google Sheets dan Google Drive

Modul ini menyepadukan hasil Modul 1-4 dengan membimbing peserta menyediakan salinan **MPE Hub** sedia ada. Peserta tidak menulis aplikasi lengkap dari halaman kosong. Mereka menghubungkan salinan aplikasi kepada storan Google sendiri, memasukkan data rekaan bagi Buku Log, KEW.PA-9 dan MCCB, membuat satu perubahan dengan bantuan AI serta menguji penerbitan GitHub Pages.

## Hasil akhir peserta

1. satu salinan repositori MPE Hub dalam akaun GitHub kumpulan;
2. satu URL aplikasi melalui GitHub Pages;
3. satu Google Apps Script Web App sebagai API;
4. satu Google Spreadsheet dengan tab `logbook`, `asset` dan `mccb`;
5. satu folder Google Drive bagi lampiran latihan;
6. sekurang-kurangnya satu rekod rekaan bagi setiap modul;
7. satu perubahan antaramuka atau medan yang dicadangkan dengan AI;
8. keputusan ujian penerimaan dan checklist serahan.

## Seni bina yang digunakan

```text
Pengguna
   -> GitHub Pages (HTML, CSS, JavaScript)
      -> Google Apps Script Web API (GET/POST)
         -> Google Sheets (data)
         -> Google Drive (lampiran)
```

Kredensial Google tidak diletakkan dalam kod pelayar. Namun endpoint yang boleh dicapai oleh sesiapa masih memerlukan kawalan tambahan dan hanya digunakan dengan data rekaan semasa latihan.

## Prasyarat wajib

### Akaun dan akses

- [ ] Akaun Google aktif.
- [ ] Boleh membuka Google Drive dan Google Sheets.
- [ ] Boleh membuka dan menjalankan Google Apps Script.
- [ ] Akaun organisasi membenarkan penerbitan Apps Script Web App.
- [ ] Akaun GitHub aktif.
- [ ] Boleh mencipta atau menyalin repositori.
- [ ] Boleh mengaktifkan GitHub Pages.
- [ ] Sudah log masuk ke Google, GitHub dan satu platform AI percuma.

### Peralatan

- [ ] Komputer riba dengan pelayar moden.
- [ ] Sambungan internet stabil.
- [ ] Akses kepada `github.com`, `script.google.com` dan Google Drive melalui rangkaian latihan.
- [ ] Data latihan rekaan; tiada data operasi sebenar.

### Bahan yang perlu dibuka

- [Aplikasi MPE Hub](https://drmurtadha.github.io/mpe-hub/)
- [Dokumentasi lengkap MPE Hub](https://drmurtadha.github.io/mpe-hub/docs.html)
- [Repositori templat MPE Hub](https://github.com/drMurtadha/mpe-hub)
- [Nota PDF](https://drmurtadha.github.io/mpe-hub/downloads/Nota_Latihan_MPE_Hub.pdf)
- [Slaid PPTX](https://drmurtadha.github.io/mpe-hub/downloads/Slaid_Latihan_MPE_Hub.pptx)

## Sambungan Modul 1-5

| Modul | Sumbangan kepada MPE Hub |
|---|---|
| 1 | Masalah, pengguna dan peluang produktiviti |
| 2 | Struktur dokumen dan semakan manusia |
| 3 | Medan data, analisis dan kawalan rekod |
| 4 | Aliran kerja, status, peranan dan pengecualian |
| 5 | Konfigurasi, pengujian dan penerbitan MPE Hub |

## Aliran sesi 120 minit

| Minit | Aktiviti | Hasil |
|---|---|---|
| 0-15 | Semak prasyarat dan demonstrasi seni bina | Akaun serta bahan tersedia |
| 15-95 | Latihan amali mengikut dokumentasi MPE Hub | Aplikasi, storan dan perubahan diuji |
| 95-105 | Audit keselamatan dan checklist serahan | Kawalan disahkan |
| 105-115 | Demonstrasi kumpulan | Bukti hasil |
| 115-120 | Kuiz dan exit ticket | Penilaian akhir |

## Pecahan latihan amali 80 minit

| Masa | Aktiviti |
|---|---|
| 15 minit | Peta medan |
| 20 minit | Isi Buku Log, KEW.PA-9 dan MCCB |
| 15 minit | Semak Google Sheets dan Google Drive |
| 20 minit | Buat satu perubahan dan commit |
| 10 minit | Semak GitHub Pages |

## Bahan Modul 5

| Bahan | Kegunaan |
|---|---|
| [Nota fasilitator](./01-Nota-Fasilitator.md) | Pelaksanaan sesi dan laluan sandaran |
| [Kandungan slaid untuk cetakan](./02-Kandungan-Slaid.md) | Sumber slaid Modul 5 |
| [Kit persediaan dan prompt](./03-Kit-Binaan-dan-Pustaka-Prompt.md) | Prasyarat, konfigurasi dan prompt bantuan AI |
| [Latihan MPE Hub](./04-Latihan-Bina-MPE-Hub.md) | Arahan amali 80 minit |
| [Penilaian akhir](./05-Penilaian-Akhir.md) | Kuiz, rubrik, exit ticket dan penilaian program |

## Had dan kawalan keselamatan

- Gunakan data rekaan sahaja.
- Jangan masukkan nama, nombor aset, tandatangan, rekod atau lampiran sebenar.
- Jangan tampal URL deployment, ID Google, token atau maklumat akaun ke platform AI.
- Kod GitHub Pages boleh dilihat umum.
- Google Sheets dan folder Drive hendaklah kekal private atau terhad kepada kumpulan.
- Endpoint Apps Script `Anyone` tidak sesuai untuk data sensitif tanpa autentikasi dan kawalan tambahan.
- MPE Hub latihan bukan sistem pengeluaran atau repositori rasmi jabatan.

## Penilaian akhir program

### Maklum balas peserta

<div class="final-evaluation" data-final-evaluation="participant"></div>

### Ringkasan penilaian fasilitator

<div class="final-evaluation" data-final-evaluation="facilitator"></div>
