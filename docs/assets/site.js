const menuButton = document.querySelector('[data-menu]');
const menu = document.querySelector('[data-nav-links]');
if (menuButton && menu) {
  const setMenuState = (open) => {
    menu.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Tutup navigasi' : 'Buka navigasi');
    menuButton.textContent = open ? 'Tutup' : 'Menu';
  };

  menuButton.addEventListener('click', () => {
    setMenuState(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuState(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuState(false);
      menuButton.focus();
    }
  });
}

document.querySelectorAll('.prose h2, .prose h3').forEach((heading) => {
  if (!heading.id) heading.id = heading.textContent.toLowerCase().replace(/[^a-z0-9\u00c0-\u024f]+/gi, '-').replace(/^-|-$/g, '');
});

const articleNav = document.querySelector('[data-article-nav]');
if (articleNav) {
  document.querySelectorAll('.prose h2').forEach((heading) => {
    const link = document.createElement('a');
    link.href = `#${heading.id}`;
    link.textContent = heading.textContent;
    articleNav.appendChild(link);
  });
}

document.querySelectorAll('.prose pre code').forEach((code) => {
  const value = code.textContent.trim();
  const looksLikePrompt = value.includes('KONTEKS:') && value.includes('TUGAS:');
  if (!looksLikePrompt) return;

  const block = code.closest('pre');
  block.classList.add('prompt-block');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-prompt';
  button.textContent = 'Salin prompt';
  button.setAttribute('aria-label', 'Salin prompt ke papan klip');

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent);
    } catch {
      const range = document.createRange();
      range.selectNodeContents(code);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
    }
    button.textContent = 'Disalin ✓';
    button.classList.add('copied');
    window.setTimeout(() => {
      button.textContent = 'Salin prompt';
      button.classList.remove('copied');
    }, 1800);
  });

  block.appendChild(button);
});

const quizzes = {
  'modul-1': {
    questions: [
      {
        question: 'Apakah langkah pertama apabila mempertimbangkan aplikasi pintar?',
        options: ['Memilih vendor', 'Memilih teknologi terkini', 'Menjelaskan pengguna, masalah dan kesan', 'Mengumpul semua data yang ada'],
        answer: 2,
        explanation: 'Mulakan dengan pengguna, masalah dan kesan sebelum memilih alat atau teknologi.'
      },
      {
        question: 'Apakah perbezaan utama kerja digital dan kerja pintar?',
        options: ['Kerja pintar mesti menggunakan robot', 'Kerja pintar menggunakan data untuk menyemak, membantu, mencetus tindakan atau memantau', 'Kerja digital tidak menggunakan komputer', 'Tiada perbezaan'],
        answer: 1,
        explanation: 'Kerja pintar menggunakan data untuk membantu proses dan tindakan, bukan sekadar menukar media kepada bentuk digital.'
      },
      {
        question: 'Yang manakah paling sesuai menggunakan automasi berasaskan peraturan?',
        options: ['Menjana ID rekod mengikut format tetap', 'Menafsir keputusan teknikal yang kompleks tanpa semakan', 'Menulis kesimpulan akhir audit secara autonomi', 'Meluluskan laporan ujian tanpa pegawai'],
        answer: 0,
        explanation: 'Format ID yang tetap ialah tugas berulang dengan peraturan yang jelas.'
      },
      {
        question: 'Mengapa semakan manusia perlu dinyatakan dalam kanvas?',
        options: ['Supaya aplikasi menjadi lebih perlahan', 'Supaya tanggungjawab terhadap keputusan penting, ketepatan dan pematuhan jelas', 'Supaya semua kerja dibuat dua kali', 'Supaya data tidak perlu disimpan'],
        answer: 1,
        explanation: 'Semakan manusia menetapkan akauntabiliti bagi keputusan penting, ketepatan dan pematuhan.'
      },
      {
        question: 'Apakah percubaan awal yang baik?',
        options: ['Meliputi semua proses dan semua pengguna', 'Tiada tempoh atau ukuran', 'Satu proses, pengguna terhad, tempoh pendek dan metrik jelas', 'Menggantikan semua sistem sedia ada'],
        answer: 2,
        explanation: 'Percubaan kecil perlu mempunyai skop, tempoh, pengguna dan ukuran kejayaan yang jelas.'
      }
    ],
    result(score) {
      if (score >= 4) return 'Mencapai kefahaman asas Modul 1.';
      if (score === 3) return 'Perlu pengukuhan ringkas.';
      return 'Perlu mengulang prinsip utama bersama fasilitator.';
    }
  },
  'modul-2': {
    questions: [
      {
        question: 'Apakah tindakan bagi dokumen bertanda Terhad?',
        options: ['Tampal selepas memadam tajuk', 'Jangan masukkan ke platform AI awam', 'Gunakan jika akaun percuma'],
        answer: 1,
        explanation: 'Dokumen Terhad tidak boleh dimasukkan ke platform AI awam.'
      },
      {
        question: 'Apakah rujukan utama apabila draf AI dan lembaran fakta bercanggah?',
        options: ['Draf yang paling lancar', 'Platform yang paling popular', 'Lembaran fakta yang disahkan'],
        answer: 2,
        explanation: 'Lembaran fakta yang disahkan mengatasi kandungan yang dijana oleh AI.'
      },
      {
        question: 'Catatan menyebut “Ravi mencadangkan”. Bolehkah minit menyebut “Mesyuarat meluluskan”?',
        options: ['Ya', 'Tidak'],
        answer: 1,
        explanation: 'Minit tidak boleh menaik taraf cadangan menjadi kelulusan tanpa bukti.'
      },
      {
        question: 'Apakah tanda yang sesuai apabila penandatangan belum diketahui?',
        options: ['Pilih nama paling kanan', '[PERLU PENGESAHAN]', 'Tinggalkan tanpa catatan'],
        answer: 1,
        explanation: 'Maklumat yang belum disahkan perlu ditanda dengan jelas untuk pengesahan manusia.'
      },
      {
        question: 'Siapakah yang boleh memberi status diluluskan?',
        options: ['AI', 'Mana-mana peserta', 'Pegawai yang diberi kuasa'],
        answer: 2,
        explanation: 'Kelulusan hanya boleh diberikan oleh pegawai yang mempunyai kuasa.'
      },
      {
        question: 'Di manakah versi akhir perlu disimpan?',
        options: ['Sejarah chat sahaja', 'Sistem atau fail rekod rasmi jabatan', 'Papan klip komputer'],
        answer: 1,
        explanation: 'Versi akhir mesti disimpan dalam repositori rekod rasmi jabatan.'
      }
    ],
    result(score) {
      if (score >= 5) return 'Bersedia.';
      if (score >= 3) return 'Perlu bimbingan.';
      return 'Ulang had dan kawalan keselamatan serta audit fakta.';
    }
  },
  'modul-3': {
    questions: [
      { question: 'Apakah langkah pertama dalam analisis sistematik?', options: ['Membina carta', 'Menjelaskan soalan dan keputusan yang hendak disokong', 'Memadam nilai luar biasa'], answer: 1, explanation: 'Analisis bermula dengan soalan, pengguna dan keputusan yang hendak disokong.' },
      { question: 'Apakah tindakan yang betul bagi nilai kosong?', options: ['Tukar kepada sifar', 'Abaikan semua baris', 'Tentukan maksudnya melalui kamus data atau pemilik rekod'], answer: 2, explanation: 'Nilai kosong tidak semestinya sifar dan perlu disemak terhadap definisi atau pemilik rekod.' },
      { question: 'Apakah perbezaan pemerhatian dan tafsiran?', options: ['Pemerhatian disokong nilai; tafsiran menerangkan makna dan perlu dinyatakan batasannya', 'Tiada perbezaan', 'Tafsiran sentiasa lebih tepat'], answer: 0, explanation: 'Pemerhatian datang daripada data; tafsiran menerangkan makna dan mesti menyatakan batasan.' },
      { question: 'Jika dua rekod teknikal bercanggah, apakah tindakan utama?', options: ['Pilih rekod paling baharu secara automatik', 'Minta AI memilih', 'Rujuk sumber autoritatif dan pemilik rekod'], answer: 2, explanation: 'Konflik rekod perlu dirujuk kepada sumber autoritatif dan pemilik yang bertanggungjawab.' },
      { question: 'Di manakah hasil akhir perlu disimpan?', options: ['Sejarah chat', 'Sistem atau fail rekod rasmi jabatan', 'Folder muat turun peribadi'], answer: 1, explanation: 'Hasil akhir mesti disimpan dalam repositori rekod rasmi, bukan sejarah chat.' },
      { question: 'Siapakah boleh memberikan status Diluluskan?', options: ['AI', 'Pegawai diberi kuasa', 'Mana-mana peserta'], answer: 1, explanation: 'Status Diluluskan hanya boleh diberikan oleh pegawai yang diberi kuasa.' }
    ],
    result(score) {
      if (score >= 5) return 'Bersedia menerapkan kaedah Modul 3.';
      if (score >= 3) return 'Perlu pengukuhan pada beberapa langkah.';
      return 'Ulang semakan kualiti dan kebolehkesanan rekod.';
    }
  },
  'modul-4': {
    questions: [
      { question: 'Apakah langkah pertama sebelum memilih alat automasi?', options: ['Membeli perisian', 'Memetakan proses, pelaku, keputusan dan bukti', 'Menghapuskan semua borang'], answer: 1, explanation: 'Proses dan kawalan perlu difahami sebelum alat dipilih.' },
      { question: 'Yang manakah sesuai sebagai peraturan automatik?', options: ['Meluluskan pinjaman aset', 'Mengesahkan keputusan teknikal', 'Menyemak medan wajib dan format tarikh'], answer: 2, explanation: 'Medan wajib dan format tarikh ialah peraturan tetap yang boleh diuji.' },
      { question: 'Apakah perbezaan status Lengkap dan Disahkan?', options: ['Tiada perbezaan', 'Lengkap bermaksud medan/bukti tersedia; Disahkan memerlukan semakan pegawai', 'Disahkan boleh ditetapkan AI'], answer: 1, explanation: 'Kelengkapan boleh disemak oleh sistem, tetapi pengesahan memerlukan pegawai ditetapkan.' },
      { question: 'Siapakah boleh meluluskan KEW.PA-9?', options: ['AI generatif', 'Sistem notifikasi', 'Pegawai yang diberi kuasa'], answer: 2, explanation: 'Kelulusan ialah keputusan manusia oleh pegawai yang diberi kuasa.' },
      { question: 'Apakah tindakan jika status kalibrasi peralatan MCCB kosong?', options: ['Anggap Ya', 'Hentikan atau kembalikan rekod untuk pengesahan', 'Cipta nombor sijil'], answer: 1, explanation: 'Sistem mesti gagal dengan selamat dan meminta pengesahan, bukan membuat andaian.' },
      { question: 'Apakah bukti bahawa automasi boleh diaudit?', options: ['Paparan kelihatan moden', 'Setiap perubahan merekod masa, pelaku, status dan sebab', 'Semua keputusan dibuat automatik'], answer: 1, explanation: 'Jejak audit memerlukan identiti pelaku, masa, perubahan status dan sebab.' }
    ],
    result(score) {
      if (score >= 5) return 'Bersedia mereka bentuk percubaan automasi terkawal.';
      if (score >= 3) return 'Perlu pengukuhan pada peranan, status atau pengecualian.';
      return 'Ulang pemetaan proses dan kawalan manusia.';
    }
  },
  'modul-5': {
    questions: [
      { question: 'Di manakah antaramuka MPE Hub diterbitkan?', options: ['Google Docs', 'GitHub Pages', 'Google Sheets'], answer: 1, explanation: 'Fail HTML, CSS dan JavaScript statik diterbitkan melalui GitHub Pages.' },
      { question: 'Apakah peranan Google Apps Script?', options: ['Menjadi API antara frontend dan storan Google', 'Menggantikan GitHub Pages', 'Meluluskan rekod'], answer: 0, explanation: 'Apps Script menerima permintaan GET/POST dan membaca atau menulis Sheets serta Drive.' },
      { question: 'Bolehkah URL deployment atau ID Google ditampal kepada AI?', options: ['Ya, jika data rekaan', 'Tidak', 'Hanya selepas commit'], answer: 1, explanation: 'URL deployment dan ID Google ialah konfigurasi peribadi yang tidak perlu dihantar kepada platform AI.' },
      { question: 'Apakah bukti tiga modul berfungsi?', options: ['AI menyatakan kod betul', 'Tiga ID dapat dijejak kepada tab dan data storan yang betul', 'Halaman mempunyai tiga menu'], answer: 1, explanation: 'Bukti operasi ialah rekod sebenar latihan yang boleh dijejak dari aplikasi kepada storan.' },
      { question: 'Mengapa endpoint “Anyone” tidak sesuai untuk data sensitif?', options: ['Ia boleh menerima permintaan pihak luar tanpa kawalan tambahan', 'Ia menjadikan CSS lambat', 'Ia memadam GitHub Pages'], answer: 0, explanation: 'Endpoint terbuka memerlukan autentikasi, rate limit dan kawalan tambahan sebelum menerima data sensitif.' }
    ],
    result(score) {
      if (score >= 4) return 'Bersedia mengkonfigurasi dan menguji MPE Hub.';
      if (score >= 3) return 'Perlu pengukuhan kecil pada akses, bukti atau kawalan.';
      return 'Ulang kit binaan, ujian kegagalan dan kawalan manusia.';
    }
  }
};

function renderQuiz(container) {
  const quiz = quizzes[container.dataset.quiz];
  if (!quiz) return;

  const form = document.createElement('form');
  form.className = 'quiz-form';
  form.noValidate = true;

  quiz.questions.forEach((item, questionIndex) => {
    const fieldset = document.createElement('fieldset');
    fieldset.className = 'quiz-question';
    const legend = document.createElement('legend');
    legend.innerHTML = `<span>${questionIndex + 1}</span>${item.question}`;
    fieldset.appendChild(legend);

    const options = document.createElement('div');
    options.className = 'quiz-options';
    item.options.forEach((option, optionIndex) => {
      const label = document.createElement('label');
      label.className = 'quiz-option';
      label.innerHTML = `<input type="radio" name="q${questionIndex}" value="${optionIndex}"><span><b>${String.fromCharCode(65 + optionIndex)}.</b> ${option}</span>`;
      options.appendChild(label);
    });
    fieldset.appendChild(options);

    const feedback = document.createElement('p');
    feedback.className = 'quiz-feedback';
    feedback.setAttribute('aria-live', 'polite');
    fieldset.appendChild(feedback);
    form.appendChild(fieldset);
  });

  const status = document.createElement('p');
  status.className = 'quiz-status';
  status.setAttribute('aria-live', 'polite');

  const actions = document.createElement('div');
  actions.className = 'quiz-actions';
  actions.innerHTML = '<button class="button" type="submit" disabled>Hantar jawapan</button><button class="button ghost" type="reset">Cuba semula</button>';
  form.append(status, actions);

  const result = document.createElement('section');
  result.className = 'quiz-result';
  result.hidden = true;
  result.setAttribute('aria-live', 'polite');
  form.appendChild(result);
  container.appendChild(form);

  const submitButton = form.querySelector('[type="submit"]');
  const updateCompletion = () => {
    const answered = quiz.questions.filter((_, index) => form.querySelector(`input[name="q${index}"]:checked`)).length;
    submitButton.disabled = answered !== quiz.questions.length;
    status.textContent = answered === quiz.questions.length ? 'Semua soalan telah dijawab.' : `${answered} daripada ${quiz.questions.length} soalan telah dijawab.`;
  };

  form.addEventListener('change', updateCompletion);
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;
    quiz.questions.forEach((item, questionIndex) => {
      const selected = Number(form.elements[`q${questionIndex}`].value);
      const fieldset = form.querySelectorAll('.quiz-question')[questionIndex];
      const labels = fieldset.querySelectorAll('.quiz-option');
      labels.forEach((label, optionIndex) => {
        label.classList.toggle('correct', optionIndex === item.answer);
        label.classList.toggle('incorrect', optionIndex === selected && selected !== item.answer);
        label.querySelector('input').disabled = true;
      });
      const correct = selected === item.answer;
      if (correct) score += 1;
      const feedback = fieldset.querySelector('.quiz-feedback');
      feedback.className = `quiz-feedback ${correct ? 'correct' : 'incorrect'}`;
      feedback.textContent = `${correct ? 'Betul.' : `Belum tepat. Jawapan: ${String.fromCharCode(65 + item.answer)}.`} ${item.explanation}`;
    });
    submitButton.disabled = true;
    result.hidden = false;
    result.innerHTML = `<span class="quiz-score">${score}/${quiz.questions.length}</span><div><strong>Markah anda</strong><p>${quiz.result(score)}</p></div>`;
    result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  form.addEventListener('reset', () => {
    window.setTimeout(() => {
      form.querySelectorAll('input').forEach((input) => { input.disabled = false; });
      form.querySelectorAll('.quiz-option').forEach((label) => label.classList.remove('correct', 'incorrect'));
      form.querySelectorAll('.quiz-feedback').forEach((feedback) => {
        feedback.className = 'quiz-feedback';
        feedback.textContent = '';
      });
      result.hidden = true;
      result.innerHTML = '';
      updateCompletion();
    });
  });

  updateCompletion();
}

document.querySelectorAll('[data-quiz]').forEach(renderQuiz);

const EXIT_TICKET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbwNWocv0bT-AoGPU_VGu1FiGIV--Z2IJ9ZDD4yJ22VS_Jc18-KQpxVpOzmNKftigNYR/exec';

function saveFormDraft(form, key) {
  const fields = {};
  [...form.elements].forEach((field) => {
    if (!field.name || field.type === 'hidden' || field.name === 'website') return;
    if (field.type === 'checkbox') {
      fields[field.name] ??= [];
      if (field.checked) fields[field.name].push(field.value || 'on');
    } else if (field.type === 'radio') {
      if (field.checked) fields[field.name] = field.value;
    } else {
      fields[field.name] = field.value;
    }
  });
  localStorage.setItem(key, JSON.stringify(fields));
}

function restoreFormDraft(form, key) {
  let fields;
  try { fields = JSON.parse(localStorage.getItem(key)); } catch { return; }
  if (!fields) return;
  [...form.elements].forEach((field) => {
    if (!field.name || fields[field.name] === undefined) return;
    if (field.type === 'checkbox') field.checked = fields[field.name].includes(field.value || 'on');
    else if (field.type === 'radio') field.checked = fields[field.name] === field.value;
    else field.value = fields[field.name];
  });
}

const exitTickets = {
  'modul-1': {
    module: 'Modul 1',
    fields: [
      ['understanding', 'Satu perkara yang kini saya faham tentang aplikasi pintar'],
      ['opportunity', 'Satu kerja MPE yang wajar dikaji untuk penambahbaikan'],
      ['risk', 'Satu risiko atau kawalan yang tidak boleh diabaikan'],
      ['action', 'Dalam tempoh dua minggu, langkah pertama yang boleh dibuat']
    ],
    confidence: 'Sejauh mana anda kini yakin boleh memilih peluang aplikasi pintar yang sesuai untuk MPE?'
  },
  'modul-2': {
    module: 'Modul 2',
    fields: [
      ['ai_help', 'Satu perkara yang AI boleh bantu dalam kerja saya'],
      ['prohibited_info', 'Satu jenis maklumat yang saya tidak akan masukkan'],
      ['human_check', 'Satu pemeriksaan manusia yang wajib'],
      ['useful_prompt', 'Prompt yang paling berguna hari ini']
    ],
    confidence: 'Tahap keyakinan saya sekarang',
    evidence: [
      'Satu draf surat berserta audit fakta',
      'Satu draf minit berserta daftar tindakan',
      'Satu perbandingan output dua platform',
      'Senarai semak kawalan rekod lengkap',
      'Exit ticket diserahkan'
    ]
  },
  'modul-3': {
    module: 'Modul 3',
    fields: [
      ['systematic_step', 'Langkah sistematik yang paling berguna kepada saya'],
      ['data_check', 'Satu semakan data yang akan saya lakukan'],
      ['record_control', 'Satu kawalan rekod teknikal yang wajib'],
      ['human_decision', 'Satu perkara yang AI tidak boleh putuskan']
    ],
    confidence: 'Keyakinan saya menjalankan analisis yang boleh diaudit',
    evidence: [
      'Soalan analisis dan kamus data',
      'Laporan kualiti dengan bukti',
      'Jadual serta carta yang disahkan',
      'Dua pengiraan semula',
      'Log perubahan',
      'Daftar rekod teknikal',
      'Nota batasan dan lokasi simpanan rasmi'
    ]
  },
  'modul-4': {
    module: 'Modul 4',
    fields: [
      ['process_issue', 'Satu masalah proses yang patut ditangani terlebih dahulu'],
      ['automation_rule', 'Satu langkah yang sesuai diautomasi dengan peraturan'],
      ['human_decision', 'Satu keputusan yang mesti kekal pada pegawai'],
      ['failure_control', 'Satu kawalan apabila sistem atau notifikasi gagal']
    ],
    confidence: 'Keyakinan saya mereka bentuk automasi aliran kerja yang terkawal',
    evidence: [
      'Peta proses semasa',
      'Senarai isu dan risiko',
      'Peta proses cadangan',
      'Kamus medan dan status',
      'Matriks peranan',
      'Sekurang-kurangnya tiga kes ujian',
      'Spesifikasi percubaan kecil dan pelan sandaran'
    ]
  },
  'modul-5': {
    module: 'Modul 5',
    fields: [
      ['hub_result', 'Fungsi MPE Hub yang berjaya dikonfigurasi dan diuji'],
      ['test_result', 'Satu keputusan ujian yang penting'],
      ['safety_control', 'Satu kawalan keselamatan atau akses yang digunakan'],
      ['next_step', 'Langkah seterusnya selepas latihan']
    ],
    confidence: 'Keyakinan saya membina dan menguji prototaip MPE Hub',
    evidence: [
      'Pautan Web App boleh dibuka',
      'Rekod Buku Log disimpan dan dijejak',
      'Rekod KEW.PA-9 disimpan dan dijejak',
      'Rekod MCCB disimpan dan dijejak',
      'Satu perubahan kecil telah di-commit',
      'GitHub Pages menggunakan versi terkini',
      'Akses, rahsia dan batasan prototaip disemak'
    ]
  }
};

function renderExitTicket(container) {
  const ticket = exitTickets[container.dataset.exitTicket];
  if (!ticket) return;

  const draftKey = `mpe-exit-ticket-draft-${container.dataset.exitTicket}`;

  const form = document.createElement('form');
  form.className = 'exit-ticket-form';
  form.innerHTML = `
    <aside class="submission-disclosure">
      <strong>Destinasi dan privasi</strong>
      <p>Respons dihantar kepada storan penilaian fasilitator melalui Google Apps Script. Jangan masukkan maklumat sulit, terperingkat atau data peribadi pihak lain. Draf disimpan pada peranti ini sehingga penghantaran selesai atau anda memadamkannya.</p>
    </aside>
    <div class="exit-ticket-field">
      <label for="${container.dataset.exitTicket}-name">Nama <span>(pilihan)</span></label>
      <input id="${container.dataset.exitTicket}-name" name="name" type="text" maxlength="120" autocomplete="name">
    </div>
    ${ticket.fields.map(([name, label], index) => `
      <div class="exit-ticket-field">
        <label for="${container.dataset.exitTicket}-${name}"><span>${index + 1}.</span> ${label}</label>
        <textarea id="${container.dataset.exitTicket}-${name}" name="${name}" rows="3" maxlength="1500" required></textarea>
      </div>
    `).join('')}
    <fieldset class="confidence-field">
      <legend>${ticket.confidence}</legend>
      <div class="confidence-options">
        ${[1, 2, 3, 4, 5].map(value => `
          <label><input type="radio" name="confidence" value="${value}" required><span>${value}</span></label>
        `).join('')}
      </div>
      <div class="confidence-scale"><span>1 · Tidak yakin</span><span>5 · Sangat yakin</span></div>
    </fieldset>
    ${ticket.evidence ? `
      <fieldset class="evidence-field">
        <legend>Bukti penyempurnaan <span>(tandakan yang telah siap)</span></legend>
        <div class="evidence-options">
          ${ticket.evidence.map(item => `<label><input type="checkbox" name="evidence" value="${item}"><span>${item}</span></label>`).join('')}
        </div>
        <p>Tanda ini ialah pengisytiharan kendiri dan masih tertakluk kepada semakan fasilitator.</p>
      </fieldset>
    ` : ''}
    <div class="exit-ticket-trap" aria-hidden="true">
      <label>Website <input name="website" type="text" tabindex="-1" autocomplete="off"></label>
    </div>
    <input name="module" type="hidden" value="${ticket.module}">
    <label class="submission-consent"><input name="submission_consent" type="checkbox" value="disahkan" required><span>Saya faham destinasi respons dan mengesahkan kandungan ini menggunakan data latihan yang sesuai.</span></label>
    <div class="exit-ticket-actions">
      <button class="button" type="submit">Hantar exit ticket</button>
      <button class="button ghost" type="button" data-clear-draft>Padam draf lokal</button>
      <p class="exit-ticket-status" aria-live="polite"></p>
    </div>
  `;

  const button = form.querySelector('[type="submit"]');
  const status = form.querySelector('.exit-ticket-status');
  restoreFormDraft(form, draftKey);
  form.addEventListener('input', () => saveFormDraft(form, draftKey));
  form.addEventListener('change', () => saveFormDraft(form, draftKey));
  form.querySelector('[data-clear-draft]').addEventListener('click', () => {
    if (!window.confirm('Padam draf exit ticket yang disimpan pada peranti ini?')) return;
    localStorage.removeItem(draftKey);
    form.reset();
    status.textContent = 'Draf lokal telah dipadam.';
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    button.disabled = true;
    button.textContent = 'Menghantar…';
    status.className = 'exit-ticket-status';
    status.textContent = 'Maklum balas sedang disimpan.';

    try {
      const formData = new FormData(form);
      const evidence = formData.getAll('evidence');
      if (evidence.length) formData.set('evidence_summary', evidence.join(' | '));
      await fetch(EXIT_TICKET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new URLSearchParams(formData)
      });
      form.reset();
      localStorage.removeItem(draftKey);
      status.className = 'exit-ticket-status success';
      status.textContent = 'Permintaan telah dihantar. Oleh sebab pelayan tidak memberikan pengesahan terus, fasilitator perlu menyemak rekod destinasi.';
    } catch {
      status.className = 'exit-ticket-status error';
      status.textContent = 'Maklum balas tidak dapat dihantar. Semak sambungan internet dan cuba lagi.';
    } finally {
      button.disabled = false;
      button.textContent = 'Hantar exit ticket';
    }
  });

  container.appendChild(form);
}

document.querySelectorAll('[data-exit-ticket]').forEach(renderExitTicket);

const finalEvaluationForms = {
  participant: {
    module: 'Penilaian Akhir Peserta',
    ratings: [
      ['learning_outcomes', 'Hasil pembelajaran keseluruhan program jelas'],
      ['mpe_relevance', 'Kandungan berkaitan dengan operasi MPE'],
      ['practical_value', 'Aktiviti dan contoh boleh digunakan dalam kerja'],
      ['gen_ai_confidence', 'Saya lebih yakin menggunakan platform AI generatif percuma secara selamat'],
      ['pace', 'Tempoh dan rentak keseluruhan program sesuai']
    ],
    fields: [
      ['most_useful', 'Bahagian paling berguna dalam program'],
      ['improvement', 'Bahagian yang perlu ditambah baik'],
      ['next_action', 'Satu tindakan yang akan saya lakukan selepas latihan']
    ],
    button: 'Hantar maklum balas akhir'
  },
  facilitator: {
    module: 'Ringkasan Fasilitator',
    fields: [
      ['completion_rate', 'Peratus peserta menyelesaikan tugasan utama'],
      ['quiz_target_rate', 'Peratus peserta mencapai sasaran kuiz'],
      ['confidence_change', 'Perubahan purata keyakinan peserta'],
      ['human_review_rate', 'Peratus peserta mengenal pasti titik semakan manusia'],
      ['strengths', 'Kekuatan utama program'],
      ['follow_up', 'Tindakan susulan yang diperlukan'],
      ['recommendations', 'Cadangan penambahbaikan program']
    ],
    button: 'Hantar ringkasan fasilitator'
  }
};

function renderFinalEvaluation(container) {
  const config = finalEvaluationForms[container.dataset.finalEvaluation];
  if (!config) return;
  const draftKey = `mpe-final-evaluation-draft-${container.dataset.finalEvaluation}`;
  const form = document.createElement('form');
  form.className = 'exit-ticket-form final-evaluation-form';
  form.innerHTML = `
    <aside class="submission-disclosure">
      <strong>Destinasi dan privasi</strong>
      <p>Respons dihantar kepada storan penilaian fasilitator melalui Google Apps Script. Draf disimpan pada peranti ini. Jangan masukkan maklumat sulit, terperingkat atau data peribadi pihak lain.</p>
    </aside>
    <div class="exit-ticket-field">
      <label>Nama <span>(${container.dataset.finalEvaluation === 'participant' ? 'pilihan' : 'fasilitator'})</span></label>
      <input name="name" type="text" maxlength="120" ${container.dataset.finalEvaluation === 'facilitator' ? 'required' : ''}>
    </div>
    ${(config.ratings || []).map(([name, label]) => `
      <fieldset class="confidence-field">
        <legend>${label}</legend>
        <div class="confidence-options">
          ${[1, 2, 3, 4, 5].map(value => `<label><input type="radio" name="${name}" value="${value}" required><span>${value}</span></label>`).join('')}
        </div>
        <div class="confidence-scale"><span>1 · Sangat tidak setuju</span><span>5 · Sangat setuju</span></div>
      </fieldset>
    `).join('')}
    ${config.fields.map(([name, label]) => `
      <div class="exit-ticket-field">
        <label>${label}</label>
        <textarea name="${name}" rows="3" maxlength="2000" required></textarea>
      </div>
    `).join('')}
    <div class="exit-ticket-trap" aria-hidden="true"><label>Website <input name="website" type="text" tabindex="-1"></label></div>
    <input name="module" type="hidden" value="${config.module}">
    <label class="submission-consent"><input name="submission_consent" type="checkbox" value="disahkan" required><span>Saya faham destinasi respons dan mengesahkan kandungan ini sesuai untuk latihan.</span></label>
    <div class="exit-ticket-actions"><button class="button" type="submit">${config.button}</button><button class="button ghost" type="button" data-clear-draft>Padam draf lokal</button><p class="exit-ticket-status" aria-live="polite"></p></div>
  `;

  const button = form.querySelector('[type="submit"]');
  const status = form.querySelector('.exit-ticket-status');
  restoreFormDraft(form, draftKey);
  form.addEventListener('input', () => saveFormDraft(form, draftKey));
  form.addEventListener('change', () => saveFormDraft(form, draftKey));
  form.querySelector('[data-clear-draft]').addEventListener('click', () => {
    if (!window.confirm('Padam draf penilaian yang disimpan pada peranti ini?')) return;
    localStorage.removeItem(draftKey);
    form.reset();
    status.textContent = 'Draf lokal telah dipadam.';
  });
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    status.className = 'exit-ticket-status';
    status.textContent = 'Maklum balas sedang disimpan.';
    try {
      await fetch(EXIT_TICKET_ENDPOINT, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(new FormData(form)) });
      form.reset();
      localStorage.removeItem(draftKey);
      status.className = 'exit-ticket-status success';
      status.textContent = 'Permintaan telah dihantar. Fasilitator perlu menyemak rekod destinasi kerana pelayan tidak memberikan pengesahan terus.';
    } catch {
      status.className = 'exit-ticket-status error';
      status.textContent = 'Rekod tidak dapat dihantar. Semak sambungan internet dan cuba lagi.';
    } finally {
      button.disabled = false;
    }
  });
  container.appendChild(form);
}

document.querySelectorAll('[data-final-evaluation]').forEach(renderFinalEvaluation);

const activityPath = [
  { path: '/modul-1/kanvas.html', label: 'Kanvas peluang', module: 'Modul 1', minutes: 18, next: '../modul-2/latihan-surat.html' },
  { path: '/modul-2/latihan-surat.html', label: 'Draf surat rasmi', module: 'Modul 2', prev: '../modul-1/kanvas.html', next: 'latihan-minit.html' },
  { path: '/modul-2/latihan-minit.html', label: 'Minit dan tindakan', module: 'Modul 2', prev: 'latihan-surat.html', next: '../modul-3/latihan-analisis.html' },
  { path: '/modul-3/latihan-analisis.html', label: 'Analisis data', module: 'Modul 3', prev: '../modul-2/latihan-minit.html', next: 'rekod-teknikal.html' },
  { path: '/modul-3/rekod-teknikal.html', label: 'Rekod teknikal', module: 'Modul 3', prev: 'latihan-analisis.html', next: '../modul-4/pemetaan-proses.html' },
  { path: '/modul-4/pemetaan-proses.html', label: 'Pemetaan proses', module: 'Modul 4', prev: '../modul-3/rekod-teknikal.html', next: 'automasi-terkawal.html' },
  { path: '/modul-4/automasi-terkawal.html', label: 'Automasi terkawal', module: 'Modul 4', prev: 'pemetaan-proses.html', next: 'penilaian.html' }
];

const projectCardEndpoint = 'https://script.google.com/macros/s/AKfycbzGN842JD67hoDXScYyz5pm8tGgHYuBSflfanw8R8xAEOd7OVPdUwxMhLr5-Zc5CQg9/exec';
const projectCardFields = [
  ['A. Tajuk peluang', 'Tajuk peluang'],
  ['B. Pengguna dan masalah', 'Pengguna utama'],
  ['B. Pengguna dan masalah', 'Masalah yang dihadapi'],
  ['B. Pengguna dan masalah', 'Punca dan kesan'],
  ['C. Keadaan semasa', 'Proses semasa'],
  ['C. Keadaan semasa', 'Lokasi kehilangan masa, salinan data atau ralat'],
  ['D. Kesan masalah', 'Kesan lain'],
  ['D. Kesan masalah', 'Bukti atau ukuran asas'],
  ['E. Keupayaan pintar', 'Perubahan pengalaman kerja'],
  ['E. Keupayaan pintar', 'Hasil paparan atau bantuan'],
  ['F. Data, dokumen dan integrasi', 'Input minimum'],
  ['F. Data, dokumen dan integrasi', 'Dokumen atau borang sumber'],
  ['F. Data, dokumen dan integrasi', 'Output yang diperlukan'],
  ['F. Data, dokumen dan integrasi', 'Lokasi simpanan data'],
  ['F. Data, dokumen dan integrasi', 'Data peribadi atau sensitif'],
  ['F. Data, dokumen dan integrasi', 'Sistem yang perlu dipautkan'],
  ['G. Ukuran kejayaan', 'Ukuran lain'],
  ['G. Ukuran kejayaan', 'Keadaan sekarang'],
  ['G. Ukuran kejayaan', 'Sasaran percubaan'],
  ['G. Ukuran kejayaan', 'Cara mengukur'],
  ['H. Risiko dan kawalan', 'Risiko 1'],
  ['H. Risiko dan kawalan', 'Kesan risiko 1'],
  ['H. Risiko dan kawalan', 'Kawalan risiko 1'],
  ['H. Risiko dan kawalan', 'Risiko 2'],
  ['H. Risiko dan kawalan', 'Kesan risiko 2'],
  ['H. Risiko dan kawalan', 'Kawalan risiko 2'],
  ['H. Risiko dan kawalan', 'Tindakan yang memerlukan kelulusan manusia'],
  ['I. Percubaan kecil', 'Tempoh dicadangkan (minggu)'],
  ['I. Percubaan kecil', 'Bilangan pengguna'],
  ['I. Percubaan kecil', 'Langkah pertama dalam dua minggu'],
  ['I. Percubaan kecil', 'Pemilik percubaan'],
  ['I. Percubaan kecil', 'Bukti yang akan dikumpulkan'],
  ['J. Skor keutamaan', 'Nilai operasi'],
  ['J. Skor keutamaan', 'Kekerapan'],
  ['J. Skor keutamaan', 'Kebolehlaksanaan'],
  ['J. Skor keutamaan', 'Risiko']
];

// Urutan kekunci storan lama mengikut susunan visual Kanvas Modul 1.
// Digunakan untuk memindahkan jawapan peserta yang disimpan sebelum
// `orderedResponses` diperkenalkan.
const legacyProjectCardResponseOrder = [
  'line-0', 'line-1', 'line-6', 'line-7', 'line-9', 'line-10',
  'line-11', 'line-12', 'line-13', 'line-14',
  'cell-0', 'cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5',
  'line-15', 'line-16', 'line-17', 'line-18',
  'cell-6', 'cell-7', 'cell-8', 'cell-9', 'cell-10', 'cell-11',
  'line-19', 'line-20', 'line-21', 'line-22', 'line-23', 'line-24',
  'cell-12', 'cell-13', 'cell-14', 'cell-15'
];

function enhanceParticipantWorkspace() {
  const configIndex = activityPath.findIndex((item) => location.pathname.endsWith(item.path));
  if (configIndex < 0) return;
  const config = activityPath[configIndex];
  const prose = document.querySelector('.prose');
  if (!prose) return;

  const key = `mpe-participant-workspace-${config.path}`;
  let state = {};
  try { state = JSON.parse(localStorage.getItem(key)) || {}; } catch { state = {}; }
  const save = () => localStorage.setItem(key, JSON.stringify(state));

  const responseControls = [];
  prose.querySelectorAll('tbody td:empty').forEach((cell, index) => {
    const input = document.createElement('textarea');
    input.rows = 2;
    input.maxLength = 1500;
    input.value = state.responses?.[`cell-${index}`] || '';
    input.setAttribute('aria-label', `Jawapan jadual ${cell.closest('tr').cells[0].textContent.trim() || index + 1}`);
    input.dataset.workspaceField = `cell-${index}`;
    cell.appendChild(input);
    responseControls.push(input);
  });

  prose.querySelectorAll('code').forEach((code, index) => {
    if (!/^_{8,}$/.test(code.textContent.trim())) return;
    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 500;
    input.className = 'inline-response';
    input.value = state.responses?.[`line-${index}`] || '';
    input.setAttribute('aria-label', `Jawapan ${code.closest('p')?.textContent.replace(/_+/g, '').trim() || index + 1}`);
    input.dataset.workspaceField = `line-${index}`;
    code.replaceWith(input);
    responseControls.push(input);
  });

  const checkboxes = [...prose.querySelectorAll('input[type="checkbox"]')];
  checkboxes.forEach((input, index) => {
    input.disabled = false;
    input.checked = Boolean(state.checks?.[index]);
  });

  const workspace = document.createElement('section');
  workspace.className = 'participant-workspace';
  workspace.innerHTML = `
    <div class="workspace-step"><span>${config.module}</span><strong>Langkah ${configIndex + 1} daripada ${activityPath.length} · ${config.label}</strong></div>
    <div class="workspace-progress"><div><strong>Kemajuan halaman</strong><span data-activity-progress>0%</span></div><progress max="100" value="0"></progress><small>Jawapan disimpan secara automatik pada peranti ini.</small></div>
    ${config.minutes ? '<div class="activity-timer"><strong data-timer-display>18:00</strong><button class="button ghost" type="button" data-start-timer>Mulakan pemasa</button></div>' : ''}
    <div class="workspace-actions">${config.path === '/modul-1/kanvas.html' ? '<button class="button" type="button" data-create-project-card>Hasilkan Kad Projek Kumpulan</button>' : ''}<button class="button ghost" type="button" data-export-activity>Eksport jawapan CSV</button><button class="button ghost" type="button" data-reset-activity>Kosongkan halaman</button>${config.prev ? `<a class="button ghost" href="${config.prev}">← Sebelumnya</a>` : ''}<a class="button" href="${config.next}">Teruskan →</a></div>
    ${config.path === '/modul-1/kanvas.html' ? '<p class="workspace-document-status" data-project-card-status aria-live="polite"></p>' : ''}`;
  prose.prepend(workspace);
  const orderedResponseControls = [...prose.querySelectorAll('[data-workspace-field]')];

  const update = () => {
    state.responses = Object.fromEntries(responseControls.map((input) => [input.dataset.workspaceField, input.value]));
    state.orderedResponses = orderedResponseControls.map((input) => input.value);
    state.checks = checkboxes.map((input) => input.checked);
    const completed = responseControls.filter((input) => input.value.trim()).length + checkboxes.filter((input) => input.checked).length;
    const total = responseControls.length + checkboxes.length;
    const percent = total ? Math.round(completed / total * 100) : 0;
    workspace.querySelector('progress').value = percent;
    workspace.querySelector('[data-activity-progress]').textContent = `${completed}/${total} item · ${percent}%`;
    save();
  };
  responseControls.forEach((input) => input.addEventListener('input', update));
  checkboxes.forEach((input) => input.addEventListener('change', update));
  update();

  workspace.querySelector('[data-export-activity]').addEventListener('click', () => {
    const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
    const lines = [['Aktiviti', config.label], [], ['Item', 'Jawapan']];
    responseControls.forEach((input) => lines.push([input.getAttribute('aria-label'), input.value]));
    checkboxes.forEach((input, index) => lines.push([input.parentElement.textContent.trim() || `Checklist ${index + 1}`, input.checked ? 'Selesai' : 'Belum']));
    const blob = new Blob(['\ufeff' + lines.map((line) => line.map(escapeCsv).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${config.module.replace(' ', '-')}-${config.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  });

  const projectCardButton = workspace.querySelector('[data-create-project-card]');
  if (projectCardButton) projectCardButton.addEventListener('click', async () => {
    update();
    const title = orderedResponseControls[0]?.value.trim();
    if (!title) {
      window.alert('Lengkapkan Tajuk peluang sebelum menghasilkan Kad Projek Kumpulan.');
      orderedResponseControls[0]?.focus();
      return;
    }
    const groupName = window.prompt('Masukkan nama kumpulan untuk Kad Projek:', state.groupName || 'Kumpulan Latihan');
    if (!groupName?.trim()) return;
    state.groupName = groupName.trim();
    save();

    const sections = [];
    const addItem = (heading, label, value) => {
      const cleanValue = String(value || '').trim();
      if (!cleanValue) return;
      let section = sections.find((item) => item.heading === heading);
      if (!section) { section = { heading, items: [] }; sections.push(section); }
      section.items.push({ label, value: cleanValue });
    };
    orderedResponseControls.forEach((input, index) => {
      const descriptor = projectCardFields[index];
      if (descriptor) addItem(descriptor[0], descriptor[1], input.value);
    });
    const selectedChecks = checkboxes.map((input, index) => ({ input, index, label: input.parentElement.textContent.trim() })).filter((item) => item.input.checked);
    selectedChecks.filter((item) => item.index < 7).forEach((item) => addItem('D. Kesan masalah', 'Kesan dipilih', item.label));
    selectedChecks.filter((item) => item.index >= 7 && item.index < 13).forEach((item) => addItem('E. Keupayaan pintar', 'Keupayaan dipilih', item.label));
    selectedChecks.filter((item) => item.index >= 13 && item.index < 21).forEach((item) => addItem('G. Ukuran kejayaan', 'Ukuran dipilih', item.label));
    selectedChecks.filter((item) => item.index >= 21).forEach((item) => addItem('K. Semakan kendiri', 'Disahkan kumpulan', item.label));

    const status = workspace.querySelector('[data-project-card-status]');
    const originalText = projectCardButton.textContent;
    projectCardButton.disabled = true;
    projectCardButton.textContent = 'Mencipta Google Doc...';
    status.textContent = 'Jawapan sedang disusun dan dihantar ke folder latihan Google Drive.';
    try {
      const response = await fetch(projectCardEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'createProjectCard', data: { groupName: groupName.trim(), title, sections } }),
        redirect: 'follow'
      });
      if (!response.ok) throw new Error(`Ralat rangkaian (${response.status})`);
      const result = await response.json();
      if (!result.ok || !result.documentUrl) throw new Error(result.error || 'Dokumen tidak dapat dicipta');
      state.projectCardUrl = result.documentUrl;
      save();
      status.innerHTML = `Kad Projek berjaya dicipta. <a href="${result.documentUrl}" target="_blank" rel="noopener">Buka Google Doc ↗</a><br><small>${result.sharingWarning || 'Simpan pautan ini untuk digunakan semula dalam Modul 2 hingga Modul 5.'}</small>`;
    } catch (error) {
      status.textContent = `Kad Projek tidak dapat dicipta: ${error.message || 'ralat tidak diketahui'}. Eksport CSV sebagai salinan sandaran.`;
    } finally {
      projectCardButton.disabled = false;
      projectCardButton.textContent = originalText;
    }
  });

  workspace.querySelector('[data-reset-activity]').addEventListener('click', () => {
    if (!window.confirm('Kosongkan semua jawapan halaman ini yang disimpan pada peranti?')) return;
    localStorage.removeItem(key);
    location.reload();
  });

  if (config.minutes) {
    const display = workspace.querySelector('[data-timer-display]');
    const start = workspace.querySelector('[data-start-timer]');
    const renderTimer = () => {
      const remaining = state.timerEnd ? Math.max(0, Math.ceil((state.timerEnd - Date.now()) / 1000)) : config.minutes * 60;
      display.textContent = `${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
      display.classList.toggle('expired', remaining === 0);
      start.textContent = state.timerEnd ? 'Mulakan semula' : 'Mulakan pemasa';
    };
    start.addEventListener('click', () => {
      state.timerEnd = Date.now() + config.minutes * 60 * 1000;
      save();
      renderTimer();
    });
    renderTimer();
    window.setInterval(renderTimer, 1000);
  }
}

function enhanceProjectCardBridge() {
  const container = document.querySelector('[data-project-card-bridge]');
  if (!container) return;

  const moduleOneKey = 'mpe-participant-workspace-/modul-1/kanvas.html';
  const bridgeKey = 'mpe-project-card-bridge-modul-2';
  let moduleOneState = {};
  let bridgeState = {};
  try { moduleOneState = JSON.parse(localStorage.getItem(moduleOneKey)) || {}; } catch { moduleOneState = {}; }
  try { bridgeState = JSON.parse(localStorage.getItem(bridgeKey)) || {}; } catch { bridgeState = {}; }

  const responses = moduleOneState.responses || {};
  const savedOrder = Array.isArray(moduleOneState.orderedResponses) ? moduleOneState.orderedResponses : [];
  const legacyOrder = legacyProjectCardResponseOrder.map((key) => responses[key] || '');
  const values = savedOrder.some((value) => String(value).trim()) ? savedOrder : legacyOrder;
  if (!savedOrder.length && legacyOrder.some((value) => String(value).trim())) {
    moduleOneState.orderedResponses = legacyOrder;
    localStorage.setItem(moduleOneKey, JSON.stringify(moduleOneState));
  }
  const get = (index) => String(values[index] || '').trim();
  const hasCanvas = values.some((value) => String(value).trim());
  const initialUrl = bridgeState.projectCardUrl || moduleOneState.projectCardUrl || '';

  container.className = 'project-card-bridge';
  container.innerHTML = `
    <div class="project-card-bridge__status">
      <strong>${hasCanvas ? 'Kanvas Modul 1 ditemui pada peranti ini ✓' : 'Kanvas Modul 1 belum ditemui pada peranti ini'}</strong>
      <span>${hasCanvas ? 'Maklumat terpilih boleh disusun terus sebagai bahan memo.' : 'Buka Modul 1 dan lengkapkan kanvas, kemudian kembali ke halaman ini.'}</span>
    </div>
    <label class="project-card-bridge__field">Pautan Google Doc Kad Projek
      <input type="url" data-project-card-url placeholder="https://docs.google.com/document/d/..." value="${initialUrl.replaceAll('&', '&amp;').replaceAll('"', '&quot;')}">
    </label>
    <div class="workspace-actions">
      <button class="button" type="button" data-use-project-card ${hasCanvas ? '' : 'disabled'}>Gunakan Kad Projek Modul 1</button>
      <a class="button ghost" href="../modul-1/kanvas.html">Semak Kanvas Modul 1</a>
      <a class="button ghost" data-open-project-card href="${initialUrl || '#'}" target="_blank" rel="noopener" ${initialUrl ? '' : 'hidden'}>Buka Google Doc ↗</a>
    </div>
    <div data-project-card-output hidden>
      <h3>Bahan dan arahan untuk draf memo</h3>
      <p class="callout"><strong>Tujuan hasil:</strong> Memohon pertimbangan atau kelulusan untuk menjalankan percubaan kecil — bukan memberi kelulusan automatik.</p>
      <textarea rows="22" data-project-card-prompt aria-label="Bahan dan arahan draf memo"></textarea>
      <div class="workspace-actions">
        <button class="button" type="button" data-copy-project-prompt>Salin bahan dan arahan</button>
        <button class="button accent" type="button" data-create-module-two-memo>Hasilkan Memo Modul 2 di Google Drive</button>
        <a class="button ghost" data-open-module-two-memo href="${bridgeState.moduleTwoMemoUrl || '#'}" target="_blank" rel="noopener" ${bridgeState.moduleTwoMemoUrl ? '' : 'hidden'}>Buka Memo Google Doc ↗</a>
      </div>
      <p class="workspace-document-status" data-project-bridge-status aria-live="polite"></p>
    </div>`;

  const urlInput = container.querySelector('[data-project-card-url]');
  const openLink = container.querySelector('[data-open-project-card]');
  const saveUrl = () => {
    const url = urlInput.value.trim();
    bridgeState.projectCardUrl = url;
    localStorage.setItem(bridgeKey, JSON.stringify(bridgeState));
    openLink.href = url || '#';
    openLink.hidden = !url;
  };
  urlInput.addEventListener('input', saveUrl);

  container.querySelector('[data-use-project-card]')?.addEventListener('click', () => {
    saveUrl();
    const sourceUrl = urlInput.value.trim() || '[PAUTAN KAD PROJEK BELUM DIMASUKKAN]';
    const prompt = `KONTEKS:\nSaya sedang menyediakan memo cadangan percubaan kecil berdasarkan Kad Projek Modul 1. Semua maklumat ialah data rekaan untuk latihan.\n\nSUMBER RUJUKAN:\n${sourceUrl}\n\nFAKTA DARIPADA KAD PROJEK:\n- Tajuk peluang: ${get(0) || '[PERLU PENGESAHAN]'}\n- Pengguna utama: ${get(1) || '[PERLU PENGESAHAN]'}\n- Masalah: ${get(2) || '[PERLU PENGESAHAN]'}\n- Punca dan kesan: ${get(3) || '[PERLU PENGESAHAN]'}\n- Proses semasa: ${get(4) || '[PERLU PENGESAHAN]'}\n- Cadangan perubahan kerja: ${get(8) || '[PERLU PENGESAHAN]'}\n- Hasil atau paparan dicadangkan: ${get(9) || '[PERLU PENGESAHAN]'}\n- Output diperlukan: ${get(12) || '[PERLU PENGESAHAN]'}\n- Keadaan sekarang: ${get(17) || '[PERLU PENGESAHAN]'}\n- Sasaran percubaan: ${get(18) || '[PERLU PENGESAHAN]'}\n- Cara mengukur: ${get(19) || '[PERLU PENGESAHAN]'}\n- Risiko utama: ${get(20) || '[PERLU PENGESAHAN]'}\n- Kawalan utama: ${get(22) || '[PERLU PENGESAHAN]'}\n- Kelulusan manusia diperlukan: ${get(26) || '[PERLU PENGESAHAN]'}\n- Tempoh percubaan: ${get(27) ? `${get(27)} minggu` : '[PERLU PENGESAHAN]'}\n- Bilangan pengguna: ${get(28) || '[PERLU PENGESAHAN]'}\n- Langkah pertama: ${get(29) || '[PERLU PENGESAHAN]'}\n- Pemilik percubaan: ${get(30) || '[PERLU PENGESAHAN]'}\n- Bukti dikumpulkan: ${get(31) || '[PERLU PENGESAHAN]'}\n\nTUGAS:\n1. Hasilkan draf memo rasmi untuk memohon pertimbangan menjalankan percubaan kecil.\n2. Susun kepada: tujuan, latar belakang, masalah semasa, cadangan, skop dan tempoh percubaan, ukuran kejayaan, risiko dan kawalan, serta keputusan yang dimohon.\n3. Kekalkan semua fakta di atas. Jangan cipta nama pegawai, nombor rujukan, tarikh, kos, kelulusan atau komitmen yang tiada.\n4. Tandakan setiap maklumat yang belum tersedia sebagai [PERLU PENGESAHAN].\n5. Nyatakan bahawa keputusan akhir dan kelulusan kekal pada pegawai yang diberi kuasa.\n6. Tandakan dokumen sebagai DRAF — UNTUK LATIHAN SAHAJA.`;
    container.querySelector('[data-project-card-prompt]').value = prompt;
    container.querySelector('[data-project-card-output]').hidden = false;
    container.querySelector('[data-project-bridge-status]').textContent = 'Bahan memo telah disusun daripada Kanvas Modul 1. Semak fakta sebelum menyalinnya ke platform AI yang diluluskan.';
  });

  container.querySelector('[data-copy-project-prompt]')?.addEventListener('click', async (event) => {
    const text = container.querySelector('[data-project-card-prompt]').value;
    try { await navigator.clipboard.writeText(text); }
    catch {
      const textarea = container.querySelector('[data-project-card-prompt]');
      textarea.select();
      document.execCommand('copy');
    }
    event.currentTarget.textContent = 'Disalin ✓';
    window.setTimeout(() => { event.currentTarget.textContent = 'Salin bahan dan arahan'; }, 1800);
  });

  container.querySelector('[data-create-module-two-memo]')?.addEventListener('click', async (event) => {
    saveUrl();
    const groupName = moduleOneState.groupName || bridgeState.groupName || window.prompt('Masukkan nama kumpulan untuk Memo Modul 2:', 'Kumpulan Latihan');
    if (!groupName?.trim()) return;
    bridgeState.groupName = groupName.trim();
    localStorage.setItem(bridgeKey, JSON.stringify(bridgeState));

    const placeholder = (index) => get(index) || '[PERLU PENGESAHAN]';
    const sections = [
      { heading: '1. Tujuan', items: [
        { label: 'Permohonan', value: `Memohon pertimbangan untuk menjalankan percubaan kecil bagi ${placeholder(0)}.` }
      ]},
      { heading: '2. Latar belakang dan masalah semasa', items: [
        { label: 'Pengguna utama', value: placeholder(1) },
        { label: 'Masalah', value: placeholder(2) },
        { label: 'Punca dan kesan', value: placeholder(3) },
        { label: 'Proses semasa', value: placeholder(4) }
      ]},
      { heading: '3. Cadangan percubaan kecil', items: [
        { label: 'Perubahan kerja dicadangkan', value: placeholder(8) },
        { label: 'Hasil atau paparan', value: placeholder(9) },
        { label: 'Output diperlukan', value: placeholder(12) },
        { label: 'Tempoh', value: get(27) ? `${get(27)} minggu` : '[PERLU PENGESAHAN]' },
        { label: 'Bilangan pengguna', value: placeholder(28) },
        { label: 'Langkah pertama', value: placeholder(29) },
        { label: 'Pemilik percubaan', value: placeholder(30) }
      ]},
      { heading: '4. Ukuran kejayaan', items: [
        { label: 'Keadaan sekarang', value: placeholder(17) },
        { label: 'Sasaran percubaan', value: placeholder(18) },
        { label: 'Cara mengukur', value: placeholder(19) },
        { label: 'Bukti dikumpulkan', value: placeholder(31) }
      ]},
      { heading: '5. Risiko, kawalan dan semakan manusia', items: [
        { label: 'Risiko utama', value: placeholder(20) },
        { label: 'Kesan risiko', value: placeholder(21) },
        { label: 'Kawalan utama', value: placeholder(22) },
        { label: 'Risiko kedua', value: placeholder(23) },
        { label: 'Kesan risiko kedua', value: placeholder(24) },
        { label: 'Kawalan risiko kedua', value: placeholder(25) },
        { label: 'Tindakan yang memerlukan kelulusan manusia', value: placeholder(26) }
      ]},
      { heading: '6. Keputusan yang dimohon', items: [
        { label: 'Keputusan', value: 'Pertimbangan dan kelulusan pegawai berkuasa untuk menjalankan percubaan kecil dalam skop yang dicadangkan. Kelulusan tidak diberikan secara automatik oleh sistem.' }
      ]}
    ];

    const button = event.currentTarget;
    const status = container.querySelector('[data-project-bridge-status]');
    const openMemo = container.querySelector('[data-open-module-two-memo]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Mencipta Memo Google Doc...';
    status.textContent = 'Memo sedang disusun dan disimpan dalam folder latihan Google Drive.';
    try {
      const response = await fetch(projectCardEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'createModuleTwoMemo', data: {
          groupName: groupName.trim(),
          title: placeholder(0),
          sourceUrl: urlInput.value.trim(),
          sections
        }}),
        redirect: 'follow'
      });
      if (!response.ok) throw new Error(`Ralat rangkaian (${response.status})`);
      const result = await response.json();
      if (!result.ok || !result.documentUrl) throw new Error(result.error || 'Memo tidak dapat dicipta');
      bridgeState.moduleTwoMemoUrl = result.documentUrl;
      localStorage.setItem(bridgeKey, JSON.stringify(bridgeState));
      openMemo.href = result.documentUrl;
      openMemo.hidden = false;
      status.innerHTML = `Memo Modul 2 berjaya disimpan. <a href="${result.documentUrl}" target="_blank" rel="noopener">Buka Google Doc ↗</a><br><small>${result.sharingWarning || 'Gunakan pautan memo ini sebagai hasil Modul 2 dan rujukan bagi aktiviti seterusnya.'}</small>`;
    } catch (error) {
      status.textContent = `Memo tidak dapat dicipta: ${error.message || 'ralat tidak diketahui'}. Pastikan Apps Script telah dikemas kini dan dideploy semula.`;
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}

function enhanceModuleTwoLetterWorkspace() {
  const container = document.querySelector('[data-official-letter-workspace]');
  if (!container) return;

  const storageKey = 'mpe-module-2-official-letter-v1';
  const defaults = {
    sender: 'Unit Operasi Makmal, Jabatan Infrastruktur Teknikal Contoh (JITC)',
    recipient: 'Pengurus Operasi\nSyarikat Kalibrasi Cekap Sdn. Bhd. (rekaan)',
    reference: 'JITC.MPE.600-3/2/1 Jld. 1 (05) — SIMULASI',
    letterDate: '28 Julai 2026',
    salutation: 'Tuan/Puan,',
    subject: 'Permohonan Pengesahan Tarikh Lawatan Kalibrasi Peralatan Makmal',
    body: 'Dengan hormatnya perkara di atas dirujuk.\n\n2. Unit ini memohon pengesahan pihak tuan/puan bagi cadangan lawatan kalibrasi pada 5 Ogos 2026, dari 9.30 pagi hingga 12.30 tengah hari, di Makmal Tenaga Contoh, Blok F, Kompleks Latihan Contoh.\n\n3. Peralatan yang terlibat ialah Power Quality Analyser (LAT-PQA-014) dan Insulation Tester (LAT-INS-022). Juruteknik dimohon membawa sijil rujukan kalibrasi dan senarai peralatan kerja.\n\n4. Mohon pengesahan diterima selewat-lewatnya pada 31 Julai 2026, jam 12.00 tengah hari melalui amir.latihan@example.com. Nombor telefon: [PERLU PENGESAHAN].',
    contact: 'Encik Amir Latihan, Penolong Jurutera (rekaan) · amir.latihan@example.com · Telefon: [PERLU PENGESAHAN]',
    signatory: '[PENANDATANGAN PERLU PENGESAHAN]'
  };
  let state = {};
  try { state = JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { state = {}; }
  const values = { ...defaults, ...state };
  const escapeMarkup = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

  container.className = 'official-letter-workspace';
  container.innerHTML = `
    <div class="project-card-bridge__status">
      <strong>Draf surat simulasi</strong>
      <span>Medan telah diisi daripada lembaran fakta latihan. Semak dan sunting sebelum mencipta Google Doc.</span>
    </div>
    <div class="official-letter-workspace__grid">
      <label>Pengirim<input data-letter-field="sender" value="${escapeMarkup(values.sender)}" required></label>
      <label>Penerima<textarea data-letter-field="recipient" rows="3" required>${escapeMarkup(values.recipient)}</textarea></label>
      <label>Rujukan<input data-letter-field="reference" value="${escapeMarkup(values.reference)}"></label>
      <label>Tarikh surat<input data-letter-field="letterDate" value="${escapeMarkup(values.letterDate)}"></label>
      <label>Salutasi<input data-letter-field="salutation" value="${escapeMarkup(values.salutation)}"></label>
      <label>Penandatangan<input data-letter-field="signatory" value="${escapeMarkup(values.signatory)}"></label>
      <label class="full">Perkara<input data-letter-field="subject" value="${escapeMarkup(values.subject)}" required></label>
      <label class="full">Kandungan surat<textarea data-letter-field="body" rows="12" required>${escapeMarkup(values.body)}</textarea></label>
      <label class="full">Pegawai hubungan<input data-letter-field="contact" value="${escapeMarkup(values.contact)}"></label>
    </div>
    <div class="workspace-actions">
      <button class="button accent" type="button" data-create-module-two-letter>Hasilkan Surat Rasmi di Google Drive</button>
      <a class="button ghost" data-open-module-two-letter href="${state.documentUrl || '#'}" target="_blank" rel="noopener" ${state.documentUrl ? '' : 'hidden'}>Buka Surat Google Doc ↗</a>
    </div>
    <p class="workspace-document-status" data-module-two-letter-status aria-live="polite"></p>`;

  const fields = [...container.querySelectorAll('[data-letter-field]')];
  const save = () => {
    fields.forEach((field) => { state[field.dataset.letterField] = field.value; });
    localStorage.setItem(storageKey, JSON.stringify(state));
  };
  fields.forEach((field) => field.addEventListener('input', save));

  container.querySelector('[data-create-module-two-letter]').addEventListener('click', async (event) => {
    save();
    const missing = fields.find((field) => field.required && !field.value.trim());
    if (missing) {
      window.alert('Lengkapkan semua medan wajib sebelum menghasilkan surat.');
      missing.focus();
      return;
    }

    const button = event.currentTarget;
    const status = container.querySelector('[data-module-two-letter-status]');
    const openLetter = container.querySelector('[data-open-module-two-letter]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Mencipta Surat Google Doc...';
    status.textContent = 'Surat simulasi sedang disusun dan disimpan dalam Google Drive.';
    try {
      const response = await fetch(projectCardEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'createModuleTwoLetter', data: Object.fromEntries(fields.map((field) => [field.dataset.letterField, field.value])) }),
        redirect: 'follow'
      });
      if (!response.ok) throw new Error(`Ralat rangkaian (${response.status})`);
      const result = await response.json();
      if (!result.ok || !result.documentUrl) throw new Error(result.error || 'Surat tidak dapat dicipta');
      state.documentUrl = result.documentUrl;
      localStorage.setItem(storageKey, JSON.stringify(state));
      openLetter.href = result.documentUrl;
      openLetter.hidden = false;
      status.innerHTML = `Surat simulasi berjaya disimpan. <a href="${result.documentUrl}" target="_blank" rel="noopener">Buka Google Doc ↗</a><br><small>${result.sharingWarning || 'Semak surat bersama rakan sekerja sebelum sebarang penggunaan lanjut.'}</small>`;
    } catch (error) {
      status.textContent = `Surat tidak dapat dicipta: ${error.message || 'ralat tidak diketahui'}. Pastikan Apps Script telah dikemas kini dan dideploy semula.`;
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}

enhanceProjectCardBridge();

enhanceParticipantWorkspace();

enhanceModuleTwoLetterWorkspace();

function findSectionTable(title) {
  const heading = [...document.querySelectorAll('.prose h2')].find((item) => item.textContent.trim() === title);
  if (!heading) return null;
  let element = heading.nextElementSibling;
  while (element && element.tagName !== 'H2') {
    if (element.tagName === 'TABLE') return element;
    element = element.nextElementSibling;
  }
  return null;
}

function enhanceModuleFiveWorkspace() {
  if (!location.pathname.endsWith('/modul-5/latihan.html')) return;

  const storageKey = 'mpe-module-5-workspace-v1';
  const load = () => {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { return {}; }
  };
  const state = load();
  const save = () => localStorage.setItem(storageKey, JSON.stringify(state));

  const checklistHeadings = ['Sebelum pemasa dimulakan', 'Checklist serahan'];
  const checkboxes = [];
  checklistHeadings.forEach((title) => {
    const heading = [...document.querySelectorAll('.prose h2')].find((item) => item.textContent.trim() === title);
    const list = heading?.nextElementSibling;
    if (!list || list.tagName !== 'UL') return;
    list.classList.add('saved-checklist');
    list.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.disabled = false;
      checkboxes.push(input);
    });
  });

  const progress = document.createElement('section');
  progress.className = 'workspace-progress';
  progress.setAttribute('aria-live', 'polite');
  progress.innerHTML = '<div><strong>Kemajuan latihan</strong><span data-progress-label></span></div><progress max="100" value="0" data-workspace-progress></progress><small>Disimpan secara automatik pada peranti ini.</small>';
  const firstHeading = [...document.querySelectorAll('.prose h2')].find((item) => item.textContent.trim() === checklistHeadings[0]);
  firstHeading?.insertAdjacentElement('afterend', progress);

  const updateProgress = () => {
    const completed = checkboxes.filter((input) => input.checked).length;
    const percent = checkboxes.length ? Math.round((completed / checkboxes.length) * 100) : 0;
    progress.querySelector('[data-workspace-progress]').value = percent;
    progress.querySelector('[data-progress-label]').textContent = `${completed}/${checkboxes.length} item · ${percent}%`;
  };

  checkboxes.forEach((input, index) => {
    input.checked = Boolean(state.checks?.[index]);
    input.addEventListener('change', () => {
      state.checks = checkboxes.map((item) => item.checked);
      save();
      updateProgress();
    });
  });
  updateProgress();

  const table = findSectionTable('Ujian penerimaan minimum');
  if (!table) return;
  table.classList.add('uat-table');

  const panel = document.createElement('section');
  panel.className = 'uat-panel';
  panel.innerHTML = `
    <div class="uat-fields">
      <label>Penguji<input type="text" maxlength="120" data-uat-meta="tester" autocomplete="name"></label>
      <label>Tarikh<input type="date" data-uat-meta="date"></label>
      <label>Persekitaran / versi<input type="text" maxlength="120" data-uat-meta="build" placeholder="Contoh: E3 · v1.1"></label>
    </div>
    <div class="uat-actions">
      <button class="button" type="button" data-export-uat>Eksport CSV</button>
      <button class="button ghost" type="button" data-reset-uat>Kosongkan lembaran</button>
      <span role="status">Disimpan secara automatik pada peranti ini.</span>
    </div>`;
  table.insertAdjacentElement('beforebegin', panel);

  panel.querySelectorAll('[data-uat-meta]').forEach((input) => {
    const key = input.dataset.uatMeta;
    input.value = state.meta?.[key] || '';
    input.addEventListener('input', () => {
      state.meta = { ...(state.meta || {}), [key]: input.value };
      save();
    });
  });

  const rows = [...table.tBodies[0].rows];
  rows.forEach((row, index) => {
    const actual = document.createElement('textarea');
    actual.rows = 2;
    actual.maxLength = 1000;
    actual.setAttribute('aria-label', `Hasil sebenar untuk ${row.cells[0].textContent.trim()}`);
    actual.value = state.tests?.[index]?.actual || '';

    const status = document.createElement('select');
    status.setAttribute('aria-label', `Status untuk ${row.cells[0].textContent.trim()}`);
    ['Belum diuji', 'Lulus', 'Gagal', 'Terhalang'].forEach((value) => status.add(new Option(value, value)));
    status.value = state.tests?.[index]?.status || 'Belum diuji';

    row.cells[3].replaceChildren(actual);
    row.cells[4].replaceChildren(status);
    [actual, status].forEach((control) => control.addEventListener('input', () => {
      state.tests = rows.map((item) => ({
        actual: item.cells[3].querySelector('textarea').value,
        status: item.cells[4].querySelector('select').value
      }));
      save();
    }));
  });

  panel.querySelector('[data-export-uat]').addEventListener('click', () => {
    const escapeCsv = (value) => `"${String(value).replaceAll('"', '""')}"`;
    const metadata = panel.querySelectorAll('[data-uat-meta]');
    const lines = [
      ['Penguji', metadata[0].value], ['Tarikh', metadata[1].value], ['Persekitaran / versi', metadata[2].value], [],
      ['ID', 'Senario', 'Hasil dijangka', 'Hasil sebenar', 'Status'],
      ...rows.map((row) => [...row.cells].map((cell) => cell.querySelector('textarea, select')?.value || cell.textContent.trim()))
    ];
    const blob = new Blob(['\ufeff' + lines.map((line) => line.map(escapeCsv).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `MPE-UAT-${metadata[1].value || 'tanpa-tarikh'}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
  });

  panel.querySelector('[data-reset-uat]').addEventListener('click', () => {
    if (!window.confirm('Kosongkan semua kemajuan dan keputusan UAT yang disimpan pada peranti ini?')) return;
    localStorage.removeItem(storageKey);
    location.reload();
  });
}

enhanceModuleFiveWorkspace();
