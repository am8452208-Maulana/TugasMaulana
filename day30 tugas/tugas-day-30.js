
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

// ==================================================
// LANGKAH 3: BIKIN KASIR SENDIRI
// ==================================================

// DATA AWAL SKENARIO 1
const kasirNamaPelanggan = "";
const kasirTotalBelanja = 30000;
const kasirHari = "senin";
const kasirJenisMember = "biasa";
const kasirKodeVoucher = "";
const kasirUangBayar = 20000;

// 1. DISKON BERDASARKAN TOTAL BELANJA
let kasirDiskon;

if (kasirTotalBelanja >= 100000) {
  kasirDiskon = kasirTotalBelanja * 0.15;
} else if (kasirTotalBelanja >= 50000) {
  kasirDiskon = kasirTotalBelanja * 0.10;
} else if (kasirTotalBelanja >= 25000) {
  kasirDiskon = kasirTotalBelanja * 0.05;
} else {
  kasirDiskon = 0;
}

// 2. POTONGAN MEMBER
let kasirPotonganMember;

switch (kasirJenisMember) {
  case "gold":
    kasirPotonganMember = 5000;
    break;
  case "silver":
    kasirPotonganMember = 2000;
    break;
  default:
    kasirPotonganMember = 0;
    break;
}

// 3. PROMO HARI
let kasirPotonganHari;

switch (kasirHari) {
  case "jumat":
    kasirPotonganHari = 3000;
    break;
  case "sabtu":
  case "minggu":
    // Kedua case memakai potongan yang sama.
    // Tidak perlu break di antara sabtu dan minggu.
    kasirPotonganHari = 5000;
    break;
  default:
    kasirPotonganHari = 0;
    break;
}

// 4. VALIDASI NAMA DENGAN TRUTHY/FALSY
if (kasirNamaPelanggan) {
  console.log(`Pelanggan: ${kasirNamaPelanggan}`);
} else {
  console.log("Nama pelanggan belum diisi");
}

// 5. VOUCHER DENGAN TRUTHY/FALSY
let kasirPotonganVoucher;

if (kasirKodeVoucher) {
  kasirPotonganVoucher = 2000;
  console.log(`Voucher dipakai: ${kasirKodeVoucher}`);
} else {
  kasirPotonganVoucher = 0;
  console.log("Voucher tidak dipakai");
}

// 6. HITUNG TOTAL AKHIR
const kasirTotalAkhir =
  kasirTotalBelanja -
  kasirDiskon -
  kasirPotonganMember -
  kasirPotonganHari -
  kasirPotonganVoucher;

// 7. CETAK RINCIAN DAN STATUS PEMBAYARAN
console.log(`
========== STRUK KASIR ==========
Total belanja     : Rp${kasirTotalBelanja}
Diskon            : Rp${kasirDiskon}
Potongan member   : Rp${kasirPotonganMember}
Promo hari        : Rp${kasirPotonganHari}
Potongan voucher  : Rp${kasirPotonganVoucher}
Total akhir       : Rp${kasirTotalAkhir}
Uang bayar        : Rp${kasirUangBayar}
`);

if (kasirUangBayar > kasirTotalAkhir) {
  const kasirKembalian = kasirUangBayar - kasirTotalAkhir;
  console.log(`Status: Lunas`);
  console.log(`Kembalian: Rp${kasirKembalian}`);
} else if (kasirUangBayar === kasirTotalAkhir) {
  console.log("Status: Lunas (uang pas)");
} else {
  const kasirKekurangan = kasirTotalAkhir - kasirUangBayar;
  console.log("Status: Kurang");
  console.log(`Kekurangan: Rp${kasirKekurangan}`);
}

// JAWABAN PERTANYAAN LANGKAH 3
//
// 1. Diskon terbesar diperiksa dahulu agar belanja Rp100000 tidak
//    berhenti pada syarat Rp25000. Jika dibalik, diskon 5% bisa terpilih
//    sebelum diskon 10% atau 15% diperiksa.
//
// 2. switch cocok untuk membandingkan satu variabel hari dengan beberapa
//    nilai tetap. Kodenya lebih rapi dan mudah dibaca.
//
// 3. break sengaja tidak ditulis di antara case sabtu dan minggu.
//    Keduanya menggunakan potongan Rp5000, lalu break menghentikan switch.
//
// 4. Nilai Falsy untuk nama antara lain "", null, dan undefined.
//    Nilai lain yang juga Falsy adalah 0, -0, NaN, dan false.
//
// 5. Jika jumlahBeli = -1, if (jumlahBeli) bernilai Truthy karena -1
//    bukan nol. Namun if (jumlahBeli > 0) bernilai false karena -1
//    tidak lebih besar dari nol.

// ==================================================
// CATATAN UJI 3 SKENARIO
// ==================================================
//
// Jalankan program dengan mengganti enam nilai DATA AWAL di atas.
//
// SKENARIO 1 (nilai aktif pada kode):
// Nama: "" | Belanja: 30000 | Hari: senin
// Member: biasa | Voucher: "" | Bayar: 20000
//
// Hasil:
// Nama pelanggan belum diisi
// Voucher tidak dipakai
// Diskon: 1500
// Potongan member: 0
// Promo hari: 0
// Potongan voucher: 0
// Total akhir: 28500
// Status: Kurang
// Kekurangan: 8500
//
// SKENARIO 2 (ganti nilai DATA AWAL):
// Nama: "Rina" | Belanja: 90000 | Hari: sabtu
// Member: silver | Voucher: "SENJA10" | Bayar: 80000
//
// Hasil:
// Pelanggan: Rina
// Voucher dipakai: SENJA10
// Diskon: 9000
// Potongan member: 2000
// Promo hari: 5000
// Potongan voucher: 2000
// Total akhir: 72000
// Status: Lunas
// Kembalian: 8000
//
// SKENARIO 3 (ganti nilai DATA AWAL):
// Nama: "Budi" | Belanja: 120000 | Hari: jumat
// Member: gold | Voucher: "HEMAT" | Bayar: 92000
//
// Hasil:
// Pelanggan: Budi
// Voucher dipakai: HEMAT
// Diskon: 18000
// Potongan member: 5000
// Promo hari: 3000
// Potongan voucher: 2000
// Total akhir: 92000
// Status: Lunas (uang pas)
//
// Ketiga skenario menguji diskon 5%, 10%, dan 15%,
// promo default, akhir pekan, dan Jumat, serta tiga status pembayaran.
