/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

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

const ovejas = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
