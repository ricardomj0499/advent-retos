/*
Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
*/
const carta = "bici coche   balón _playstation    bici coche    peluche";

export default function listGifts(letter) {
  const regalos = {};
  const arr = letter.split(" ");
  console.log("arr ", arr);
  arr.map((word) => {
    console.log(word);
    if (word !== "" && !word.startsWith("_")) {
      console.log("entro al primer if");
      if (regalos[word] === undefined) {
        regalos[word] = 1;
      } else {
        var cant = regalos[word];
        regalos[word] = cant + 1;
      }
    }
  });

  return regalos;
}

const regalos = listGifts(carta);

console.log("uwu", regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
