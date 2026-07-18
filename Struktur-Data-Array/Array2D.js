// Deklarasi dan Inisialisasi Matriks 3x3

let matriksNilai = [
  [90, 85, 92], // Baris 0
  [78, 88, 81], // Baris 1
  [95, 77, 89], // Baris 2
];
console.log("--- Array 2D JavaScript (Matriks Nilai) ---");
// Mengakses elemen spesifik: Nilai pada Baris 1, Kolom 2
console.log("Nilai Baris 1, Kolom 2:", matriksNilai[1][2]); // Output: 81
console.log("\nTampilan Matriks:");
// Perulangan Bersarang (Menggunakan forEach untuk contoh modern)
matriksNilai.forEach((baris) => {
  let outputBaris = "";
  baris.forEach((kolom) => {
    outputBaris += kolom + "\t"; // Tambahkan nilai dan tab
  });
  console.log(outputBaris); // Tampilkan seluruh baris
});
