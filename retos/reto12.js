/*
 hacer la ruta perfecta para dejar los regalos.
 La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.
 una lista de obstáculos a evitar. El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 aunque al menos nunca la posición 0 puede tener un obstáculo.
 Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱
 Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.
*/

export default function getMinJump(obstacles) {
    const numObstacles = obstacles.length;
    if (!numObstacles) {
        return 1;
    }

    const modToTest = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (const mod in modToTest) {
        let isMin = true;
        console.log("mod: ", modToTest[mod]);
        for (const obs in obstacles) {
            if (obstacles[obs] % modToTest[mod] === 0) {
                console.log("if mod === 0");
                isMin = false;
                break;
            }
            console.log("obs: ", obstacles[obs]);
        }
        if (isMin) {
            return modToTest[mod];
        }
    }
    return -1;
}
