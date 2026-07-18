const hitungLuasLingkaran = (jariJari) =>
  console.log(Math.PI * jariJari * jariJari);
const cekKelulusan = (nama, nilai) =>
  console.log(nilai >= 70 ? `${nama} LULUS.` : `${nama} TIDAK LULUS.`);

hitungLuasLingkaran(7);
cekKelulusan("Ana", 80);
cekKelulusan("Beni", 60);
