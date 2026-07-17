# Kit Binaan dan Pustaka Prompt MPE Hub

## Sebelum bermula

Gunakan data rekaan. Jangan tampal ID Google Sheet, ID Google Doc, pautan peribadi atau data sebenar ke platform AI.

## 1. Struktur Google Sheet

Cipta Google Sheet, namakan tab pertama `Records` dan masukkan tajuk berikut pada baris pertama:

```text
timestamp | record_id | record_type | activity_date | asset_id | activity | status | owner | notes | document_url
```

Salin ID Sheet daripada URL dan masukkan sendiri dalam kod selepas meninggalkan platform AI.

## 2. Kod pelayan `Code.gs`

```javascript
const SPREADSHEET_ID = 'MASUKKAN_ID_GOOGLE_SHEET_DI_SINI';
const SHEET_NAME = 'Records';
const DOC_TEMPLATE_ID = 'MASUKKAN_ID_GOOGLE_DOC_DI_SINI';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('MPE Hub Latihan');
}

function getSheet_() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
}

function validateRecord_(record) {
  const required = ['record_type', 'activity_date', 'activity', 'owner'];
  const missing = required.filter(key => !String(record[key] || '').trim());
  if (missing.length) throw new Error('Medan wajib belum lengkap: ' + missing.join(', '));
  if (Number.isNaN(Date.parse(record.activity_date))) throw new Error('Tarikh aktiviti tidak sah.');
}

function createRecord(record) {
  validateRecord_(record);
  const sheet = getSheet_();
  const id = 'MPE-' + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss');
  sheet.appendRow([
    new Date(), id, record.record_type, record.activity_date,
    record.asset_id || '', record.activity, 'Draf', record.owner,
    record.notes || '', ''
  ]);
  return { ok: true, record_id: id, message: 'Rekod berjaya disimpan sebagai Draf.' };
}

function listRecords() {
  const values = getSheet_().getDataRange().getDisplayValues();
  if (values.length < 2) return [];
  const headers = values.shift();
  return values.reverse().slice(0, 20).map(row =>
    Object.fromEntries(headers.map((header, index) => [header, row[index]]))
  );
}

function generateDocument(recordId) {
  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const headers = values[0];
  const idIndex = headers.indexOf('record_id');
  const urlIndex = headers.indexOf('document_url');
  const rowIndex = values.findIndex((row, index) => index > 0 && row[idIndex] === recordId);
  if (rowIndex < 1) throw new Error('Rekod tidak ditemui.');

  const record = Object.fromEntries(headers.map((header, index) => [header, values[rowIndex][index]]));
  const copy = DriveApp.getFileById(DOC_TEMPLATE_ID).makeCopy('Laporan ' + recordId);
  const doc = DocumentApp.openById(copy.getId());
  const body = doc.getBody();
  Object.entries(record).forEach(([key, value]) =>
    body.replaceText('{{' + key.toUpperCase() + '}}', String(value || '-'))
  );
  doc.saveAndClose();
  const url = doc.getUrl();
  sheet.getRange(rowIndex + 1, urlIndex + 1).setValue(url);
  return { ok: true, url };
}
```

## 3. Antaramuka `Index.html`

Dalam Apps Script, tambah fail HTML bernama `Index` dan tampal kod berikut:

```html
<!doctype html>
<html lang="ms">
<head>
  <base target="_top">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    body{font:16px system-ui;margin:0;background:#f4f6f2;color:#16323a}
    main{max-width:900px;margin:auto;padding:24px}
    .card{background:white;border:1px solid #dbe4df;border-radius:18px;padding:22px;margin:18px 0}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    label{display:grid;gap:6px;font-weight:700}
    input,select,textarea,button{font:inherit;padding:12px;border:1px solid #b9c8c2;border-radius:10px}
    textarea{min-height:90px}.wide{grid-column:1/-1}
    button{background:#123a43;color:white;font-weight:800;cursor:pointer}
    #message{font-weight:700}.record{padding:12px 0;border-top:1px solid #e4ebe7}
    @media(max-width:650px){.grid{grid-template-columns:1fr}}
  </style>
</head>
<body><main>
  <h1>MPE Hub Latihan</h1>
  <p>Prototaip menggunakan data rekaan sahaja.</p>
  <section class="card">
    <h2>Rekod baharu</h2>
    <form id="recordForm" class="grid">
      <label>Jenis rekod<select name="record_type" required><option value="">Pilih</option><option>Buku Log</option><option>KEW.PA-9</option><option>Ujian MCCB</option></select></label>
      <label>Tarikh aktiviti<input name="activity_date" type="date" required></label>
      <label>ID aset<input name="asset_id" placeholder="MPE-REKAAN-01"></label>
      <label>Pemilik<input name="owner" placeholder="Peranan rekaan" required></label>
      <label class="wide">Aktiviti<input name="activity" required></label>
      <label class="wide">Catatan<textarea name="notes"></textarea></label>
      <button class="wide" type="submit">Simpan sebagai Draf</button>
    </form>
    <p id="message" role="status"></p>
  </section>
  <section class="card"><h2>Rekod terkini</h2><div id="records">Memuatkan...</div></section>
</main>
<script>
  const form=document.querySelector('#recordForm'),message=document.querySelector('#message'),records=document.querySelector('#records');
  function esc(value){return String(value||'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]))}
  function load(){google.script.run.withSuccessHandler(items=>{records.innerHTML=items.length?items.map(x=>`<div class="record"><b>${esc(x.record_id)}</b> · ${esc(x.record_type)} · ${esc(x.status)}<br>${esc(x.activity)}<br><button type="button" onclick="makeDoc('${esc(x.record_id)}')">Jana Google Doc</button>${x.document_url?` <a href="${esc(x.document_url)}" target="_blank">Buka Doc</a>`:''}</div>`).join(''):'Belum ada rekod.'}).withFailureHandler(showError).listRecords()}
  function showError(error){message.textContent='Ralat: '+error.message}
  function makeDoc(id){message.textContent='Menjana dokumen...';google.script.run.withSuccessHandler(result=>{message.innerHTML=`Dokumen berjaya dijana: <a href="${result.url}" target="_blank">Buka Google Doc</a>`;load()}).withFailureHandler(showError).generateDocument(id)}
  form.addEventListener('submit',event=>{event.preventDefault();message.textContent='Menyimpan...';const data=Object.fromEntries(new FormData(form));google.script.run.withSuccessHandler(result=>{message.textContent=result.message+' ID: '+result.record_id;form.reset();load()}).withFailureHandler(showError).createRecord(data)});
  load();
</script></body></html>
```

## 4. Templat Google Doc

Cipta Google Doc kosong dan tampal:

```text
LAPORAN REKOD MPE

ID Rekod: {{RECORD_ID}}
Jenis Rekod: {{RECORD_TYPE}}
Tarikh Aktiviti: {{ACTIVITY_DATE}}
ID Aset: {{ASSET_ID}}
Aktiviti: {{ACTIVITY}}
Status: {{STATUS}}
Pemilik: {{OWNER}}
Catatan: {{NOTES}}

Dokumen latihan menggunakan data rekaan dan memerlukan semakan manusia.
```

## 5. Prompt boleh salin

### Prompt A - Fahami kod sebelum mengubah

```text
KONTEKS: Saya peserta latihan dan sedang membina prototaip Google Apps Script menggunakan data rekaan.
TUGAS: Terangkan kod berikut mengikut fungsi, input, output dan kemungkinan ralat.
BATASAN: Jangan mencipta ID, kunci, data atau fungsi kelulusan. Jangan mengubah kod dahulu.
FORMAT: Jadual dengan lajur Fungsi | Tujuan | Input | Output | Risiko | Cara uji.
KOD: [TAMPAL HANYA KOD TANPA ID ATAU DATA SEBENAR]
```

### Prompt B - Sesuaikan satu medan

```text
KONTEKS: Prototaip MPE Hub menggunakan Google Sheets dan Apps Script. Semua data rekaan.
TUGAS: Tambah satu medan bernama [NAMA_MEDAN] pada borang, createRecord dan paparan rekod.
SEMAKAN: Kekalkan validasi sedia ada. Jangan menambah kelulusan automatik. Senaraikan setiap baris yang perlu diubah dan berikan kod lengkap bagi fungsi terlibat sahaja.
```

### Prompt C - Audit keselamatan

```text
Audit kod prototaip ini. Cari pendedahan ID atau data, akses terlalu luas, input tanpa validasi, mesej ralat lemah, perubahan status tanpa kuasa dan kegagalan tanpa laluan manual. Jangan andaikan prototaip ini sistem rasmi. Berikan Isu | Risiko | Bukti kod | Pembetulan | Ujian.
```

### Prompt D - Jana kes ujian

```text
Bina enam kes ujian untuk borang MPE Hub: dua lengkap, dua medan wajib kosong, satu tarikh tidak sah dan satu kegagalan perkhidmatan. Gunakan data rekaan. Format: ID Ujian | Input | Hasil Dijangka | Hasil Sebenar | Lulus/Gagal | Tindakan.
```

## 6. Penerbitan Web App

Pilih **Deploy -> New deployment -> Web app**. Gunakan akses paling sempit yang sesuai dengan akaun dan organisasi. Catat versi serta tarikh. Jangan pilih akses awam jika tidak diperlukan.
