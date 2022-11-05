/*
Necesitamos una función que pasándole un árbol binario nos diga el número de decoraciones que necesitamos. Para ello tenemos un objeto que sería la representación del árbol y que nos indica en cada nivel el número de ramas a decorar.
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
 countDecorations(bigTree) // 28
*/

export default function countDecorations(bigTree) {
    console.log("Arbol: ", bigTree);
    let decoraciones = 0;
    if (!bigTree) {
        return 0;
    }
    decoraciones += bigTree.value;
    decoraciones += countDecorations(bigTree.left);
    decoraciones += countDecorations(bigTree.right);

    // ¡No olvides compartir tu solución en redes!
    return decoraciones;
}
const tree = {
    value: 1, // el nodo raíz siempre es uno, porque es la estrella ⭐
    left: {
        value: 2, // el nodo izquierdo necesita dos decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
    },
    right: {
        value: 3, // el nodo de la derecha necesita tres decoraciones
        left: null, // no tiene más ramas
        right: null, // no tiene más ramas
    },
};

console.log(countDecorations(tree));
