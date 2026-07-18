let ErkotaIndo = [
  "solo",
  "Sorong",
  "sumbawa",
  "kupang",
  "manado",
  "ruteng",
  "sumba",
];
console.log("Kota yang mengandung huruf 'a':");
for (let Eri = 0; Eri < ErkotaIndo.length; Eri++) {
  if (ErkotaIndo[Eri].toLowerCase().includes("a")) {
    console.log(ErkotaIndo[Eri]);
  }
}
