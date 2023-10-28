/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
*/

let frase = prompt("Ingrese una frase");

console.log(
  frase.charAt(1) + frase.charAt(3) + frase.charAt(6) + frase.charAt(9)
);
