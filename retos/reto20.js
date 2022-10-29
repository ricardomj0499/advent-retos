/*
Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.
Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.
*/

export default function pangram(letter) {
    const regex = /[a-zñáéíóúü]/gi;
    const cant = new Set(letter.match(regex));
    //console.log(cant);
    //console.log(cant.size >= 27 ? true : false);
    //console.log("/////////////////////////////////////////");
    return cant.size >= 27 ? true : false;
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
    pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
    pangram(
        "Esto es una frase larga pero no tiene todas las letras del abecedario"
    )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
