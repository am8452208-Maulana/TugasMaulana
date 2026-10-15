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

// ---------------- POTONGAN B ----------------

const dompet = {
    pemilik: "Rina",
    saldo: 50000,

    belanja(jumlah) {
        this.saldo -= jumlah;
        return this.saldo;
    },

    cekSaldo() {
        console.log(this.pemilik + ": Rp " + this.saldo);
    },
};

// Tebakan: 30000
// Hasil asli: 30000
let sisa = dompet.belanja(20000);
console.log(sisa);

// Tebakan: Rina: Rp 30000
// Hasil asli: Rina: Rp 30000
dompet.cekSaldo();

// Tebakan: saldo berkurang menjadi 20000
// Hasil asli: tidak dicetak oleh pemanggilan ini
dompet.belanja(10000);

// Tebakan: Rina: Rp 20000
// Hasil asli: Rina: Rp 20000
dompet.cekSaldo();

// Tebakan: 20000
// Hasil asli: 20000
console.log(dompet.saldo);

/*
Jawaban:
2. Saldo tetap berubah karena belanja() mengubah properti saldo
   milik dompet secara langsung. this merujuk pada dompet ketika
   method dipanggil sebagai dompet.belanja().
*/

// ---------------- POTONGAN C ----------------

const hari = ["Senin", "Selasa"];

// Tebakan: Senin, lalu Selasa
// Hasil asli: Senin, lalu Selasa
for (let nilai of hari) {
    console.log(nilai);
}

// Tebakan: 0, lalu 1
// Hasil asli: 0, lalu 1
for (let indeks in hari) {
    console.log(indeks);
}

const kopi = { nama: "Kopi", harga: 18000 };

// Tebakan: nama: Kopi, harga: 18000
// Hasil asli: nama: Kopi, harga: 18000
for (let kolom in kopi) {
    console.log(kolom + ": " + kopi[kolom]);
}

// Tebakan: K, o, p, i
// Hasil asli: K, o, p, i
for (let huruf of "Kopi") {
    console.log(huruf);
}

// Percobaan error:
// Tebakan: error karena object biasa tidak iterable.
// Setelah dicoba, baris ini dijadikan komentar.
// Pesan umum: TypeError: kopi is not iterable.
// for (let x of kopi) { console.log(x); }

/*
Jawaban:
3. for...in pada array menghasilkan indeks berupa string,
   sedangkan for...of menghasilkan nilai array.
   Object kopi tidak bisa langsung dipakai dengan for...of
   karena object biasa tidak menyediakan iterator bawaan.
*/
