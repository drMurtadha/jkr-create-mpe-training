const menuButton = document.querySelector('[data-menu]');
const menu = document.querySelector('[data-nav-links]');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
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
      return 'Ulang pagar keselamatan dan audit fakta.';
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
  }
};

function renderExitTicket(container) {
  const ticket = exitTickets[container.dataset.exitTicket];
  if (!ticket) return;

  const form = document.createElement('form');
  form.className = 'exit-ticket-form';
  form.innerHTML = `
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
    <p class="exit-ticket-note">Jangan masukkan maklumat sulit, terperingkat atau data peribadi pihak lain.</p>
    <div class="exit-ticket-actions">
      <button class="button" type="submit">Hantar exit ticket</button>
      <p class="exit-ticket-status" aria-live="polite"></p>
    </div>
  `;

  const button = form.querySelector('[type="submit"]');
  const status = form.querySelector('.exit-ticket-status');
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
      status.className = 'exit-ticket-status success';
      status.textContent = 'Terima kasih. Exit ticket telah dihantar.';
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
  const form = document.createElement('form');
  form.className = 'exit-ticket-form final-evaluation-form';
  form.innerHTML = `
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
    <p class="exit-ticket-note">Jangan masukkan maklumat sulit, terperingkat atau data peribadi pihak lain.</p>
    <div class="exit-ticket-actions"><button class="button" type="submit">${config.button}</button><p class="exit-ticket-status" aria-live="polite"></p></div>
  `;

  const button = form.querySelector('[type="submit"]');
  const status = form.querySelector('.exit-ticket-status');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    button.disabled = true;
    status.className = 'exit-ticket-status';
    status.textContent = 'Maklum balas sedang disimpan.';
    try {
      await fetch(EXIT_TICKET_ENDPOINT, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(new FormData(form)) });
      form.reset();
      status.className = 'exit-ticket-status success';
      status.textContent = 'Terima kasih. Rekod telah dihantar.';
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
