1. Dua arah aliran kode: Dorong dan Tarik
Ada dua arah utama pertukaran perubahan antara komputer lokal dan GitHub:
- Push → mengirim perubahan dari komputer lokal → GitHub .
- Pull → mengambil perubahan dari GitHub → komputer lokal .
Contoh push:
 Saya selesai memperbaiki style.css , kemudian melakukan git add , git commit , dan git push agar perubahan tersebut tersimpan di repositori GitHub.
Contoh pull:
 Teman satu tim sudah memperbarui index.html di GitHub. Sebelum mulai bekerja, saya menjalankan git pull agar mendapatkan perubahan terbaru tersebut.


2. Fungsi git push
git push digunakan untuk mengirim commit yang ada di repositori lokal ke repositori jarak jauh , misalnya GitHub.
a. Fungsi opsi -u
Pada:
git push -u origin main

-u atau --set-upstream digunakan untuk menghubungkan cabang lokal main dengan cabang jarak jauh origin/main .
B. Jika -u tidak digunakan pada push pertama
Perintah seperti:
git push origin main

tetap dapat mengirim perubahan, tetapi hubungan upstream belum ditetapkan. Akibatnya, pada push berikutnya Git mungkin masih meminta kita menentukan tujuan remote dan cabang.
C. Mengapa setelah -u cukup git push ?
Karena Git sudah mengetahui bahwa cabang lokal main harus dikirim ke origin/main .
Jadi setelah:
git push -u origin main

selanjutnya cukup:
git push


3. Perbedaan git clone dan git init
git init digunakan untuk membuat repositori Git baru dari folder lokal yang sebelumnya belum menjadi repositori Git.
Contoh:
mkdir proyek
cd proyek
git init

Sedangkan git clone digunakan untuk menyalin repositori yang sudah ada , termasuk riwayat commit dan informasi jarak jauh.
Contoh:
git clone https://github.com/andi/proyek.git

Setelah git clone , tidak perlu menjalankan git init lagi karena repositori Git sudah dibuat dan dikonfigurasi oleh proses clone .


4. Fungsi git pull
git pull digunakan untuk mengambil perubahan terbaru dari repositori jarak jauh dan menggabungkannya ke cabang lokal.
Secara sederhana:
GitHub → komputer lokal
Perintah ini sangat penting dalam kerja tim karena anggota tim bisa saja sudah melakukan perubahan yang belum ada di komputer kita. Dengan git pull , kita dapat bekerja menggunakan kode terbaru dan mengurangi kemungkinan konflik.
Dua momen ketika sebaiknya melakukan git pull :
* Sebelum mulai memastikan bekerja pada pagi hari , untuk kode lokal sudah terbaru.
* Sebelum melakukan push , terutama ketika sudah cukup lama tidak mengambil perubahan dari repositori jarak jauh.
Contoh:
git pull origin main



5. Alur kerja harian yang direkomendasikan
Contoh alur kerja:
git pull origin main
git switch -c fitur-baru
# mengedit file
git add .
git commit -m "Menambahkan fitur baru"
git push -u origin fitur-baru

Penjelasannya:
* git pull origin main
    Mengambil perubahan terbaru dari main agar pekerjaan dimulai dari kondisi terbaru.
* git switch -c fitur-baru
    Membuat cabang baru untuk mengerjakan fitur tanpa mengganggu main .
* Edit file
    Membuat perubahan sesuai tugas.
* git tambahkan.
    Memasukkan perubahan ke staging area.
* git commit -m "..."
    menyimpan perubahan ke riwayat Git dengan pesan yang menjelaskan perubahan.
* git push -u origin fitur-baru
    Mengirim cabang dan melakukan ke GitHub.
Setelah itu biasanya dibuat Pull Request agar perubahan dapat diperiksa dan digabungkan ke main .



6. Apa itu Fork?
Fork adalah membuat salinan repositori milik orang atau organisasi ke dalam akun GitHub kita sendiri .
Contoh situasi:
* Kita ingin berkontribusi pada proyek open source tetapi tidak memiliki izin langsung untuk melakukan push ke repositori utama.
* Kita ingin melakukan eksperimen atau mengembangkan fitur berdasarkan repositori orang lain tanpa mengubah repositori aslinya.
Fork vs Clone
Garpu	Klon
Membuat salinan repositori di akun GitHub	Menyalin repositori ke komputer lokal
Dilakukan di GitHub	Dilakukan melalui Git
Berguna untuk kontribusi ke repo orang lain	Berguna untuk bekerja secara lokal
Kesimpulan repositori milik kita di GitHub	Akhirnya folder repositori di komputer
Keduanya sering digunakan bersama:
Fork → Clone → Edit → Commit → Push → Pull Request


7. Enam langkah kontribusi Open Source dengan Fork + Pull Request

* Fork repository
Membuat salinan repositori ke akun GitHub sendiri.
Tujuan:
 Agar kita mempunyai repositori sendiri yang dapat kita ubah tanpa memerlukan akses langsung ke repositori utama.
* Kloning repositori hasil fork
git clone https://github.com/username/proyek.git

Tujuan:
 mengambil repositori dari GitHub ke komputer agar dapat dikerjakan secara lokal.
* Buat cabang baru
git switch -c perbaikan-bug

Tujuan:
 Memisahkan pekerjaan kita dari cabang utama.
* Edit, tambahkan, dan lakukan commit

git commit -m "Memperbaiki bug"git add .
git commit -m "Memperbaiki bug"

Tujuan:
 Mempersiapkan dan menyimpan perubahan ke riwayat Git.
* Unggah cabang ke GitHub
git push -u origin perbaikan-bug

Tujuan:
 Mengirim cabang dan perubahan ke repositori hasil fork di GitHub.
* Membuat Pull Request
Di GitHub, kami membuat Pull Request dari cabang kami menuju repositori utama.
Tujuan:
 Meminta pemilik atau pengelola proyek untuk memeriksa dan mempertimbangkan perubahan kita agar dapat digabungkan.


8. Apa itu Pull Request?
Pull Request (PR) adalah permintaan kepada pemilik atau pengelola repositori untuk meninjau dan menggabungkan perubahan dari satu cabang ke cabang lain , biasanya menuju main .
Tim profesional tidak langsung bergabung ke main karena perubahan perlu diperiksa terlebih dahulu.
Contohnya:
Branch fitur
     ↓
Pull Request
     ↓
Code Review
     ↓
Perbaikan jika diperlukan
     ↓
Approve
     ↓
Merge ke main

Keuntungan PR:
* Code review
    Anggota tim dapat memeriksa apakah kode sudah benar dan sesuai standar.
* Mengurangi kesalahan
    Bug atau kesalahan dapat ditemukan sebelum masuk ke main .
* Diskusi perubahan
    Tim dapat memberikan komentar dan saran pada kode.
* Riwayat perubahan lebih jelas
    Setiap perubahan memiliki catatan dan pembahasan yang terdokumentasi.


9. Studi kasus Andi dan Budi
A. Apa kemungkinan yang terjadi saat Budi melakukan push?
Kemungkinan besar push Budi akan ditolak (ditolak) karena repositori remote sudah memiliki commit baru dari Andi yang belum dimiliki Budi.
Git biasanya memberikan kondisi seperti non-fast-forward .
B. Mengapa hal tersebut terjadi?
Karena:
Repository GitHub
Andi → commit baru
             ↓
         GitHub terbaru

Komputer Budi
Budi → masih menggunakan versi lama

Budi melakukan push dari versi yang belum memiliki commit Andi.
Git mencegah Budi menimpakan perubahan yang sudah ada di jarak jauh.
C. Apa yang harus dilakukan Budi?
Budi seharusnya mengambil perubahan terbaru terlebih dahulu menggunakan:
git pull

Kemudian menyelesaikan konflik jika ternyata ada konflik.
D. Urutan perintah yang seharusnya dilakukan Budi
Jika Budi belum mulai mengedit:
git switch main
git pull origin main

Kemudian membuat cabang pekerjaan:
git switch -c perubahan-style

Setelah selesai mengedit:

git commit -m "Memperbarui style.css"
git push -u origin perubahan-stylegit add style.css
git commit -m "Memperbarui style.css"
git push -u origin perubahan-style

Setelah itu Budi dapat membuat Pull Request di GitHub.
Intinya: jangan langsung bekerja menggunakan kode lama ketika bekerja dalam tim. Ambil perubahan terbaru terlebih dahulu.



10. Studi Kasus Alur Kerja Lengkap
Kode:
git clone https://github.com/andi/proyek.git
cd proyek
git switch -c perbaikan-bug
touch fix.js
git add fix.js
git commit -m "Memperbaiki bug pada validasi form"
git push origin perbaikan-bug

A. Apa yang dilakukan git clone ?
git clone https://github.com/andi/proyek.git

Perintah tersebut menyalin proyek repositori dari GitHub ke komputer lokal.
Selain file proyek, Git juga mengambil riwayat commit dan informasi remote repositori .
B. Mengapa membuat perbaikan-bug cabang ?
git switch -c perbaikan-bug

Branch dibuat agar pekerjaan memperbaiki bug terpisah dari main .
Keuntungannya:
- utama tetap stabil.
- Perubahan lebih mudah diperiksa.
- Pekerjaan dapat ditinjau melalui Pull Request.
- Jika terjadi kesalahan, tidak langsung merusak cabang utama.
Jadi sebaiknya jangan langsung mengerjakan perubahan besar di main .
C. Tujuan git push asal perbaikan-bug
git push origin perbaikan-bug

Perintah tersebut mengirim cabang lokal perbaikan-bug ke remote bernama origin .
Mengapa tidak langsung:
git push

Karena pada contoh cabang hulu tersebut belum ditetapkan dengan -u .
Jika menggunakan:
git push -u origin perbaikan-bug

maka push berikutnya dapat cukup menggunakan:
git push

D. Apa yang dilakukan di GitHub setelah push?
Setelah cabang berhasil dikirim ke GitHub, pengguna:
* Membuka repositori di GitHub.
* Memilih perbaikan-bug cabang .
* Memilih Bandingkan & menarik permintaan atau membuat Permintaan Tarik Baru .
* berubahnya cabang tujuan adalah main .
* Menuliskan judul dan penjelasan perubahan.
* Mengirim/membuat Pull Request.
* Menunggu pemilik repositori melakukan review.
e. Jika pemilik repo meminta revisi
Pengguna tidak perlu membuat Pull Request baru selama masih menggunakan cabang yang sama.
Alurnya:
Pemilik meminta revisi
        ↓
Baca komentar PR
        ↓
Perbaiki kode di komputer
        ↓
git add .
        ↓
git commit -m "Memperbaiki revisi"
        ↓
git push
        ↓
PR otomatis diperbarui
        ↓
Pemilik melakukan review lagi
        ↓
Approve
        ↓
Merge ke main

Contoh:
git add .
git commit -m "Memperbaiki revisi validasi form"
git push

Setelah git push , commit terbaru akan otomatis muncul pada Pull Request yang sama.
Ringkasan paling mudah diingat
CLONE  = GitHub → komputer
PULL   = GitHub → komputer
PUSH   = komputer → GitHub
FORK   = repository orang lain → akun GitHub kita
BRANCH = jalur kerja terpisah
COMMIT = menyimpan perubahan di Git
PR     = meminta perubahan direview dan digabungkan
MERGE  = menggabungkan perubahan

Alur kontribusi yang paling umum:
Fork
 ↓
Clone
 ↓
Pull
 ↓
Buat Branch
 ↓
Edit
 ↓
Add
 ↓
Commit
 ↓
Push
 ↓
Pull Request
 ↓
Review
 ↓
Revisi jika perlu