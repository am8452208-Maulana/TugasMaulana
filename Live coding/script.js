function hitungTotalBelanja(items) {
    let total = 0;

    for (const item of items) {
        total = item.harga * item.jumlah;
    }
    
    return total;
}

const belanja =([
    { nama: "buku", harga: 50000, jumlah: 2 },
    { nama: "pulpen", harga: 15000, jumlah: 3}
])

 console.log("Total belanja:" , hitungTotalBelanja(belanja))
