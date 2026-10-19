// ==========================================
// NAMA: Ahmad Maulana
// TUGAS: DAY 35
// MATERI: SCOPE, HOISTING, CLOSURE
// ==========================================


// ==========================================
// LANGKAH 1: TEBAK DULU, BARU CEK
// ==========================================

// POTONGAN A

// Tebakan: Dalam, Luar, Global.
// Hasil berbeda karena setiap fungsi punya scope sendiri.

const nama = "Global";

function luar() {
    const nama = "Luar";

    function dalam() {
        const nama = "Dalam";
        console.log(nama); // Hasil aslinya : Dalam
    }

    dalam();
    console.log(nama); // Hasil aslinya : Luar
}

luar();
console.log(nama); // Hasil aslinya : Global

const diskonGlobal = 10;

function hitung(harga) {
    const diskonLokal = 5;
    return harga - diskonGlobal - diskonLokal;
}

// Tebakan: 85
console.log(hitung(100)); // 85

if (true) {
    let pesanBlok = "di dalam blok";
    console.log(pesanBlok);
}

// Percobaan error, sudah dikomentari:
// console.log(pesanBlok);
// Error: ReferenceError: pesanBlok is not defined

for (let i = 0; i < 2; i++) {
    console.log("putaran", i);
}

// Percobaan error, sudah dikomentari:
// console.log(i);
// Error: ReferenceError: i is not defined


// POTONGAN B

function sapa() {
    return "Halo!";
}

// Tebakan: Halo!
console.log(sapa());

console.log(warna); // undefined
var warna = "biru";
console.log(warna); // biru

// Percobaan error:
// console.log(lokasi);
// const lokasi = "Sleman";
// Error: Cannot access 'lokasi' before initialization

// Percobaan error:
// console.log(salam());
// const salam = function () { return "Hai"; };
// Error: Cannot access 'salam' before initialization


// POTONGAN C

function buatPenghitung() {
    let hitungan = 0;

    return function () {
        hitungan++;
        return hitungan;
    };
}

const penghitungA = buatPenghitung();
const penghitungB = buatPenghitung();

// Tebakan: 1, 2, 3, 1, 4
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungA());
console.log(penghitungB());
console.log(penghitungA());

/*
Jawaban Langkah 1:
1. nama berbeda karena setiap fungsi memakai scope terdekat.
   pesanBlok dan i error karena hanya tersedia di bloknya.
2. sapa bisa dipanggil lebih awal karena hoisting.
   var bernilai undefined sebelum diberi nilai, sedangkan const
   belum bisa dipakai sebelum deklarasi.
3. Closure mengingat hitungan setelah fungsi selesai.
   penghitungA dan penghitungB memiliki hitungan masing-masing.
*/

// ==========================================
// LANGKAH 2: PERBAIKI 8 KESALAHAN
// ==========================================

// FIX 1: Variabel dibuat di luar blok agar dapat digunakan.

const stok = 10;
let pesanStok = "";

if (stok > 5) {
    pesanStok = "Stok aman";
}

console.log(pesanStok);

// FIX 2: Hasil fungsi disimpan ke variabel.

function hitungPotongan(harga) {
    const potongan = harga * 0.1;
    return harga - potongan;
}

const hasilPotongan = hitungPotongan(50000);
console.log(hasilPotongan);

// FIX 3: Function declaration bisa dipanggil sebelum ditulis.

console.log(sambutan());

function sambutan() {
    return "Selamat datang di Kedai Senja";
}

// FIX 4: Kota dideklarasikan sebelum digunakan.

let kota = "Yogyakarta";
console.log(kota);

// FIX 5: let di dalam blok tidak menimpa total luar.

let total = 100000;

if (true) {
    let totalBlok = 90000;
}

console.log(total);

// FIX 6: Saldo luar diubah langsung.

let saldoKas = 100000;

function tambahKas(jumlah) {
    saldoKas += jumlah;
}

tambahKas(50000);
console.log(saldoKas);

// FIX 7: Nomor disimpan dalam closure agar terus bertambah.

function buatAntrean() {
    let nomor = 0;

    return function () {
        nomor++;
        return nomor;
    };
}

const ambilNomor = buatAntrean();
console.log(ambilNomor(), ambilNomor(), ambilNomor());

// FIX 8: Gunakan saldo dari closure, bukan this.saldo.

function buatDompet(saldoAwal) {
    let saldo = saldoAwal;

    return {
        belanja(jumlah) {
            saldo -= jumlah;
        },

        cekSaldo() {
            return saldo;
        }
    };
}

const dompet = buatDompet(100000);
dompet.belanja(30000);
console.log(dompet.cekSaldo());

/*
Jawaban Langkah 2:
1. pesanStok berada di blok; deklarasinya dipindahkan ke luar.
2. Hasil fungsi tidak disimpan; hasil return dimasukkan ke variabel.
3. sambutan menggunakan function declaration agar bisa dipanggil awal.
4. kota dibaca sebelum deklarasi; deklarasikan lebih dahulu.
5. var dapat menimpa variabel luar; gunakan let untuk scope blok.
6. saldo lokal menutupi saldo luar; ubah saldo luar langsung.
7. nomor dibuat ulang; simpan nomor di closure.
8. this.saldo tidak tersedia; gunakan variabel saldo dari closure.

Error muncul saat variabel belum tersedia atau di luar scope.
Kesalahan lain dapat berjalan tetapi memberikan hasil yang salah.
Shadowing adalah ketika variabel lokal menutupi variabel luar.
*/
