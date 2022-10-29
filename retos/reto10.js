/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.
Las monedas para cambio que puedes usar son estas:coins[0] = 1 céntimo / coins[1] = 2 céntimos / coins[2] = 5 céntimos / coins[3] = 10 céntimos / coins[4] = 20 céntimos / coins[5] = 50 céntimos
Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

export default function getCoins(change) {
    let restante = change;
    const monedas = [1, 2, 5, 10, 20, 50];
    let vuelto = [0, 0, 0, 0, 0, 0];

    for (let index = monedas.length - 1; index > -1; index--) {
        console.log("hola for");
        if (restante === 0) {
            break;
        }
        const restanteParcial = restante % monedas[index];
        vuelto[index] = (restante - restanteParcial) / monedas[index];
        restante = restanteParcial;
    }

    return vuelto;
}

console.log(getCoins(100));
