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
    blank.repeat((maxLen - 1) / 2) + tronco + blank.repeat((maxLen - 1) / 2);

  return arbol;
}

console.log(createXmasTree(2));
//console.log(createXmasTree(3));
