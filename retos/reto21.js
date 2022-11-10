/*
Necesitamos saber si las rutas que estamos creando tienen sentido o si Santa va a tener que dejar tirados regalos por el camino. 🥺

Para eso vamos a crear una función que recibe dos parámetros:

Un número con la capacidad máxima de regalos en el trineo.
El viaje que es un array de arrays. Cada subarray contiene tres números que representan:
trip[0] = número de regalos a transportar
trip[1] = punto de recogida de los regalos
trip[2] = punto de entrega de los regalos
La ruta siempre va de izquierda a derecha (nunca volverá Santa hacia atrás) pero... ¡ten en cuenta que en mitad de la ruta puede tener que recoger regalos cuando ya tiene alguno encima!
*/

export default function canMouseEat(direction, game) {
    // ¡Gracias por jugar a AdventJS 2021! 🤗
    // ¡Nos vemos el año que viene! 👋
    // Por favor, comparte en las redes qué te ha parecido! 🚀
    return false;
}

const room = [
    [" ", " ", " "],
    [" ", " ", "m"],
    [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

const room2 = [
    ["*", " ", " ", " "],
    [" ", "m", "*", " "],
    [" ", " ", " ", " "],
    [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false
