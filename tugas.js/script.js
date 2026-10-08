// ============================================================
// LANGKAH 1 - PERBAIKAN KODE
// PAPUA SNACK HOUSE
// ============================================================

const namaUsaha = "Papua Snack House";
const namaPemilik = "Maulana";
const namaAkun = "@maulana.papuasnackhouse";
const kotaUsaha = "Serui";
const tahunBerdiri = 2020;
const TARIF_PAJAK = 0.11;

let statusBuka = true;
let website = null;

const jumlahProdukAwal = 3;

const produk = [
    "Pisang Goreng",
    "Es Cokelat",
    "Roti Bakar"
];

const hargaProduk = [
    15000,
    10000,
    18000
];

console.log("========================================");
console.log("       PAPUA SNACK HOUSE");
console.log("========================================");

console.log("Nama Usaha :", namaUsaha);
console.log("Pemilik    :", namaPemilik);
console.log("Akun       :", namaAkun);
console.log("Kota       :", kotaUsaha);

console.log(
    "Tahun berdiri berikutnya:",
    tahunBerdiri + 1
);

const hargaPisangSetelahPajak =
    hargaProduk[0] * (1 + TARIF_PAJAK);

console.log(
    "Harga Pisang Goreng + pajak:",
    hargaPisangSetelahPajak
);

const hargaTermurahAwal = Math.min(
    hargaProduk[0],
    hargaProduk[1],
    hargaProduk[2]
);

console.log(
    "Harga termurah:",
    hargaTermurahAwal
);

console.log(
    "Produk ke-4:",
    produk[3]
);

console.log(
    "Status buka:",
    statusBuka
);


// ============================================================
// BUG NOTES
// ============================================================

/*
1. website dideklarasikan dua kali.
   Perbaikan: gunakan satu deklarasi saja.

2. var jumlahProduk tidak digunakan.
   Perbaikan: diganti menjadi const.

3. namausaha salah penulisan.
   Perbaikan: menjadi namaUsaha.

4. Console.log salah penulisan.
   Perbaikan: menjadi console.log.

5. tahunBerdiri sebelumnya berupa string "2020".
   Perbaikan: menjadi number 2020.

6. TARIF_PAJAK tidak boleh diubah karena menggunakan const.

7. Operator perkalian JavaScript adalah * bukan x.

8. produk[3] menghasilkan undefined karena index array
   dimulai dari 0.
*/


// ============================================================
// LANGKAH 2 - OBJECT DAN ARRAY
// ============================================================

const usaha = {
    nama: "Papua Snack House",
    pemilik: "Maulana",
    akun: "@maulana.papuasnackhouse",
    kota: "Serui",
    tahunBerdiri: 2020,
    statusBuka: true,
    nomorWhatsApp: "08123456789",
    website: null
};

const daftarProduk = [
    {
        nama: "Pisang Goreng",
        harga: 15000
    },
    {
        nama: "Es Cokelat",
        harga: 10000
    },
    {
        nama: "Roti Bakar",
        harga: 18000
    },
    {
        nama: "Papeda Goreng",
        harga: 20000
    }
];

console.log("");
console.log("========================================");
console.log("        DATA USAHA");
console.log("========================================");

console.log("Nama usaha:", usaha.nama);
console.log("Pemilik:", usaha.pemilik);
console.log("Akun:", usaha.akun);
console.log("Kota:", usaha["kota"]);

console.log(
    "Produk pertama:",
    daftarProduk[0]
);

console.log(
    "Produk terakhir:",
    daftarProduk[daftarProduk.length - 1]
);


/*
Jawaban teori:

1. Nomor WhatsApp disimpan sebagai string karena
   nomor telepon bukan data untuk perhitungan.

2. null berarti nilai sengaja dikosongkan.
   undefined berarti nilai belum diberikan.

3. daftarProduk[4] bukan produk ke-4 karena array
   dimulai dari index 0.
*/


// ============================================================
// LANGKAH 3 - PERHITUNGAN
// ============================================================

const tahunSekarang = 2026;
const tarifPajakLangkah3 = 0.11;


// Menghitung harga setelah pajak
const produkDenganPajak = [];

for (let i = 0; i < daftarProduk.length; i++) {

    const hargaSetelahPajak =
        daftarProduk[i].harga *
        (1 + tarifPajakLangkah3);

    produkDenganPajak.push({
        nama: daftarProduk[i].nama,
        harga: daftarProduk[i].harga,
        hargaSetelahPajak: hargaSetelahPajak
    });
}


// Mencari harga termurah
let hargaTermurahLangkah3 =
    daftarProduk[0].harga;


// Mencari harga termahal
let hargaTermahalLangkah3 =
    daftarProduk[0].harga;


for (let i = 1; i < daftarProduk.length; i++) {

    if (
        daftarProduk[i].harga <
        hargaTermurahLangkah3
    ) {
        hargaTermurahLangkah3 =
            daftarProduk[i].harga;
    }

    if (
        daftarProduk[i].harga >
        hargaTermahalLangkah3
    ) {
        hargaTermahalLangkah3 =
            daftarProduk[i].harga;
    }
}


// Menghitung usia usaha
const usiaUsaha =
    tahunSekarang - usaha.tahunBerdiri;


// Menentukan status usaha
let statusUsaha;

if (usaha.statusBuka === true) {
    statusUsaha = "Buka";
} else {
    statusUsaha = "Tutup";
}


// Mengecek website
let websiteUsaha;

if (usaha.website === null) {
    websiteUsaha = "Belum ada";
} else {
    websiteUsaha = usaha.website;
}


// Fungsi format Rupiah
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString("id-ID");
}


// Menampilkan hasil
console.log("");
console.log("========================================");
console.log("       HASIL PERHITUNGAN");
console.log("========================================");

console.log("Nama Usaha :", usaha.nama);
console.log("Pemilik    :", usaha.pemilik);
console.log("Akun       :", usaha.akun);
console.log("Kota       :", usaha.kota);
console.log("Usia Usaha :", usiaUsaha + " tahun");
console.log("Status     :", statusUsaha);
console.log("Website    :", websiteUsaha);

console.log("----------------------------------------");
console.log("HARGA SETELAH PAJAK 11%");
console.log("----------------------------------------");


for (let i = 0; i < produkDenganPajak.length; i++) {

    console.log(
        (i + 1) +
        ". " +
        produkDenganPajak[i].nama +
        " = " +
        formatRupiah(
            produkDenganPajak[i].hargaSetelahPajak
        )
    );
}


console.log("----------------------------------------");

console.log(
    "Harga Termurah:",
    formatRupiah(hargaTermurahLangkah3)
);

console.log(
    "Harga Termahal:",
    formatRupiah(hargaTermahalLangkah3)
);

console.log("========================================");


/*
Contoh perhitungan:

Es Cokelat = Rp10.000

10.000 x (1 + 0,11)
10.000 x 1,11
= Rp11.100


const digunakan ketika nilai tidak perlu diubah.

let digunakan ketika nilai masih dapat berubah.

Jika harga produk diubah setelah hasil dicetak,
hasil lama di console tidak berubah.
Jika program dijalankan kembali, hasil akan mengikuti
harga terbaru.
*/


// ============================================================
// LANGKAH 4 - TIPE DATA DAN OPERATOR
// ============================================================


// Tebakan: number
console.log(typeof 42);
// Hasil: number


// Tebakan: string
console.log(typeof "42");
// Hasil: string


// Tebakan: boolean
console.log(typeof true);
// Hasil: boolean


// Tebakan: undefined
console.log(typeof undefined);
// Hasil: undefined


// Tebakan: null
console.log(typeof null);
// Hasil: object


// Tebakan: array
console.log(typeof [1, 2, 3]);
// Hasil: object


// Tebakan: object
console.log(typeof {
    nama: "Maulana"
});
// Hasil: object


// Tebakan: "53"
console.log("5" + 3);
// Hasil: "53"


// Tebakan: 15
console.log("5" * 3);
// Hasil: 15


// Tebakan: NaN
console.log("abc" * 2);
// Hasil: NaN


// Tebakan: Infinity
console.log(10 / 0);
// Hasil: Infinity


// Tebakan: object
console.log(typeof usaha.website);
// Hasil: object


/*
typeof null menghasilkan "object".

Array juga menghasilkan "object" ketika menggunakan
typeof.

"5" + 3 menghasilkan "53" karena + digunakan untuk
penggabungan string.

"5" * 3 menghasilkan 15 karena * melakukan operasi
matematika.
*/


// ============================================================
// LANGKAH 5 - MODIFIKASI
// ============================================================


// Menambahkan produk baru
daftarProduk.push({
    nama: "Keripik KENTANG MAUL",
    harga: 12000
});


// Menambahkan akun Instagram
usaha.instagram = "@maulana.papuasnackhouse";


// Menghitung total harga seluruh produk
let totalHargaProduk = 0;

for (let i = 0; i < daftarProduk.length; i++) {

    totalHargaProduk =
        totalHargaProduk +
        daftarProduk[i].harga;
}


// Menampilkan hasil
console.log("");
console.log("========================================");
console.log("       MODIFIKASI USAHA");
console.log("========================================");

console.log("Nama Usaha :", usaha.nama);
console.log("Pemilik    :", usaha.pemilik);
console.log("Akun       :", usaha.instagram);
console.log("Kota       :", usaha.kota);

console.log(
    "Jumlah Produk:",
    daftarProduk.length
);

console.log(
    "Total Harga:",
    formatRupiah(totalHargaProduk)
);

console.log("========================================");


/*
Statement adalah perintah yang menjalankan suatu tindakan.

Contoh statement:
daftarProduk.push(...);
usaha.instagram = "...";


Expression adalah kode yang menghasilkan suatu nilai.

Contoh expression:
tahunSekarang - usaha.tahunBerdiri

produkItem.harga * (1 + tarifPajakLangkah3)
*/


// ============================================================
// BONUS - VAR DAN LET
// ============================================================


// var dapat digunakan di luar block if
if (true) {

    var dataVar = "Papua Snack House";

    let dataLet = "Hanya di dalam if";

    console.log(
        "dataVar di dalam if:",
        dataVar
    );

    console.log(
        "dataLet di dalam if:",
        dataLet
    );
}


// var masih dapat digunakan di sini
console.log(
    "dataVar di luar if:",
    dataVar
);


// Jangan aktifkan kode berikut,
// karena akan menghasilkan ReferenceError.
//
// console.log(dataLet);


// ============================================================
// BONUS - VAR DAPAT REDECLARE
// ============================================================

var namaVar = "Papua";

var namaVar = "Snack House";

console.log(
    "Nama var:",
    namaVar
);


// let tidak boleh dideklarasikan ulang.
//
// Jika kode berikut diaktifkan,
// akan menghasilkan SyntaxError:
//
// let namaLet = "Papua";
// let namaLet = "Snack House";


// ============================================================
// SELESAI
// ============================================================

console.log("");
console.log("========================================");
console.log("SEMUA LANGKAH DISELESAIKAN OLEH MAULANA");
console.log("Papua Snack House - Maulana");
console.log("@maulana.papuasnackhouse");
console.log("========================================");