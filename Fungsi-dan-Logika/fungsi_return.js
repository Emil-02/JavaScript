function hitungDiskon(harga, persenDiskon) {
  const diskon = harga * (persenDiskon / 100);
  return harga - diskon;
}
function gabungkanNama(namaDepan, namaBelakang) {
  return `${namaDepan} ${namaBelakang}`;
}
// Penggunaan hasil return
const hargaSetelahDiskon = hitungDiskon(100000, 20);
console.log("Harga setelah diskon:", hargaSetelahDiskon);
const namaLengkap = gabungkanNama("Emil", "Rahmat");
console.log("Nama lengkap:", namaLengkap);
