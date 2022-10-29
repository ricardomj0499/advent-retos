/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/

const reSimbolos = /.*\({1}.*({+|\[+).*\){1}.*/; // ....
const reParentesis = /.*\(\).*/; //
const reNotClosing = /.*\(.*\).*/; //

export default function isValid(letter) {
    const reParen = letter.match(reParentesis);
    const reSim = letter.match(reSimbolos);
    const reNC = letter.match(reNotClosing);

    if (reParen !== null || reSim !== null || reNC === null) {
        return false;
    }

    return true;
}

/*
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

const str = "bici coche (balón) bici coche peluche";

console.log(isValid(str));
