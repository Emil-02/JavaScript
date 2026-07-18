let Ernilai = [45, 30, 37, 56, 99, 48];
let Ertotal = 0;
for (let Eri = 0; Eri < Ernilai.length; Eri++) {
  Ertotal += Ernilai[Eri];
}
let ErRataRata = Ertotal / Ernilai.length;
console.log("Rata-rata: " + ErRataRata);
let diAtasErRata = 0;
for (let Eri = 0; Eri < Ernilai.length; Eri++) {
  if (Ernilai[Eri] > ErRataRata) {
    diAtasErRata++;
  }
}
console.log("Jumlah nilai di atas rata-rata: " + diAtasErRata);
