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
