# JavaScript

Kumpulan latihan pemrograman JavaScript dari perkuliahan: fungsi, logika percabangan, dan struktur data array. Setiap file adalah program kecil yang berdiri sendiri dan bisa langsung dijalankan dengan Node.js.

## Isi Repository

### [Fungsi-dan-Logika](Fungsi-dan-Logika)

| File | Materi |
| --- | --- |
| [fungsi_dasar.js](Fungsi-dan-Logika/fungsi_dasar.js) | Deklarasi dan pemanggilan fungsi |
| [fungsi_parameter.js](Fungsi-dan-Logika/fungsi_parameter.js) | Fungsi dengan parameter + validasi input |
| [fungsi_return.js](Fungsi-dan-Logika/fungsi_return.js) | Nilai kembalian (diskon, gabung nama) |
| [arrow_function.js](Fungsi-dan-Logika/arrow_function.js) | Arrow function dan operator ternary |
| [aplikasi_rapor.js](Fungsi-dan-Logika/aplikasi_rapor.js) | Mini aplikasi rapor: rata-rata nilai dan penentuan grade |

### [Struktur-Data-Array](Struktur-Data-Array)

| File | Materi |
| --- | --- |
| [Array1D.js](Struktur-Data-Array/Array1D.js) | Array satu dimensi (daftar hari, suhu mingguan) |
| [Array2D.js](Struktur-Data-Array/Array2D.js) | Array dua dimensi / matriks nilai |
| [iterasi_array.js](Struktur-Data-Array/iterasi_array.js) | Perulangan `for` pada array |
| [kalkulator_array.js](Struktur-Data-Array/kalkulator_array.js) | Total, rata-rata, dan nilai di atas rata-rata |
| [manipulasi_array.js](Struktur-Data-Array/manipulasi_array.js) | `push` dan `pop` |
| [pencarian_string_array.js](Struktur-Data-Array/pencarian_string_array.js) | Pencarian string di dalam array |

## Cara Menjalankan

Butuh [Node.js](https://nodejs.org) 18 atau lebih baru.

```bash
git clone https://github.com/Emil-02/JavaScript.git
cd JavaScript
node Fungsi-dan-Logika/aplikasi_rapor.js
```

Untuk menjalankan semua latihan sekaligus:

```bash
for f in */*.js; do echo "== $f"; node "$f"; done
```

## Lisensi

Dirilis di bawah lisensi MIT. Lihat [LICENSE](LICENSE).
