# Modul 4 — Automasi Aliran Kerja dan Pendigitalan Proses Makmal

## Maklumat sesi

- **Tarikh:** 29 Julai 2026
- **Masa:** 11.00 pagi–1.00 petang
- **Tempoh:** 120 minit
- **Platform:** platform AI generatif percuma + alat borang/hamparan yang dibenarkan
- **Prinsip:** automasi menggerakkan kerja rutin; pegawai diberi kuasa mengesahkan keputusan dan rekod rasmi

## Asas proses JKR CREaTE

Modul menggunakan empat bahan proses yang dibekalkan oleh JKR CREaTE sebagai rujukan reka bentuk:

1. Buku log aktiviti makmal bertulis tangan;
2. Aliran Sistem Pengurusan Makmal: imbas QR, pilih aktiviti, rekod, lampir bukti, tetapkan status, notifikasi dan pengesahan;
3. KEW.PA-9 bagi permohonan pergerakan atau pinjaman aset alih;
4. Datasheet ujian MCCB `F-CREaTE-ERL-TP02-01` bagi ujian pembukaan dalam keadaan beban lampau.

Semua contoh peserta menggunakan nama, nombor aset dan bacaan **rekaan**. Dokumen asal tidak dimuat naik ke platform AI pengguna.

## Hasil pembelajaran

Pada akhir modul, peserta dapat:

1. Memetakan proses semasa menggunakan pencetus, pelaku, langkah, keputusan, bukti dan hasil;
2. Mengenal pasti kelewatan, pengulangan, jurang data dan risiko dalam aliran kerja;
3. Mereka bentuk proses cadangan tanpa menghapuskan kawalan manusia;
4. Membezakan automasi berasaskan peraturan daripada bantuan AI generatif;
5. Menentukan medan wajib, status, peranan, notifikasi dan jejak audit;
6. Menguji aliran biasa, pengecualian dan kegagalan dengan data rekaan;
7. Menyediakan spesifikasi automasi kecil yang boleh dinilai sebelum dibangunkan.

## Modul 4A — Peta sebelum automasi

Gunakan urutan **Pencetus–Rekod–Semak–Keputusan–Tindakan–Bukti–Simpan**.

| Unsur | Soalan kawalan | Contoh MPE |
|---|---|---|
| Pencetus | Apakah yang memulakan proses? | Imbas QR atau permohonan pinjaman |
| Rekod | Data apa perlu dikumpul sekali sahaja? | Identiti, aktiviti, aset, tarikh dan bacaan |
| Semak | Apakah peraturan yang boleh disahkan? | Medan wajib, format ID, tarikh dan julat |
| Keputusan | Siapa mempunyai kuasa? | Pelulus aset atau penyemak ujian |
| Tindakan | Apa berlaku selepas keputusan? | Notifikasi, pembetulan atau penutupan |
| Bukti | Apa membuktikan langkah selesai? | KEW.PA-9, foto, datasheet atau tandatangan |
| Simpan | Versi mana menjadi rekod rasmi? | Rekod disahkan dalam repositori jabatan |

## Modul 4B — Automasi terkawal

Aliran sasaran latihan:

1. Pegawai mengimbas QR dan memilih aktiviti;
2. Sistem memaparkan borang khusus mengikut aktiviti;
3. Peraturan menyemak medan wajib, format dan kelengkapan bukti;
4. Rekod tidak lengkap dikembalikan kepada penyedia;
5. Rekod lengkap dihantar kepada pegawai yang ditetapkan;
6. Pegawai menyemak serta memberi keputusan;
7. Sistem menghantar notifikasi dan merekod masa, peranan serta tindakan;
8. Hanya rekod yang disahkan disimpan sebagai rekod rasmi.

## Cabang proses latihan

### Pergerakan atau pinjaman aset — KEW.PA-9

Medan penting: nombor permohonan, pemohon, jawatan, bahagian, tujuan, tempat digunakan, pengeluar, nombor siri pendaftaran, keterangan aset, tarikh dipinjam, tarikh dijangka pulang, keputusan pelulus, tarikh dipulangkan, tarikh diterima dan catatan.

### Pengujian MCCB

Medan penting: nombor rujukan ujian, butiran MCCB, keadaan kerja, faktor TCD, senarai peralatan dan kalibrasi, tetapan arus ujian, bacaan mengikut masa, masa trip, keputusan, penguji serta penyemak/pengesah. Sistem boleh menyemak kelengkapan dan formula; pegawai teknikal menentukan penerimaan keputusan.

## Bahan modul

| Bahan | Kegunaan |
|---|---|
| [Nota fasilitator](./01-Nota-Fasilitator.md) | Pelaksanaan sesi 120 minit |
| [Kandungan slaid untuk cetakan](./02-Kandungan-Slaid.md) | Sumber 23 slaid Modul 4 |
| [Pustaka prompt](./02-Pustaka-Prompt-Automasi.md) | Prompt lengkap yang boleh disalin |
| [Latihan pemetaan proses](./03-Latihan-Pemetaan-Proses.md) | Peta proses semasa dan proses cadangan |
| [Latihan automasi terkawal](./04-Latihan-Automasi-Terkawal.md) | Senario KEW.PA-9 dan MCCB menggunakan data rekaan |
| [Penilaian](./05-Penilaian.md) | Kuiz, rubrik, exit ticket dan bukti penyempurnaan |

## Had dan kawalan keselamatan

- Jangan muat naik dokumen terkawal, tandatangan, nama sebenar, nombor aset sebenar atau rekod teknikal sebenar ke platform AI pengguna.
- Gunakan data rekaan dan buang metadata yang boleh mengenal pasti individu.
- AI tidak boleh meluluskan pinjaman, mengesahkan ujian atau menentukan rekod rasmi.
- Peraturan automatik mesti boleh diterangkan, diuji dan dihentikan apabila input tidak sah.
- Setiap perubahan status mesti merekodkan masa, pelaku dan sebab.
- Sediakan laluan manual apabila internet, notifikasi atau integrasi gagal.

## Hasil akhir peserta

1. Satu peta proses semasa;
2. Satu senarai isu dan risiko;
3. Satu peta proses cadangan;
4. Satu matriks peranan dan keputusan;
5. Satu kamus medan serta status;
6. Sekurang-kurangnya tiga kes ujian termasuk satu pengecualian;
7. Satu spesifikasi percubaan kecil dengan ukuran kejayaan dan pelan sandaran.

## Video pembelajaran berdasarkan slaid Modul 4

Video berikut dijana berdasarkan kandungan slaid Modul 4. Peserta boleh menontonnya untuk mengikuti penerangan slaid secara kendiri atau mengulang kaji selepas sesi.

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/CIua_FV9pSs" title="Video pembelajaran yang dijana berdasarkan slaid Modul 4 — Automasi Aliran Kerja dan Proses Makmal" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

Jika video tidak dapat dipaparkan, [buka video Modul 4 di YouTube](https://youtu.be/CIua_FV9pSs).
