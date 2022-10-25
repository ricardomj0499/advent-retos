/*
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

const reSimbolos = /.*\({1}.*({+|\[+).*\){1}.*/;
const reParentesis = /.*\(\).*/;
const reNotClosing = /.*\(.*\).*/;

export default function isValid(letter) {
  const reParen = letter.match(reParentesis);
  const reSim = letter.match(reSimbolos);
  const reNC = letter.match(reNotClosing);

  if (reParen !== null || reSim !== null || reNC === null) {
    return false;
  }

  return true;
}

const str = "bici coche (balón) bici coche peluche";
console.log(isValid(str));
