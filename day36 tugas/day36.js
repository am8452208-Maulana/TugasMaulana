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
