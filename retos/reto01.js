const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

export default function contarOvejas(ovejas) {
  let ovejasRojas = ovejas.filter((oveja) => oveja.color === "rojo");
  let ovejasN = ovejasRojas.filter((oveja) =>
    oveja.name.toLowerCase().includes("n")
  );
  let ovejasA = ovejasN.filter((oveja) =>
    oveja.name.toLowerCase().includes("a")
  );
  return ovejasA;
}

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
