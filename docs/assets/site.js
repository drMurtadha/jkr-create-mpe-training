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
