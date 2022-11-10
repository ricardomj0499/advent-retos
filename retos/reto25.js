/*
El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posición puede ser:

Un espacio vacío es que no hay nada
Una m es el ratón
Un * es la comida
*/

function findRaton(game) {
    let pos = [];
    game.map((e, index) => {
        if (e.includes("m")) {
            pos = [index, e.indexOf("m")];
        }
    });
    return pos;
}

function findState(game, posRaton, dir) {
    let state = false;
    let fil = posRaton[0];
    let col = posRaton[1];
    switch (dir) {
        case "up":
            if (game[fil - 1][col] == "*") {
                state = true;
            }
            break;
        case "right":
            if (game[fil][col + 1] == "*") {
                state = true;
            }
            break;
        case "down":
            if (game[fil + 1][col] == "*") {
                state = true;
            }
            break;
        case "left":
            if (game[fil][col - 1] == "*") {
                state = true;
            }
            break;
        default:
            break;
    }
    //
    return state;
}

export default function canMouseEat(direction, game) {
    const posRaton = findRaton(game);
    const canEat = findState(game, posRaton, direction);
    return canEat;
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
    [" ", " ", "*", "m", " "],
    [" ", " ", " ", "*"],
    [" ", " ", " ", "*", "*", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false
