/* Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3

Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("ingrese el primer número: "));
let num2 = parseInt(prompt("ingrese el segundo número: "));

if (num1 > num2) {
  alert("el " + num1 + " es el número mas grande");
} else {
  if (num2 > num1) {
    alert("el " + num2 + " es el número mas grande");
  }
}
