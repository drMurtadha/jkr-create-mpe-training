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
