# Nota Fasilitator Modul 5

## Matlamat sesi

Peserta menyepadukan hasil Modul 1-4 menjadi prototaip MPE Hub menggunakan akaun Google sendiri dan bantuan AI generatif percuma.

## Persediaan sebelum sesi

1. Pastikan peserta boleh membuka Google Sheets, Google Docs dan Apps Script.
2. Sediakan satu demonstrasi MPE Hub menggunakan data rekaan.
3. Paparkan pautan kit binaan dan arahan latihan.
4. Bentuk kumpulan dua atau tiga orang jika tahap kemahiran berbeza.
5. Tegaskan bahawa prototaip bukan sistem pengeluaran.

## Hasil minimum lulus

- Web App boleh dibuka;
- borang menerima satu rekod rekaan;
- rekod muncul dalam Google Sheets;
- satu Google Doc boleh dijana;
- input tidak lengkap ditolak dengan mesej jelas;
- pautan, pemilik dan batasan direkodkan.

## Pelan 120 minit

### 0-10 minit - Tetapkan skop

Minta kumpulan memilih satu kes daripada Modul 1-4. Skop mesti mempunyai satu pengguna, satu borang, satu Sheet dan satu jenis dokumen.

### 10-25 minit - Sediakan data

Peserta mencipta Google Sheet dan tajuk lajur: `timestamp`, `record_id`, `record_type`, `activity_date`, `asset_id`, `activity`, `status`, `owner`, `notes`, `document_url`.

### 25-45 minit - Sambungkan Apps Script

Peserta menyalin `Code.gs`, menetapkan ID Sheet dan menguji fungsi persediaan. Berhenti jika kebenaran akaun atau organisasi menghalang penerbitan; gunakan demonstrasi fasilitator dan teruskan reka bentuk secara berpasangan.

### 45-65 minit - Sesuaikan antaramuka

Peserta menyalin `Index.html`, menukar tajuk, medan dan warna tanpa membuang validasi atau mesej kegagalan. AI boleh membantu menjelaskan atau mengubah kod satu bahagian pada satu masa.

### 65-80 minit - Jana dokumen

Peserta mencipta Google Doc kosong sebagai templat, menetapkan ID dan menguji penjanaan dokumen bagi satu rekod.

### 80-95 minit - Terbit dan isi rekod

Terbitkan sebagai Web App dengan skop akses paling sempit yang masih membolehkan latihan. Jangan pilih akses awam jika tidak diperlukan.

### 95-105 minit - Ujian meja

Uji satu laluan lengkap dan satu input tidak lengkap. Catat input, hasil dijangka, hasil sebenar dan tindakan pembetulan.

### 105-115 minit - Audit kawalan

Semak data rekaan, akses, status manusia, rekod URL, pelan manual dan batasan prototaip.

### 115-120 minit - Demonstrasi dan exit ticket

Setiap kumpulan menunjukkan pautan, satu rekod dalam Sheet dan satu Doc yang dijana.

## Peranan fasilitator

- membantu peserta mengecilkan skop;
- mengelakkan peserta menampal data sebenar kepada AI;
- memeriksa bahawa kod dan kebenaran difahami;
- mengutamakan prototaip kecil yang berfungsi;
- menyediakan laluan manual apabila Apps Script disekat.

## Tanda bahaya

- peserta cuba membina terlalu banyak modul serentak;
- ID Sheet atau Doc dikongsi dalam prompt awam;
- Web App diterbitkan kepada sesiapa sahaja tanpa keperluan;
- AI mencipta fungsi kelulusan automatik;
- status dan kesalahan tidak direkodkan;
- peserta menganggap prototaip sebagai sistem rasmi.
