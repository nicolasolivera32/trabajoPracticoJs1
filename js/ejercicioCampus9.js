/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt("Ingrese una frase");

for (i = 0; i < frase.length; i = i + 1) {
  if (
    frase[i] === "a" ||
    frase[i] === "e" ||
    frase[i] === "i" ||
    frase[i] === "o" ||
    frase[i] === "u"
  ) {
    console.log(frase[i]);
  }
}
