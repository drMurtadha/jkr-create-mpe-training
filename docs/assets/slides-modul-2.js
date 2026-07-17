const slides = [
  {
    section: 'Modul 2 · Pembukaan', dark: true,
    title: 'AI generatif untuk dokumen rasmi tidak terperingkat',
    lead: 'Surat rasmi · minit tindakan · kawalan rekod',
    html: `<div class="button-row"><span class="button accent">28 Julai 2026</span><span class="button ghost">120 minit</span></div><div class="pitch"><b>AI membantu menyediakan draf.</b><br>Pegawai kekal bertanggungjawab terhadap fakta, semakan dan kelulusan.</div>`,
    notes: 'Terangkan bahawa latihan menggunakan data rekaan dan AI hanya sebagai pembantu penyediaan draf.'
  },
  {
    section: 'Pembukaan', title: 'Hasil akhir sesi',
    lead: 'Setiap kumpulan menghasilkan lima bukti pembelajaran yang boleh disemak.',
    html: `<div class="slide-grid" style="--cols:5">${[['01','Prompt surat','Boleh digunakan semula'],['02','Draf surat','Telah diaudit'],['03','Draf minit','Berserta tindakan'],['04','Kawalan rekod','Senarai semak'],['05','Amalan selamat','Untuk tempat kerja']].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Hasil dinilai berdasarkan ketepatan dan kawalan, bukan kecantikan bahasa sahaja.'
  },
  {
    section: 'Pembukaan', title: 'Daripada masalah kepada rekod rasmi',
    lead: 'Peluang produktiviti Modul 1 menjadi konteks penggunaan AI pada peringkat draf.',
    html: `<div class="flow">${['Masalah kerja','Fakta diluluskan','Prompt berstruktur','Draf AI','Semakan manusia','Dokumen + rekod'].map((x,i)=>`${i?'<span>→</span>':''}<div><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Tekankan bahawa setiap langkah mesti boleh dijejak kepada fakta dan pemilik keputusan.'
  },
  {
    section: 'Peranan', dark: true, title: 'AI bukan pegawai penyedia atau pelulus',
    lead: 'Gunakan istilah “draf berbantukan AI”, bukan “surat dikeluarkan oleh AI”.',
    html: `<div class="slide-grid" style="--cols:2"><div class="slide-card"><h3>AI boleh membantu</h3><p>Cadang struktur · gubal ayat · susun catatan · kesan kekurangan · ubah nada</p></div><div class="slide-card lime"><h3>Manusia bertanggungjawab</h3><p>Tentukan fakta · sahkan ketepatan · tetapkan keputusan · nilai sensitiviti · semak dan lulus</p></div></div>`,
    notes: 'Minta peserta memberikan satu contoh keputusan yang tidak boleh diserahkan kepada AI.'
  },
  {
    section: 'Keselamatan', title: 'Sempadan latihan',
    lead: 'Gunakan hanya bahan simulasi dan dokumen tidak terperingkat.',
    html: `<div class="slide-grid" style="--cols:2"><div class="slide-card accent"><h3>Dalam skop</h3><p>Data simulasi · identiti rekaan · fakta latihan · platform percuma · input teks</p></div><div class="slide-card"><h3>Di luar skop</h3><p>Dokumen terperingkat · data peribadi sebenar · operasi sebenar · keputusan teknikal · kelulusan rasmi</p></div></div><div class="pitch"><b>UNTUK LATIHAN</b> · DATA REKAAN · TIDAK TERPERINGKAT</div>`,
    notes: 'Jangan minta peserta membuka dokumen sebenar atau sejarah chat semasa latihan.'
  },
  {
    section: 'Keselamatan', dark: true, title: 'Lampu isyarat maklumat',
    lead: 'Nilai maklumat sebelum menaip atau menampalnya ke platform AI.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card" style="border-top:6px solid #3f9b72"><h3>HIJAU</h3><p>Data simulasi yang disediakan dalam latihan.</p></div><div class="slide-card" style="border-top:6px solid #d79a32"><h3>KUNING</h3><p>Format awam atau bahan yang memerlukan semakan dasar.</p></div><div class="slide-card" style="border-top:6px solid #c95b5b"><h3>MERAH</h3><p>Dokumen terperingkat, data sebenar, kata laluan dan butiran keselamatan.</p></div></div>`,
    notes: 'Paparkan beberapa contoh dan minta peserta memilih warna secara pantas.'
  },
  {
    section: 'Platform', title: 'Satu kaedah, tiga platform percuma',
    lead: 'Latihan teras hanya memerlukan input teks dan tidak bergantung pada pelan berbayar.',
    html: `<div class="slide-grid" style="--cols:3"><a class="card-link" href="https://chatgpt.com/" target="_blank"><div class="slide-card accent"><h3>ChatGPT Free ↗</h3><p>Gunakan prompt neutral platform.</p></div></a><a class="card-link" href="https://gemini.google.com/app" target="_blank"><div class="slide-card accent"><h3>Gemini ↗</h3><p>Bandingkan hasil dengan rubrik sama.</p></div></a><a class="card-link" href="https://claude.ai/new" target="_blank"><div class="slide-card accent"><h3>Claude Free ↗</h3><p>Had penggunaan boleh berubah.</p></div></a></div><div class="pitch">Satu kaedah prompt · tiga platform · satu rubrik semakan</div>`,
    notes: 'Peserta boleh memilih satu platform. Jangan habiskan masa membandingkan ciri berbayar.'
  },
  {
    section: 'Asas AI', title: 'Mengapa hasil AI berbeza?',
    lead: 'Jawapan yang lancar masih boleh mengandungi kesilapan.',
    html: `<div class="slide-grid" style="--cols:5">${['Model berbeza','Arahan ditafsir','Konteks chat','Pilihan kebarangkalian','Kesilapan boleh lancar'].map((x,i)=>`<div class="slide-card"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Variasi ialah sebab fakta terkawal dan rubrik diperlukan.'
  },
  {
    section: 'Prompt', dark: true, title: 'Prompt lemah menghasilkan ruang meneka',
    lead: '“Tulis surat rasmi tentang kalibrasi alat makmal.”',
    html: `<div class="slide-grid" style="--cols:3">${['Siapa penerima?','Apakah tujuan?','Fakta dan tarikh?','Tindakan diminta?','Format dan panjang?','Apa yang dilarang?'].map(x=>`<div class="slide-card"><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Minta peserta menyebut maklumat yang hilang sebelum menunjukkan kerangka K–T–B–F–S.'
  },
  {
    section: 'Prompt', title: 'Kerangka lima bahagian K–T–B–F–S',
    lead: 'Prompt lengkap mengecilkan ruang AI mencipta andaian.',
    html: `<div class="slide-grid" style="--cols:5">${[['K','Konteks','Siapa dan status'],['T','Tugas','Hasil khusus'],['B','Bahan','Fakta dibenarkan'],['F','Format','Struktur dan bahasa'],['S','Semakan','Larangan dan kriteria']].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Gunakan mnemonik K–T–B–F–S sepanjang aktiviti surat dan minit.'
  },
  {
    section: 'Prompt', title: 'Prompt asas neutral platform',
    lead: 'Salin struktur ini dan gantikan hanya fakta simulasi yang dibenarkan.',
    html: `<div class="pitch" style="text-align:left"><b>KONTEKS:</b> Draf dokumen tidak terperingkat.<br><b>TUGAS:</b> Hasilkan draf surat rasmi.<br><b>BAHAN:</b> Gunakan hanya fakta berikut.<br><b>FORMAT:</b> Bahasa Melayu rasmi dan ringkas.<br><b>SEMAKAN:</b> Jangan cipta fakta; tanda [PERLU PENGESAHAN].</div><div class="button-row"><a class="button" href="pustaka-prompt.html">Buka pustaka prompt</a></div>`,
    notes: 'Buka pustaka prompt dan tunjuk cara menyalin prompt lengkap.'
  },
  {
    section: 'Semakan', title: 'Fakta, cadangan dan keputusan',
    lead: 'Labelkan setiap unsur hasil AI sebelum ia digunakan.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card accent"><h3>FAKTA</h3><p>Boleh dijejak kepada lembaran input.</p></div><div class="slide-card"><h3>CADANGAN BAHASA</h3><p>Boleh diterima, diubah atau ditolak.</p></div><div class="slide-card"><h3>KEPUTUSAN</h3><p>Hanya manusia diberi kuasa boleh menetapkan.</p></div></div>`,
    notes: 'Gunakan satu perenggan contoh dan minta peserta mengenal pasti tiga label.'
  },
  {
    section: 'Surat rasmi', title: 'Anatomi surat rasmi',
    lead: 'Bahasa yang baik tidak menggantikan elemen dokumen yang wajib.',
    html: `<div class="slide-grid" style="--cols:4">${['Alamat','Rujukan & tarikh','Tajuk','Tujuan','Tindakan penerima','Penomboran','Lampiran','Nama & kuasa'].map((x,i)=>`<div class="slide-card"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Rujuk tatacara surat kerajaan yang berkuat kuasa di jabatan.'
  },
  {
    section: 'Surat rasmi', title: 'Kes latihan surat',
    lead: 'Pemakluman dan pengesahan jadual kalibrasi peralatan MPE — data rekaan.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><h3>Input</h3><p>Tiga peralatan · tarikh cadangan · tempat</p></div><div class="slide-card"><h3>Tindakan</h3><p>Pengesahan penerima · tarikh maklum balas</p></div><div class="slide-card accent"><h3>Hasil</h3><p>Draf maksimum satu setengah halaman</p></div></div><div class="pitch">Identiti dan nombor rujukan mestilah rekaan.</div>`,
    notes: 'Pastikan semua kumpulan menggunakan lembaran fakta yang sama.'
  },
  {
    section: 'Aktiviti', dark: true, title: 'Aktiviti surat · 25 minit',
    lead: 'Daripada fakta diluluskan kepada draf yang telah diaudit.',
    html: `<div class="slide-grid" style="--cols:5">${[['0–5','Semak fakta'],['5–10','Jana draf'],['10–17','Audit'],['17–22','Sunting'],['22–25','Label versi']].map(x=>`<div class="slide-card"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div><div class="pitch"><b>Hasil:</b> v0.1-DRAF-AI → v0.2-SEMAKAN-PEGAWAI</div>`,
    notes: 'Beri amaran masa pada minit 10, 17 dan 22.'
  },
  {
    section: 'Audit', title: 'Jangan minta AI “pastikan semuanya betul”',
    lead: 'Semakan yang baik mempunyai kriteria dan bukti.',
    html: `<div class="slide-grid" style="--cols:5">${['Senarai fakta & sumber','Tanda nombor tiada','Semak elemen surat','Kesan makna kabur','Asing wajib vs gaya'].map((x,i)=>`<div class="slide-card accent"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Bandingkan arahan umum dengan arahan audit yang boleh diuji.'
  },
  {
    section: 'Audit', dark: true, title: 'Prompt audit surat',
    lead: 'Audit dahulu; jangan tulis semula sebelum isu dikenal pasti.',
    html: `<div class="pitch" style="text-align:left">Audit draf terhadap <b>FAKTA DILULUSKAN</b>.<br>Sediakan jadual: Petikan | Status | Bukti input | Pembetulan.<br>Status: <b>DISOKONG · TIDAK DISOKONG · PERLU PENGESAHAN</b>.</div>`,
    notes: 'Minta setiap kumpulan menunjukkan sekurang-kurangnya satu baris audit.'
  },
  {
    section: 'Minit', title: 'Daripada catatan kepada minit tindakan',
    lead: 'AI tidak boleh menaik taraf cadangan menjadi keputusan.',
    html: `<div class="flow">${['Catatan mentah','Perbincangan','Keputusan','Tindakan','Pemilik & tarikh','Minit + daftar'].map((x,i)=>`${i?'<span>→</span>':''}<div><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Tunjukkan bahawa ruang kosong perlu ditanda untuk pengesahan, bukan diteka.'
  },
  {
    section: 'Minit', title: 'Enam peraturan emas minit',
    lead: 'Kekalkan maksud asal dan nyatakan ketidakpastian.',
    html: `<div class="slide-grid" style="--cols:3">${['Jangan tambah kehadiran','Jangan cipta keputusan','Jangan teka pemilik','Jangan teka tarikh','Kekalkan istilah teknikal','Tanda [PERLU PENGESAHAN]'].map((x,i)=>`<div class="slide-card"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Minit akhir tetap perlu disemak urus setia atau pengerusi.'
  },
  {
    section: 'Aktiviti', dark: true, title: 'Aktiviti minit · 20 minit',
    lead: 'Hasilkan ringkasan, keputusan dan sekurang-kurangnya empat tindakan.',
    html: `<div class="slide-grid" style="--cols:4">${[['01','Salin prompt'],['02','Tampal catatan simulasi'],['03','Jana tiga bahagian'],['04','Tanda ketidakpastian']].map(x=>`<div class="slide-card"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div><div class="pitch">Bandingkan hasil dengan kumpulan lain menggunakan rubrik yang sama.</div>`,
    notes: 'Pastikan peserta tidak memasukkan catatan mesyuarat sebenar.'
  },
  {
    section: 'Tindakan', title: 'Struktur daftar tindakan',
    lead: 'Jika pemilik atau tarikh tidak disebut, tulis [PERLU PENGESAHAN].',
    html: `<div class="slide-grid" style="--cols:6">${['ID','Tindakan','Pemilik','Tarikh sasaran','Bukti siap','Status'].map((x,i)=>`<div class="slide-card ${i===0?'accent':''}"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div><div class="pitch">T01 · Tindakan · Pemilik · Tarikh · Bukti · Belum mula</div>`,
    notes: 'Tekankan bahawa daftar tindakan ialah rekod terkawal, bukan sekadar ringkasan teks.'
  },
  {
    section: 'Perbandingan', title: 'Galeri tiga platform',
    lead: 'Nama platform bukan komponen skor.',
    html: `<div class="slide-grid" style="--cols:5">${['Ketepatan fakta','Pematuhan arahan','Kejelasan bahasa','Tanda ketidakpastian','Boleh guna selepas semakan'].map((x,i)=>`<div class="slide-card accent"><span class="big-number">0–2</span><h3>${x}</h3></div>`).join('')}</div><div class="pitch"><b>Jumlah maksimum: 10</b></div>`,
    notes: 'Minta peserta menilai output secara buta jika masa membenarkan.'
  },
  {
    section: 'Rekod', title: 'Versi dokumen',
    lead: 'Status versi mesti jelas sebelum dokumen bergerak.',
    html: `<div class="flow">${[['v0.1','Draf AI'],['v0.2','Semakan penyedia'],['v0.3','Semakan pegawai'],['v1.0','Diluluskan']].map((x,i)=>`${i?'<span>→</span>':''}<div><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div><div class="pitch">MPE-Surat-Kalibrasi-20260728-v1.0-DILULUSKAN.pdf</div>`,
    notes: 'Sesuaikan konvensyen nama fail dengan arahan jabatan untuk penggunaan sebenar.'
  },
  {
    section: 'Rekod', dark: true, title: 'AI bukan sistem rekod',
    lead: 'Sejarah chat tidak menggantikan repositori rasmi jabatan.',
    html: `<div class="slide-grid" style="--cols:5">${['Simpan di lokasi rasmi','Kait nombor rujukan','Rekod peranan & tarikh','Lindungi versi lulus','Ikut tempoh simpanan'].map((x,i)=>`<div class="slide-card"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Pastikan peserta boleh menyatakan lokasi rekod rasmi yang dibenarkan oleh jabatan.'
  },
  {
    section: 'Semakan akhir', title: 'Sebelum dokumen bergerak',
    lead: 'Enam pintu semakan sebelum dokumen digunakan atau dihantar.',
    html: `<div class="slide-grid" style="--cols:3">${[['Fakta','Boleh dijejak?'],['Format','Elemen lengkap?'],['Bahasa','Jelas dan tepat?'],['Keselamatan','Sensitiviti disemak?'],['Kuasa','Penyemak betul?'],['Rekod','Versi dan lokasi jelas?']].map(x=>`<div class="slide-card accent"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`,
    notes: 'Jadikan slaid ini senarai semak lisan sebelum penutup.'
  },
  {
    section: 'Penutup', dark: true, title: 'Tiga prinsip untuk dibawa pulang',
    lead: 'Bantuan AI mesti berakhir dengan semakan manusia dan rekod rasmi.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><span class="big-number">1</span><h3>Berikan fakta, bukan dokumen sensitif.</h3></div><div class="slide-card lime"><span class="big-number">2</span><h3>Minta draf, bukan keputusan.</h3></div><div class="slide-card"><span class="big-number">3</span><h3>Sahkan dan rekod sebelum digunakan.</h3></div></div><div class="pitch"><b>Exit ticket:</b> prompt berguna · risiko dikawal · semakan manusia</div>`,
    notes: 'Minta peserta melengkapkan kuiz, exit ticket dan bukti penyempurnaan sebelum Modul 3.'
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
