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

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// LANGKAH 2: PERBAIKI 7 KESALAHAN
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const warung = {
    nama: "Warung Senja",
    saldoKas: 100000,

    // FIX 1: gunakan this.saldoKas agar properti object berubah.
    tambahKas(jumlah) {
        this.saldoKas += jumlah;
    },

    // FIX 2: return diperlukan agar sisa saldo bisa dikembalikan.
    ambilKas(jumlah) {
        this.saldoKas -= jumlah;
        return this.saldoKas;
    },
};

warung.tambahKas(50000);
console.log(warung.saldoKas); // 150000
console.log(warung.ambilKas(30000)); // 120000

// FIX 3: bracket notation wajib untuk key yang mengandung tanda hubung.
const kontak = { "no-wa": "08123" };
console.log(kontak["no-wa"]); // 08123

// FIX 4: delete menghapus properti, bukan sekadar mengubah nilainya.
const akun = { nama: "Rina", kataSandi: "abc123" };
delete akun.kataSandi;
console.log(akun); // { nama: 'Rina' }

// Bukti perbedaan undefined dan delete.
const akunUji = { nama: "Rina", kataSandi: "abc123" };
akunUji.kataSandi = undefined;

console.log("kataSandi" in akunUji); // true
delete akunUji.kataSandi;
console.log("kataSandi" in akunUji); // false

// FIX 5: for...of mengambil nilai array, bukan indeksnya.
const menu = ["Kopi", "Teh", "Roti"];
for (let item of menu) {
    console.log(item);
}

// FIX 6: for...in digunakan untuk menelusuri key object biasa.
const info = { nama: "Warung Senja", kota: "Yogyakarta" };
for (let kolom in info) {
    console.log(kolom + ": " + info[kolom]);
}

// FIX 7: nama method yang benar adalah Object.keys().
console.log(Object.keys(info)); // [ 'nama', 'kota' ]

/*
Tujuh kesalahan dan perbaikannya:
1. saldoKas tanpa this salah merujuk variabel; gunakan this.saldoKas.
2. ambilKas tidak mengembalikan nilai; tambahkan return.
3. kontak.no-wa salah dibaca sebagai operasi pengurangan; gunakan [].
4. Mengisi kataSandi dengan undefined tidak menghapus key; gunakan delete.
5. for...in menghasilkan indeks; gunakan for...of untuk nilai array.
6. for...of tidak bisa langsung menelusuri object biasa; gunakan for...in.
7. Object.key tidak ada; gunakan Object.keys.

Error:
- Kesalahan 1 dapat menghasilkan ReferenceError jika saldoKas
  tidak didefinisikan di luar object.
- Kesalahan 3 dapat menghasilkan ReferenceError karena wa tidak ada.
- Kesalahan 6 menghasilkan TypeError karena object tidak iterable.
- Kesalahan 2, 4, 5, dan 7 tidak semuanya berupa error:
  hasilnya dapat berupa undefined atau hasil yang tidak sesuai.
  Object.key sendiri menghasilkan TypeError karena bukan function.
*/

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// LANGKAH 3: KASIR KEDAI PAPUA RASA
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const PAJAK = 0.11;

const kasirKedai = {
    nama: "Kedai Papua Rasa",
    pemilik: "Ahmad Maulana",
    kota: "Serui",
    saldoKas: 0,

    jamOperasional: {
        buka: "08:00",
        tutup: "21:00"
    },

    menu: [
        { nama: "Kopi Susu", kategori: "minuman", harga: 18000, stok: 10 },
        { nama: "Es Teh", kategori: "minuman", harga: 7500, stok: 10 },
        { nama: "Roti Bakar", kategori: "makanan", harga: 15000, stok: 8 },
        { nama: "Nasi Goreng", kategori: "makanan", harga: 22000, stok: 8 },
        { nama: "Jus Jeruk", kategori: "minuman", harga: 12000, stok: 10 }
    ],

    keranjang: [],

    // Mencari harga menu. Jika tidak ditemukan, hasilnya 0.
    cariHarga(namaMenu) {
        for (let item of this.menu) {
            if (item.nama === namaMenu) {
                return item.harga;
            }
        }
        return 0;
    },

    // Memasukkan pesanan jika menu tersedia dan stok cukup.
    tambahKeKeranjang(namaMenu, jumlah) {
        for (let item of this.menu) {
            if (
                item.nama === namaMenu &&
                item.stok >= jumlah &&
                jumlah > 0
            ) {
                this.keranjang.push({
                    nama: namaMenu,
                    jumlah: jumlah
                });

                item.stok -= jumlah;
                return true;
            }
        }
        return false;
    },

    // Menghitung total harga seluruh pesanan.
    hitungSubtotal() {
        let subtotal = 0;

        for (let item of this.keranjang) {
            subtotal += this.cariHarga(item.nama) * item.jumlah;
        }

        return subtotal;
    },

    // Diskon berdasarkan jumlah belanja.
    hitungDiskon(subtotal) {
        if (subtotal >= 100000) {
            return subtotal * 0.15;
        } else if (subtotal >= 50000) {
            return subtotal * 0.10;
        } else if (subtotal >= 25000) {
            return subtotal * 0.05;
        }

        return 0;
    },

    // Mencetak struk dan menambahkan total ke saldo kas.
    cetakStruk() {
        const subtotal = this.hitungSubtotal();
        const diskon = this.hitungDiskon(subtotal);
        const setelahDiskon = subtotal - diskon;
        const pajak = setelahDiskon * PAJAK;
        const total = setelahDiskon + pajak;

        console.log("\n==================================");
        console.log("       KEDAI PAPUA RASA");
        console.log("==================================");
        console.log("Pemilik : " + this.pemilik);
        console.log("Kota    : " + this.kota);
        console.log("----------------------------------");

        let nomor = 1;

        for (let item of this.keranjang) {
            const harga = this.cariHarga(item.nama);
            const jumlahHarga = harga * item.jumlah;

            console.log(
                nomor + ". " + item.nama +
                " x" + item.jumlah
            );
            console.log(
                "   Harga: Rp " + harga +
                " | Total: Rp " + jumlahHarga
            );

            nomor++;
        }

        console.log("----------------------------------");
        console.log("Subtotal : Rp " + subtotal.toFixed(2));
        console.log("Diskon   : Rp " + diskon.toFixed(2));
        console.log("Pajak 11%: Rp " + pajak.toFixed(2));
        console.log("TOTAL    : Rp " + total.toFixed(2));
        console.log("==================================");

        this.saldoKas += total;
        return total;
    },

    // Bonus: mencari menu dengan stok kurang dari 5.
    menuMenipis() {
        const daftarMenipis = [];

        for (let item of this.menu) {
            if (item.stok < 5) {
                daftarMenipis.push(item.nama);
            }
        }

        return daftarMenipis;
    }
};

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// PROPERTI DINAMIS
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const namaProperti = "website";

kasirKedai[namaProperti] = "https://kedai-papua-rasa.example";

console.log("Website tersedia:", "website" in kasirKedai);

delete kasirKedai[namaProperti];

console.log("Website tersedia:", "website" in kasirKedai);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// FOR...IN DAN OBJECT.KEYS / OBJECT.VALUES
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

console.log("\nJam operasional:");

for (let kunci in kasirKedai.jamOperasional) {
    console.log(
        kunci + ": " + kasirKedai.jamOperasional[kunci]
    );
}

console.log("\nMenu pertama:");

for (let kunci in kasirKedai.menu[0]) {
    console.log(kunci + ": " + kasirKedai.menu[0][kunci]);
}

console.log(
    "Keys:",
    Object.keys(kasirKedai.jamOperasional)
);

console.log(
    "Values:",
    Object.values(kasirKedai.jamOperasional)
);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// MENGHITUNG HURUF a
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let jumlahHurufA = 0;

for (let huruf of kasirKedai.nama) {
    if (huruf === "a") {
        jumlahHurufA++;
    }
}

console.log("Jumlah huruf a:", jumlahHurufA);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// SKENARIO 1: DISKON 10%
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Kopi Susu x2 = Rp36.000
// Roti Bakar x1 = Rp15.000
// Es Teh x2 = Rp15.000
// Subtotal = Rp66.000
// Diskon 10% = Rp6.600
// Pajak 11% = Rp6.534
// Total = Rp65.934

console.log("\n===== SKENARIO 1 =====");

console.log(kasirKedai.tambahKeKeranjang("Kopi Susu", 2));
console.log(kasirKedai.tambahKeKeranjang("Roti Bakar", 1));
console.log(kasirKedai.tambahKeKeranjang("Es Teh", 2));

kasirKedai.cetakStruk();

// Kosongkan keranjang untuk transaksi kedua.
kasirKedai.keranjang = [];
