const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'Prof. Madya Dr. Mohd Murtadha Mohamad';
pptx.company = 'Universiti Teknologi Malaysia / CREaTE JKR';
pptx.subject = 'Modul 1 — Pengenalan Aplikasi Pintar untuk Meningkatkan Produktiviti Kerja MPE';
pptx.title = 'Slaid Modul 1 MPE';
pptx.lang = 'ms-MY';
pptx.theme = {
  headFontFace: 'Aptos Display',
  bodyFontFace: 'Aptos',
  lang: 'ms-MY'
};
pptx.defineLayout({ name: 'WIDE', width: 13.333, height: 7.5 });
pptx.layout = 'WIDE';

const C = {
  navy: '173440',
  navy2: '0D272B',
  ink: '182427',
  teal: '00A99D',
  blue: '2F72C4',
  lime: 'CDFF3F',
  paper: 'F7F7F2',
  white: 'FFFFFF',
  mist: 'E7EFED',
  gray: '6A777A',
  line: 'AAB9B7',
  red: 'C95B5B',
  amber: 'D79A32',
  green: '3F9B72'
};

const S = pptx.ShapeType;
const OUT = 'Modul 1/slaid/Slaid-Modul-1-MPE.pptx';
const DASHBOARD = 'Modul 1/aset/mpe-hub-dashboard.png';
const LOGBOOK = 'Modul 1/aset/mpe-hub-buku-log.png';

const shadow = () => ({ type: 'outer', color: '000000', blur: 2, angle: 45, distance: 1, opacity: 0.10 });

function addGrid(slide, dark = false) {
  const col = dark ? '3B5A61' : 'DDE6E3';
  for (let i = 0; i < 8; i++) {
    slide.addShape(S.line, {
      x: 9.4 + i * 0.48, y: 0, w: 2.2, h: 2.2,
      rotate: 45, line: { color: col, transparency: 45, width: 0.5 }
    });
  }
  for (let i = 0; i < 7; i++) {
    slide.addShape(S.line, {
      x: 10.0 + i * 0.5, y: 0, w: 2.0, h: 2.0,
      rotate: 135, line: { color: col, transparency: 55, width: 0.5 }
    });
  }
}

function baseSlide(section, number, opts = {}) {
  const slide = pptx.addSlide();
  const dark = Boolean(opts.dark);
  slide.background = { color: dark ? C.navy2 : C.paper };
  addGrid(slide, dark);
  slide.addText(section.toUpperCase(), {
    x: 0.55, y: 0.24, w: 4.5, h: 0.24, margin: 0,
    fontFace: 'Aptos', fontSize: 9, bold: true, charSpacing: 1.8,
    color: dark ? C.lime : C.teal
  });
  slide.addText(String(number).padStart(2, '0'), {
    x: 12.12, y: 0.20, w: 0.62, h: 0.28, margin: 0,
    align: 'right', fontFace: 'Aptos', fontSize: 10, bold: true,
    color: dark ? '9CB1B4' : C.gray
  });
  slide.addShape(S.line, {
    x: 0.55, y: 7.12, w: 12.18, h: 0,
    line: { color: dark ? '34535A' : 'D4DEDC', width: 0.7 }
  });
  slide.addText('MODUL 1 · CREaTE JKR · 28 JULAI 2026', {
    x: 0.55, y: 7.18, w: 5.5, h: 0.16, margin: 0,
    fontSize: 6.8, charSpacing: 1.2, color: dark ? '82999D' : '82908F'
  });
  return slide;
}

function addTitle(slide, title, subtitle = '', opts = {}) {
  slide.addText(title, {
    x: 0.62, y: opts.y || 0.62, w: opts.w || 11.8, h: opts.h || 0.72,
    margin: 0, fontFace: 'Aptos Display', fontSize: opts.size || 29,
    bold: true, color: opts.color || C.navy, breakLine: false,
    fit: 'shrink'
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.64, y: (opts.y || 0.62) + (opts.h || 0.72) + 0.03,
      w: opts.subW || 11.7, h: opts.subH || 0.24,
      margin: 0, fontSize: opts.subSize || 12.5,
      color: opts.subColor || C.gray, fit: 'shrink'
    });
  }
}

function addNotes(slide, text) {
  slide.addNotes(text);
}

function rect(slide, x, y, w, h, fill = C.white, line = C.line, radius = true) {
  slide.addShape(radius ? S.roundRect : S.rect, {
    x, y, w, h,
    rectRadius: radius ? 0.06 : undefined,
    fill: { color: fill },
    line: { color: line, width: 0.9 },
    shadow: shadow()
  });
}

function card(slide, x, y, w, h, title, body, accent = C.teal, opts = {}) {
  rect(slide, x, y, w, h, opts.fill || C.white, opts.line || 'CFDAD8', true);
  slide.addShape(S.rect, { x, y, w: 0.08, h, fill: { color: accent }, line: { color: accent } });
  slide.addText(title, {
    x: x + 0.23, y: y + 0.17, w: w - 0.38, h: 0.32,
    margin: 0, fontSize: opts.titleSize || 15, bold: true,
    color: opts.titleColor || C.ink, fit: 'shrink'
  });
  slide.addText(body, {
    x: x + 0.23, y: y + 0.58, w: w - 0.38, h: h - 0.73,
    margin: 0, fontSize: opts.bodySize || 11.5,
    color: opts.bodyColor || C.gray, valign: opts.valign || 'top',
    breakLine: false, fit: 'shrink'
  });
}

function numberBadge(slide, x, y, number, fill = C.teal, color = C.white, size = 0.46) {
  slide.addShape(S.ellipse, { x, y, w: size, h: size, fill: { color: fill }, line: { color: fill } });
  slide.addText(String(number), {
    x, y: y + 0.01, w: size, h: size - 0.02, margin: 0,
    align: 'center', valign: 'mid', bold: true, fontSize: 12, color
  });
}

function pill(slide, x, y, w, text, fill, color = C.white) {
  slide.addShape(S.roundRect, { x, y, w, h: 0.36, rectRadius: 0.08, fill: { color: fill }, line: { color: fill } });
  slide.addText(text, { x, y: y + 0.02, w, h: 0.27, margin: 0, align: 'center', fontSize: 9.5, bold: true, color });
}

function arrow(slide, x1, y1, x2, y2, color = C.teal, width = 2) {
  slide.addShape(S.line, {
    x: x1, y: y1, w: x2 - x1, h: y2 - y1,
    line: { color, width, endArrowType: 'triangle' }
  });
}

function addBullets(slide, items, x, y, w, h, opts = {}) {
  const runs = [];
  items.forEach((item, idx) => {
    runs.push({ text: item, options: { bullet: { indent: 16 }, hanging: 4, breakLine: idx < items.length - 1, paraSpaceAfterPt: opts.space || 10 } });
  });
  slide.addText(runs, {
    x, y, w, h, margin: 0.03, fontSize: opts.fontSize || 14,
    color: opts.color || C.ink, breakLine: false, valign: 'top', fit: 'shrink'
  });
}

// 1 — Title
{
  const slide = baseSlide('Pembukaan', 1, { dark: true });
  slide.addShape(S.rect, { x: 0.62, y: 0.8, w: 12.05, h: 4.25, fill: { color: C.navy }, line: { color: '4B6970', width: 1.2 } });
  slide.addText('MODUL 1', { x: 0.92, y: 1.18, w: 2.2, h: 0.34, margin: 0, fontSize: 12, bold: true, charSpacing: 2.4, color: C.lime });
  slide.addText('Pengenalan Aplikasi Pintar\nuntuk Meningkatkan\nProduktiviti Kerja MPE', {
    x: 0.92, y: 1.7, w: 10.7, h: 2.35, margin: 0,
    fontFace: 'Aptos Display', fontSize: 33, bold: true,
    color: C.white, breakLine: false, fit: 'shrink'
  });
  slide.addShape(S.roundRect, { x: 0.92, y: 4.3, w: 8.2, h: 0.52, rectRadius: 0.06, fill: { color: C.teal }, line: { color: C.teal } });
  slide.addText('Mulakan dengan masalah kerja, bukan dengan nama alat.', {
    x: 1.15, y: 4.4, w: 7.8, h: 0.26, margin: 0,
    fontSize: 14.5, bold: true, color: C.white
  });
  slide.addText('Prof. Madya Dr. Mohd Murtadha Mohamad\n28 Julai 2026 · CREaTE JKR', {
    x: 0.92, y: 5.42, w: 5.7, h: 0.7, margin: 0,
    fontSize: 13.5, color: 'BFD0D2', breakLine: false
  });
  slide.addText('90\nMINIT', { x: 10.9, y: 5.25, w: 1.45, h: 1.1, margin: 0, align: 'center', fontSize: 23, bold: true, color: C.lime, breakLine: false });
  addNotes(slide, 'Selamat pagi. Modul ini ialah asas kepada semua modul seterusnya. Kita akan bermula dengan masalah kerja MPE, mengenal pasti peluang yang bernilai, dan menamatkan sesi dengan satu cadangan percubaan kecil bagi setiap kumpulan.');
}

// 2 — Outcomes
{
  const slide = baseSlide('Pembukaan', 2);
  addTitle(slide, 'Hasil akhir sesi', 'Pada 10.30 pagi, setiap kumpulan membawa satu peluang yang boleh dinilai.');
  const items = [
    ['1', 'Masalah', 'Satu masalah operasi MPE yang jelas'],
    ['2', 'Cadangan', 'Satu gabungan keupayaan aplikasi pintar'],
    ['3', 'Ukuran', 'Satu metrik kejayaan yang boleh diperiksa'],
    ['4', 'Kawalan', 'Satu risiko dan titik semakan manusia'],
    ['5', 'Percubaan', 'Satu langkah kecil untuk dua minggu pertama']
  ];
  items.forEach((d, i) => {
    const x = 0.65 + i * 2.48;
    rect(slide, x, 2.08, 2.18, 3.52, i === 4 ? 'EEFFD0' : C.white, i === 4 ? 'A8CD42' : 'CFDAD8', true);
    numberBadge(slide, x + 0.15, 2.28, d[0], i === 4 ? C.navy : C.teal, i === 4 ? C.lime : C.white, 0.5);
    slide.addText(d[1], { x: x + 0.15, y: 3.05, w: 1.86, h: 0.42, margin: 0, fontSize: 17, bold: true, color: C.navy, fit: 'shrink' });
    slide.addText(d[2], { x: x + 0.15, y: 3.68, w: 1.84, h: 1.28, margin: 0, fontSize: 12.3, color: C.gray, valign: 'top', fit: 'shrink' });
  });
  slide.addText('Bukti pembelajaran: Kanvas Peluang Produktiviti MPE + pitch 60 saat', {
    x: 0.65, y: 6.18, w: 12, h: 0.38, margin: 0,
    fontSize: 14, bold: true, color: C.teal, align: 'center'
  });
  addNotes(slide, 'Nyatakan hasil dengan jelas. Peserta tidak hanya mendengar teori; setiap kumpulan akan menghasilkan satu kanvas yang mempunyai masalah, cadangan, ukuran, kawalan dan percubaan kecil.');
}

// 3 — Roadmap
{
  const slide = baseSlide('Pembukaan', 3);
  addTitle(slide, 'Perjalanan bengkel dua hari', 'Peluang yang dipilih hari ini menjadi benang merah bagi Modul 2–5.');
  const mods = [
    ['01', 'Pilih peluang', 'Aplikasi pintar', C.teal],
    ['02', 'Automasi dokumen', 'Dokumen rasmi', C.blue],
    ['03', 'Analisis rekod', 'Data teknikal', C.navy],
    ['04', 'Baiki aliran kerja', 'Proses makmal', C.green],
    ['05', 'Sedia & bentang', 'Dokumen projek', C.amber]
  ];
  mods.forEach((m, i) => {
    const x = 0.65 + i * 2.5;
    if (i < mods.length - 1) arrow(slide, x + 2.02, 3.45, x + 2.46, 3.45, '9FB0AE', 1.6);
    slide.addShape(S.hexagon, { x, y: 2.25, w: 2.03, h: 2.35, fill: { color: i === 0 ? 'E0F9F5' : C.white }, line: { color: m[3], width: i === 0 ? 2.2 : 1.2 }, shadow: shadow() });
    slide.addText(m[0], { x: x + 0.66, y: 2.55, w: 0.7, h: 0.42, margin: 0, align: 'center', fontSize: 18, bold: true, color: m[3] });
    slide.addText(m[1], { x: x + 0.22, y: 3.28, w: 1.6, h: 0.5, margin: 0, align: 'center', fontSize: 14, bold: true, color: C.ink, fit: 'shrink' });
    slide.addText(m[2], { x: x + 0.25, y: 3.9, w: 1.55, h: 0.35, margin: 0, align: 'center', fontSize: 10.5, color: C.gray, fit: 'shrink' });
  });
  slide.addShape(S.roundRect, { x: 0.65, y: 5.45, w: 12.0, h: 0.72, rectRadius: 0.05, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText('Hari ini: pilih masalah yang betul sebelum kita membina penyelesaian.', { x: 0.95, y: 5.68, w: 11.4, h: 0.25, margin: 0, align: 'center', fontSize: 15, bold: true, color: C.white });
  addNotes(slide, 'Terangkan hubungan lima modul. Modul 1 memilih peluang. Modul 2 mengautomasi dokumen, Modul 3 mengurus data dan rekod, Modul 4 memperbaiki aliran kerja, dan Modul 5 menyediakan bahan projek serta pembentangan.');
}

// 4 — Poll
{
  const slide = baseSlide('Pembukaan', 4, { dark: true });
  addTitle(slide, 'Tinjauan pantas', 'Angkat tangan jika perkara ini pernah berlaku dalam kerja anda.', { color: C.white, subColor: 'BFD0D2' });
  const qs = [
    ['01', 'Masuk semula', 'Maklumat sama dimasukkan ke lebih daripada satu tempat.'],
    ['02', 'Cari versi', 'Lebih lima minit untuk menemukan fail yang betul.'],
    ['03', 'Tunggu status', 'Semakan atau kelulusan tidak kelihatan dengan jelas.'],
    ['04', 'Bina laporan', 'Ringkasan disusun daripada beberapa sumber berasingan.']
  ];
  qs.forEach((q, i) => {
    const x = 0.7 + (i % 2) * 6.18;
    const y = 1.8 + Math.floor(i / 2) * 2.08;
    slide.addShape(S.roundRect, { x, y, w: 5.78, h: 1.62, rectRadius: 0.06, fill: { color: '173C40' }, line: { color: '45676D', width: 1 } });
    slide.addText(q[0], { x: x + 0.22, y: y + 0.25, w: 0.62, h: 0.38, margin: 0, fontSize: 14, bold: true, color: C.lime });
    slide.addText(q[1], { x: x + 1.0, y: y + 0.24, w: 2.4, h: 0.38, margin: 0, fontSize: 17, bold: true, color: C.white });
    slide.addText(q[2], { x: x + 1.0, y: y + 0.78, w: 4.35, h: 0.5, margin: 0, fontSize: 12, color: 'BFD0D2', fit: 'shrink' });
  });
  slide.addText('Setiap “ya” ialah petunjuk peluang — bukan kegagalan individu.', { x: 0.7, y: 6.1, w: 11.96, h: 0.4, margin: 0, align: 'center', fontSize: 15, bold: true, color: C.lime });
  addNotes(slide, 'Gunakan angkat tangan atau undian. Jangan menghukum respons. Tekankan bahawa masalah proses ialah peluang penambahbaikan dan bukan kegagalan individu.');
}

// 5 — Definition
{
  const slide = baseSlide('Konsep', 5);
  addTitle(slide, 'Apakah aplikasi pintar?', 'Aplikasi tidak perlu menggunakan AI untuk menghasilkan kerja yang lebih pintar.');
  slide.addShape(S.roundRect, { x: 0.78, y: 1.75, w: 11.78, h: 1.28, rectRadius: 0.07, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText('Aplikasi pintar menggunakan data, peraturan atau AI untuk membantu manusia mengumpul, menyusun, menyemak, melaksanakan dan memantau kerja dengan lebih konsisten.', {
    x: 1.12, y: 2.02, w: 11.1, h: 0.67, margin: 0,
    align: 'center', valign: 'mid', fontSize: 18, bold: true, color: C.white, fit: 'shrink'
  });
  const parts = [
    ['DATA', 'Maklumat yang boleh digunakan semula', C.teal],
    ['TINDAKAN', 'Langkah yang dicetus atau dipercepat', C.blue],
    ['KEPUTUSAN', 'Maklumat untuk pertimbangan manusia', C.amber],
    ['KAWALAN', 'Akses, semakan dan jejak audit', C.green]
  ];
  parts.forEach((p, i) => {
    const x = 0.78 + i * 3.02;
    rect(slide, x, 3.62, 2.72, 1.55, C.white, p[2], true);
    slide.addText(p[0], { x: x + 0.2, y: 3.91, w: 2.32, h: 0.3, margin: 0, align: 'center', fontSize: 13, bold: true, color: p[2] });
    slide.addText(p[1], { x: x + 0.24, y: 4.37, w: 2.24, h: 0.48, margin: 0, align: 'center', fontSize: 11.2, color: C.gray, fit: 'shrink' });
  });
  slide.addText('Nilai datang daripada reka bentuk kerja yang lebih baik — bukan daripada label teknologi.', { x: 1.4, y: 5.86, w: 10.5, h: 0.35, margin: 0, align: 'center', fontSize: 15, bold: true, color: C.teal });
  addNotes(slide, 'Aplikasi pintar tidak semestinya AI. Data dan peraturan yang baik sering memberi nilai yang besar. Gunakan definisi ini untuk memfokuskan peserta kepada kerja dan keputusan.');
}

// 6 — Maturity
{
  const slide = baseSlide('Konsep', 6);
  addTitle(slide, 'Tiga tahap kematangan kerja', 'Digital ialah langkah penting, tetapi belum tentu menghapuskan kerja berulang.');
  const cols = [
    ['MANUAL', C.gray, ['Tulis dan pindah', 'Cari secara manual', 'Semak di akhir', 'Ringkasan manual']],
    ['DIGITAL', C.blue, ['Isi pada skrin', 'Fail elektronik', 'Semak senarai', 'Laporan berasingan']],
    ['PINTAR', C.teal, ['Kumpul sekali', 'Cari dan jejak', 'Validasi semasa input', 'Status dan metrik tersedia']]
  ];
  cols.forEach((c, i) => {
    const x = 0.75 + i * 4.15;
    slide.addShape(S.roundRect, { x, y: 1.73, w: 3.72, h: 0.62, rectRadius: 0.05, fill: { color: c[1] }, line: { color: c[1] } });
    slide.addText(c[0], { x, y: 1.9, w: 3.72, h: 0.26, margin: 0, align: 'center', fontSize: 16, bold: true, color: C.white });
    c[2].forEach((t, j) => {
      rect(slide, x, 2.55 + j * 0.78, 3.72, 0.6, i === 2 ? 'E4F8F2' : C.white, i === 2 ? '7BCFC4' : 'D0DAD8', true);
      slide.addText(t, { x: x + 0.15, y: 2.72 + j * 0.78, w: 3.42, h: 0.24, margin: 0, align: 'center', fontSize: 13, color: C.ink, fit: 'shrink' });
    });
  });
  slide.addText('Soalan: Pada tahap manakah setiap proses MPE berada sekarang?', { x: 0.9, y: 6.1, w: 11.5, h: 0.38, margin: 0, align: 'center', fontSize: 15, bold: true, color: C.navy });
  addNotes(slide, 'Gunakan Buku Log sebagai contoh. Manual menggunakan catatan dan fail fizikal. Digital memindahkan borang ke skrin tetapi mungkin masih memerlukan salinan data. Pintar mengumpul sekali, menyemak awal dan menyediakan status.');
}

// 7 — Logbook flow
{
  const slide = baseSlide('Konsep', 7);
  addTitle(slide, 'Contoh: perjalanan Buku Log Makmal', 'Perhatikan bagaimana bilangan sentuhan dan kelewatan berubah.');
  const rows = [
    { y: 1.75, label: 'MANUAL', color: C.gray, steps: ['Catat', 'Ambil gambar', 'Simpan', 'Salin', 'Ringkaskan'] },
    { y: 3.1, label: 'DIGITAL', color: C.blue, steps: ['Isi borang', 'Simpan fail', 'Semak', 'Salin laporan'] },
    { y: 4.45, label: 'PINTAR', color: C.teal, steps: ['Isi di lokasi', 'Validasi', 'Jana ID', 'Paut lampiran', 'Pantau'] }
  ];
  rows.forEach((r) => {
    pill(slide, 0.7, r.y + 0.16, 1.3, r.label, r.color);
    const gap = 9.9 / r.steps.length;
    r.steps.forEach((st, i) => {
      const x = 2.25 + i * gap;
      rect(slide, x, r.y, gap - 0.28, 0.88, r.label === 'PINTAR' ? 'E2F8F3' : C.white, r.color, true);
      slide.addText(st, { x: x + 0.1, y: r.y + 0.28, w: gap - 0.48, h: 0.25, margin: 0, align: 'center', fontSize: 11.5, bold: r.label === 'PINTAR', color: C.ink, fit: 'shrink' });
      if (i < r.steps.length - 1) arrow(slide, x + gap - 0.24, r.y + 0.44, x + gap - 0.02, r.y + 0.44, r.color, 1.2);
    });
  });
  slide.addShape(S.roundRect, { x: 2.25, y: 5.8, w: 9.95, h: 0.58, rectRadius: 0.05, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText('Prinsip: kumpul data di punca dan kurangkan pemindahan yang tidak menambah nilai.', { x: 2.5, y: 5.98, w: 9.45, h: 0.24, margin: 0, align: 'center', fontSize: 13.5, bold: true, color: C.white });
  addNotes(slide, 'Tanya peserta sama ada semua proses perlu sampai ke tahap pintar. Jawapan: tidak. Tahap penyelesaian perlu sepadan dengan nilai, kekerapan, kebolehlaksanaan dan risiko.');
}

// 8 — Leaks
{
  const slide = baseSlide('Masalah', 8, { dark: true });
  addTitle(slide, 'Lima kebocoran produktiviti', 'Di manakah masa, kualiti atau kebolehkesanan hilang?', { color: C.white, subColor: 'BFD0D2' });
  const leaks = [
    ['01', 'Masuk data berulang', 'Maklumat sama dipindahkan ke beberapa tempat.'],
    ['02', 'Cari fail atau versi', 'Masa hilang untuk menemukan rujukan yang betul.'],
    ['03', 'Tunggu semakan', 'Proses terhenti tanpa status yang jelas.'],
    ['04', 'Kira dan format berulang', 'Laporan dibina semula daripada sumber berasingan.'],
    ['05', 'Ralat dikesan terlalu lewat', 'Kesilapan hanya ditemui di penghujung proses.']
  ];
  leaks.forEach((l, i) => {
    const x = 0.65 + i * 2.5;
    slide.addShape(S.roundRect, { x, y: 2.0, w: 2.18, h: 3.52, rectRadius: 0.06, fill: { color: '173B40' }, line: { color: i === 4 ? C.lime : '45676D', width: i === 4 ? 2 : 1 } });
    slide.addText(l[0], { x: x + 0.18, y: 2.25, w: 0.55, h: 0.38, margin: 0, fontSize: 14, bold: true, color: i === 4 ? C.lime : C.teal });
    slide.addText(l[1], { x: x + 0.18, y: 2.94, w: 1.82, h: 0.85, margin: 0, fontSize: 16, bold: true, color: C.white, fit: 'shrink' });
    slide.addText(l[2], { x: x + 0.18, y: 4.2, w: 1.82, h: 0.92, margin: 0, fontSize: 11.2, color: 'BFD0D2', fit: 'shrink' });
  });
  slide.addText('Produktiviti = masa + kualiti + keselamatan + kebolehkesanan', { x: 0.65, y: 6.12, w: 12, h: 0.38, margin: 0, align: 'center', fontSize: 14.5, bold: true, color: C.lime });
  addNotes(slide, 'Terangkan lima kebocoran. Jangan labelkan kebocoran mengikut tahap manual, digital atau pintar kerana kebocoran boleh berlaku pada mana-mana tahap jika proses tidak direka dengan baik.');
}

// 9 — Problem statement
{
  const slide = baseSlide('Masalah', 9);
  addTitle(slide, 'Nyatakan masalah, bukan alat', 'Masalah yang baik boleh disiasat sebelum teknologi dipilih.');
  card(slide, 0.75, 1.72, 3.1, 1.45, 'KURANG JELAS', '“Kita perlukan aplikasi aset.”', C.red, { fill: 'FFF3F1', titleColor: C.red, bodySize: 16 });
  slide.addShape(S.chevron, { x: 4.22, y: 2.05, w: 0.72, h: 0.72, fill: { color: 'C9D6D4' }, line: { color: 'C9D6D4' } });
  card(slide, 5.25, 1.72, 7.3, 1.45, 'LEBIH JELAS', '“Pegawai tidak dapat melihat lokasi, peminjam dan tarikh pulang aset dalam satu pandangan.”', C.teal, { fill: 'E7FAF6', titleColor: C.teal, bodySize: 15 });
  slide.addText('Formula masalah operasi', { x: 0.75, y: 3.72, w: 3.2, h: 0.4, margin: 0, fontSize: 15, bold: true, color: C.navy });
  const parts = [
    ['PENGGUNA', C.navy], ['sukar untuk', C.gray], ['TUGAS', C.blue], ['kerana', C.gray], ['PUNCA', C.amber], ['menyebabkan', C.gray], ['KESAN', C.teal]
  ];
  let x = 0.75;
  const widths = [1.45, 1.28, 1.25, 0.92, 1.22, 1.65, 1.2];
  parts.forEach((p, i) => {
    const isKey = [0, 2, 4, 6].includes(i);
    if (isKey) {
      slide.addShape(S.roundRect, { x, y: 4.45, w: widths[i], h: 0.66, rectRadius: 0.05, fill: { color: p[1] }, line: { color: p[1] } });
      slide.addText(p[0], { x, y: 4.66, w: widths[i], h: 0.23, margin: 0, align: 'center', fontSize: 11, bold: true, color: C.white });
    } else {
      slide.addText(p[0], { x, y: 4.64, w: widths[i], h: 0.25, margin: 0, align: 'center', fontSize: 12, color: C.gray });
    }
    x += widths[i] + 0.18;
  });
  slide.addText('Petunjuk kualiti: pengguna, tugas, punca dan kesan semuanya boleh diperiksa.', { x: 0.75, y: 5.78, w: 11.8, h: 0.38, margin: 0, align: 'center', fontSize: 14, bold: true, color: C.teal });
  addNotes(slide, 'Baca dua contoh. Minta peserta menerangkan mengapa pernyataan kedua lebih berguna. Gunakan formula pengguna–tugas–punca–kesan untuk membetulkan masalah yang masih terlalu umum.');
}

// 10 — Activity
{
  const slide = baseSlide('Aktiviti', 10, { dark: true });
  addTitle(slide, 'Aktiviti 2 minit: satu masalah sebenar', 'Satu nota, satu masalah — jangan sebut nama aplikasi.', { color: C.white, subColor: 'BFD0D2' });
  slide.addText('02:00', { x: 0.78, y: 1.78, w: 3.0, h: 1.1, margin: 0, fontSize: 46, bold: true, color: C.lime, align: 'center' });
  const steps = [
    ['1', 'Tulis masalah', 'Gunakan pengalaman kerja sebenar.'],
    ['2', 'Nyatakan kesan', 'Masa, kualiti, keselamatan atau audit.'],
    ['3', 'Tampal dan kelompok', 'Letakkan di bawah lima kebocoran.']
  ];
  steps.forEach((s, i) => {
    const y = 1.72 + i * 1.38;
    numberBadge(slide, 4.5, y, s[0], C.teal, C.white, 0.52);
    slide.addText(s[1], { x: 5.25, y: y + 0.02, w: 2.65, h: 0.35, margin: 0, fontSize: 17, bold: true, color: C.white });
    slide.addText(s[2], { x: 5.25, y: y + 0.5, w: 5.9, h: 0.42, margin: 0, fontSize: 12.5, color: 'BFD0D2' });
  });
  slide.addShape(S.roundRect, { x: 0.78, y: 5.58, w: 11.8, h: 0.72, rectRadius: 0.05, fill: { color: '173C40' }, line: { color: '45676D' } });
  slide.addText('Contoh baik: “Status pinjaman aset sukar dijejaki selepas aset meninggalkan makmal.”', { x: 1.05, y: 5.82, w: 11.25, h: 0.25, margin: 0, align: 'center', fontSize: 13.5, bold: true, color: C.lime });
  addNotes(slide, 'Mulakan pemasa dua minit. Peserta menulis satu masalah pada satu nota. Minta mereka menulis masalah dan kesan, bukan penyelesaian. Kelompokkan respons mengikut lima kebocoran.');
}

// 11 — Six capabilities
{
  const slide = baseSlide('Keupayaan', 11);
  addTitle(slide, 'Enam keupayaan aplikasi pintar', 'Fikirkan fungsi yang diperlukan — bukan jenama alat.');
  const caps = [
    ['01', 'Mengumpul', 'Borang, imej, bacaan dan lampiran', C.teal],
    ['02', 'Menyusun', 'ID, kategori, nama dan carian', C.blue],
    ['03', 'Menyemak', 'Wajib, format, unit dan julat', C.green],
    ['04', 'Membantu', 'Carian, ringkasan, klasifikasi dan draf', C.amber],
    ['05', 'Mengautomasi', 'Notifikasi, status, pengiraan dan dokumen', C.navy],
    ['06', 'Memantau', 'Dashboard, tunggakan, trend dan pengecualian', C.red]
  ];
  caps.forEach((c, i) => {
    const x = 0.72 + (i % 3) * 4.15;
    const y = 1.73 + Math.floor(i / 3) * 2.28;
    rect(slide, x, y, 3.72, 1.78, C.white, c[3], true);
    numberBadge(slide, x + 0.2, y + 0.2, c[0], c[3], C.white, 0.48);
    slide.addText(c[1], { x: x + 0.86, y: y + 0.22, w: 2.5, h: 0.38, margin: 0, fontSize: 16.5, bold: true, color: C.ink });
    slide.addText(c[2], { x: x + 0.22, y: y + 0.9, w: 3.22, h: 0.54, margin: 0, fontSize: 11.7, color: C.gray, align: 'center', fit: 'shrink' });
  });
  slide.addText('Satu percubaan awal biasanya memerlukan maksimum dua atau tiga keupayaan.', { x: 0.72, y: 6.28, w: 11.9, h: 0.32, margin: 0, align: 'center', fontSize: 13.5, bold: true, color: C.teal });
  addNotes(slide, 'Terangkan enam keupayaan. Satu penyelesaian boleh menggabungkan beberapa keupayaan, tetapi jangan memasukkan semuanya ke dalam percubaan awal.');
}

// 12 — Matching
{
  const slide = baseSlide('Keupayaan', 12);
  addTitle(slide, 'Padankan keupayaan dengan kerja MPE', 'Contoh padanan — peserta boleh mencadangkan gabungan lain dengan justifikasi.');
  const pairs = [
    ['Rekod aktiviti di lokasi', 'MENGUMPUL + MENYEMAK'],
    ['Cari sijil kalibrasi', 'MENYUSUN + MEMANTAU'],
    ['Sediakan draf ringkasan ujian', 'MEMBANTU + MENYEMAK'],
    ['Jejak pinjaman aset', 'MENGAUTOMASI + MEMANTAU'],
    ['Pantau keputusan ujian', 'MENYEMAK + MEMANTAU']
  ];
  pairs.forEach((p, i) => {
    const y = 1.70 + i * 0.90;
    rect(slide, 0.78, y, 4.35, 0.68, C.white, 'C9D5D3', true);
    slide.addText(p[0], { x: 1.02, y: y + 0.2, w: 3.87, h: 0.24, margin: 0, fontSize: 13, color: C.ink, fit: 'shrink' });
    arrow(slide, 5.4, y + 0.34, 6.3, y + 0.34, C.teal, 1.8);
    slide.addShape(S.roundRect, { x: 6.58, y, w: 5.9, h: 0.68, rectRadius: 0.05, fill: { color: i === 2 ? 'FFF5DE' : 'E4F8F3' }, line: { color: i === 2 ? C.amber : C.teal } });
    slide.addText(p[1], { x: 6.82, y: y + 0.2, w: 5.42, h: 0.24, margin: 0, fontSize: 12.2, bold: true, color: i === 2 ? '855D15' : C.navy, fit: 'shrink' });
  });
  slide.addText('Latihan lisan: pilih satu nota masalah dan cadangkan satu atau dua keupayaan.', { x: 0.78, y: 6.35, w: 11.7, h: 0.3, margin: 0, align: 'center', fontSize: 13, bold: true, color: C.teal });
  addNotes(slide, 'Pilih dua nota masalah daripada papan. Minta peserta memadankan masalah itu dengan keupayaan. Tanyakan mengapa keupayaan tersebut sesuai.');
}

// 13 — Rules vs AI
{
  const slide = baseSlide('Keupayaan', 13);
  addTitle(slide, 'Automasi peraturan atau bantuan AI?', 'Gunakan kaedah paling mudah dan stabil yang memenuhi keperluan.');
  card(slide, 0.75, 1.68, 5.82, 3.9, 'AUTOMASI BERASASKAN PERATURAN', 'Langkah dan keputusan jelas\n\nHasil boleh dijangka apabila input, peraturan dan konfigurasi adalah sah\n\nContoh MPE:\n— Jana ID rekod\n— Kira nilai matematik\n— Format tarikh dan status', C.blue, { titleColor: C.blue, bodySize: 13.5 });
  card(slide, 6.77, 1.68, 5.82, 3.9, 'AI DENGAN SEMAKAN', 'Bahasa, pola dan variasi tinggi\n\nHasil ialah cadangan atau draf yang perlu dinilai\n\nContoh MPE:\n— Ringkaskan catatan ujian\n— Kelaskan komen\n— Cadangkan isu untuk semakan', C.teal, { titleColor: C.teal, bodySize: 13.5 });
  slide.addShape(S.roundRect, { x: 1.35, y: 5.93, w: 10.65, h: 0.58, rectRadius: 0.05, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText('Jangan gunakan AI bagi tugas berasaskan peraturan jika automasi biasa sudah memadai.', { x: 1.65, y: 6.1, w: 10.05, h: 0.25, margin: 0, align: 'center', fontSize: 13.5, bold: true, color: C.white });
  addNotes(slide, 'Terangkan bahawa automasi biasa sering lebih boleh diramal dan diaudit. AI berguna apabila bahasa atau pola mempunyai variasi tinggi, tetapi hasilnya masih perlu disemak.');
}

// 14 — Priority
{
  const slide = baseSlide('Keutamaan', 14);
  addTitle(slide, 'Pilih peluang yang berbaloi', 'Skor membantu perbincangan; ia bukan kelulusan automatik.');
  slide.addShape(S.roundRect, { x: 0.78, y: 1.65, w: 11.78, h: 1.04, rectRadius: 0.06, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText('KEUTAMAAN  =  NILAI  +  KEKERAPAN  +  KEBOLEHLAKSANAAN  −  RISIKO', { x: 1.05, y: 1.97, w: 11.24, h: 0.34, margin: 0, align: 'center', fontSize: 20, bold: true, color: C.white, fit: 'shrink' });
  slide.addText('Setiap dimensi diberi skor 1, 3 atau 5 — rujuk rubrik pada kanvas.', { x: 2.1, y: 2.42, w: 9.1, h: 0.18, margin: 0, align: 'center', fontSize: 9.5, color: 'C7D7D9' });
  const dims = [
    ['NILAI', 'Masa · kualiti · keselamatan · audit', C.teal],
    ['KEKERAPAN', 'Berapa kerap masalah berlaku?', C.blue],
    ['KEBOLEHLAKSANAAN', 'Data · alat · pemilik · masa', C.green],
    ['RISIKO', 'Sensitiviti · kesilapan · kesan gagal', C.red]
  ];
  dims.forEach((d, i) => {
    const x = 0.78 + i * 3.02;
    card(slide, x, 3.05, 2.72, 1.43, d[0], d[1], d[2], { titleSize: 12.5, bodySize: 10.8, fill: C.white });
  });
  const bands = [
    ['2–5', 'Nilai semula skop atau prasyarat', C.red],
    ['6–9', 'Perlu penjelasan atau kawalan', C.amber],
    ['10–14', 'Calon percubaan terkawal', C.green]
  ];
  bands.forEach((b, i) => {
    const x = 0.78 + i * 4.02;
    slide.addShape(S.roundRect, { x, y: 5.03, w: 3.7, h: 1.08, rectRadius: 0.05, fill: { color: b[2] }, line: { color: b[2] } });
    slide.addText(b[0], { x: x + 0.2, y: 5.25, w: 0.78, h: 0.35, margin: 0, fontSize: 17, bold: true, color: C.white });
    slide.addText(b[1], { x: x + 1.15, y: 5.2, w: 2.28, h: 0.48, margin: 0, fontSize: 11.5, bold: true, color: C.white, fit: 'shrink' });
  });
  addNotes(slide, 'Setiap dimensi diberi skor 1, 3 atau 5 mengikut rubrik pada kanvas. Risiko ditolak. Skor tinggi bermaksud calon percubaan terkawal, bukan arahan untuk terus melaksanakan tanpa pemilik proses.');
}

// 15 — Human control
{
  const slide = baseSlide('Kawalan', 15, { dark: true });
  addTitle(slide, 'Manusia kekal dalam kawalan', 'Aplikasi membantu kerja rutin; pegawai mengesahkan keputusan penting.', { color: C.white, subColor: 'BFD0D2' });
  const steps = [
    ['1', 'APLIKASI MEMBANTU', 'Kumpul data\nSemak input\nSusun maklumat', C.teal],
    ['2', 'MANUSIA MENYEMAK', 'Nilai output\nBuat keputusan teknikal\nSahkan ketepatan', C.lime],
    ['3', 'TINDAKAN DIREKOD', 'Rekod kelulusan\nTarikh dan masa\nJejak audit', C.blue]
  ];
  steps.forEach((s, i) => {
    const x = 0.7 + i * 4.25;
    if (i < 2) arrow(slide, x + 3.68, 3.52, x + 4.08, 3.52, '779398', 2);
    slide.addShape(S.roundRect, { x, y: 2.0, w: 3.68, h: 3.25, rectRadius: 0.08, fill: { color: '173C40' }, line: { color: s[3], width: 2 } });
    numberBadge(slide, x + 0.22, 2.26, s[0], s[3], s[3] === C.lime ? C.navy : C.white, 0.56);
    slide.addText(s[1], { x: x + 0.25, y: 3.08, w: 3.18, h: 0.44, margin: 0, align: 'center', fontSize: 15.5, bold: true, color: C.white, fit: 'shrink' });
    slide.addText(s[2], { x: x + 0.45, y: 3.88, w: 2.78, h: 0.85, margin: 0, align: 'center', fontSize: 12.5, color: 'BFD0D2', breakLine: false, fit: 'shrink' });
  });
  slide.addText('Tentukan: pemilik proses · akses data · output yang perlu disahkan · cara membetulkan ralat · retensi · sandaran', { x: 0.72, y: 5.92, w: 11.9, h: 0.48, margin: 0, align: 'center', fontSize: 13, bold: true, color: C.lime, fit: 'shrink' });
  addNotes(slide, 'Gunakan gelung aplikasi membantu, manusia menyemak dan tindakan direkod. Risiko bukan alasan untuk berhenti; ia ialah keperluan reka bentuk.');
}

// 16 — MPE Hub
{
  const slide = baseSlide('Demonstrasi', 16);
  addTitle(slide, 'Kajian kes: MPE Hub', 'Satu aplikasi web responsif untuk tiga keperluan operasi MPE.');
  rect(slide, 0.67, 1.52, 8.38, 4.75, C.white, 'C7D4D2', true);
  slide.addImage({ path: DASHBOARD, x: 0.83, y: 1.7, w: 8.05, h: 4.42, altText: 'Tangkap layar sebenar dashboard MPE Hub' });
  const mods = [
    ['BUKU LOG', 'Kehadiran, aktiviti dan lampiran', C.teal],
    ['KEW.PA-9', 'Pergerakan dan pinjaman aset', C.blue],
    ['MCCB', 'Rekod serta keputusan ujian', C.green]
  ];
  mods.forEach((m, i) => card(slide, 9.32, 1.68 + i * 1.35, 3.28, 1.03, m[0], m[1], m[2], { titleSize: 12.5, bodySize: 10.2 }));
  slide.addText('Buka aplikasi', { x: 9.32, y: 5.88, w: 1.5, h: 0.28, margin: 0, fontSize: 11.5, bold: true, color: C.teal, hyperlink: { url: 'https://drmurtadha.github.io/mpe-hub/' } });
  slide.addText('drmurtadha.github.io/mpe-hub', { x: 10.55, y: 5.88, w: 2.04, h: 0.28, margin: 0, fontSize: 9.2, color: C.gray, hyperlink: { url: 'https://drmurtadha.github.io/mpe-hub/' }, fit: 'shrink' });
  addNotes(slide, 'Mulakan demonstrasi 12 minit. Terangkan bahawa MPE Hub ialah demonstrasi corak transformasi, bukan produk yang mesti diterima tanpa penilaian proses. Buka aplikasi sebenar dan tunjuk dashboard.');
}

// 17 — Before / after
{
  const slide = baseSlide('Demonstrasi', 17);
  addTitle(slide, 'Sebelum dan selepas', 'Manfaat ialah hipotesis yang perlu diuji menggunakan ukuran sebenar.');
  const before = ['Rekod berasingan', 'Medan tidak konsisten', 'Status perlu ditanya', 'Ringkasan manual', 'Fail sukar dipautkan'];
  const after = ['Antara muka berpusat', 'Validasi dan unit jelas', 'Status terkini selepas penyegerakan', 'Dashboard selepas refresh', 'Rekod dan lampiran berkaitan'];
  slide.addText('SEBELUM', { x: 0.78, y: 1.55, w: 4.95, h: 0.38, margin: 0, align: 'center', fontSize: 16, bold: true, color: C.gray });
  slide.addText('SELEPAS', { x: 7.6, y: 1.55, w: 4.95, h: 0.38, margin: 0, align: 'center', fontSize: 16, bold: true, color: C.teal });
  before.forEach((b, i) => {
    const y = 2.08 + i * 0.78;
    rect(slide, 0.78, y, 4.95, 0.58, 'F2F3F0', 'D2D9D7', true);
    slide.addText(b, { x: 1.02, y: y + 0.18, w: 4.47, h: 0.22, margin: 0, fontSize: 12.4, color: C.gray, fit: 'shrink' });
    arrow(slide, 5.95, y + 0.29, 7.3, y + 0.29, i === 2 ? C.blue : C.teal, 1.8);
    rect(slide, 7.6, y, 4.95, 0.58, 'E5F8F3', '90D4C9', true);
    slide.addText(after[i], { x: 7.84, y: y + 0.18, w: 4.47, h: 0.22, margin: 0, fontSize: 12.4, bold: true, color: C.navy, fit: 'shrink' });
  });
  slide.addText('Demo seterusnya: Buku Log → validasi → ID rekod → dashboard', { x: 0.78, y: 6.2, w: 11.77, h: 0.34, margin: 0, align: 'center', fontSize: 13.5, bold: true, color: C.teal });
  addNotes(slide, 'Gunakan istilah sasaran atau hipotesis. Jangan mendakwa semua manfaat telah terbukti. Tunjukkan satu borang mudah alih dan terangkan bahawa status berubah selepas data disimpan dan dashboard disegerakkan.');
}

// 18 — Demo questions
{
  const slide = baseSlide('Demonstrasi', 18);
  addTitle(slide, 'Apa yang menjadikannya pintar?', 'Perhatikan empat perkara semasa demonstrasi MPE Hub.');
  rect(slide, 4.25, 1.55, 4.85, 4.55, C.white, 'C4D2CF', true);
  slide.addImage({ path: LOGBOOK, x: 4.42, y: 1.73, w: 4.51, h: 4.05, altText: 'Tangkap layar sebenar borang Buku Log Makmal' });
  const qs = [
    ['1', 'Penyatuan', 'Data apa dikumpul sekali?'],
    ['2', 'Pencegahan', 'Ralat apa dicegah semasa input?'],
    ['3', 'Ketelusan', 'Status apa boleh dilihat oleh pengguna yang dibenarkan?'],
    ['4', 'Titik kawalan', 'Keputusan apa kekal di tangan manusia?']
  ];
  qs.forEach((q, i) => {
    const left = i < 2;
    const x = left ? 0.68 : 9.35;
    const y = 1.72 + (i % 2) * 2.18;
    card(slide, x, y, 3.28, 1.62, q[1], q[2], i === 3 ? C.amber : C.teal, { titleSize: 13.5, bodySize: 11.5 });
    numberBadge(slide, x + 2.52, y + 0.18, q[0], i === 3 ? C.amber : C.teal, C.white, 0.44);
  });
  slide.addText('Debrief: jawab satu soalan setiap kumpulan.', { x: 4.25, y: 6.18, w: 4.85, h: 0.32, margin: 0, align: 'center', fontSize: 13.2, bold: true, color: C.teal });
  addNotes(slide, 'Sebelum demo, sebut empat soalan. Selepas demo, minta peserta memberikan jawapan pendek. Gunakan pengguna yang dibenarkan, bukan semua pihak, apabila menerangkan ketelusan status.');
}

// 19 — Canvas
{
  const slide = baseSlide('Kanvas', 19);
  addTitle(slide, 'Kanvas Peluang Produktiviti MPE', 'Lapan bahagian untuk menukar masalah kepada percubaan yang boleh dinilai.');
  const blocks = [
    ['1', 'Pengguna & masalah', C.navy],
    ['2', 'Keadaan semasa', C.gray],
    ['3', 'Kesan masalah', C.red],
    ['4', 'Keupayaan pintar', C.teal],
    ['5', 'Data & dokumen', C.blue],
    ['6', 'Ukuran kejayaan', C.green],
    ['7', 'Risiko & semakan', C.amber],
    ['8', 'Percubaan kecil', C.teal]
  ];
  blocks.forEach((b, i) => {
    const col = i < 3 ? 0 : i < 5 ? 1 : 2;
    const row = col === 0 ? i : col === 1 ? i - 3 : i - 5;
    const x = [0.78, 4.65, 8.52][col];
    const y = 1.62 + row * 1.42;
    const h = col === 1 ? 1.95 : 1.08;
    card(slide, x, y, 3.45, h, `${b[0]}. ${b[1]}`, col === 1 ? (i === 3 ? 'Keupayaan mana mengubah pengalaman kerja?' : 'Input minimum, sumber dan output?') : '', b[2], { titleSize: 13, bodySize: 10.5, fill: i === 7 ? 'E9FAF4' : C.white });
  });
  arrow(slide, 4.24, 3.15, 4.57, 3.15, C.teal, 1.6);
  arrow(slide, 8.12, 3.15, 8.44, 3.15, C.teal, 1.6);
  slide.addShape(S.roundRect, { x: 4.65, y: 5.88, w: 3.45, h: 0.54, rectRadius: 0.05, fill: { color: C.navy }, line: { color: C.navy } });
  slide.addText('Masalah → Reka bentuk → Nilai & kawal', { x: 4.82, y: 6.05, w: 3.1, h: 0.22, margin: 0, align: 'center', fontSize: 11.5, bold: true, color: C.white });
  addNotes(slide, 'Edarkan kanvas A3. Terangkan lapan bahagian. Tekankan satu proses, satu kumpulan pengguna, satu ukuran utama dan satu percubaan kecil.');
}

// 20 — Timed activity
{
  const slide = baseSlide('Aktiviti', 20, { dark: true });
  addTitle(slide, 'Aktiviti kumpulan: 18 minit', 'Satu proses · satu pengguna utama · satu metrik · satu percubaan kecil', { color: C.white, subColor: 'BFD0D2' });
  const phases = [
    ['0–3', 'Pilih masalah', 'Gunakan inventori masalah sebenar', C.teal],
    ['3–10', 'Lengkapkan kanvas', 'Masalah, data, ukuran dan kawalan', C.blue],
    ['10–14', 'Beri skor', 'Nilai + kekerapan + kebolehlaksanaan − risiko', C.amber],
    ['14–18', 'Sediakan pitch', 'Terangkan nilai dalam 60 saat', C.lime]
  ];
  phases.forEach((p, i) => {
    const x = 0.68 + i * 3.1;
    slide.addShape(S.roundRect, { x, y: 2.05, w: 2.72, h: 3.45, rectRadius: 0.06, fill: { color: '173C40' }, line: { color: p[3], width: 2 } });
    slide.addText(p[0], { x: x + 0.25, y: 2.35, w: 2.22, h: 0.65, margin: 0, align: 'center', fontSize: 26, bold: true, color: p[3] === C.lime ? C.lime : C.white });
    slide.addText('MINIT', { x: x + 0.25, y: 3.03, w: 2.22, h: 0.25, margin: 0, align: 'center', fontSize: 9, charSpacing: 2, color: '9EB4B7' });
    slide.addText(p[1], { x: x + 0.25, y: 3.65, w: 2.22, h: 0.5, margin: 0, align: 'center', fontSize: 16, bold: true, color: C.white, fit: 'shrink' });
    slide.addText(p[2], { x: x + 0.3, y: 4.45, w: 2.12, h: 0.6, margin: 0, align: 'center', fontSize: 10.8, color: 'BFD0D2', fit: 'shrink' });
  });
  slide.addText('Hasil: satu kanvas lengkap + satu pitch 60 saat bagi setiap kumpulan', { x: 0.72, y: 6.12, w: 11.9, h: 0.42, margin: 0, align: 'center', fontSize: 12.5, bold: true, color: C.lime, fit: 'shrink' });
  addNotes(slide, 'Mulakan pemasa. Beri amaran pada 10 minit, 5 minit dan 1 minit terakhir. Jika masa lewat, kurangkan bilangan pembentangan kumpulan, bukan masa kanvas. Bergerak antara kumpulan dan semak: masalah jelas, ukuran ada, siapa menyemak, dan percubaan cukup kecil.');
}

// 21 — Pitch
{
  const slide = baseSlide('Perkongsian', 21);
  addTitle(slide, 'Pitch 60 saat', 'Terangkan nilai, ukuran dan kawalan — bukan senarai ciri aplikasi.');
  slide.addShape(S.roundRect, { x: 0.82, y: 1.62, w: 11.7, h: 3.88, rectRadius: 0.07, fill: { color: C.white }, line: { color: 'C4D2CF', width: 1.2 }, shadow: shadow() });
  const textRuns = [
    { text: 'Kami mahu membantu ', options: {} },
    { text: '[PENGGUNA]', options: { bold: true, color: C.navy } },
    { text: ' yang menghadapi ', options: {} },
    { text: '[MASALAH]', options: { bold: true, color: C.red } },
    { text: '.\nKami mencadangkan ', options: {} },
    { text: '[KEUPAYAAN]', options: { bold: true, color: C.teal } },
    { text: ' supaya ', options: {} },
    { text: '[HASIL]', options: { bold: true, color: C.green } },
    { text: '.\nKejayaan diukur melalui ', options: {} },
    { text: '[METRIK]', options: { bold: true, color: C.blue } },
    { text: '. Risiko utama ialah ', options: {} },
    { text: '[RISIKO]', options: { bold: true, color: C.amber } },
    { text: ' dan dikawal melalui ', options: {} },
    { text: '[KAWALAN]', options: { bold: true, color: C.navy } },
    { text: '.\nPercubaan pertama kami ialah ', options: {} },
    { text: '[LANGKAH]', options: { bold: true, color: C.teal } },
    { text: '.', options: {} }
  ];
  slide.addText(textRuns, { x: 1.25, y: 2.12, w: 10.8, h: 2.7, margin: 0.05, fontSize: 18, color: C.gray, align: 'center', valign: 'mid', breakLine: false, fit: 'shrink' });
  pill(slide, 4.84, 5.85, 3.65, '60 SAAT + 1 SOALAN KLARIFIKASI', C.navy);
  addNotes(slide, 'Setiap kumpulan mempunyai 60 saat. Benarkan satu soalan klarifikasi, bukan perbahasan panjang. Jika kumpulan melebihi lima, pilih tiga untuk berkongsi dan kutip kanvas lain.');
}

// 22 — Close
{
  const slide = baseSlide('Penutup', 22, { dark: true });
  addTitle(slide, 'Tiga prinsip untuk dibawa pulang', 'Produktiviti meningkat apabila kerja direka dengan sengaja.', { color: C.white, subColor: 'BFD0D2' });
  const principles = [
    ['1', 'Mulakan dengan masalah kerja.', 'Teknologi ialah alat, bukan matlamat.'],
    ['2', 'Kumpul data sekali, gunakan berkali-kali.', 'Kurangkan pemindahan dan ralat.'],
    ['3', 'Kekalkan manusia pada keputusan penting.', 'Automasi proses, sahkan hasil.']
  ];
  principles.forEach((p, i) => {
    const x = 0.68 + i * 4.22;
    slide.addShape(S.roundRect, { x, y: 1.8, w: 3.78, h: 2.55, rectRadius: 0.07, fill: { color: '173C40' }, line: { color: i === 1 ? C.lime : C.teal, width: 2 } });
    numberBadge(slide, x + 0.25, 2.08, p[0], i === 1 ? C.lime : C.teal, i === 1 ? C.navy : C.white, 0.56);
    slide.addText(p[1], { x: x + 0.25, y: 2.88, w: 3.28, h: 0.68, margin: 0, align: 'center', fontSize: 17, bold: true, color: C.white, fit: 'shrink' });
    slide.addText(p[2], { x: x + 0.4, y: 3.7, w: 2.98, h: 0.35, margin: 0, align: 'center', fontSize: 11.5, color: 'BFD0D2', fit: 'shrink' });
  });
  slide.addShape(S.roundRect, { x: 0.68, y: 4.85, w: 11.99, h: 1.12, rectRadius: 0.06, fill: { color: C.lime }, line: { color: C.lime } });
  slide.addText('EXIT TICKET', { x: 0.95, y: 5.14, w: 1.55, h: 0.3, margin: 0, fontSize: 13, bold: true, color: C.navy });
  slide.addText('Satu kefahaman · satu peluang · satu risiko · satu langkah dua minggu', { x: 2.75, y: 5.12, w: 8.95, h: 0.35, margin: 0, align: 'center', fontSize: 15.5, bold: true, color: C.navy, fit: 'shrink' });
  slide.addText('Seterusnya: Modul 2 — Automasi digital dalam penyediaan dokumen rasmi', { x: 0.68, y: 6.38, w: 11.99, h: 0.35, margin: 0, align: 'center', fontSize: 13.5, bold: true, color: C.white });
  addNotes(slide, 'Rumusan: produktiviti tidak meningkat kerana lebih banyak aplikasi. Ia meningkat apabila data dikumpul dengan betul, kerja berulang dikurangkan, pengecualian kelihatan dan pegawai boleh membuat keputusan dengan yakin. Minta peserta melengkapkan exit ticket.');
}

pptx.writeFile({ fileName: OUT, compression: true });
