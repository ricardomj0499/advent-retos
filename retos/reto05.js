/*
contar los días del calendario hasta el 25 de diciembre 📆.
vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.
si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -)
 la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.
*/

const navidad = new Date("Dec 25, 2021");

const min = 1000 * 60;
const hora = min * 60;
const dia = hora * 24;

export default function daysToXmas(date) {
    let msRestantes = navidad.getTime() - date.getTime();
    return Math.ceil(msRestantes / dia);
}

const date1 = new Date("Dec 1, 2021");
console.log(daysToXmas(date1)); // 24
const date2 = new Date("Dec 24, 2021 00:00:01");
console.log(daysToXmas(date2)); // 1
const date3 = new Date("Dec 24, 2021 23:59:59");
console.log(daysToXmas(date3)); // 1
const date4 = new Date("December 20, 2021 03:24:00");
console.log(daysToXmas(date4)); // 5
const date5 = new Date("Dec 25, 2021");
daysToXmas(date5); // 0
const date6 = new Date("Dec 26, 2021");
daysToXmas(date6); // -1
const date7 = new Date("Dec 31, 2021");
daysToXmas(date7); // -6
const date8 = new Date("Jan 1, 2022 00:00:01");
daysToXmas(date8); // -7
const date9 = new Date("Jan 1, 2022 23:59:59");
daysToXmas(dadate9e4); // -7
