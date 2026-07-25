import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.cwd(), 'docs');
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';

const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.csv', 'text/csv; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.pdf', 'application/pdf'],
  ['.png', 'image/png'],
  ['.pptx', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
  ['.svg', 'image/svg+xml'],
  ['.zip', 'application/zip']
]);

function safePathname(requestUrl) {
  const url = new URL(requestUrl, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  const target = path.resolve(root, `.${pathname}`);
  if (target !== root && !target.startsWith(`${root}${path.sep}`)) return null;
  return target;
}

const server = http.createServer(async (request, response) => {
  try {
    let target = safePathname(request.url || '/');
    if (!target) {
      response.writeHead(403).end('Forbidden');
      return;
    }

    const initial = await fs.stat(target).catch(() => null);
    if (initial?.isDirectory()) target = path.join(target, 'index.html');

    const content = await fs.readFile(target);
    const type = mimeTypes.get(path.extname(target).toLowerCase()) || 'application/octet-stream';
    response.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
    response.end(content);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('404 — Fail tidak ditemukan');
  }
});

server.listen(port, host, () => {
  console.log(`Portal tersedia di http://${host}:${port}/`);
  console.log('Tekan Ctrl+C untuk berhenti.');
});

process.on('SIGINT', () => server.close(() => process.exit(0)));
