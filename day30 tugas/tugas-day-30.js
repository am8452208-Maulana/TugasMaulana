
/*
Nama       : Ahmad Maulana
Tugas      : Day 30 - Kasir Warung dengan Percabangan
Materi     : if, else if, else, switch, Truthy/Falsy
*/

// ==================================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==================================================

// POTONGAN A
// Tebakan: yang tercetak adalah 2, 4, dan 6.
// Hasil asli: 2, 4, dan 6.

if (0) {
  console.log("1: masuk");
}
if ("0") {
  console.log("2: masuk");
}
if ("") {
  console.log("3: masuk");
}
if ([]) {
  console.log("4: masuk");
}
if (null) {
  console.log("5: masuk");
}
if (-1) {
  console.log("6: masuk");
}

// Jawaban pertanyaan:
// 1. "0" adalah string yang tidak kosong, sedangkan [] adalah array kosong.
//    Keduanya termasuk Truthy sehingga kondisi if dijalankan.
// 2. Potongan B memeriksa >= 25000 terlebih dahulu. Karena 120000 juga
//    memenuhi syarat itu, program langsung memilih diskon 5%.
//    Perbaikan: periksa 100000, lalu 50000, lalu 25000.
// 3. Potongan C mencetak dua baris karena tidak ada break setelah case
//    "sabtu". Tambahkan break agar hanya satu promo yang dicetak.

// POTONGAN B
let belanja = 120000;

// Tebakan: Diskon 5% karena syarat pertama sudah terpenuhi.
// Hasil asli: Diskon 5%.

if (belanja >= 25000) {
  console.log("Diskon 5%");
} else if (belanja >= 50000) {
  console.log("Diskon 10%");
} else if (belanja >= 100000) {
  console.log("Diskon 15%");
} else {
  console.log("Tidak ada diskon");
}

// POTONGAN C
let hari = "sabtu";

// Tebakan: Promo Akhir Pekan dan Promo Keluarga.
// Hasil asli: Promo Akhir Pekan dan Promo Keluarga.

switch (hari) {
  case "jumat":
    console.log("Promo Jumat Berkah");
  case "sabtu":
    console.log("Promo Akhir Pekan");
  case "minggu":
    console.log("Promo Keluarga");
    break;
  default:
    console.log("Tidak ada promo");
}
// ==================================================
// LANGKAH 2: PERBAIKI 5 KESALAHAN
// ==================================================

let totalBelanja = 80000;
let jenisMember = "gold";
let kodeVoucher = "";
let diskon;
let potonganMember;

// FIX 1: Periksa nominal terbesar terlebih dahulu.
// Seharusnya diskon 10% = 8000.
if (totalBelanja >= 100000) {
  diskon = totalBelanja * 0.15;
} else if (totalBelanja >= 50000) {
  diskon = totalBelanja * 0.10;
} else if (totalBelanja >= 25000) {
  diskon = totalBelanja * 0.05;
} else {
  diskon = 0;
}

// FIX 2: Nama variabel harus sama persis: jenisMember.
// FIX 3: Tambahkan break agar member gold tidak jatuh ke silver.
switch (jenisMember) {
  case "gold":
    potonganMember = 5000;
    break;
  case "silver":
    potonganMember = 2000;
    break;
  default:
    potonganMember = 0;
}

// FIX 4: Gunakan pemeriksaan kondisi, bukan assignment (=).
// String kosong adalah Falsy sehingga voucher tidak digunakan.
if (kodeVoucher === "") {
  console.log("Voucher tidak dipakai");
} else {
  console.log("Voucher dipakai: " + kodeVoucher);
}

// Total akhir
let totalAkhir = totalBelanja - diskon - potonganMember;

// FIX 5: Gunakan >= agar pembayaran yang sama dengan total
// juga dinyatakan lunas.
let uangBayar = 67000;

if (uangBayar >= totalAkhir) {
  console.log("Status: Lunas");
} else {
  console.log("Status: Kurang");
}

console.log(diskon, potonganMember, totalAkhir);

// Jawaban 5 kesalahan:
// 1. Urutan diskon salah; nominal terbesar harus diperiksa dahulu.
// 2. jenismember salah penulisan; seharusnya jenisMember.
// 3. Case gold tidak memiliki break sehingga nilainya tertimpa silver.
// 4. Operator = mengisi nilai, bukan membandingkan; gunakan ===.
// 5. Operator > tidak menerima uang pas; gunakan >=.
//
// Error atau hasil salah:
// - jenismember menyebabkan ReferenceError karena variabel tidak ditemukan.
// - Kesalahan urutan diskon, break, dan operator pembayaran tidak
//   harus menyebabkan error, tetapi menghasilkan nilai atau status salah.
// - Assignment pada kondisi tidak menyebabkan error sintaks, tetapi
//   mengubah nilai variabel dan menghasilkan kondisi yang tidak tepat.
//
// Perbedaan operator:
// =  untuk memberikan nilai.
// == untuk membandingkan nilai dengan kemungkinan konversi tipe.
// === untuk membandingkan nilai dan tipe tanpa konversi.
// Kode assignment tidak error karena = adalah operator JavaScript yang sah.
