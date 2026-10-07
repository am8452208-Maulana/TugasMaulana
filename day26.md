1. Mengapa Merge Conflict bisa terjadi?
Merge Conflict terjadi ketika Git menemukan dua perubahan yang berbeda pada bagian kode yang sama sehingga Git tidak dapat menentukan perubahan mana yang harus digunakan.
Situasi yang dapat memicu Merge Conflict:
- Dua orang mengedit baris yang sama pada file yang sama.
- Satu orang mengubah suatu kode, sedangkan orang lain menghapus atau mengubah bagian kode tersebut.
Contoh skenario nyata:
Andi dan Budi mengerjakan website secara bersamaan.
Andi mengubah:
<h1>Website Toko Online</h1>

menjadi:
<h1>Website Jual Baju</h1>

Sementara Budi mengubah baris yang sama menjadi:
<h1>Website Fashion Premium</h1>

Ketika perubahan Budi digabungkan ke branch Andi, Git tidak tahu harus memilih versi Andi atau Budi. Akibatnya terjadi Merge Conflict.

2. Penanda Merge Conflict
Kode:
<<<<<<< HEAD
<h1 style="color: red;">Selamat Datang</h1>
=======
<h1 style="color: blue;">Selamat Datang</h1>
>>>>>>> branch-teman

a. Arti setiap penanda
<<<<<<< HEAD
Menandai awal perubahan yang berasal dari branch yang sedang aktif.
=======
Menjadi pemisah antara perubahan dari branch aktif dan perubahan dari branch yang akan digabungkan.
>>>>>>> branch-teman
Menandai akhir perubahan yang berasal dari branch yang datang, yaitu branch-teman.
b. Versi branch aktif
Versi branch aktif adalah:
<h1 style="color: red;">Selamat Datang</h1>

Karena berada di antara:
<<<<<<< HEAD

dan
=======

c. Versi branch yang datang
Versi branch yang datang adalah:
<h1 style="color: blue;">Selamat Datang</h1>

Karena berada di antara:
=======

dan
>>>>>>> branch-teman

3. Cara menyelesaikan Merge Conflict
Ada dua cara utama.
A. Menggunakan Visual Studio Code
Langkah-langkah:
a. Lakukan merge:
git merge branch-teman

b. Jika terjadi conflict, buka file yang bermasalah di Visual Studio Code.
c. VS Code akan memberikan pilihan seperti:
   - Accept Current Change
   - Accept Incoming Change
   - Accept Both Changes
d. Pilih perubahan yang sesuai.
e. Jika diperlukan, edit kode secara manual.
f. Pastikan tanda berikut sudah dihapus:
<<<<<<< HEAD
=======
>>>>>>>

g. Simpan file.
h. Jalankan:
git status
i. Lanjutkan dengan git add dan git commit.

B. Menggunakan editor teks secara manual
Langkah-langkah:
1. Buka file yang mengalami conflict.
2. Cari tanda:
<<<<<<< HEAD
=======
>>>>>>> branch-teman

3. Tentukan kode mana yang akan dipertahankan.
4. Hapus kode yang tidak diperlukan.
5. Hapus semua tanda conflict.
6. Simpan file.
7. Periksa hasilnya:
git status
8. Tambahkan file ke staging:
git add .
9. Commit hasil penyelesaian conflict:
git commit -m "fix: menyelesaikan merge conflict"
Mengapa VS Code direkomendasikan untuk pemula?
Karena VS Code memberikan tampilan visual yang memudahkan pengguna membandingkan dua perubahan. Tombol Accept Current Change, Accept Incoming Change, dan Accept Both Changes juga membuat proses penyelesaian conflict lebih mudah dan mengurangi kesalahan.


4. Perintah setelah conflict diselesaikan
Contoh urutannya:
git status
git add .
git commit -m "fix: menyelesaikan merge conflict"

Fungsi masing-masing:
1. git status
Digunakan untuk melihat file mana yang mengalami conflict dan memastikan status repository.
2. git add .
Memasukkan file yang sudah diperbaiki ke staging area.
3. git commit -m "fix: menyelesaikan merge conflict"
Mencatat hasil penyelesaian conflict ke dalam riwayat Git.
Jika ingin mengirim hasilnya ke GitHub:
git push.



5. Fungsi git merge --abort
Perintah:
git merge --abort

digunakan untuk membatalkan proses merge yang sedang berlangsung dan mengembalikan repository ke kondisi sebelum merge dimulai.
Contoh situasi:
Kamu menjalankan:
git merge branch-teman

Ternyata terdapat conflict pada banyak file dan perubahan branch teman sangat berbeda dengan pekerjaanmu. Daripada memperbaiki banyak conflict satu per satu, kamu ingin membatalkan merge terlebih dahulu.
Maka dapat menggunakan:
git merge --abort.


6. Praktik terbaik untuk mengurangi Merge Conflict

1. Sering melakukan git pull
Contoh:
git pull

Dengan mengambil perubahan terbaru dari repository, kita dapat mengetahui perubahan anggota tim lebih awal sehingga kemungkinan conflict dapat dikurangi.
2. Menggunakan branch untuk setiap fitur
Contoh:
feature/login
feature/navbar
feature/search

Dengan begitu, pekerjaan setiap anggota lebih terpisah dan perubahan tidak langsung bercampur pada branch utama.
3. Menghindari mengedit bagian yang sama secara bersamaan
Jika dua orang mengedit baris yang sama, kemungkinan conflict semakin besar. Karena itu, pekerjaan sebaiknya dibagi berdasarkan fitur atau bagian halaman.
4. Melakukan commit secara rutin
Commit yang kecil dan teratur lebih mudah digabungkan daripada satu commit besar yang berisi banyak perubahan.
5. Berkomunikasi dengan anggota tim
Sebelum mengedit file penting, anggota tim sebaiknya memberitahukan bagian yang sedang dikerjakan. Hal ini mencegah dua orang mengerjakan bagian yang sama.


7. Pentingnya pesan commit yang jelas
Pesan commit yang jelas penting karena membantu anggota tim mengetahui apa yang diubah dan tujuan perubahan tersebut tanpa harus memeriksa semua kode.
Contoh pesan commit buruk:
update

fix

perubahan

Ketiganya terlalu umum sehingga sulit mengetahui perubahan apa yang dilakukan.
Contoh pesan commit baik:
feat: menambahkan halaman login

fix: memperbaiki tombol checkout yang tidak berfungsi

style: memperbaiki tampilan navbar pada perangkat mobile

Pesan tersebut lebih jelas karena menjelaskan jenis perubahan dan bagian yang diubah.


8. Format Conventional Commits
Format dasar Conventional Commits adalah:
type: description

Contoh:
feat: menambahkan fitur pencarian produk

Beberapa tipe yang umum digunakan:
Tipe	Fungsi	Contoh
feat	Menambahkan fitur baru	feat: menambahkan fitur login
fix	Memperbaiki bug	fix: memperbaiki tombol checkout
docs	Mengubah dokumentasi	docs: menambahkan panduan instalasi
style	Perubahan format/tampilan tanpa mengubah fungsi	style: memperbaiki tampilan navbar
refactor	Merapikan struktur kode	refactor: merapikan struktur CSS
test	Menambah atau memperbaiki pengujian	test: menambahkan pengujian login
Minimal empat tipe yang dapat disebutkan adalah feat, fix, docs, dan style.


9. Pesan commit yang paling baik
Dari ketiga pesan:
git commit -m "update"

git commit -m "fix bug tombol"

git commit -m "feat: menambahkan fitur pencarian produk di navbar"

Pesan yang paling baik adalah:
git commit -m "feat: menambahkan fitur pencarian produk di navbar"

Alasannya:
1. Menggunakan format Conventional Commits.
2. Menggunakan feat yang menunjukkan adanya fitur baru.
3. Menjelaskan perubahan secara spesifik.
4. Anggota tim dapat langsung mengetahui apa yang ditambahkan.
update terlalu umum, sedangkan fix bug tombol sudah lebih jelas tetapi belum menggunakan format Conventional Commits dan masih kurang spesifik.


10. Fungsi .gitignore
File .gitignore digunakan untuk memberitahu Git agar tidak memasukkan file atau folder tertentu ke repository.
Contoh isi .gitignore:
node_modules/
.env
*.log
.vscode/

Jenis file yang sebaiknya dimasukkan:
1. node_modules/
Berisi library/dependency JavaScript yang biasanya berukuran besar. Tidak perlu di-upload karena dependency dapat dipasang kembali menggunakan npm install.
2. .env
Biasanya berisi informasi rahasia seperti API key, password, atau konfigurasi database. Tidak boleh sembarangan di-upload ke GitHub karena dapat menyebabkan kebocoran data sensitif.
3. File log
Contoh:
*.log

File log berisi catatan aktivitas/error program dan biasanya tidak diperlukan dalam repository utama.
4. Folder konfigurasi editor
Contoh:
.vscode/

Konfigurasi editor tertentu biasanya bersifat pribadi dan tidak selalu diperlukan oleh anggota tim lain.
5. File hasil build
Contohnya:
dist/
build/

File tersebut biasanya dapat dibuat kembali dari source code sehingga tidak selalu perlu disimpan di repository.


11. Format penamaan branch
Format yang direkomendasikan adalah menggunakan jenis pekerjaan + nama fitur/perubahan, biasanya menggunakan huruf kecil dan tanda - atau /.
Contoh:
feature/login-page

feature/search-product

fix/navbar-mobile

Mengapa format ini lebih baik?
Karena nama branch langsung menunjukkan tujuan branch tersebut.
Contohnya:
- feature/login-page → membuat halaman login.
- feature/search-product → membuat fitur pencarian produk.
- fix/navbar-mobile → memperbaiki navbar pada perangkat mobile.
Format seperti ini lebih mudah dipahami dibanding nama bebas seperti:
coba
branch1
punya-saya


12. Peran HTML, CSS, dan JavaScript
Ketiganya memiliki fungsi yang berbeda.
HTML — Struktur
HTML digunakan untuk membuat struktur dan isi website.
Contoh:
<h1>Maulana Studio</h1>
<p>Creative Design Studio</p>

HTML dapat diibaratkan sebagai kerangka rumah.
CSS — Tampilan
CSS digunakan untuk mengatur warna, ukuran, posisi, layout, font, animasi, dan tampilan website.
Contoh:
h1 {
    color: cyan;
    font-size: 40px;
}

CSS dapat diibaratkan sebagai desain dan dekorasi rumah.
JavaScript — Interaksi
JavaScript digunakan untuk membuat website menjadi interaktif dan dinamis.
Contohnya:
- tombol dapat melakukan aksi,
- menu dapat dibuka/tutup,
- validasi form,
- slider gambar,
- mengambil data dari server.
JavaScript dapat diibaratkan sebagai sistem yang membuat rumah dapat melakukan berbagai fungsi.
Singkatnya:
HTML       = Struktur
CSS        = Tampilan
JavaScript = Interaksi



13. Dua lingkungan tempat JavaScript dapat dijalankan
1. Browser
JavaScript dapat dijalankan di browser seperti Chrome, Firefox, Edge, dan Safari.
Contohnya JavaScript digunakan untuk membuat tombol website menjadi interaktif.
alert("Selamat datang!");

2. Server
JavaScript juga dapat dijalankan di server menggunakan lingkungan seperti Node.js.
Node.js memungkinkan JavaScript digunakan untuk membuat:
- backend website,
- API,
- server,
- aplikasi web.
Jadi JavaScript tidak hanya digunakan untuk tampilan website, tetapi juga dapat digunakan pada bagian server.


14. Perbedaan JavaScript dan ECMAScript
JavaScript adalah bahasa pemrograman yang digunakan dalam pengembangan aplikasi/web.
ECMAScript (ES) adalah standar/spesifikasi yang mendefinisikan bagaimana bahasa seperti JavaScript harus bekerja.
Sederhananya:
ECMAScript = standar
JavaScript = implementasi bahasa yang mengikuti standar tersebut

ECMAScript terus berkembang. Contohnya ES5, ES6/ES2015, ES2016, dan versi-versi berikutnya.
Contoh gaya lama dan modern
Gaya lama:
var nama = "Maulana";

function sapa(nama) {
    return "Halo " + nama;
}

Gaya modern:
const nama = "Maulana";

const sapa = (nama) => {
    return `Halo ${nama}`;
};

Perbedaannya:
- var pada gaya lama sering digantikan dengan let atau const.
- Gaya modern menggunakan arrow function =>.
- Gaya modern dapat menggunakan template literal dengan tanda backtick ` dan ${}.
Jadi, JavaScript modern banyak menggunakan fitur-fitur ECMAScript terbaru untuk membuat kode lebih rapi, aman, dan mudah dibaca.