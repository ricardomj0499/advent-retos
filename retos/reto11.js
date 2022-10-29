/*
Mi cine favorito tiene dos posibilidades:

• Entrada de un sólo uso: Cuesta 12$ por cada película.

• Tarjeta de fidelidad: Cuesta 250$ pero que cada vez que vas pagas sólo el 75% del precio del ticket. ¡Lo mejor es que se acumula! Y cada vez que vas, se paga el 75% del precio del ticket que pagaste la última vez.
Ejemplo de cada una al comprar 3 entradas y el precio que pagaría en total:
// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$
*/

export default function shouldBuyFidelity(times) {
    if (times === 0 || times === 1) {
        return false;
    }
    const ticketPrice = 12;
    const ticketFidelity = 250;
    let withTickets = ticketPrice * times;
    let withFidelity = ticketFidelity;
    const desc = 0.75;
    let ticketWithDesc = ticketPrice * desc;

    for (let x = 1; x < times; x++) {
        withFidelity += ticketWithDesc;
        ticketWithDesc *= desc;
    }
    withFidelity += ticketWithDesc;
    if (withFidelity < withTickets) {
        return true;
    }
    return false;
}

console.log(shouldBuyFidelity(3)); // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)); // true -> Mejor comprar tarjeta fidelidad
