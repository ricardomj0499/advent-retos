/*
Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.
La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que 
no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.
*/

export default function maxProfit(prices) {
    let gain = -1;
    for (let x = 0; x < prices.length - 1; x++) {
        for (let y = x + 1; y < prices.length; y++) {
            //console.log("[", x, ",", y, "]");
            if (prices[y] < prices[x]) {
                //console.log("awawawaw");
                continue;
            }
            let newGain = prices[y] - prices[x];
            //console.log("newGain: ", newGain);
            if (newGain > gain && newGain > 0) {
                gain = newGain;
            }
        }
    }

    return gain;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
console.log(maxProfit(pricesBtc)); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
console.log(maxProfit(pricesEth)); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
console.log(maxProfit(pricesDoge)); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
console.log(maxProfit(pricesAda)); // -> -1 (no hay ganancia posible)
