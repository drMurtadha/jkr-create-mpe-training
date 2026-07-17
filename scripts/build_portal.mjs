import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { marked } = require('marked');
const root = process.cwd();
const docs = path.join(root, 'docs');
const assetVersion = '20260717-3';

marked.setOptions({ gfm: true, breaks: false });

const nav = (prefix = '') => `
<header class="site-header">
  <div class="container nav">
    <a class="brand" href="${prefix}index.html"><span class="brand-mark">MPE</span><span>Portal Latihan<small>CREaTE JKR · 2026</small></span></a>
    <button class="menu-button" data-menu aria-expanded="false" aria-label="Buka navigasi">Menu</button>
    <nav class="nav-links" data-nav-links aria-label="Navigasi utama">
      <a href="${prefix}index.html">Utama</a>
      <a href="${prefix}modul-1/index.html">Modul 1</a>
      <a href="${prefix}modul-2/index.html">Modul 2</a>
      <a href="${prefix}modul-3/index.html">Modul 3</a>
      <a href="${prefix}modul-1/slaid.html">Slaid web</a>
      <a href="https://drmurtadha.github.io/mpe-hub/" target="_blank" rel="noopener">MPE Hub ↗</a>
      <a href="https://github.com/drMurtadha/jkr-create-mpe-training" target="_blank" rel="noopener">GitHub ↗</a>
    </nav>
  </div>
</header>`;

const footer = () => `<footer class="site-footer"><div class="container footer-grid"><div><strong>Bengkel Transformasi Digital dan Pemerkasaan Operasi Pintar MPE</strong><br>CREaTE JKR · 28–29 Julai 2026</div><div>Prof. Madya Dr. Mohd Murtadha Mohamad<br><a href="https://github.com/drMurtadha/jkr-create-mpe-training">Sumber terbuka di GitHub</a></div></div></footer>`;

function shell({ title, description, prefix = '', body, extraScripts = '' }) {
  return `<!doctype html>
<html lang="ms">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${description.replaceAll('"', '&quot;')}">
  <meta name="theme-color" content="#0d272b">
  <title>${title} · Portal Latihan MPE</title>
  <link rel="icon" href="${prefix}assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="${prefix}assets/styles.css?v=${assetVersion}">
</head>
<body>
<a class="skip-link" href="#kandungan">Langkau ke kandungan</a>
${nav(prefix)}
${body}
${footer()}
<script src="${prefix}assets/site.js?v=${assetVersion}"></script>
${extraScripts}
</body>
</html>`;
}

function pageHero(title, description, prefix = '') {
  return `<section class="page-hero"><div class="container"><div class="breadcrumbs"><a href="${prefix}index.html">Portal latihan</a> / ${title}</div><h1>${title}</h1><p>${description}</p></div></section>`;
}

async function write(relative, content) {
  const target = path.join(docs, relative);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, content);
}

function rewriteModuleLinks(markdown, moduleNumber) {
  if (!moduleNumber) return markdown;
  const moduleOne = [
    ['./01-Nota-Fasilitator.md', 'nota-fasilitator.html'],
    ['./02-Kandungan-Slaid.md', 'kandungan-slaid.html'],
    ['./03-Kanvas-Peluang-Produktiviti.md', 'kanvas.html'],
    ['./04-Skrip-Demonstrasi-MPE-Hub.md', 'demonstrasi.html'],
    ['./05-Penilaian-dan-Exit-Ticket.md', 'penilaian.html'],
    ['./slaid/', 'slaid.html'],
    ['./nota/', 'nota-fasilitator.html'],
    ['./lembaran-kerja/', 'kanvas.html'],
    ['./aset/', 'https://github.com/drMurtadha/jkr-create-mpe-training/tree/main/Modul%201/aset']
  ];
  const moduleTwo = [
    ['./01-Nota-Fasilitator.md', 'nota-fasilitator.html'],
    ['./02-Kandungan-Slaid.md', 'kandungan-slaid.html'],
    ['./03-Buku-Kerja-dan-Pustaka-Prompt.md', 'pustaka-prompt.html'],
    ['./04-Latihan-Surat-Rasmi.md', 'latihan-surat.html'],
    ['./05-Latihan-Minit-Tindakan.md', 'latihan-minit.html'],
    ['./06-Kawalan-Rekod-dan-Semakan.md', 'kawalan-rekod.html'],
    ['./07-Penilaian-dan-Exit-Ticket.md', 'penilaian.html'],
    ['./templat/', 'https://github.com/drMurtadha/jkr-create-mpe-training/tree/main/Modul%202/templat']
  ];
  const moduleThree = [
    ['./01-Nota-Fasilitator.md', 'nota-fasilitator.html'],
    ['./02-Pustaka-Prompt-Analisis-dan-Rekod.md', 'pustaka-prompt.html'],
    ['./03-Latihan-Analisis-Data.md', 'latihan-analisis.html'],
    ['./04-Pengurusan-Rekod-Teknikal.md', 'rekod-teknikal.html'],
    ['./05-Penilaian.md', 'penilaian.html'],
    ['./data/rekod-teknikal-mpe-rekaan.csv', '../downloads/rekod-teknikal-mpe-rekaan.csv']
  ];
  const replacements = new Map(moduleNumber === 1 ? moduleOne : moduleNumber === 2 ? moduleTwo : moduleThree);
  for (const [from, to] of replacements) markdown = markdown.replaceAll(`](${from}`, `](${to}`);
  return markdown;
}

async function markdownPage({ source, output, title, description, prefix = '../', moduleNumber = 1, downloads = false }) {
  let markdown = await fs.readFile(path.join(root, source), 'utf8');
  markdown = rewriteModuleLinks(markdown, moduleNumber);
  const content = marked.parse(markdown);
  const moduleOneAside = `<aside class="article-nav"><strong>Dalam Modul 1</strong><a href="index.html">Ringkasan modul</a><a href="slaid.html">Slaid web</a><a href="nota-fasilitator.html">Nota fasilitator</a><a href="kanvas.html">Kanvas peluang</a><a href="demonstrasi.html">Demonstrasi</a><a href="penilaian.html">Penilaian</a><strong style="margin-top:1rem">Pada halaman ini</strong><div data-article-nav></div></aside>`;
  const moduleTwoAside = `<aside class="article-nav"><strong>Dalam Modul 2</strong><a href="index.html">Ringkasan modul</a><a href="nota-fasilitator.html">Nota fasilitator</a><a href="kandungan-slaid.html">Kandungan slaid</a><a href="pustaka-prompt.html">Pustaka prompt</a><a href="latihan-surat.html">Latihan surat</a><a href="latihan-minit.html">Latihan minit</a><a href="kawalan-rekod.html">Kawalan rekod</a><a href="penilaian.html">Penilaian</a><strong style="margin-top:1rem">Pada halaman ini</strong><div data-article-nav></div></aside>`;
  const moduleThreeAside = `<aside class="article-nav"><strong>Dalam Modul 3</strong><a href="index.html">Ringkasan modul</a><a href="nota-fasilitator.html">Nota fasilitator</a><a href="pustaka-prompt.html">Pustaka prompt</a><a href="latihan-analisis.html">Analisis data</a><a href="rekod-teknikal.html">Rekod teknikal</a><a href="penilaian.html">Penilaian</a><strong style="margin-top:1rem">Pada halaman ini</strong><div data-article-nav></div></aside>`;
  const generalAside = `<aside class="article-nav"><strong>Modul bengkel</strong><a href="../modul-1/index.html">Modul 1</a><a href="../modul-2/index.html">Modul 2</a><a href="../modul-3/index.html">Modul 3</a><a href="../modul-4/index.html">Modul 4</a><a href="../modul-5/index.html">Modul 5</a><strong style="margin-top:1rem">Pada halaman ini</strong><div data-article-nav></div></aside>`;
  const aside = moduleNumber === 1 ? moduleOneAside : moduleNumber === 2 ? moduleTwoAside : moduleNumber === 3 ? moduleThreeAside : generalAside;
  const downloadButtons = downloads ? `<a class="button" href="../downloads/Slaid-Modul-1-MPE.pptx">Muat turun PPTX</a><a class="button ghost" href="../downloads/Slaid-Modul-1-MPE.pdf">Muat turun PDF</a>` : '';
  const body = `${pageHero(title, description, prefix)}<main id="kandungan" class="container article-shell">${aside}<article class="prose">${content}<div class="resource-bar">${downloadButtons}<a class="button ghost" href="https://github.com/drMurtadha/jkr-create-mpe-training/blob/main/${encodeURI(source)}" target="_blank" rel="noopener">Lihat sumber Markdown ↗</a><button class="button ghost" onclick="window.print()">Cetak halaman</button></div></article></main>`;
  await write(output, shell({ title, description, prefix, body }));
}

const home = shell({
  title: 'Utama',
  description: 'Portal rasmi bahan Bengkel Transformasi Digital dan Pemerkasaan Operasi Pintar Makmal MPE.',
  body: `
  <main id="kandungan">
    <section class="hero"><div class="container hero-grid"><div><p class="eyebrow">Bengkel dua hari · CREaTE JKR</p><h1>Transformasi digital untuk operasi makmal yang lebih pintar.</h1><p class="hero-copy">Portal bahan latihan, demonstrasi dan lembaran kerja bagi Makmal Penyelidikan Elektrik (MPE). Mulakan dengan masalah kerja, pilih percubaan kecil dan kekalkan manusia pada keputusan penting.</p><div class="button-row"><a class="button accent" href="modul-1/index.html">Mulakan Modul 1</a><a class="button ghost" href="modul-1/slaid.html">Buka slaid web</a></div></div><div class="hero-meta"><div class="meta-row"><span>Tarikh</span><b>28–29 Julai 2026</b></div><div class="meta-row"><span>Tempat</span><b>CREaTE JKR, Alor Gajah</b></div><div class="meta-row"><span>Tempoh</span><b>Dua hari · 5 modul</b></div><div class="meta-row"><span>Fasilitator</span><b>Prof. Madya Dr. Mohd Murtadha</b></div></div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div><p class="eyebrow">Laluan pembelajaran</p><h2>Lima modul, satu perjalanan transformasi</h2></div><p>Cadangan yang dibina dalam Modul 1 menjadi konteks amali untuk automasi dokumen, analisis rekod, aliran kerja dan penyediaan bahan projek.</p></div><div class="grid module-grid">${[
      ['1','Pengenalan aplikasi pintar','90 minit','modul-1/index.html','ready'],['2','AI generatif untuk dokumen rasmi','120 minit','modul-2/index.html','ready'],['3','Analisis data dan rekod teknikal','210 minit','modul-3/index.html','ready'],['4','Automasi aliran kerja makmal','120 minit','modul-4/index.html',''],['5','Dokumen projek dan pembentangan','120 minit','modul-5/index.html','']
    ].map(x=>`<a class="card-link" href="${x[3]}"><article class="card"><span class="module-number">0${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><span class="status ${x[4]}">${x[4]?'Kandungan lengkap':'Ruang tersedia'}</span></article></a>`).join('')}</div></div></section>
    <section class="section alt"><div class="container"><div class="section-head"><div><p class="eyebrow">Atur cara</p><h2>Jadual bengkel</h2></div><p>Dua hari yang bergerak daripada kefahaman asas kepada hasil projek dan pembentangan.</p></div><div class="timeline"><div class="timeline-item"><b>28 Jul · 09:00</b><strong>Modul 1</strong><p>Aplikasi pintar dan peluang produktiviti.</p></div><div class="timeline-item"><b>28 Jul · 11:00</b><strong>Modul 2</strong><p>AI generatif untuk surat, minit tindakan dan kawalan rekod.</p></div><div class="timeline-item"><b>28 Jul · 14:30</b><strong>Modul 3A</strong><p>Analisis data dan rekod teknikal.</p></div><div class="timeline-item"><b>29 Jul · 09:00</b><strong>Modul 3B & 4</strong><p>Sambungan analisis dan aliran kerja.</p></div><div class="timeline-item"><b>29 Jul · 14:30</b><strong>Modul 5</strong><p>Dokumen projek dan pembentangan.</p></div></div></div></section>
    <section class="section"><div class="container feature-panel"><div class="feature-copy"><p class="eyebrow">Kajian kes merentas modul</p><h2>MPE Hub: semua rekod, satu pandangan.</h2><p>Aplikasi demonstrasi menghubungkan Buku Log Makmal, KEW.PA-9 dan rekod ujian MCCB untuk menunjukkan penyatuan data, validasi, status dan kawalan manusia.</p><div class="button-row"><a class="button accent" href="https://drmurtadha.github.io/mpe-hub/" target="_blank" rel="noopener">Buka aplikasi ↗</a><a class="button ghost" href="modul-1/demonstrasi.html">Skrip demonstrasi</a></div></div><div class="feature-image" style="background-image:url('assets/mpe-hub-dashboard.png')" role="img" aria-label="Paparan dashboard demonstrasi MPE Hub"></div></div></section>
  </main>`
});

await write('index.html', home);

const moduleOneIntro = `Portal Modul 1 lengkap dengan slaid web, nota penyampai, aktiviti kanvas, demonstrasi MPE Hub dan penilaian.`;
await markdownPage({ source: 'Modul 1/README.md', output: 'modul-1/index.html', title: 'Modul 1 — Pengenalan Aplikasi Pintar', description: moduleOneIntro, downloads: true });
await markdownPage({ source: 'Modul 1/01-Nota-Fasilitator.md', output: 'modul-1/nota-fasilitator.html', title: 'Nota Fasilitator', description: 'Panduan persediaan, skrip dan pelaksanaan sesi Modul 1 selama 90 minit.' });
await markdownPage({ source: 'Modul 1/02-Kandungan-Slaid.md', output: 'modul-1/kandungan-slaid.html', title: 'Kandungan dan Nota Slaid', description: 'Sumber kandungan bagi 22 slaid Modul 1 berserta nota penyampai.' });
await markdownPage({ source: 'Modul 1/03-Kanvas-Peluang-Produktiviti.md', output: 'modul-1/kanvas.html', title: 'Kanvas Peluang Produktiviti MPE', description: 'Lembaran kerja kumpulan, rubrik pemarkahan dan contoh lengkap.' });
await markdownPage({ source: 'Modul 1/04-Skrip-Demonstrasi-MPE-Hub.md', output: 'modul-1/demonstrasi.html', title: 'Demonstrasi MPE Hub', description: 'Skrip demonstrasi langsung, data rekaan, debrief dan pelan sandaran.' });
await markdownPage({ source: 'Modul 1/05-Penilaian-dan-Exit-Ticket.md', output: 'modul-1/penilaian.html', title: 'Penilaian dan Exit Ticket', description: 'Tinjauan awal, kuiz, rubrik, exit ticket dan ringkasan fasilitator.' });

const moduleTwoIntro = `Bahan lengkap penggunaan AI generatif untuk draf surat rasmi, minit tindakan dan kawalan rekod tidak terperingkat.`;
await markdownPage({ source: 'Modul 2/README.md', output: 'modul-2/index.html', title: 'Modul 2 — AI Generatif untuk Dokumen Rasmi', description: moduleTwoIntro, moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/01-Nota-Fasilitator.md', output: 'modul-2/nota-fasilitator.html', title: 'Nota Fasilitator Modul 2', description: 'Panduan terperinci pelaksanaan sesi selama 120 minit.', moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/02-Kandungan-Slaid.md', output: 'modul-2/kandungan-slaid.html', title: 'Kandungan Slaid Modul 2', description: 'Sumber 26 slaid, nota penyampai dan aktiviti interaktif.', moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/03-Buku-Kerja-dan-Pustaka-Prompt.md', output: 'modul-2/pustaka-prompt.html', title: 'Pustaka Prompt Boleh Salin', description: 'Prompt neutral platform untuk surat, minit, audit fakta dan kawalan rekod.', moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/04-Latihan-Surat-Rasmi.md', output: 'modul-2/latihan-surat.html', title: 'Latihan Surat Rasmi', description: 'Latihan draf dan audit surat menggunakan data rekaan.', moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/05-Latihan-Minit-Tindakan.md', output: 'modul-2/latihan-minit.html', title: 'Latihan Minit dan Tindakan', description: 'Latihan menukar catatan simulasi kepada minit dan daftar tindakan.', moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/06-Kawalan-Rekod-dan-Semakan.md', output: 'modul-2/kawalan-rekod.html', title: 'Kawalan Rekod dan Semakan', description: 'Pagar maklumat, audit manusia, kawalan versi dan rekod rasmi.', moduleNumber: 2 });
await markdownPage({ source: 'Modul 2/07-Penilaian-dan-Exit-Ticket.md', output: 'modul-2/penilaian.html', title: 'Penilaian dan Exit Ticket Modul 2', description: 'Kuiz, rubrik hasil kumpulan dan refleksi individu.', moduleNumber: 2 });

const moduleThreeIntro = `Kaedah tujuh langkah untuk menyoal, memahami, menyemak, membersih, menganalisis, mengesahkan dan merekod data teknikal.`;
await markdownPage({ source: 'Modul 3/README.md', output: 'modul-3/index.html', title: 'Modul 3 — Pendekatan Sistematik dalam Analisis Data dan Pengurusan Rekod Teknikal', description: moduleThreeIntro, moduleNumber: 3 });
await markdownPage({ source: 'Modul 3/01-Nota-Fasilitator.md', output: 'modul-3/nota-fasilitator.html', title: 'Nota Fasilitator Modul 3', description: 'Pelan terperinci Modul 3A dan 3B selama 210 minit.', moduleNumber: 3 });
await markdownPage({ source: 'Modul 3/02-Pustaka-Prompt-Analisis-dan-Rekod.md', output: 'modul-3/pustaka-prompt.html', title: 'Pustaka Prompt Analisis dan Rekod', description: 'Prompt lengkap yang boleh disalin untuk analisis data dan pengurusan rekod teknikal.', moduleNumber: 3 });
await markdownPage({ source: 'Modul 3/03-Latihan-Analisis-Data.md', output: 'modul-3/latihan-analisis.html', title: 'Latihan Analisis Data', description: 'Latihan sistematik menggunakan dataset Penggunaan Elektrik Bulanan data.gov.my.', moduleNumber: 3 });
await markdownPage({ source: 'Modul 3/04-Pengurusan-Rekod-Teknikal.md', output: 'modul-3/rekod-teknikal.html', title: 'Pengurusan Rekod Teknikal', description: 'Audit dan kawalan rekod MPE rekaan yang boleh dijejak.', moduleNumber: 3 });
await markdownPage({ source: 'Modul 3/05-Penilaian.md', output: 'modul-3/penilaian.html', title: 'Penilaian Modul 3', description: 'Kuiz, rubrik, exit ticket dan bukti penyempurnaan Modul 3.', moduleNumber: 3 });

for (const number of [4, 5]) {
  const moduleTitles = { 2: 'Automasi Digital dalam Penyediaan Dokumen Rasmi', 3: 'Analisis Data dan Pengurusan Rekod Teknikal', 4: 'Automasi Aliran Kerja dan Proses Makmal', 5: 'Dokumen Projek dan Pembentangan' };
  await markdownPage({ source: `Modul ${number}/README.md`, output: `modul-${number}/index.html`, title: `Modul ${number} — ${moduleTitles[number]}`, description: `Ruang pembangunan kandungan Modul ${number}. Struktur portal telah tersedia untuk penambahan bahan seterusnya.`, moduleNumber: 0 });
}

const slidesPage = `<!doctype html><html lang="ms"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0d272b"><title>Slaid Web Modul 1 · Portal Latihan MPE</title><link rel="icon" href="../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../assets/styles.css"></head><body class="slide-mode"><main class="deck"><div class="slides-viewport" data-slides aria-live="polite"></div><div class="deck-toolbar"><a href="index.html" title="Kembali ke Modul 1">← Modul 1</a><button data-prev aria-label="Slaid sebelumnya">←</button><button data-next aria-label="Slaid seterusnya">→</button><span class="slide-count" data-slide-count></span><div class="deck-progress" aria-hidden="true"><span data-progress></span></div><button class="optional" data-notes title="Tekan N">Nota</button><button class="optional" data-fullscreen title="Tekan F">Skrin penuh</button></div></main><aside class="speaker-notes" data-notes-panel></aside><script src="../assets/slides.js"></script></body></html>`;
await write('modul-1/slaid.html', slidesPage);

await fs.mkdir(path.join(docs, 'downloads'), { recursive: true });
await fs.copyFile(path.join(root, 'Modul 1/slaid/Slaid-Modul-1-MPE.pptx'), path.join(docs, 'downloads/Slaid-Modul-1-MPE.pptx'));
await fs.copyFile(path.join(root, 'Modul 1/slaid/Slaid-Modul-1-MPE.pdf'), path.join(docs, 'downloads/Slaid-Modul-1-MPE.pdf'));
await fs.copyFile(path.join(root, 'Modul 1/aset/mpe-hub-dashboard.png'), path.join(docs, 'assets/mpe-hub-dashboard.png'));
await fs.copyFile(path.join(root, 'Modul 1/aset/mpe-hub-buku-log.png'), path.join(docs, 'assets/mpe-hub-buku-log.png'));
await fs.copyFile(path.join(root, 'Modul 3/data/rekod-teknikal-mpe-rekaan.csv'), path.join(docs, 'downloads/rekod-teknikal-mpe-rekaan.csv'));

console.log('Portal dibina dalam docs/');
