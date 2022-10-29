const str = ".!";

const valores = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
};
const arr = str.split("");
console.log(arr.map((e) => valores[e]));
//
const ar = [1, 2, 3, 4, 5];
console.log(ar[ar.length - 2]);

const r = [];
console.log(r.length);
let a = 6;
console.log((a += -3));
