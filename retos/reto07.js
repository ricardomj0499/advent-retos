const arr = [1, 2, 3, 4];
const almacen = new Object();
almacen.estanteria1 = {
  cajon1: {
    producto1: "coca-cola",
    producto2: "fanta",
    producto3: "sprite",
  },
};
almacen.estanteria2 = {
  cajon1: "vacio",
  cajon2: {
    producto1: "pantalones",
    producto2: "camiseta", // <- ¡Está aquí!
  },
};

for (var x in almacen) {
  console.log(x);
}

//console.log("1 ", almacen);
//console.log(almacen.constructor);
console.log(almacen.hasOwnProperty("estanteria3"));
//console.log(almacen.isPrototypeOf);
console.log(almacen.propertyIsEnumerable("estanteria2"));
//console.log(almacen.toLocaleString());
//console.log(almacen.toString());
//console.log("2 ", almacen.valueOf());
