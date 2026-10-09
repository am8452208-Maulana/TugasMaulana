// Nama Pembuat : Ahmad Maulana
// LANGKAH 1: TEBAK DULU, BARU CEK


// Tebakan: 13
// Hasil asli: 13,jadi,hasil asli dari 13 itu penjumlahan dari 3*2+7 maka hasilnya =13
console.log(7 + 3 * 2);

// Tebakan: 20
// Hasil asli: 20,jadi,hasil dari 20 itu penjumlahan dari 7+3=10, 10*2 maka hasilnya =20
console.log((7 + 3) * 2);

// Tebakan: 2
// Hasil asli: 2,jadi,hasil dari 2 itu pembagian bersisa dari 17&5=15 sisanya dua jadi yang di ambil itu sisanya 2
console.log(17 % 5);

// Tebakan: 8
// Hasil asli: 8,jadi,hasil dari 8 itu pangkatan antara 2 pangkat 3 makan hasilnya menjadi=8
console.log(2 ** 3);

// Tebakan: true
// Hasil asli: true,jadi, dia kenapa bisa jadi true karna nilai sama
console.log(5 == "5");

// Tebakan: false
// Hasil asli: false,jadi,kenapa bisa jadi false karena sama nilai dan tipe data (ketat) 
console.log(5 === "5");

// Tebakan: false
// Hasil asli: false,jadi kenapa bisa jadi false karna nilai sama gak bisa beda karna kalau beda maka nilainya akan false
console.log(true && false);

// Tebakan: true
// Hasil asli: true,,jadi,kenapa bisa true karna atau ini ketika ada salah satunya bernama true makanya nilainya juga akan true
console.log(true || false);

// Tebakan: false
// Hasil asli: false,jadi kenapa bisa jadi false karna tanda seru itu bukan jadi otomatis nilainya menjadi false
console.log(!true);

// Tebakan: false
// Hasil asli: false,jadi kenapa bisa jadi false karena 10 lebih besar dari 5,dan 3 lebih kecil dari 8,kenapa bisa false karena operator && membutuhkan kedua kondisi bernilai true.
console.log(10 > 5 && 3 > 8);

/*
Jawaban pertanyaan Langkah 1:
1. Tebakan yang mungkin meleset adalah 5 == "5" jika saya lupa bahwa == membandingkan nilai setelah konversi tipe.
   Operator yang paling sulit bagi saya adalah === karena harus memperhatikan tipe data.
2. Perkalian dikerjakan lebih dahulu, jadi 3 * 2 = 6, lalu 7 + 6 = 13.
3. == membandingkan nilai dengan kemungkinan konversi tipe, sedangkan === membandingkan nilai dan tipe data.
*/

// ==================================================
// LANGKAH 2: PERBAIKI 4 KESALAHAN
// ==================================================

const hargaKopi = 18000;
const hargaTeh = 7500;
let jumlahMember = 5;
let sudahMember = true;
let uangDiterima = 51000;

// FIX 1: Dua kopi dan dua teh harus dihitung dengan benar.
let totalPesanan = (hargaKopi * 2) + (hargaTeh * 2);
console.log("Total pesanan:", totalPesanan);

// FIX 2: Gunakan angka agar tipe datanya sama saat memakai ===.
let uangPas = uangDiterima === totalPesanan;
console.log("Uang pas:", uangPas);

// FIX 3: Gunakan += agar jumlah member benar-benar bertambah.
jumlahMember += 1;
console.log("Jumlah member:", jumlahMember);

// FIX 4: Gunakan OR (||), sesuai syarat member ATAU total di atas 100000.
let dapatDiskon = sudahMember || totalPesanan > 100000;
console.log("Dapat diskon:", dapatDiskon);

// Hasil: 51000 true 6 true
console.log(totalPesanan, uangPas, jumlahMember, dapatDiskon);

/*
Jawaban pertanyaan Langkah 2:
1. Kesalahan pertama adalah rumus total salah, sehingga diperbaiki menjadi dua kopi ditambah dua teh.
   Kesalahan kedua adalah uang diterima menggunakan tipe string, sehingga diubah menjadi angka.
   Kesalahan ketiga adalah jumlahMember + 1 tidak menyimpan perubahan, sehingga diperbaiki menjadi += 1.
   Kesalahan keempat adalah menggunakan &&, padahal syarat diskon memakai ATAU, sehingga diganti ||.
2. Jika memakai ===, kedua nilai harus memiliki tipe yang sama. Ubah "51000" menjadi angka 51000 agar hasilnya true.
3. && berarti kedua kondisi harus benar, sedangkan || cukup salah satu kondisi benar.
*/

// ==================================================
// LANGKAH 3: BIKIN KASIR SENDIRI
// ==================================================

const namaBarang = "Maul Snack";
const hargaSatuan = 20000;
const TARIF_PAJAK = 0.11;

let jumlahBeli = 3;
let uangDibayar = 75000;

// Menghitung harga barang sebelum pajak.
let subtotal = hargaSatuan * jumlahBeli;
let pajak = subtotal * TARIF_PAJAK;
let totalBayar = subtotal + pajak;

// Contoh dua operator penugasan ringkas.
let jumlahBarang = jumlahBeli;
jumlahBarang += 1; // Menambah satu sebagai simulasi bonus barang.
jumlahBarang -= 1; // Mengembalikan jumlah ke angka pembelian awal.

// Contoh operator penugasan perkalian.
let simulasiTotal = subtotal;
simulasiTotal *= 1;

// Menggunakan tanda kurung agar urutan perhitungan jelas.
let totalDenganKurung = (hargaSatuan + 5000) * jumlahBeli;
let totalTanpaKurung = hargaSatuan + 5000 * jumlahBeli;

// Menghitung kembalian.
let kembalian = uangDibayar - totalBayar;

// Tiga variabel Boolean.
let uangCukup = uangDibayar >= totalBayar;
let gratisKantong = subtotal >= 100000 || jumlahBeli >= 5;
let jumlahGenap = jumlahBeli % 2 === 0;

// Menampilkan hasil kasir.
console.log("===== KASIR MAULANA SNACK =====");
console.log("Barang           :", namaBarang);
console.log("Harga satuan     : Rp" + hargaSatuan);
console.log("Jumlah beli      :", jumlahBeli);
console.log("Subtotal         : Rp" + subtotal);
console.log("Pajak (11%)      : Rp" + pajak);
console.log("Total bayar      : Rp" + totalBayar);
console.log("Uang dibayar     : Rp" + uangDibayar);
console.log("Kembalian        : Rp" + kembalian);
console.log("Uang cukup?      :", uangCukup);
console.log("Gratis kantong?  :", gratisKantong);
console.log("Jumlah genap?    :", jumlahGenap);
console.log("Jumlah setelah simulasi:", jumlahBarang);
console.log("Simulasi total   :", simulasiTotal);
console.log("Total dengan kurung:", totalDenganKurung);
console.log("Total tanpa kurung:", totalTanpaKurung);

/*
Jawaban pertanyaan Langkah 3:
1. uangCukup bernilai true karena uang Rp75000 lebih besar daripada total bayar Rp66600.
2. Sebelum: gratisKantong = subtotal >= 100000 || jumlahBeli >= 5, hasilnya false.
   Jika || diganti &&, hasilnya tetap false karena kedua kondisi sama-sama false.
3. Dengan kurung: (20000 + 5000) * 3 = 75000.
   Tanpa kurung: 20000 + 5000 * 3 = 35000.
   Kurung membuat penjumlahan dikerjakan lebih dahulu.
*/

// BONUS: KONVERSI MENIT MENJADI JAM DAN MENIT


const totalMenit = 250;

let jumlahJam = Math.floor(totalMenit / 60);
let sisaMenit = totalMenit % 60;

console.log("===== BONUS WAKTU =====");
console.log(totalMenit + " menit = " + jumlahJam + " jam " + sisaMenit + " menit")