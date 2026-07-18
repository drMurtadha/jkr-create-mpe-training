# GitHub Asas dan Kerja Berpasukan

## Tujuan aktiviti

Aktiviti 30 minit ini menyediakan peserta untuk bekerja sebagai satu pasukan projek dalam Modul 5. Bagi sembilan peserta, bentuk **tiga kumpulan yang terdiri daripada tiga orang**. Setiap kumpulan menggunakan satu repositori latihan dan semua ahli mesti melakukan sekurang-kurangnya satu tindakan di GitHub.

> GitHub menyimpan sejarah perubahan projek. Ia bukan storan bagi kata laluan, token, URL deployment, ID Google atau data operasi sebenar.

## Hasil akhir

Setiap kumpulan perlu mempunyai:

- satu repositori latihan;
- seorang ketua projek dan dua ahli yang telah menerima jemputan;
- sekurang-kurangnya satu branch selain `main`;
- satu commit daripada ahli;
- satu pull request yang disemak;
- satu perubahan yang telah dimerge ke `main`.

## Sebelum bengkel

Setiap peserta perlu:

1. [mencipta akaun GitHub](https://github.com/signup);
2. mengesahkan alamat e-mel;
3. mengaktifkan pengesahan dua faktor atau passkey jika dibenarkan;
4. mencatat **username GitHub** sendiri;
5. memastikan boleh log masuk tanpa berkongsi kata laluan atau kod pemulihan.

Rujukan rasmi: [Mencipta akaun GitHub](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) dan [Bermula dengan akaun GitHub](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account).

## Kenali istilah asas

| Istilah | Maksud mudah | Contoh dalam latihan |
|---|---|---|
| Repository | Folder projek dan sejarahnya | `mpe-hub-kumpulan-1` |
| Branch | Ruang kerja berasingan | `ali-kemas-kini-readme` |
| Commit | Rekod satu set perubahan | `Tambah peranan kumpulan` |
| Push | Menghantar commit ke GitHub | Branch muncul dalam repositori |
| Pull request (PR) | Permintaan menyemak perubahan | Ahli meminta ketua menyemak |
| Review | Semakan sebelum perubahan diterima | Komen atau kelulusan |
| Merge | Memasukkan perubahan ke `main` | PR ditutup sebagai `Merged` |
| GitHub Actions | Kerja automatik selepas perubahan | Membina portal |
| GitHub Pages | Laman web daripada repositori | URL hasil kumpulan |

Aliran kerja yang perlu diingati:

```text
branch → edit → commit → pull request → review → merge → semak hasil
```

## Pembahagian peranan

| Peranan | Tanggungjawab semasa latihan |
|---|---|
| Ketua projek | Cipta repositori, jemput ahli, semak PR dan merge |
| Penyumbang | Cipta branch, ubah fail, commit dan buka PR |
| Penyemak/penguji | Semak `Files changed`, uji hasil dan beri maklum balas |

Tukar peranan dalam Modul 5 supaya setiap peserta mengalami lebih daripada satu tugas.

## Jadual hands-on 30 minit

| Minit | Aktiviti | Bukti |
|---|---|---|
| 0–5 | Semak akaun, e-mel dan username | Semua peserta boleh log masuk |
| 5–10 | Bentuk tiga kumpulan dan tetapkan peranan | Senarai peranan kumpulan |
| 10–15 | Ketua mencipta repositori dan menjemput ahli | Dua jemputan dihantar |
| 15–20 | Ahli menerima jemputan dan mencipta branch | Branch baharu kelihatan |
| 20–25 | Ahli mengedit README, commit dan membuka PR | Satu PR terbuka |
| 25–30 | Penyemak memeriksa dan ketua merge | Status PR `Merged` |

## Bahagian A — Langkah ketua projek

### A1. Cipta repositori kumpulan

1. Di penjuru kanan atas GitHub, pilih ikon **+**.
2. Pilih **New repository**.
3. Gunakan nama `mpe-hub-kumpulan-X`; gantikan `X` dengan nombor kumpulan.
4. Masukkan penerangan ringkas dan pilih keterlihatan yang diarahkan fasilitator.
5. Tandakan **Add a README file**.
6. Pilih **Create repository**.

![Contoh kawasan repositori GitHub dengan tab Code, Issues, Pull requests dan Settings](../assets/github-guides/repositori-dan-menu.png)

**Semak sebelum teruskan:** nama repositori betul, fail `README.md` wujud dan tiada data sebenar.

### A2. Jemput dua ahli

1. Minta **username GitHub** kedua-dua ahli.
2. Dalam repositori, buka **Settings**.
3. Pada menu Access, pilih **Collaborators** atau **Collaborators and teams**.
4. Pilih **Add people**.
5. Cari username, pilih akaun yang betul dan hantar jemputan.
6. Ulang untuk ahli kedua.

![Contoh halaman Collaborators untuk menambah ahli projek](../assets/github-guides/tambah-kolaborator.png)

**Semak sebelum teruskan:** dua jemputan ditunjukkan sebagai `Pending` atau telah diterima.

Rujukan rasmi: [Menjemput kolaborator ke repositori peribadi](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository).

## Bahagian B — Langkah ahli projek

### B1. Terima jemputan

1. Buka e-mel atau notifikasi GitHub.
2. Pilih jemputan repositori kumpulan.
3. Pilih **Accept invitation**.
4. Kembali ke halaman utama repositori.

**Semak sebelum teruskan:** ahli boleh membuka repositori dan melihat tab `Code`.

### B2. Cipta branch sendiri

1. Pada tab **Code**, pilih menu branch yang memaparkan `main`.
2. Taip nama branch mengikut format `nama-tugas`, contohnya `siti-kemas-kini-readme`.
3. Pilih **Create branch**.
4. Pastikan nama branch baharu kini dipaparkan pada menu.

![Contoh menu branch GitHub untuk mencipta ruang kerja berasingan](../assets/github-guides/cipta-branch.png)

**Jangan** membuat latihan terus pada `main`.

### B3. Edit README dan commit

1. Buka `README.md`.
2. Pilih ikon pensel **Edit this file**.
3. Tambah nama kumpulan, peranan dan satu objektif projek rekaan.
4. Pilih **Commit changes**.
5. Gunakan mesej ringkas, contohnya `Tambah peranan kumpulan`.
6. Pastikan commit dibuat pada branch sendiri.

**Semak sebelum teruskan:** halaman branch menunjukkan commit baharu dan fail berubah seperti yang dijangka.

### B4. Buka pull request

1. Pilih **Compare & pull request** atau buka tab **Pull requests → New pull request**.
2. Pastikan `base: main` dan `compare: branch-anda`.
3. Masukkan tajuk yang menerangkan perubahan.
4. Dalam huraian, nyatakan apa yang berubah dan cara menyemaknya.
5. Pilih **Create pull request**.

![Contoh halaman pull request dengan base main, branch perbandingan dan butang Create pull request](../assets/github-guides/buka-pull-request.png)

**Semak sebelum teruskan:** PR berstatus `Open` dan hanya fail yang dimaksudkan dipaparkan.

## Bahagian C — Langkah penyemak dan ketua

### C1. Semak perubahan

1. Buka PR dan pilih **Files changed**.
2. Pastikan perubahan hanya melibatkan `README.md`.
3. Semak bahawa tiada kata laluan, token, e-mel peribadi atau data operasi.
4. Tinggalkan komen jika pembetulan diperlukan.
5. Jika betul, pilih **Review changes → Approve** jika pilihan tersedia.

### C2. Merge ke main

1. Ketua projek kembali ke tab **Conversation**.
2. Pastikan paparan menyatakan branch boleh dimerge dan tiada konflik.
3. Pilih **Merge pull request**.
4. Pilih **Confirm merge**.
5. Semak status berubah kepada `Merged`.

![Contoh pull request yang sedia untuk dimerge ke main](../assets/github-guides/merge-pull-request.png)

**Semak akhir:** buka tab `Code`, pilih `main` dan pastikan kandungan README baharu kelihatan.

## Jika menu tidak kelihatan atau sesuatu gagal

| Gejala | Punca biasa | Tindakan |
|---|---|---|
| Tiada tab Settings | Bukan pemilik repositori | Minta ketua projek melaksanakan langkah tersebut |
| Jemputan tidak diterima | Username salah atau e-mel belum disemak | Semak username dan notifikasi GitHub |
| Tidak boleh mencipta repositori | E-mel belum disahkan | Lengkapkan pengesahan e-mel |
| Tidak boleh push atau commit | Jemputan belum diterima | Terima jemputan dan muat semula halaman |
| Perubahan berada pada `main` | Branch tidak ditukar sebelum edit | Hentikan dan minta fasilitator menyemak sebelum meneruskan |
| PR menunjukkan konflik | Fail sama diubah oleh dua orang | Jangan paksa merge; minta fasilitator membantu menyelesaikan konflik |
| Workflow merah | Binaan atau ujian gagal | Buka Actions, baca langkah merah dan betulkan pada branch |

## Checklist kumpulan

- [ ] Ketiga-tiga peserta boleh log masuk.
- [ ] Ketua projek dan dua ahli telah dikenal pasti.
- [ ] Dua ahli telah menerima jemputan.
- [ ] Satu branch peserta diwujudkan.
- [ ] Satu commit mempunyai mesej yang jelas.
- [ ] Satu PR telah disemak.
- [ ] PR berjaya dimerge ke `main`.
- [ ] Tiada rahsia atau data sebenar dimasukkan.

## Sambungan ke Modul 5

Gunakan repositori dan peranan kumpulan yang sama dalam Modul 5. Ketua projek mengurus tetapan dan merge; ahli membuat perubahan melalui branch; penyemak menguji antaramuka, rekod dan GitHub Pages sebelum penerbitan.
