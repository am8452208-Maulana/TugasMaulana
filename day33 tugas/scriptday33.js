/*
Nama        : Mas Maulana
Tugas       : Day 33 - Object dan Perulangan
Tujuan      : Memahami object, method, this, for...of,
              for...in, dan pengolahan data kasir.
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// LANGKAH 1: TEBAK DULU, BARU CEK
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// ---------------- POTONGAN A ---------------

const produk = { nama: "Kopi Susu", harga: 18000, stok: 10 };

produk.harga = 20000;
produk.kategori = "minuman";
delete produk.stok;
let kunci = "nama";

// Tebakan: Kopi Susu
// Hasil asli: Kopi Susu
console.log(produk.nama);

// Tebakan: Kopi Susu
// Hasil asli: Kopi Susu
console.log(produk[kunci]);

// Tebakan: 20000
// Hasil asli: 20000
console.log(produk["harga"]);

// Tebakan: undefined, karena stok sudah dihapus
// Hasil asli: undefined
console.log(produk.stok);

// Tebakan: true, karena kategori sudah ditambahkan
// Hasil asli: true
console.log("kategori" in produk);

// Tebakan: false, karena stok sudah dihapus
// Hasil asli: false
console.log("stok" in produk);

// Tebakan: nama, harga, kategori
// Hasil asli: [ 'nama', 'harga', 'kategori' ]
console.log(Object.keys(produk));

// Tebakan: Kopi Susu, 20000, minuman
// Hasil asli: [ 'Kopi Susu', 20000, 'minuman' ]
console.log(Object.values(produk));

/*
Jawaban:
1. produk.nama memakai nama properti secara langsung,
   sedangkan produk[kunci] memakai nilai variabel kunci.
   produk.stok menjadi undefined karena properti stok dihapus.
*/
