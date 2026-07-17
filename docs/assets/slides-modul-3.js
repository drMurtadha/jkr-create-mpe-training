const slides = [
  {
    section: 'Modul 3A · Pembukaan', dark: true,
    title: 'Pendekatan sistematik dalam analisis data',
    lead: 'Daripada soalan yang jelas kepada hasil yang boleh diaudit.',
    html: `<div class="button-row"><span class="button accent">28 Julai 2026</span><span class="button ghost">120 minit</span></div><div class="pitch"><b>DATA TERBUKA ATAU REKAAN SAHAJA</b><br>Sahkan pengiraan · rekodkan sumber · simpan hasil rasmi di luar platform AI</div>`,
    notes: 'Terangkan pembahagian Modul 3A dan 3B. Sesi pertama menumpukan analisis data; sesi kedua menumpukan rekod teknikal.'
  },
  {
    section: 'Modul 3A · Hasil sesi', title: 'Apa yang peserta hasilkan dalam 3A?',
    lead: 'Setiap hasil mesti mempunyai sumber, kaedah, semakan dan batasan.',
    html: `<div class="slide-grid" style="--cols:5">${[['01','Soalan','Skop dan keputusan'],['02','Kamus data','Lajur, unit, sumber'],['03','Laporan kualiti','Isu dan bukti'],['04','Analisis','Jadual dan carta'],['05','Pakej rekod','Versi dan lokasi']].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p></div>`).join('')}</div>`,
    notes: 'Tunjukkan bahawa carta hanyalah satu daripada beberapa hasil, bukan titik mula.'
  },
  {
    section: 'Modul 3A · Prinsip', dark: true, title: 'AI membantu; manusia mengesahkan',
    lead: 'AI boleh meneroka dan menyusun, tetapi tidak boleh mengesahkan data atau meluluskan rekod.',
    html: `<div class="flow"><div><h3>AI membantu</h3><p>Profil · formula · jadual · draf tafsiran</p></div><span>→</span><div><h3>Manusia menyemak</h3><p>Sumber · unit · pengiraan · konteks · batasan</p></div><span>→</span><div><h3>Pegawai memutuskan</h3><p>Penggunaan rasmi · status · tindakan</p></div></div>`,
    notes: 'Minta peserta menyebut satu kesilapan AI yang sukar dikesan jika data sumber tidak diperiksa.'
  },
  {
    section: 'Modul 3A · Kaedah', title: 'Tujuh langkah yang boleh dijejak',
    lead: 'Tanya → Kenal → Semak → Bersih → Analisis → Sah → Rekod',
    html: `<div class="slide-grid" style="--cols:7">${[['T','Tanya'],['K','Kenal'],['S','Semak'],['B','Bersih'],['A','Analisis'],['S','Sah'],['R','Rekod']].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div><div class="pitch">Setiap langkah menghasilkan bukti sebelum bergerak ke langkah berikutnya.</div>`,
    notes: 'Gunakan singkatan TKSBASR sebagai peta proses sepanjang kedua-dua sesi.'
  },
  {
    section: 'Modul 3A · Had keselamatan', title: 'Had dan kawalan keselamatan platform percuma',
    lead: 'Kaedah latihan tidak bergantung pada satu platform atau fungsi muat naik.',
    html: `<div class="slide-grid" style="--cols:5">${['Tiada data peribadi','Tiada dokumen terperingkat','Guna sampel jika terhad','Semak jumlah & carta','Chat bukan rekod rasmi'].map((x,i)=>`<div class="slide-card"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Jika muat naik fail tidak tersedia, tampal 10–20 baris dan teruskan kaedah yang sama.'
  },
  {
    section: 'Modul 3A · Demonstrasi', dark: true, title: 'Prompt kabur, hasil kabur',
    lead: '“Analisis data ini dan beri insight.”',
    html: `<div class="slide-grid" style="--cols:4">${['Soalan tidak jelas','Kaedah tidak diketahui','Carta mungkin hiasan','Dakwaan boleh berlebihan'].map((x,i)=>`<div class="slide-card"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div><div class="pitch">Kita akan menggantikan satu arahan kabur dengan tujuh langkah yang boleh diaudit.</div>`,
    notes: 'Jalankan prompt kabur terlebih dahulu. Jangan terus membetulkan output; minta peserta mengenal pasti masalah.'
  },
  {
    section: 'Modul 3A · Langkah 1', title: 'Tanya: keputusan apa yang perlu disokong?',
    lead: 'Soalan analisis mesti menyatakan tempoh, kategori, pengguna dan tujuan.',
    html: `<div class="pitch">Bagi tempoh <b>[TEMPOH]</b>, bagaimanakah <b>[UKURAN]</b> berubah antara <b>[KATEGORI]</b>, untuk membantu <b>[PENGGUNA]</b> membuat <b>[KEPUTUSAN]</b>?</div><div class="slide-grid" style="--cols:2"><div class="slide-card"><h3>Kabur</h3><p>“Apakah insight data elektrik?”</p></div><div class="slide-card accent"><h3>Boleh diuji</h3><p>“Bagi 2019–2023, bagaimana penggunaan komersial dan domestik berubah?”</p></div></div>`,
    notes: 'Berikan 5 minit kepada kumpulan untuk melengkapkan templat soalan.'
  },
  {
    section: 'Modul 3A · Langkah 2', title: 'Kenal: fahami data sebelum mengira',
    lead: 'Satu nama lajur tidak semestinya menerangkan definisi, unit atau kategori agregat.',
    html: `<div class="slide-grid" style="--cols:5">${[['date','Tarikh bulanan'],['sector','Kategori sektor'],['consumption','Nilai penggunaan'],['unit','MKWh'],['source','data.gov.my']].map(x=>`<div class="slide-card accent"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div><div class="pitch">Semak metadata rasmi dan tandakan kategori yang tidak boleh dijumlahkan dua kali.</div>`,
    notes: 'Buka halaman metadata Penggunaan Elektrik Bulanan dan sahkan unit serta kaveat data sementara.'
  },
  {
    section: 'Modul 3A · Sumber rasmi', title: 'Dataset kerajaan: Penggunaan Elektrik Bulanan',
    lead: 'Contoh neutral untuk mengajar metadata, trend dan batasan sumber.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card accent"><h3>Medan</h3><p>date · sector · consumption</p></div><div class="slide-card"><h3>Unit</h3><p>Juta kilowatt-jam (MKWh)</p></div><div class="slide-card"><h3>Kaveat</h3><p>Enam bulan terkini mungkin bersifat sementara.</p></div></div><div class="button-row"><a class="button" href="https://data.gov.my/ms-MY/data-catalogue/electricity_consumption" target="_blank">Buka metadata ↗</a><a class="button ghost" href="https://storage.data.gov.my/energy/electricity_consumption.csv" target="_blank">Muat turun CSV ↗</a></div>`,
    notes: 'Jelaskan bahawa data sementara perlu disebut dalam batasan dan versi sumber.'
  },
  {
    section: 'Modul 3A · Langkah 3', dark: true, title: 'Semak: lengkap, sah, konsisten dan unik',
    lead: 'Minta laporan kualiti dengan bukti baris dan lajur, bukan kenyataan “data bersih”.',
    html: `<div class="slide-grid" style="--cols:6">${['Tarikh sah','Gabungan unik','Nilai bernombor','Tiada negatif','Tempoh lengkap','Nilai luar biasa'].map((x,i)=>`<div class="slide-card"><span class="big-number">0${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Tekankan bahawa nilai luar biasa perlu disiasat, bukan terus dipadam.'
  },
  {
    section: 'Modul 3A · Langkah 4', title: 'Bersih: jangan ubah fail sumber',
    lead: 'Simpan salinan kerja dan rekod setiap perubahan atau keputusan tidak mengubah data.',
    html: `<div class="flow"><div><h3>Fail sumber</h3><p>Kekal tidak berubah</p></div><span>→</span><div><h3>Data kerja</h3><p>Pembetulan disemak</p></div><span>→</span><div><h3>Log perubahan</h3><p>Asal · baharu · sebab · penyemak</p></div></div><div class="pitch">Jika tiada pembetulan: catat “Tiada perubahan; semakan kualiti selesai”.</div>`,
    notes: 'Tunjukkan contoh satu baris log perubahan dan satu contoh isu yang perlu dirujuk kepada pemilik data.'
  },
  {
    section: 'Modul 3A · Langkah 5', title: 'Analisis: kira hanya yang menjawab soalan',
    lead: 'Jadual dan carta mesti berkait terus dengan keputusan yang hendak disokong.',
    html: `<div class="slide-grid" style="--cols:4">${[['Tertinggi & terendah','Setiap sektor'],['Purata tahunan','Ikut sektor'],['Perubahan YoY','Asas dan akhir'],['Perbandingan','Komersial vs domestik']].map(x=>`<div class="slide-card accent"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div><div class="pitch">Semak sekurang-kurangnya <b>dua pengiraan</b> dalam hamparan.</div>`,
    notes: 'Minta AI menerangkan formula, penapis dan pengendalian nilai kosong.'
  },
  {
    section: 'Modul 3A · Visualisasi', title: 'Carta yang jujur menjawab satu soalan',
    lead: 'Tajuk, paksi, unit, tempoh, sumber dan kaveat mesti jelas.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><h3>Trend masa</h3><p>Gunakan carta garis.</p></div><div class="slide-card"><h3>Perbandingan kategori</h3><p>Gunakan bar yang sejajar.</p></div><div class="slide-card accent"><h3>Elakkan</h3><p>Paksi terpotong, unit hilang dan kategori bertindih.</p></div></div><div class="pitch">Carta bukan hiasan. Setiap unsur mesti membantu pembaca menilai bukti.</div>`,
    notes: 'Minta peserta menyatakan soalan yang dijawab oleh carta mereka dalam satu ayat.'
  },
  {
    section: 'Modul 3A · Langkah 6', dark: true, title: 'Sah: audit angka dan dakwaan',
    lead: 'Perkataan “meningkat” mesti mempunyai tempoh, nilai asas, nilai akhir dan unit.',
    html: `<div class="compare"><div class="compare-list"><div class="compare-item">“Penggunaan meningkat dengan ketara.”</div><div class="compare-item">Tiada tempoh atau angka</div></div><span>→</span><div class="compare-list"><div class="compare-item"><b>“Dari X MKWh pada 2022 kepada Y MKWh pada 2023.”</b></div><div class="compare-item"><b>Formula dan sumber dinyatakan</b></div></div></div>`,
    notes: 'Minta peserta memilih satu angka AI dan mengiranya semula secara manual.'
  },
  {
    section: 'Modul 3A · Langkah 7', title: 'Rekod: bina pakej hasil yang boleh dijejak',
    lead: 'Pisahkan sumber asal, data kerja, log kualiti, analisis dan hasil disahkan.',
    html: `<div class="slide-grid" style="--cols:3">${[['Sumber','M3_Elektrik_Sumber_20240930.csv'],['Kerja','M3_Elektrik_DataKerja_v01.csv'],['Kamus','M3_Elektrik_KamusData_v01.xlsx'],['Kualiti','M3_Elektrik_LogKualiti_v01.xlsx'],['Analisis','M3_Elektrik_Analisis_v01.xlsx'],['Ringkasan','M3_Elektrik_Ringkasan_v01.docx']].map(x=>`<div class="slide-card"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`,
    notes: 'Sesuaikan lokasi simpanan kepada repositori rasmi jabatan, bukan sejarah chat.'
  },
  {
    section: 'Modul 3A · Aktiviti', dark: true, title: 'Latihan kumpulan · aliran lengkap',
    lead: 'Tanya · Kenal · Semak · Bersih · Analisis · Sah · Rekod',
    html: `<div class="slide-grid" style="--cols:4">${[['0–15','Soalan & kamus'],['15–35','Kualiti & log'],['35–60','Analisis & carta'],['60–72','Sah & rekod']].map(x=>`<div class="slide-card"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div><div class="pitch">Hasil minimum: satu jadual, satu carta dan dua pengiraan semula.</div>`,
    notes: 'Bergerak antara kumpulan dan semak skop, unit, kategori agregat dan bukti pengiraan.'
  },
  {
    section: 'Modul 3A · Penutup', title: 'Bukti siap Modul 3A',
    lead: 'Jangan bergerak ke rekod teknikal tanpa bukti analisis yang boleh dijejak.',
    html: `<div class="slide-grid" style="--cols:4">${['Soalan analisis','Kamus data','Laporan kualiti','Log perubahan','Jadual ringkasan','Carta bersumber','Dua semakan kiraan','Nota batasan'].map((x,i)=>`<div class="slide-card ${i===7?'accent':''}"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Simpan hasil kumpulan untuk digunakan semasa imbas kembali Modul 3B.'
  },
  {
    section: 'Modul 3B · Pembukaan', dark: true, title: 'Pengurusan rekod teknikal',
    lead: 'Daripada data kerja kepada rekod yang mempunyai identiti, autoriti, versi dan status.',
    html: `<div class="button-row"><span class="button accent">29 Julai 2026</span><span class="button ghost">90 minit</span></div><div class="pitch"><b>Imbas kembali:</b> Tanya · Kenal · Semak · Bersih · Analisis · Sah · Rekod</div>`,
    notes: 'Labelkan ini sebagai permulaan Modul 3B. Minta peserta menyebut tujuh langkah tanpa melihat nota.'
  },
  {
    section: 'Modul 3B · Senario', title: 'Tiga jenis rekod, satu fail latihan',
    lead: 'Semua data rekaan dan kesalahan dimasukkan dengan sengaja.',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card accent"><h3>Buku Log</h3><p>Aktiviti harian dan tarikh</p></div><div class="slide-card accent"><h3>KEW.PA-9</h3><p>Pergerakan aset</p></div><div class="slide-card accent"><h3>Ujian MCCB</h3><p>Bacaan, unit dan keputusan</p></div></div><div class="button-row"><a class="button" href="../downloads/rekod-teknikal-mpe-rekaan.csv">Muat turun CSV latihan</a></div>`,
    notes: 'Tegaskan bahawa fail gabungan belum boleh dianggap sebagai rekod rasmi.'
  },
  {
    section: 'Modul 3B · Medan rekod', title: 'Anatomi rekod teknikal',
    lead: 'Setiap rekod perlu boleh dikenal pasti, dijejak dan disemak.',
    html: `<div class="slide-grid" style="--cols:5">${['record_id','record_type','asset_id','record_date','activity','reading + unit','status','source_file','version','reviewer'].map((x,i)=>`<div class="slide-card"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Gunakan medan ini sebagai kamus data ringkas sebelum audit bermula.'
  },
  {
    section: 'Modul 3B · Audit', dark: true, title: 'Audit dahulu, jangan terus membetulkan',
    lead: 'Cari isu dan petik nombor baris sebagai bukti.',
    html: `<div class="slide-grid" style="--cols:4">${['ID aset berbeza','Tarikh bercampur','Status bercanggah','Rekod pendua','Bacaan tanpa unit','Diluluskan tanpa penyemak','Versi hilang','Sumber tiada'].map((x,i)=>`<div class="slide-card"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Minta AI menghasilkan senarai isu, bukan fail yang telah dibetulkan.'
  },
  {
    section: 'Modul 3B · Autoriti', title: 'Apabila rekod bercanggah, rujuk sumber autoritatif',
    lead: 'AI tidak boleh memilih rekod yang “paling masuk akal”.',
    html: `<div class="slide-grid" style="--cols:5">${[['Aset','Daftar aset disahkan'],['Pergerakan','KEW.PA-9 diluluskan'],['Aktiviti','Buku Log bertarikh'],['Ujian','Laporan bertandatangan'],['Kelulusan','Pegawai diberi kuasa']].map(x=>`<div class="slide-card accent"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`,
    notes: 'Minta kumpulan menyatakan sumber utama bagi satu konflik yang mereka temui.'
  },
  {
    section: 'Modul 3B · Standardisasi', title: 'Cadangkan peraturan, kemudian semak',
    lead: 'Perubahan mekanikal dan pengesahan pemilik rekod mesti dibezakan.',
    html: `<div class="slide-grid" style="--cols:3">${[['ID aset','MPE-[JENIS]-NN'],['Tarikh','ISO YYYY-MM-DD'],['Status','Kamus terkawal'],['Unit','Wajib bagi bacaan'],['Pendua','Tanda, jangan terus padam'],['Nilai hilang','[PERLU PENGESAHAN]']].map(x=>`<div class="slide-card"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`,
    notes: 'Tekankan bahawa nilai hilang bukan sifar dan pendua mungkin mempunyai konteks sebenar.'
  },
  {
    section: 'Modul 3B · Hubungan rekod', title: 'Jejak aset → ujian → tindakan',
    lead: 'ID aset dan sumber membolehkan rekod berkaitan disambungkan tanpa kehilangan konteks.',
    html: `<div class="flow"><div><h3>Aset</h3><p>ID dan pemilik</p></div><span>→</span><div><h3>Ujian</h3><p>Tarikh, bacaan, unit</p></div><span>→</span><div><h3>Keputusan</h3><p>Bukti dan penyemak</p></div><span>→</span><div><h3>Tindakan</h3><p>Pemilik dan status</p></div></div>`,
    notes: 'Minta peserta mencari satu jurang yang memutuskan jejak silang.'
  },
  {
    section: 'Modul 3B · Status', dark: true, title: 'Siapa boleh menetapkan status?',
    lead: 'AI tidak boleh menetapkan Disahkan atau Diluluskan.',
    html: `<div class="slide-grid" style="--cols:4">${[['Draf','Penyedia'],['Dalam Semakan','Penyedia / penyemak'],['Disahkan','Penyemak ditetapkan'],['Diluluskan','Pegawai diberi kuasa']].map((x,i)=>`<div class="slide-card ${i===3?'lime':''}"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join('')}</div>`,
    notes: 'Bezakan pengesahan fakta daripada kelulusan penggunaan rasmi.'
  },
  {
    section: 'Modul 3B · Pakej rekod', title: 'Struktur folder yang memelihara jejak',
    lead: 'Sumber asal, data kerja, draf dan rekod rasmi tidak sepatutnya bercampur.',
    html: `<div class="slide-grid" style="--cols:3">${[['01','Sumber_Asal'],['02','Data_Kerja'],['03','Log_Perubahan'],['04','Analisis_Draf'],['05','Hasil_Disahkan'],['06','Rekod_Rasmi']].map(x=>`<div class="slide-card accent"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div>`,
    notes: 'Sesuaikan nama folder dengan sistem rekod jabatan sebenar.'
  },
  {
    section: 'Modul 3B · Aktiviti', dark: true, title: 'Latihan audit rekod · 55 minit',
    lead: 'Audit → standardisasi → hubung rekod → daftar → semakan silang',
    html: `<div class="slide-grid" style="--cols:5">${[['0–20','Audit isu'],['20–38','Standardisasi'],['38–55','Hubung rekod'],['55–68','Daftar & versi'],['68–78','Semakan silang']].map(x=>`<div class="slide-card"><span class="big-number">${x[0]}</span><h3>${x[1]}</h3></div>`).join('')}</div>`,
    notes: 'Pastikan setiap isu mempunyai bukti baris dan cadangan autoriti rujukan.'
  },
  {
    section: 'Modul 3B · Tanda bahaya', title: 'Tanda bahaya dalam output AI',
    lead: 'Berhenti dan semak jika output melakukan mana-mana perkara ini.',
    html: `<div class="slide-grid" style="--cols:4">${['Kosong jadi sifar','Pencilan dibuang','Unit digabung','Kategori dijumlah dua kali','Korelasi jadi sebab','Lajur atau status dicipta','Data disebut bersih','Status lulus diberi'].map((x,i)=>`<div class="slide-card"><span class="big-number">!</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Minta setiap kumpulan memilih satu tanda bahaya dan menerangkan kawalannya.'
  },
  {
    section: 'Modul 3B · Hasil serahan', title: 'Bukti penyempurnaan Modul 3',
    lead: 'Hasil akhir mesti boleh disemak oleh orang lain tanpa sejarah chat.',
    html: `<div class="slide-grid" style="--cols:4">${['Laporan isu + baris','Kamus status & ID','Log perubahan','Daftar rekod','Peta autoriti','Struktur folder','Nota batasan','Lokasi rekod rasmi'].map((x,i)=>`<div class="slide-card ${i===7?'accent':''}"><span class="big-number">${i+1}</span><h3>${x}</h3></div>`).join('')}</div>`,
    notes: 'Minta peserta menandakan bukti sebenar dalam exit ticket, bukan sekadar menyatakan semuanya siap.'
  },
  {
    section: 'Modul 3B · Penutup', dark: true, title: 'Analisis yang baik meninggalkan jejak',
    lead: 'Soalan jelas · data difahami · pengiraan disahkan · rekod dikawal',
    html: `<div class="slide-grid" style="--cols:3"><div class="slide-card"><span class="big-number">1</span><h3>Jangan mula dengan carta.</h3><p>Mulakan dengan soalan dan metadata.</p></div><div class="slide-card lime"><span class="big-number">2</span><h3>Jangan terima angka tanpa semakan.</h3><p>Hasilkan semula pengiraan.</p></div><div class="slide-card"><span class="big-number">3</span><h3>Jangan simpan rekod rasmi dalam chat.</h3><p>Gunakan repositori jabatan.</p></div></div><div class="button-row"><a class="button accent" href="penilaian.html">Buka kuiz dan exit ticket</a></div>`,
    notes: 'Tutup dengan kuiz, exit ticket dan bukti penyempurnaan. Jambatankan hasil kepada Modul 4.'
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
