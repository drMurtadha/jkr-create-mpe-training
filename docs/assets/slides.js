const slides = [
  {
    section: 'Modul 1 · Pembukaan', dark: true,
    title: 'Aplikasi pintar untuk produktiviti kerja MPE',
    lead: 'Daripada masalah operasi kepada satu percubaan kecil yang boleh dinilai.',
    html: `<div class="button-row"><span class="button accent">28 Julai 2026</span><span class="button ghost">90 minit</span></div>`,
    notes: 'Sambut peserta dan jelaskan bahawa sesi ini menumpukan pemilihan masalah sebelum memilih teknologi.'
  },
  {
    section: 'Pembukaan', title: 'Hasil akhir sesi',
    lead: 'Pada 10.30 pagi, setiap kumpulan membawa satu peluang yang boleh dinilai.',
    html: `<div class="slide-grid" style="--cols:5">${[
      ['01','Terangkan','Maksud aplikasi pintar'],['02','Bezakan','Manual, digital dan pintar'],['03','Kenal pasti','Kebocoran produktiviti'],['04','Nilai','Nilai, kebolehlaksanaan dan risiko'],['05','Hasilkan','Satu Kanvas Peluang MPE']
    ].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Baca hasil pembelajaran secara ringkas. Tunjukkan bahawa kanvas dan pitch ialah bukti pembelajaran.'
  },
  {
    section: 'Pembukaan', title: 'Perjalanan bengkel dua hari',
    lead: 'Peluang yang dipilih hari ini menjadi benang merah bagi Modul 2–5.',
    html: `<div class="flow">${[
      ['01','Pilih peluang','Aplikasi pintar'],['02','Automasi dokumen','Dokumen rasmi'],['03','Analisis rekod','Data teknikal'],['04','Baiki aliran kerja','Proses makmal'],['05','Sedia dan bentang','Dokumen projek']
    ].map((x,i)=>`${i?'<span>→</span>':''}<div><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Terangkan hubungan antara modul. Modul 1 menentukan masalah; modul seterusnya menguji kaedah penyelesaian.'
  },
  {
    section: 'Pembukaan', dark: true, title: 'Tinjauan pantas',
    lead: 'Angkat tangan jika perkara ini pernah berlaku dalam kerja anda.',
    html: `<div class="slide-grid" style="--cols:4">${['Masukkan data yang sama lebih daripada sekali','Cari versi fail atau rekod yang betul','Tunggu status semakan tanpa kepastian','Betulkan format atau pengiraan berulang'].map((x,i)=>`<div class="slide-card"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Gunakan undian tangan. Jangan bincang penyelesaian lagi; kumpulkan pengalaman masalah.'
  },
  {
    section: 'Konsep', title: 'Apakah aplikasi pintar?',
    lead: 'Aplikasi tidak perlu menggunakan AI untuk menghasilkan kerja yang lebih pintar.',
    html: `<div class="pitch"><b>Aplikasi pintar</b> membantu manusia menangkap data sekali, menyemak lebih awal, mengautomasi langkah rutin, memantau status dan mengekalkan kawalan keputusan.</div><div class="slide-grid" style="--cols:4">${['Kurang sentuhan','Ralat dicegah','Status jelas','Jejak tersedia'].map(x=>`<div class="slide-card accent"><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Tekankan bahawa nilai datang daripada reka bentuk kerja yang lebih baik, bukan semata-mata penggunaan AI.'
  },
  {
    section: 'Konsep', title: 'Tiga tahap kematangan kerja',
    lead: 'Digital ialah langkah penting, tetapi belum tentu menghapuskan kerja berulang.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><h3>MANUAL</h3><p>Tulis dan pindah<br>Cari secara manual<br>Semak di akhir<br>Ringkasan manual</p></div><div class="slide-card"><h3>DIGITAL</h3><p>Isi pada skrin<br>Fail elektronik<br>Semak senarai<br>Laporan berasingan</p></div><div class="slide-card accent"><h3>PINTAR</h3><p>Tangkap sekali<br>Cari dan jejak<br>Validasi semasa input<br>Status dan metrik tersedia</p></div></div>`,
    notes: 'Minta peserta meletakkan satu proses MPE pada tahap manual, digital atau pintar.'
  },
  {
    section: 'Konsep', title: 'Contoh: perjalanan Buku Log Makmal',
    lead: 'Perhatikan bagaimana bilangan sentuhan dan kelewatan berubah.',
    html: `<div class="flow">${['Catat aktiviti','Semak medan','Simpan rekod','Jejak status','Ringkaskan'].map((x,i)=>`${i?'<span>→</span>':''}<div><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div><div class="pitch">Matlamatnya bukan sekadar borang digital — matlamatnya ialah aliran kerja yang lebih jelas dan boleh dijejak.</div>`,
    notes: 'Bandingkan aliran berasingan dengan satu aliran yang menangkap, menyemak dan menggunakan semula data.'
  },
  {
    section: 'Masalah', dark: true, title: 'Lima kebocoran produktiviti',
    lead: 'Di manakah masa, kualiti atau kebolehkesanan hilang?',
    html: `<div class="slide-grid" style="--cols:5">${[
      ['01','Masuk data berulang'],['02','Cari fail atau versi'],['03','Menunggu semakan'],['04','Kira dan format semula'],['05','Ralat dikesan terlalu lewat']
    ].map(x=>`<div class="slide-card"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div>`,
    notes: 'Minta contoh sebenar bagi setiap kebocoran. Elakkan menyebut nama individu atau data sensitif.'
  },
  {
    section: 'Masalah', title: 'Nyatakan masalah, bukan alat',
    lead: 'Masalah yang baik boleh disiasat sebelum teknologi dipilih.',
    html: `<div class="pitch"><b>[PENGGUNA]</b> sukar untuk <b>[TUGAS]</b> kerana <b>[PUNCA]</b>, menyebabkan <b>[KESAN]</b>.</div><div class="slide-grid" style="--cols:2"><div class="slide-card"><h3>Kurang jelas</h3><p>“Kita perlukan aplikasi baharu.”</p></div><div class="slide-card accent"><h3>Lebih boleh disiasat</h3><p>“Juruteknik sukar mengetahui status rekod kerana semakan berlaku melalui beberapa saluran, menyebabkan kerja susulan tertangguh.”</p></div></div>`,
    notes: 'Tunjukkan perbezaan antara permintaan alat dan pernyataan masalah yang boleh diuji.'
  },
  {
    section: 'Aktiviti', dark: true, title: 'Aktiviti 2 minit: satu masalah sebenar',
    lead: 'Satu nota, satu masalah — jangan sebut nama aplikasi.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><span class="big-number">01</span><h3>Pilih proses</h3><p>Kerja yang anda kenal.</p></div><div class="slide-card"><span class="big-number">02</span><h3>Tulis masalah</h3><p>Pengguna, tugas, punca dan kesan.</p></div><div class="slide-card lime"><span class="big-number">03</span><h3>Tampal</h3><p>Kumpulkan sebagai inventori peluang.</p></div></div><div class="pitch">Masa: <b>2:00</b></div>`,
    notes: 'Mulakan pemasa. Pilih beberapa nota untuk digunakan pada latihan padanan keupayaan.'
  },
  {
    section: 'Keupayaan', title: 'Enam keupayaan aplikasi pintar',
    lead: 'Fikirkan fungsi yang diperlukan — bukan jenama alat.',
    html: `<div class="slide-grid" style="--cols:3">${[
      ['Menangkap','Borang, imej, bacaan dan lampiran'],['Menyusun','Struktur data dan nama rekod'],['Menyemak','Medan kosong, format dan julat'],['Membantu','Mencari, merumus dan menggubal'],['Mengautomasi','Notifikasi, dokumen dan status'],['Memantau','Metrik, tunggakan dan pengecualian']
    ].map(x=>`<div class="slide-card accent"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`,
    notes: 'Satu percubaan awal biasanya hanya memerlukan dua atau tiga keupayaan.'
  },
  {
    section: 'Keupayaan', title: 'Padankan keupayaan dengan kerja MPE',
    lead: 'Peserta boleh mencadangkan gabungan lain dengan justifikasi.',
    html: `<div class="compare"><div class="compare-list">${['Rekod aktiviti di lokasi','Cari sijil kalibrasi','Sediakan draf ringkasan ujian','Jejak pinjaman aset','Pantau keputusan ujian'].map(x=>`<div class="compare-item">${x}</div>`).join('')}</div><span>→</span><div class="compare-list">${['Menangkap + menyemak','Menyusun + memantau','Membantu + menyemak','Mengautomasi + memantau','Menyemak + memantau'].map(x=>`<div class="compare-item"><b>${x}</b></div>`).join('')}</div></div>`,
    notes: 'Pilih dua nota masalah dan minta peserta menerangkan padanan yang dipilih.'
  },
  {
    section: 'Keupayaan', title: 'Automasi peraturan atau bantuan AI?',
    lead: 'Gunakan kaedah paling mudah dan stabil yang memenuhi keperluan.',
    html: `<div class="slide-grid" style="--cols:2"><div class="slide-card"><h3>Automasi berasaskan peraturan</h3><p>Langkah dan keputusan jelas. Contoh: jana ID, kira nilai, format tarikh dan status.</p></div><div class="slide-card accent"><h3>AI dengan semakan</h3><p>Bahasa, pola dan variasi tinggi. Contoh: ringkaskan catatan, kelaskan komen, cadangkan isu.</p></div></div><div class="pitch">Jangan gunakan AI jika automasi biasa sudah memadai.</div>`,
    notes: 'Terangkan bahawa hasil AI ialah cadangan atau draf yang perlu dinilai.'
  },
  {
    section: 'Keutamaan', title: 'Pilih peluang yang berbaloi',
    lead: 'Skor membantu perbincangan; ia bukan kelulusan automatik.',
    html: `<div class="pitch"><b>Keutamaan = Nilai + Kekerapan + Kebolehlaksanaan − Risiko</b><br><small>Setiap dimensi: 1, 3 atau 5 berdasarkan rubrik kanvas.</small></div><div class="slide-grid" style="--cols:3"><div class="slide-card"><h3>2–5</h3><p>Nilai semula skop atau prasyarat.</p></div><div class="slide-card"><h3>6–9</h3><p>Perlu penjelasan atau kawalan.</p></div><div class="slide-card accent"><h3>10–14</h3><p>Calon percubaan terkawal.</p></div></div>`,
    notes: 'Rujuk rubrik pada kanvas. Skor tinggi masih memerlukan pemilik proses dan kawalan.'
  },
  {
    section: 'Kawalan', dark: true, title: 'Manusia kekal dalam kawalan',
    lead: 'Aplikasi membantu kerja rutin; pegawai mengesahkan keputusan penting.',
    html: `<div class="flow"><div><h3>Aplikasi membantu</h3><p>Tangkap · semak · kira · cadang · maklumkan</p></div><span>→</span><div><h3>Pegawai menilai</h3><p>Ketepatan · konteks · risiko · pematuhan</p></div><span>→</span><div><h3>Pemilik meluluskan</h3><p>Keputusan teknikal dan tindakan rasmi</p></div></div>`,
    notes: 'Tekankan empat kawalan: akses, data, semakan manusia dan jejak audit.'
  },
  {
    section: 'Demonstrasi', title: 'Kajian kes: MPE Hub',
    lead: 'Satu aplikasi web responsif untuk tiga keperluan operasi MPE.',
    html: `<div class="slide-image"><img src="../assets/mpe-hub-dashboard.png" alt="Dashboard demonstrasi MPE Hub"><div class="compare-list"><div class="compare-item"><b>Buku Log</b><br>Kehadiran dan aktiviti</div><div class="compare-item"><b>KEW.PA-9</b><br>Pergerakan aset</div><div class="compare-item"><b>MCCB</b><br>Rekod ujian</div><a class="button" href="https://drmurtadha.github.io/mpe-hub/" target="_blank" rel="noopener">Buka MPE Hub ↗</a></div></div>`,
    notes: 'Buka aplikasi sebenar. Tangkap layar ialah sandaran jika rangkaian terganggu.'
  },
  {
    section: 'Demonstrasi', title: 'Sebelum dan selepas',
    lead: 'Manfaat ialah hipotesis yang perlu diuji menggunakan ukuran sebenar.',
    html: `<div class="compare"><div class="compare-list">${['Rekod berasingan','Medan tidak konsisten','Status perlu ditanya','Ringkasan manual','Fail sukar dipautkan'].map(x=>`<div class="compare-item">${x}</div>`).join('')}</div><span>→</span><div class="compare-list">${['Antara muka berpusat','Validasi dan unit jelas','Status selepas penyegerakan','Dashboard selepas refresh','Rekod dan lampiran berkaitan'].map(x=>`<div class="compare-item"><b>${x}</b></div>`).join('')}</div></div>`,
    notes: 'Elakkan dakwaan mutlak. Nyatakan bahawa manfaat perlu disahkan dengan masa, ralat dan maklum balas pengguna.'
  },
  {
    section: 'Demonstrasi', title: 'Apa yang menjadikannya pintar?',
    lead: 'Perhatikan empat perkara semasa demonstrasi MPE Hub.',
    html: `<div class="slide-grid" style="--cols:4">${[
      ['01','Penyatuan','Data ditangkap sekali'],['02','Pencegahan','Ralat dicegah semasa input'],['03','Ketelusan','Status dilihat pengguna dibenarkan'],['04','Titik kawalan','Keputusan penting kekal pada manusia']
    ].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Selepas demo, minta satu jawapan ringkas bagi setiap soalan.'
  },
  {
    section: 'Kanvas', title: 'Kanvas Peluang Produktiviti MPE',
    lead: 'Lapan bahagian untuk menukar masalah kepada percubaan yang boleh dinilai.',
    html: `<div class="slide-grid" style="--cols:4">${['Pengguna dan masalah','Keadaan semasa','Kesan masalah','Keupayaan pintar','Data dan dokumen','Ukuran kejayaan','Risiko dan semakan','Percubaan kecil'].map((x,i)=>`<div class="slide-card ${i===7?'accent':''}"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Edarkan kanvas. Tekankan satu proses, satu kumpulan pengguna, satu ukuran utama dan satu percubaan kecil.'
  },
  {
    section: 'Aktiviti', dark: true, title: 'Aktiviti kumpulan: 18 minit',
    lead: 'Satu proses · satu pengguna utama · satu metrik · satu percubaan kecil.',
    html: `<div class="slide-grid" style="--cols:4">${[
      ['0–3','Pilih masalah','Inventori masalah sebenar'],['3–10','Lengkapkan kanvas','Masalah, data, ukuran dan kawalan'],['10–14','Beri skor','Nilai + kekerapan + kebolehlaksanaan − risiko'],['14–18','Sediakan pitch','Terangkan nilai dalam 60 saat']
    ].map(x=>`<div class="slide-card"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Beri amaran pada 10 minit, 5 minit dan 1 minit terakhir. Bergerak antara kumpulan untuk semak skop dan kawalan.'
  },
  {
    section: 'Perkongsian', title: 'Pitch 60 saat',
    lead: 'Terangkan nilai, ukuran dan kawalan — bukan senarai ciri aplikasi.',
    html: `<div class="pitch">Kami mahu membantu <b>[PENGGUNA]</b> yang menghadapi <b>[MASALAH]</b>. Kami mencadangkan <b>[KEUPAYAAN]</b> supaya <b>[HASIL]</b>. Kejayaan diukur melalui <b>[METRIK]</b>. Risiko utama ialah <b>[RISIKO]</b> dan dikawal melalui <b>[KAWALAN]</b>. Percubaan pertama kami ialah <b>[LANGKAH]</b>.</div>`,
    notes: 'Hadkan setiap kumpulan kepada 60 saat dan satu soalan klarifikasi.'
  },
  {
    section: 'Penutup', dark: true, title: 'Tiga prinsip untuk dibawa pulang',
    lead: 'Produktiviti meningkat apabila kerja direka dengan sengaja.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><span class="big-number">1</span><h3>Mulakan dengan masalah kerja.</h3><p>Teknologi ialah alat, bukan matlamat.</p></div><div class="slide-card lime"><span class="big-number">2</span><h3>Tangkap data sekali, gunakan berkali-kali.</h3><p>Kurangkan pemindahan dan ralat.</p></div><div class="slide-card"><span class="big-number">3</span><h3>Kekalkan manusia pada keputusan penting.</h3><p>Automasi proses, sahkan hasil.</p></div></div><div class="pitch"><b>Exit ticket:</b> satu kefahaman · satu peluang · satu risiko · satu langkah dua minggu</div>`,
    notes: 'Minta peserta melengkapkan exit ticket sebelum bergerak ke Modul 2.'
  }
];

const viewport = document.querySelector('[data-slides]');
const count = document.querySelector('[data-slide-count]');
const progress = document.querySelector('[data-progress]');
const notesPanel = document.querySelector('[data-notes-panel]');
let current = Math.max(0, Math.min(slides.length - 1, Number(location.hash.slice(1)) - 1 || 0));

function renderSlides() {
  viewport.innerHTML = slides.map((slide, index) => `
    <section class="web-slide ${slide.dark ? 'dark' : ''}" data-slide="${index}" aria-hidden="true">
      <div class="web-slide-inner">
        <div class="slide-kicker">${slide.section}</div>
        <h1>${slide.title}</h1>
        <p class="lead">${slide.lead || ''}</p>
        ${slide.html || ''}
      </div>
    </section>`).join('');
}

function show(index, updateHash = true) {
  current = (index + slides.length) % slides.length;
  document.querySelectorAll('[data-slide]').forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle('active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  count.textContent = `${String(current + 1).padStart(2, '0')} / ${slides.length}`;
  progress.style.width = `${((current + 1) / slides.length) * 100}%`;
  notesPanel.innerHTML = `<strong>Nota penyampai · Slaid ${current + 1}</strong>${slides[current].notes}`;
  if (updateHash) history.replaceState(null, '', `#${current + 1}`);
}

renderSlides();
show(current, false);
document.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
document.querySelector('[data-next]').addEventListener('click', () => show(current + 1));
document.querySelector('[data-notes]').addEventListener('click', () => notesPanel.classList.toggle('open'));
document.querySelector('[data-fullscreen]').addEventListener('click', () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen());
document.addEventListener('keydown', (event) => {
  if (['ArrowRight', 'PageDown', ' '].includes(event.key)) { event.preventDefault(); show(current + 1); }
  if (['ArrowLeft', 'PageUp'].includes(event.key)) { event.preventDefault(); show(current - 1); }
  if (event.key === 'Home') show(0);
  if (event.key === 'End') show(slides.length - 1);
  if (event.key.toLowerCase() === 'n') notesPanel.classList.toggle('open');
  if (event.key.toLowerCase() === 'f') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
});
