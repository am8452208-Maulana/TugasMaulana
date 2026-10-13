// TUGAS MENGETIK BAB 7 
// DI BUAT OLEH: MAULANA
// SILAHKAN MEMERIKSA TUGAS MAUL

// Contoh — Menghitung mundur:
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("Mulai!");
// Output: 5, 4, 3, 2, 1, Mulai!


// Contoh — Menjumlahkan angka 1 sampai 10:
let total = 0;

for (let i = 1; i <= 10; i++) {
  total += i;
}

console.log("Total:", total); // Output: Total: 55

//Contoh — Mengakses elemen array:
const buah = ["Durian", "Jeruk Nipis", "Pisang Masak", "Mangga Busuk", "Kelapa Tua"];

for (let i = 0; i < buah.length; i++) {
  console.log(i + 1 + ".", buah[i]);
}
// Output:
// 1. Durian
// 2. Jeruk Nipis
// 3. Pisang Masak
// 4. Mangga Busuk
// 5. Kelapa Tua

// Contoh lengkap — Menebak angka:
let angkaRahasia = 7;
let tebakan = 0;
let percobaan = 0;

while (tebakan !== angkaRahasia) {
  percobaan++;
  tebakan = Math.floor(Math.random() * 10) + 1; // Angka acak 1-10
  console.log("Percobaan ke-" + percobaan + ": menebak angka", tebakan);
}

console.log(
  "Berhasil menebak angka",
  angkaRahasia,
  "dalam",
  percobaan,
  "percobaan.",
);

// Contoh penggunaan nyata — Konfirmasi pengguna:
let konfirmasi;

do {
  konfirmasi = prompt("Ketik 'ya' untuk melanjutkan:");
} while (konfirmasi !== "ya");

console.log("Pengguna telah mengkonfirmasi. Melanjutkan proses...");

// Menghentikan Perulangan: break
for (let i = 3; i <= 100; i++) {
  if (i === 10) {
    console.log(
      "Target ditemukan pada posisi ke-" + i + ". Pencarian dihentikan.",
    );
    break;
  }
  console.log("Memeriksa posisi ke-" + i);
}
// Output:
// Memeriksa posisi ke-1
// Memeriksa posisi ke-2
// ... (hingga ke-9)
// Target ditemukan pada posisi ke-10. Pencarian dihentikan.

// Contoh — Memfilter data array:
const nilai = [99, -7, 65, -24, 56, 79];

console.log("Nilai valid:");
for (let i = 0; i < nilai.length; i++) {
  if (nilai[i] < 0) {
    continue; // Lewati nilai negatif
  }
  console.log("-", nilai[i]);
}
// Output:
// Nilai valid:
// - 99
// - 65
// - 56
// - 79

// Simulasi Lengkap — Kombinasi Looping
const daftarNilai = [55, 46, 92, -28, 98, 23, 14, 0, 43];
let jumlah = 0;
let valid = 0;
let invalid = 0;

for (let i = 0; i < daftarNilai.length; i++) {
  const nilai = daftarNilai[i];

  // Lewati nilai yang tidak valid (di luar rentang 0–100)
  if (nilai < 0 || nilai > 100) {
    console.log("Nilai tidak valid dilewati:", nilai);
    invalid++;
    continue;
  }

  jumlah += nilai;
  valid++;
}

const rataRata = jumlah / valid;

console.log("---");
console.log("Total data    :", daftarNilai.length);
console.log("Data valid    :", valid);
console.log("Data tidak valid:", invalid);
console.log("Rata-rata     :", rataRata.toFixed(2));
// Output:
// Nilai tidak valid dilewati: -3
// ---
// Total data    : 9
// Data valid    : 8
// Data tidak valid: 1
// Rata-rata     : 65.63