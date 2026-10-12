
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