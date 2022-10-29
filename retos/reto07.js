/*
Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:
*/
////////////////////////////////arreglar///////////////////////////////////////////////////////////////////////
function iterate(obj) {
    let productos = [];
    for (let property in obj) {
        console.log("productos despues de for", productos);
        console.log("property: ", property);
        const child = obj[property]; // devuelve la propiedad, pero no con su valor
        console.log("child: ", child);
        if (typeof child === "object") {
            console.log("Si es objeto");
            productos = [...productos, ...iterate(child)];
            console.log("productos despu[es de la recursion", productos);
        }
        productos.push(child);
        console.log("antes del otro dor", productos);
    }
    return productos;
}

function contains(store, product) {
    const productos = iterate(store);
    console.log("aaaaaaaaaaaaaaaa", productos);
    return productos.includes(product) ? true : false;
}

const almacen = {
    estanteria1: {
        cajon1: {
            producto1: "coca-cola",
            producto2: "fanta",
            producto3: "sprite",
        },
    },
    estanteria2: {
        cajon1: "vacio",
        cajon2: {
            producto1: "pantalones",
            producto2: "camiseta", // <- ¡Está aquí!
        },
    },
};

console.log(contains(almacen, "camiseta")); // true

/*
const otroAlmacen = {
    baul: {
        fondo: {
            objeto: "cd-rom",
            "otro-objeto": "disquette",
            "otra-cosa": "mando",
        },
    },
};*/
