// Membuat array 1D dengan inisialisasi literal
let daftarHari = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
  "Minggu",
];
// Membuat array 1D angka
let suhuMingguan = [28, 30, 29, 31, 32, 27, 26];
console.log("--- Array 1D ---");
// Mengakses elemen: Indeks dimulai dari 0
console.log("Hari ketiga adalah:", daftarHari[2]); // Output: Rabu
// Menambah elemen baru (array di JS dinamis)
suhuMingguan.push(25);
console.log("Suhu terbaru ditambahkan:", suhuMingguan);
