/*
Nama: Ahmad Maulana
Tujuan: Eksperimen operator, tipe data, var, dan let.
*/

// 5.1 Eksperimen operator dan tipe data

// Tebakan: Hasilnya "55" karena angka 5 digabung dengan string "5".
// Hasil asli: "55"
console.log(5 + "5");

// Tebakan: Hasilnya 6 karena string "10" diubah menjadi angka.
// Hasil asli: 6
console.log("10" - 4);

// Tebakan: Hasilnya 20 karena kedua string diubah menjadi angka.
// Hasil asli: 20
console.log("10" * "2");

// Tebakan: Hasilnya "string" karena penjumlahan menghasilkan string.
// Hasil asli: "string"
console.log(typeof ("5" + 5));

// Tebakan: Hasilnya 1 karena sisa pembagian 9 dengan 4 adalah 1.
// Hasil asli: 1
console.log(9 % 4);

// Tebakan: Hasilnya 25 karena 2 + 3 dihitung dahulu, lalu dipangkatkan 2.
// Hasil asli: 25
console.log((2 + 3) ** 2);

// Tebakan: Hasilnya 2.5 karena 10 dibagi 4.
// Hasil asli: 2.5
console.log(10 / 4);

// Tebakan: Hasilnya Infinity karena angka 1 dibagi 0.
// Hasil asli: Infinity
console.log(1 / 0);

// Tebakan: Hasilnya NaN karena string "abc" tidak bisa menjadi angka.
// Hasil asli: NaN
console.log("abc" * 2);

// Tebakan: Hasilnya "number" karena NaN termasuk tipe number.
// Hasil asli: "number"
console.log(typeof NaN);

// Tebakan: Hasilnya true karena kondisi 1 === 1 benar.
// Hasil asli: true
console.log((5 > 3 && 2 > 4) || 1 === 1);

// Tebakan: Hasilnya true karena !true adalah false dan !false adalah true.
// Hasil asli: true
console.log(!true || !false);

// Tebakan: Hasilnya true karena "5" == 5 benar dan "5" !== 5 juga benar.
// Hasil asli: true
console.log("5" == 5 && "5" !== 5);

// Tebakan: Hasilnya true karena array dan object biasa sama-sama bertipe object.
// Hasil asli: true
console.log(typeof [] === typeof {});

// Tebakan: Hasilnya 50 karena elemen indeks 1 adalah 20 dan indeks 2 adalah 30.
// Hasil asli: 50
console.log([10, 20, 30][1] + [10, 20, 30][2]);


// 5.2 Eksperimen var dan let

// A. var di dalam blok tetap bisa dibaca dari luar blok.

{
    var namaVar = "Ahmad";
}

console.log(namaVar);
// Hasil asli: Husain


// B. let di dalam blok tidak bisa dibaca dari luar blok.

{
    let namaLet = "Maul";
}

// Tebakan: Akan terjadi ReferenceError karena namaLet hanya berlaku di dalam blok.
// Hasil asli jika baris diaktifkan: ReferenceError: namaLet is not defined

// console.log(namaLet);


// C. var dengan nama sama dapat dideklarasikan dua kali.

var umur = 20;
var umur = 21;

console.log(umur);
// Hasil asli: 21


// D. let dengan nama sama tidak dapat dideklarasikan dua kali
// dalam lingkup yang sama.

// Tebakan: Akan terjadi SyntaxError karena nama variabel let dideklarasikan ulang.
// Hasil asli jika baris diaktifkan:
// SyntaxError: Identifier 'umurLet' has already been declared

let umurLet = 20;
// let umurLet = 21;


// 5.3 Penjelasan

// 1. 5 + "5" menghasilkan string "55" karena operator +
// menggabungkan angka dengan string.
// "10" - 4 menghasilkan angka 6 karena operator -
// mengubah string angka menjadi number untuk melakukan pengurangan.


// 2. NaN berarti Not-a-Number, yaitu hasil perhitungan numerik
// yang tidak menghasilkan angka valid.
// Tipenya tetap "number" karena NaN merupakan nilai khusus
// dalam tipe data Number di JavaScript.


// 3. Urutan evaluasi:
// 5 > 3 menghasilkan true.
// 2 > 4 menghasilkan false.
// true && false menghasilkan false.
// 1 === 1 menghasilkan true.
// false || true menghasilkan true.
// Jadi, hasil akhirnya adalah true.


// 4. Array dan object biasa sama-sama menghasilkan "object"
// ketika diperiksa menggunakan typeof.
// Untuk membedakan array, gunakan Array.isArray(data).
// Contoh:
// Array.isArray([10, 20, 30]) menghasilkan true.
// Array.isArray({ nama: "Husain" }) menghasilkan false.


// 5. let hasil = 5 + 10;
// Statement: deklarasi variabel dan pemberian nilai ke hasil.
// Expression 5 + 10 bernilai 15.
// Expression hasil * 2 bernilai 30.
// console.log(hasil * 2) menampilkan 30.


// 6. File eksperimen.js dapat dijalankan di browser melalui
// HTML yang memuat script.js atau langsung melalui Node.js.
// Browser menjalankan JavaScript di lingkungan browser,
// sedangkan Node.js menjalankannya di lingkungan di luar browser.
// let dan const digunakan karena memiliki lingkup blok
// dan membantu mencegah deklarasi ulang yang tidak disengaja.


// 7. Hasil eksperimen:
// var dari dalam blok bisa dibaca dari luar.
// let dari dalam blok tidak bisa dibaca dari luar.
// var boleh dideklarasikan ulang dalam lingkup yang sama.
// let tidak boleh dideklarasikan ulang dalam lingkup yang sama.


// 8. Contoh bug pada program besar:
// Sebuah program menggunakan var total di dalam blok
// untuk menyimpan total transaksi sementara.
// Karena var tidak dibatasi oleh blok, nilainya dapat mengubah
// total transaksi yang digunakan oleh bagian program lain.
// Deklarasi ulang var juga dapat tanpa sengaja mengganti nilai
// variabel yang sebelumnya digunakan oleh fungsi lain.

// JAWABAN SAYA 

//Potongan A :
// a. Kosong wak
// b. Masuk
// c. Kosong wak
// d. Masuk
// e. Kosong wak
// f. Masuk

// POTONGAN B JAWABAN MAUL:
// Diskon 5%

// JAWABAN POTONGAN C
// jawaban : promo akhir pekan dan promo keluarga

// Jawaban easy :

// 1.Karena nilai tersebut di nilai truthy yaitu true
// 2.Conlose.log nya pindah keatas di bagian if dan jangan di bagian else if
// 3.Hapus breaknya

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

// ==================================================
// BONUS: JUMLAH HARI DALAM BULAN
// ==================================================

const bonusNomorBulan = 2;

switch (bonusNomorBulan) {
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Jumlah hari: 30");
    break;
  case 2:
    console.log("Jumlah hari: 28 atau 29");
    break;
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Jumlah hari: 31");
    break;
  default:
    console.log("Bulan tidak valid");
    break;
}
