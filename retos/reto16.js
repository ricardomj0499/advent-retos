const valores = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
};

function compare(x, y) {
    return y > x ? -x : x;
}

export default function decodeNumbers(symbols) {
    const arrNum = symbols.split("").map((symbol) => valores[symbol]);
    //console.log(arrNum);
    if (arrNum.length === 0) {
        return 0;
    }
    if (arrNum.length === 1) {
        return arrNum[0];
    }
    let suma = 0;
    for (let x = 0; x < arrNum.length - 1; x++) {
        let y = x + 1;
        suma += compare(arrNum[x], arrNum[y]);
    }
    suma += arrNum[arrNum.length - 1];
    console.log(suma);
    return suma;
}

decodeNumbers("..."); // 3
decodeNumbers(".,"); // 4 (5 - 1)
decodeNumbers(",."); // 6 (5 + 1)
decodeNumbers(",..."); // 8 (5 + 3)
decodeNumbers(".........!"); // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers(".;"); // 49 (50 - 1)
decodeNumbers("..,"); // 5 (-1 + 1 + 5)
decodeNumbers("..,!"); // 95 (1 - 1 - 5 + 100)
decodeNumbers(".;!"); // 49 (-1 -50 + 100)
decodeNumbers("!!!"); // 300
decodeNumbers(";!"); // 50
decodeNumbers(";.W"); // NaN
