/*
¡Es hora de poner el árbol de navidad en casa! 🎄
Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
Si le pasamos el argumento 5, se pintaría esto:
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #
Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol
*/

const blank = "_";
const leaf = "*";
const tronco = "#";

export default function createXmasTree(height) {
    let arbol = "";
    const maxLen = height * 2 - 1;
    let initialBlanks = (maxLen - 1) / 2;

    for (let index = 1; index <= height; index++) {
        const leafs2print = index * 2 - 1;

        arbol += blank.repeat(initialBlanks);
        arbol += leaf.repeat(leafs2print);
        arbol += blank.repeat(initialBlanks);

        arbol += "\n";

        initialBlanks -= 1;
    }

    arbol +=
        blank.repeat((maxLen - 1) / 2) +
        tronco +
        blank.repeat((maxLen - 1) / 2) +
        "\n";
    arbol +=
        blank.repeat((maxLen - 1) / 2) +
        tronco +
        blank.repeat((maxLen - 1) / 2);

    return arbol;
}

console.log(createXmasTree(5));
