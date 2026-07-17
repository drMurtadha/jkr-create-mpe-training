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
