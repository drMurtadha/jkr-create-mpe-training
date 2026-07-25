# Panduan Kendiri — Salin, Tetapkan dan Terbit Portal Latihan

Panduan ini membolehkan peserta menghasilkan salinan Portal Latihan MPE dalam akaun GitHub sendiri. Ia boleh dilaksanakan semasa Modul 5 atau secara kendiri selepas bengkel.

> **Skop panduan:** menerbitkan salinan portal latihan statik. Ia tidak menghubungkan portal kepada Google Sheets, Google Drive atau Apps Script. Untuk membina aplikasi operasi MPE Hub, gunakan [Latihan MPE Hub](./04-Latihan-Bina-MPE-Hub.md).

## Hasil akhir

Apabila selesai, peserta mempunyai:

1. Satu repositori portal dalam akaun GitHub sendiri;
2. Satu URL GitHub Pages yang boleh dibuka;
3. Satu workflow penerbitan yang berjaya;
4. Satu perubahan kecil dengan sejarah commit;
5. Satu checklist keselamatan dan ujian.

## Pilih laluan

| Laluan | Sesuai untuk | Terminal | Cadangan masa |
|---|---|---:|---:|
| A — Fork melalui pelayar | Peserta baharu atau masa terhad | Tidak | 20–30 minit |
| B — Clone melalui Git | Peserta yang mahu bekerja secara tempatan | Ya | 35–50 minit |
| C — GitHub Desktop | Peserta yang mahu aplikasi grafik | Tidak | 35–50 minit |

**Laluan A disyorkan.** Fork menghasilkan salinan yang mempunyai sejarah Git dan boleh dikemas kini daripada repositori asal. Muat turun ZIP sahaja tidak mencukupi untuk penerbitan berulang kerana ia tidak mengekalkan sambungan Git.

## Sebelum bermula

- [ ] Akaun GitHub aktif dan e-mel telah disahkan.
- [ ] Boleh membuka [repositori Portal Latihan MPE](https://github.com/drMurtadha/jkr-create-mpe-training).
- [ ] Boleh membuka tab **Actions** dan **Settings** dalam repositori milik sendiri.
- [ ] Nama pengguna GitHub diketahui; contoh dalam panduan menggunakan `NAMA-PENGGUNA`.
- [ ] Nama repositori dipilih; cadangan `portal-latihan-mpe`.
- [ ] Semua kandungan yang akan diterbitkan ialah data rekaan atau bahan yang dibenarkan untuk paparan awam.

## Jika peserta menggunakan Windows

“Terminal” bukan bermaksud peserta mesti menggunakan MacBook. Pada Windows, pilih alat mengikut tahap kemahiran:

| Pilihan Windows | Sesuai untuk | Perlu command line |
|---|---|---:|
| GitHub Desktop | Peserta baharu yang mahu clone, commit dan push melalui aplikasi grafik | Tidak |
| Git Bash | Peserta yang mahu mengikuti arahan `bash` dalam panduan ini | Ya |
| Windows Terminal + PowerShell | Peserta yang sudah biasa dengan persekitaran Windows | Ya |
| Command Prompt | Boleh digunakan untuk arahan asas, tetapi bukan pilihan latihan utama | Ya |
| WSL | Pengguna teknikal yang memang telah mengkonfigurasinya | Ya |

### Cadangan fasilitator

- **Pilihan utama tanpa terminal:** GitHub Desktop.
- **Pilihan utama jika terminal diperlukan:** Git Bash.
- **Pilihan pegawai teknikal Windows:** Windows Terminal dengan PowerShell.
- Jangan meminta peserta memasang WSL semasa bengkel jika ia belum tersedia.

### Persediaan Windows

1. Pasang [Git for Windows](https://git-scm.com/download/win). Pemasangan ini menyediakan Git dan Git Bash.
2. Jika memilih aplikasi grafik, pasang dan log masuk ke [GitHub Desktop](https://desktop.github.com/download/).
3. Jika memilih PowerShell, buka **Start → Windows Terminal → PowerShell**.
4. Jika memilih Git Bash, buka **Start → Git Bash**.
5. Semak pemasangan:

```bash
git --version
node --version
npm --version
```

Arahan `git` dan `npm` dalam panduan ini berfungsi dalam Git Bash dan PowerShell. Simbol prompt mungkin berbeza, tetapi peserta tidak perlu menaip simbol seperti `$` atau `PS>`.

## Laluan A — Fork melalui pelayar

### A1. Cipta salinan

1. Buka [repositori asal](https://github.com/drMurtadha/jkr-create-mpe-training).
2. Tekan **Fork**.
3. Pada bahagian **Owner**, pilih akaun atau organisasi kumpulan.
4. Tukar nama kepada `portal-latihan-mpe` jika dikehendaki.
5. Kekalkan cabang lalai `main` dan tekan **Create fork**.
6. Tunggu sehingga halaman repositori baharu dipaparkan.

**Selesai apabila:** alamat pelayar bermula dengan `https://github.com/NAMA-PENGGUNA/` dan bukan lagi `drMurtadha/`.

### A2. Benarkan workflow

1. Buka tab **Actions**.
2. Jika GitHub memaparkan amaran bahawa workflow fork belum berjalan, tekan **I understand my workflows, go ahead and enable them**.
3. Buka **Settings → Actions → General**.
4. Pastikan tindakan yang dibina oleh GitHub dibenarkan. Workflow portal menggunakan `actions/checkout`, `actions/setup-node`, `actions/configure-pages`, `actions/upload-pages-artifact` dan `actions/deploy-pages`.
5. Kekalkan kebenaran lalai paling terhad. Workflow portal telah meminta hanya `contents: read`, `pages: write` dan `id-token: write`.

Jika akaun organisasi mengunci tetapan Actions, minta pentadbir membenarkan tindakan rasmi GitHub. Jangan cuba memintas dasar organisasi.

### A3. Tetapkan GitHub Pages

1. Buka **Settings → Pages**.
2. Pada **Build and deployment**, pilih **Source: GitHub Actions**.
3. Jangan pilih tema Jekyll dan jangan tetapkan custom domain untuk latihan awal.
4. Buka semula tab **Actions**.
5. Pilih workflow **Terbit portal latihan**.
6. Tekan **Run workflow**, pilih cabang `main`, kemudian tekan **Run workflow** sekali lagi.
7. Tunggu semua langkah bertukar hijau.

URL lazim ialah:

```text
https://NAMA-PENGGUNA.github.io/portal-latihan-mpe/
```

GitHub turut memaparkan URL sebenar pada halaman deployment. Gunakan URL yang dipaparkan oleh GitHub jika nama repositori berbeza.

**Selesai apabila:** halaman utama dan sekurang-kurangnya satu halaman modul boleh dibuka tanpa log masuk.

## Laluan B — Clone melalui Git

### B1. Semak Git

Buka salah satu:

- **macOS/Linux:** Terminal;
- **Windows:** Git Bash atau Windows Terminal dengan PowerShell.

Kemudian jalankan:

```bash
git --version
```

Jika arahan tidak ditemui, pasang Git atau gunakan Laluan A/C.

### B2. Clone repositori asal

```bash
git clone https://github.com/drMurtadha/jkr-create-mpe-training.git portal-latihan-mpe
cd portal-latihan-mpe
git status
```

Simpan repositori asal sebagai `upstream`:

```bash
git remote rename origin upstream
git remote -v
```

### B3. Cipta repositori GitHub sendiri

1. Pada GitHub, tekan **New repository**.
2. Namakan `portal-latihan-mpe`.
3. Pilih **Public** untuk latihan GitHub Free, selepas memastikan tiada data sebenar.
4. Jangan tambah README, `.gitignore` atau lesen kerana fail tersebut sudah ada.
5. Tekan **Create repository**.

Sambungkan clone tempatan kepada repositori baharu:

```bash
git remote add origin https://github.com/NAMA-PENGGUNA/portal-latihan-mpe.git
git push -u origin main
git remote -v
```

Selepas push, laksanakan tetapan Actions dan Pages dalam langkah A2 dan A3.

## Laluan C — GitHub Desktop

1. Fork repositori menggunakan langkah A1.
2. Tekan **Code → Open with GitHub Desktop**.
3. Pilih folder tempatan dan tekan **Clone**.
4. Buka **Repository → Repository Settings → Remote** dan pastikan remote menunjuk kepada fork milik peserta.
5. Buat perubahan, isi ringkasan commit, tekan **Commit to main**, kemudian **Push origin**.
6. Laksanakan tetapan Actions dan Pages dalam langkah A2 dan A3.

## Tetapan yang perlu diperiksa

| Tetapan | Nilai latihan yang disyorkan |
|---|---|
| Visibility | Public, hanya selepas audit kandungan |
| Default branch | `main` |
| Actions | Benarkan tindakan rasmi GitHub |
| Workflow | `.github/workflows/pages.yml` |
| Pages source | GitHub Actions |
| Pages environment | `github-pages`, dicipta oleh workflow |
| Custom domain | Kosong untuk latihan awal |
| Secrets | Tidak diperlukan untuk portal statik |
| Data operasi | Tidak dibenarkan |

> Repositori organisasi mungkin mempunyai dasar yang lebih ketat. Tetapan organisasi mengatasi tetapan repositori.

## Cara portal dibina

- Bahan sumber berada dalam folder `Modul 1` hingga `Modul 5`.
- `scripts/build_portal.mjs` menukar Markdown kepada HTML.
- Hasil laman berada dalam `docs/`.
- `package.json` menyediakan arahan binaan.
- `.github/workflows/pages.yml` membina semula portal dan menerbitkan folder `docs/` apabila `main` berubah.
- `.nojekyll` memastikan GitHub Pages menghidangkan aset tanpa pemprosesan Jekyll.

Peserta boleh menerbitkan salinan asal tanpa memasang Node.js. Node.js hanya diperlukan untuk pratonton atau binaan tempatan.

## Penyesuaian minimum

Lakukan satu perubahan kecil dahulu. Jangan menukar keseluruhan portal serentak.

Cadangan perubahan:

- Tajuk atau penerangan organisasi pada `README.md`;
- Nama fasilitator atau tempat pada `scripts/build_portal.mjs`;
- Satu nota dalam fail Markdown modul;
- Warna melalui pemboleh ubah pada `docs/assets/styles.css`;
- Pautan repositori `drMurtadha/jkr-create-mpe-training` kepada repositori peserta.

Dalam Visual Studio Code atau penyunting GitHub, gunakan carian seluruh projek untuk:

```text
drMurtadha
jkr-create-mpe-training
CREaTE JKR
Prof. Madya Dr. Mohd Murtadha
```

Semak setiap penggantian. Jangan menukar pautan MPE Hub jika portal peserta masih menggunakan kajian kes asal.

## Bina dan uji secara tempatan

Pasang Node.js versi 20 atau lebih baharu. Arahan yang sama boleh digunakan dalam Terminal macOS/Linux, Git Bash atau PowerShell:

```bash
npm install
npm run build
```

Hidangkan folder `docs`:

```bash
npm run serve
```

Arahan `npm run serve` menggunakan Node.js dan berfungsi pada Windows, macOS serta Linux; pemasangan Python tidak diperlukan.

Buka:

```text
http://localhost:4173/
```

Tekan `Ctrl+C` untuk menghentikan pelayan.

## Commit dan terbitkan perubahan

Semak dahulu:

```bash
git status
git diff
```

Kemudian commit dan push:

```bash
git add README.md "Modul 5" scripts docs package.json package-lock.json
git commit -m "Personalize training portal"
git push origin main
```

Workflow akan berjalan selepas push. Jika hanya fail sumber Markdown berubah, workflow akan membina semula `docs/` sebelum deployment.

## Terima kemas kini daripada repositori asal

Langkah ini untuk Laluan B yang mempunyai remote `upstream`:

```bash
git fetch upstream
git switch main
git merge upstream/main
git push origin main
```

Jika berlaku konflik, jangan pilih “accept all” secara automatik. Semak perbezaan, kekalkan penyesuaian yang dikehendaki dan uji portal semula.

## Checklist ujian penerimaan

- [ ] Workflow **Terbit portal latihan** berwarna hijau.
- [ ] URL utama memberi paparan portal, bukan ralat 404.
- [ ] Modul 1 hingga Modul 5 boleh dibuka.
- [ ] Slaid web boleh bergerak ke hadapan dan belakang.
- [ ] Pautan prompt dan muat turun yang diperlukan berfungsi.
- [ ] Menu telefon boleh dibuka dan ditutup.
- [ ] Tiada pautan kembali ke repositori peserta lain secara tidak sengaja.
- [ ] Tiada data sebenar, token, ID Google atau URL Apps Script peribadi.
- [ ] Satu commit penyesuaian dapat dikenal pasti.

## Penyelesaian masalah

| Masalah | Semakan | Tindakan |
|---|---|---|
| Actions tidak berjalan | Workflow fork belum dibenarkan | Buka tab Actions dan benarkan workflow |
| Workflow tidak kelihatan | Fail `.github/workflows/pages.yml` tiada | Pastikan clone/fork lengkap dan cabang `main` digunakan |
| Deployment gagal pada Actions | Tindakan rasmi GitHub disekat | Semak Settings → Actions → General atau hubungi pentadbir |
| Pages menunjukkan 404 | Pages belum menggunakan GitHub Actions atau URL salah | Semak Settings → Pages dan buka URL deployment sebenar |
| Perubahan tidak muncul | Workflow belum selesai atau cache pelayar | Tunggu hijau dan lakukan hard refresh |
| Aset/CSS hilang | Struktur `docs/` atau pautan relatif berubah | Pulihkan struktur asal dan jalankan `npm run build` |
| `npm install` gagal | Node terlalu lama atau rangkaian menyekat npm | Gunakan Node 20+ atau teruskan dengan deployment GitHub Actions |
| `git` tidak dikenali pada Windows | Git for Windows belum dipasang atau terminal belum dibuka semula | Pasang Git for Windows, tutup dan buka semula Git Bash/PowerShell |
| `node` atau `npm` tidak dikenali | Node.js belum dipasang atau `PATH` belum dikemas kini | Pasang Node.js 20+, kemudian buka semula terminal |
| Push ditolak | Remote atau akses salah | Jalankan `git remote -v` dan pastikan `origin` milik peserta |
| Dasar organisasi menyekat Pages | Tetapan organisasi mengatasi repositori | Gunakan akaun latihan yang dibenarkan atau minta pentadbir |

## Keselamatan

1. Anggap semua fail dalam repositori Public boleh dibaca orang ramai.
2. Jangan commit token, kata laluan, URL Apps Script `/exec`, ID Google, tandatangan atau data operasi sebenar.
3. Jangan meletakkan storan rasmi kerajaan dalam repositori latihan.
4. Semak `git diff --cached` sebelum setiap commit.
5. Jika rahsia tersalah commit, jangan hanya memadam fail dalam commit seterusnya; hentikan penerbitan dan tukar/batalkan rahsia tersebut mengikut prosedur organisasi.

## Bukti penyempurnaan kendiri

Serahkan lima perkara:

1. URL repositori peserta;
2. URL GitHub Pages;
3. ID atau pautan commit penyesuaian;
4. Tangkap layar workflow hijau;
5. Checklist ujian penerimaan yang lengkap.

## Pelan masa kendiri

| Minit | Aktiviti |
|---:|---|
| 0–10 | Fork/clone dan semak struktur |
| 10–20 | Benarkan Actions dan tetapkan Pages |
| 20–30 | Jalankan deployment pertama |
| 30–45 | Buat satu penyesuaian kecil |
| 45–55 | Commit, push dan tunggu deployment |
| 55–60 | Lengkapkan ujian dan bukti |

## Rujukan rasmi GitHub

- [Cloning a repository](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#cloning-a-repository)
- [About remote repositories](https://docs.github.com/en/get-started/git-basics/about-remote-repositories)
- [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Managing GitHub Actions settings](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository)
- [GitHub Desktop untuk clone dan fork](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop)
- [Windows Terminal](https://learn.microsoft.com/en-us/windows/terminal/)
- [Git for Windows](https://git-scm.com/download/win)
