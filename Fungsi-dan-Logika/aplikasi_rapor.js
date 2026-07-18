function erhitungRataRata(nilai1, nilai2, nilai3) {
  return (nilai1 + nilai2 + nilai3) / 3;
}
function ertentukanGrade(rataRata) {
  if (rataRata >= 85) return "A";
  else if (rataRata >= 75) return "B";
  else if (rataRata >= 65) return "C";
  else return "D";
}
function ertampilkanRapor(nama, nilai1, nilai2, nilai3) {
  const rataRata = erhitungRataRata(nilai1, nilai2, nilai3);
  const grade = ertentukanGrade(rataRata);
  console.log(" ___________________________");
  console.log(`|==== RAPOR ${nama} ====|`);
  console.log("|===========================|");
  console.log("|No.|   Mata kuliah  | Nilai|");
  console.log("|---------------------------|");
  console.log(`| 1 |     java       |  ${nilai1}  |`);
  console.log(`| 2 |  javaScript    |  ${nilai2}  |`);
  console.log(`| 3 |    python      |  ${nilai3}  |`);
  console.log("|---------------------------|");
  console.log(`| Rata-rata          | ${rataRata.toFixed(2)}|`);
  console.log(`| Grade              | ${grade}    |`);
  console.log("|___________________________|");
}
ertampilkanRapor("EMIL RAHMAT", 89, 91, 83);
