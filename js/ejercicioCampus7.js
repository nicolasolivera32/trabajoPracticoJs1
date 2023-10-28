/*
Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9

Output: El 15 es el número más grande
*/

let num1 = parseInt(prompt("imgrese el primer número"));
let num2 = parseInt(prompt("ingrese el segundo número"));
let num3 = parseInt(prompt("ingrese el tercer número"));

if (num1 > num2 && num1 > num3) {
  alert("el " + num1 + " es el número más grande");
} else {
  if (num2 > num1 && num2 > num3) {
    alert("el " + num2 + " es el número más grande");
  } else {
    alert("el " + num3 + " es el número más grande");
  }
}
