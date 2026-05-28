# Mari Berkolaborasi Dengan Git!

Git adalah sistem kontrol versi yang memungkinkan kita untuk melacak perubahan
dalam kode sumber kita dan berkolaborasi dengan tim.

Dalam panduan ini, kita akan belajar cara menggunakan Git untuk bekerja bersama
dalam proyek pengembangan perangkat lunak.

1. Instalasi Git
   - Unduh dan instal Git dari situs resmi: https://git-scm.com/downloads
   - Setelah instalasi, buka terminal dan jalankan perintah berikut untuk mengkonfigurasi Git:
     ```
     git config --global user.name "Nama Anda"
     git config --global user.email "Email Anda"
     ```
2. Membuat Repository Git
   - Buka terminal dan navigasikan ke direktori proyek Anda.
   - Jalankan perintah berikut untuk menginisialisasi repository Git di direktori lokal Anda:
     ```
     git init
     ```
   - Setelah itu, Anda dapat menambahkan file ke staging area dengan perintah:
     ```
     git add .
     ```
   - Kemudian, buat commit untuk menyimpan perubahan:
     ```
     git commit -m "Pesan commit Anda"
     ```
3. Berkolaborasi dengan Tim
   - Untuk bekerja dengan tim, Anda perlu membuat repository di platform seperti GitHub, GitLab, atau Bitbucket.
   - Setelah membuat repository, Anda dapat menambahkan remote origin dengan perintah:
     ```
     git remote add origin <URL repository Anda>
     ```
   - Untuk mengirim perubahan ke repository remote, gunakan perintah:
     ```
     git push origin master/main
     ```
   - Untuk menarik perubahan dari repository remote, gunakan perintah:
     ```
     git pull origin master/main
     ```
4. Branching dan Merging
   - Branching memungkinkan Anda untuk bekerja pada fitur atau perbaikan bug tanpa mengganggu kode utama.
   - Untuk membuat branch baru, gunakan perintah:
     ```
     git checkout -b nama-branch
     ```
   - Setelah selesai bekerja pada branch, Anda dapat menggabungkannya kembali ke branch utama dengan perintah:
     ```
     git checkout master/main
     git merge nama-branch
     ```
5. Resolusi Konflik
   - Terkadang, saat menggabungkan branch, Anda mungkin mengalami konflik jika ada perubahan yang bertentangan.
   - Git akan menandai bagian yang konflik dalam file, dan Anda perlu menyelesaikannya secara manual.
   - Setelah menyelesaikan konflik, tambahkan file yang telah diperbaiki ke staging area dan buat commit untuk menyimpan perubahan.
   ```
   git add .
   git commit -m "Menyelesaikan konflik"
   ```
   Dengan memahami dasar-dasar Git, Anda dapat bekerja lebih efektif dalam tim dan menjaga riwayat perubahan kode Anda dengan baik. Selamat mencoba!
