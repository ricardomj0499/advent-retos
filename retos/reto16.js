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

export default function decodeNumber(symbols) {
    const arrNum = symbols.split("").map((symbol) => valores[symbol]);
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
    return suma;
}
decodeNumber("...");
