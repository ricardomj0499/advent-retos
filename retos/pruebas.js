let lista = [5, 3, 6, 7, 9];

const arr = new Array(Math.max(...lista)).fill(2, Math.max(...lista));
const a = new Array.from();
console.log(arr);

/*
3 2
4 2
*/
