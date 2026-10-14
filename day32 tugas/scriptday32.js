
/*
Nama       : Ahmad Maulana
Tugas      : Day 32 JavaScript
Materi     : Array Method, Function, Return, dan Kasir
*/

// ********************************
// LANGKAH 1: TEBAK DULU, BARU CEK
// ********************************

// --------------------
// POTONGAN A
// --------------------

// Tebakan:
// Jus, Air, ["Kopi", "Roti", "Susu"], ["Roti", "Susu"],
// 2, -1, true, Susu

let menu = ["Kopi", "Teh", "Roti", "Susu"];

menu.push("Jus");
menu.unshift("Air");

let terakhirDibuang = menu.pop();
let pertamaDibuang = menu.shift();

menu.splice(1, 1);

let irisan = menu.slice(1, 3);

console.log("A1:", terakhirDibuang);
// A1: Jus, karena pop() membuang elemen terakhir.
console.log("A2:", pertamaDibuang);
// A2: Air, karena shift() membuang elemen pertama.
console.log("A3:", menu);
// A3: Kopi, Roti, Susu; splice() menghapus Teh.
console.log("A4:", irisan);
// A4: Roti, Susu; slice(1, 3) mengambil indeks 1 dan 2.
console.log("A5:", menu.indexOf("Susu"));
// A5: 2, karena Susu berada di indeks 2.
console.log("A6:", menu.indexOf("Nasi"));
// A6: -1, karena Nasi tidak ditemukan.
console.log("A7:", menu.includes("Kopi"));
// A7: true, karena Kopi ada di dalam array.
console.log("A8:", menu[menu.length - 1]);
// A8: Susu, karena length - 1 menunjukkan indeks terakhir.

// Kesimpulan:
// splice() mengubah array asli, sedangkan slice()
// membuat array baru tanpa mengubah array asl

// ***************************
//  JAWABAN POTONGAN B
// ***************************

// Tebakan:
// 5, undefined
// cetakTambah mencetak 5 terlebih dahulu.

function tambah(a, b) {
    return a + b;
}

function cetakTambah(a, b) {
    console.log(a + b);
}

let x = tambah(2, 3);
let y = cetakTambah(2, 3);

console.log("B1:", x);
console.log("B2:", y);

// Hasil asli:
// 5       <- dari cetakTambah
// B1: 5
// B2: undefined


// ********************
// POTONGAN C
// ********************

// Tebakan:
// 40000, 45000, negatif, bukan negatif

const hitungDiskonPersen = (harga, persen = 10) =>
    harga - (harga * persen) / 100;

console.log("C1:", hitungDiskonPersen(50000, 20));
console.log("C2:", hitungDiskonPersen(50000));

function cekAngka(n) {
    if (n < 0) {
        return "negatif";
        console.log("Baris ini muncul atau tidak?");
    }

    return "bukan negatif";
}

console.log("C3:", cekAngka(-5));
console.log("C4:", cekAngka(5));

// Hasil asli:
// C1: 40000
// C2: 45000
// C3: negatif
// C4: bukan negatif

// Jawaban pertanyaan Langkah 1:
//
// 1. menu berubah karena push, unshift, pop, shift, dan
//    splice mengubah array asli. Slice hanya mengambil
//    sebagian elemen dan menghasilkan array baru.
//
// 2. tambah mengembalikan hasil menggunakan return,
//    sedangkan cetakTambah hanya mencetak hasilnya.
//    Karena tidak memiliki return, nilai y adalah undefined.
//
// 3. Parameter persen memiliki nilai default 10 sehingga
//    tetap bisa digunakan tanpa argumen kedua. Console.log
//    setelah return tidak tercetak karena baris return
//    langsung menghentikan function.


// ******************************************************
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// ******************************************************

let daftarBelanja = ["Kopi", "Teh", "Roti"];

// FIX 1: push menambahkan Susu di bagian akhir.
daftarBelanja.push("Susu");

// FIX 2: splice menghapus elemen dari array asli.
daftarBelanja.splice(1, 1);

// FIX 3: includes menghasilkan true atau false.
let adaRoti = daftarBelanja.includes("Roti");

// FIX 4: indeks terakhir adalah panjang array dikurangi 1.
let terakhir = daftarBelanja[daftarBelanja.length - 1];

// FIX 5: return mengembalikan hasil perhitungan diskon.
function hitungDiskon(harga, persen) {
    return harga - (harga * persen) / 100;
}

// FIX 6: return diperlukan agar nilai pajak dikembalikan.
const hitungPajak = (subtotal) => {
    return subtotal * 0.11;
};

// FIX 7: deklarasikan function expression sebelum dipanggil.
const hitungTotal = (subtotal, pajak) => subtotal + pajak;

console.log(daftarBelanja, adaRoti, terakhir);
console.log(hitungDiskon(100000, 20));
console.log(hitungPajak(80000));
console.log(hitungTotal(80000, 8800));

// Hasil yang diharapkan:
// ["Kopi", "Roti", "Susu"] true Susu
// 80000
// 8800
// 88800

// Jawaban pertanyaan Langkah 2:
//
// 1. Kesalahan pertama memakai unshift, diperbaiki menjadi
//    push agar Susu masuk di akhir daftar.
//    Kesalahan kedua memakai slice, diperbaiki menjadi
//    splice agar Teh benar-benar terhapus.
//    Kesalahan ketiga memakai indexOf, diperbaiki menjadi
//    includes agar hasilnya berupa true atau false.
//    Kesalahan keempat memakai length tanpa dikurangi 1,
//    diperbaiki menjadi length - 1.
//    Kesalahan kelima tidak memakai return pada hitungDiskon,
//    sehingga diperbaiki dengan menambahkan return.
//    Kesalahan keenam tidak memakai return pada hitungPajak,
//    sehingga hasil perhitungannya tidak dikembalikan.
//    Kesalahan ketujuh memanggil hitungTotal sebelum
//    deklarasi const-nya, jadi deklarasinya dipindahkan
//    ke atas sebelum pemanggilan.
//
// 2. Kesalahan pemanggilan hitungTotal sebelum deklarasi
//    const menyebabkan ReferenceError. Kesalahan lain
//    umumnya tidak menimbulkan error, tetapi membuat hasil
//    atau perubahan array tidak sesuai harapan.
//
// 3. Keduanya dapat menghasilkan undefined jika tidak
//    mengembalikan nilai. Function hitungDiskon memakai
//    function declaration, sedangkan hitungPajak memakai
//    arrow function, tetapi keduanya tetap membutuhkan
//    return untuk mengembalikan hasil.
