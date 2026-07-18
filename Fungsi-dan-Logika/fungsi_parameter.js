function ErHitungLuasLingkaran(jariJari) {
  if (typeof jariJari !== "number" || jariJari <= 0) {
    console.log("Jari-jari harus berupa angka positif!");
    return;
  }
  const ErLuas = Math.PI * Math.pow(jariJari, 2);
  console.log(
    `Luas lingkaran dengan jari-jari ${jariJari} adalah ${ErLuas.toFixed(2)}`
  );
}
function ErCekKelulusanEmil(nama, ErNilai) {
  if (typeof ErNilai !== "number" || ErNilai < 0 || ErNilai > 100) {
    console.log("Nilai harus antara 0 dan 100!");
    return;
  }
  const ErStatus = ErNilai >= 70 ? "Lulus" : "Tidak Lulus";
  console.log(`${nama} ${ErStatus} dengan nilai ${ErNilai}`);
}
ErHitungLuasLingkaran(7);
ErCekKelulusanEmil("Calisto", 83);
ErCekKelulusanEmil("Daphne", 67);
