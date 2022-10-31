/*
Nuestro mecánico de confianza, Kiko Belfs, que tiene un Tesla genial, nos ha explicado que los saltos se pueden ver como arrays... y que sólo tenemos que asegurarnos que los números suben y bajan de forma correcta. También nos avisa que sólo pasaremos arrays de, como mínimo, tres posiciones.
--- editar metodos
 */

function checkUp(arr) {
    for (let x = 0; x < arr.length - 1; x++) {
        let y = x + 1;
        if (arr[y] <= arr[x]) {
            return false;
        }
    }
    return true;
}

function checkDown(arr) {
    for (let x = 0; x < arr.length - 1; x++) {
        let y = x + 1;
        if (arr[y] >= arr[x]) {
            return false;
        }
    }
    return true;
}

export default function checkSledJump(heights) {
    const heightsLen = heights.length;
    if (heightsLen <= 2) {
        return false;
    }

    let half = Math.ceil(heightsLen / 2);

    let arrayFirstHalf = heights.slice(0, half);

    let arraySecondHalf = heights.slice(
        heightsLen % 2 === 0 ? half : half - 1,
        heightsLen
    );
    if (!checkUp(arrayFirstHalf) || !checkDown(arraySecondHalf)) {
        return false;
    }

    return true;
}

console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3]));
