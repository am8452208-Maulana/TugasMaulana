
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

// *******************
//  JAWABAN POTONGAN B
// *******************

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