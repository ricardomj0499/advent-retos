/*
Necesitamos saber el número de paquetes que una persona va a poder gestionar en un día. Para ello se cuenta el número de paquetes que puede llevar esa persona y todos los transportistas que tiene en su equipo. Lo malo es que los datos están almacenados de una forma un poco rara en un array:

El array contiene otros arrays que contienen los datos de cada transportista
transportista[0] -> Nombre/ID del Transportista
transportista[1] -> Paquetes que gestiona en un día
transportista[2] -> Array con sus subordinados
*/

function findIndex(carriers, carrierID) {
    for (let x in carriers) {
        if (carriers[x][0] === carrierID) {
            return Number(x);
        }
    }
    return -1;
}

export default function countPackages(carriers, carrierID) {
    let numPaquetes = 0;
    if (carrierID === undefined) {
        return 0;
    }
    const carrierIndex = findIndex(carriers, carrierID);
    numPaquetes += carriers[carrierIndex][1];
    const childs = carriers.slice(carrierIndex + 1);
    numPaquetes += countPackages(childs, carriers[carrierIndex][2][0]);
    numPaquetes += countPackages(childs, carriers[carrierIndex][2][1]);
    return numPaquetes;
}

const carriers = [
    ["dapelu", 5, ["midu", "jelowing"]],
    ["midu", 2, []],
    ["jelowing", 2, []],
];

countPackages(carriers, "dapelu"); // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
    ["lolivier", 8, ["camila", "jesuspoleo"]],
    ["camila", 5, ["sergiomartinez", "conchaasensio"]],
    ["jesuspoleo", 4, []],
    ["sergiomartinez", 4, []],
    ["conchaasensio", 3, ["facundocapua", "faviola"]],
    ["facundocapua", 2, []],
    ["faviola", 1, []],
];

//countPackages(carriers2, "camila"); // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
