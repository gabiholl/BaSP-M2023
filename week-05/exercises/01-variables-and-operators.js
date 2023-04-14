console.log("--EXERCISE 1: VARIABLES AND OPERATORS");
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de 
//ambos números en una 3er variable.

console.log("-Exercise 1.a");
var a = 6;
var b = 4;
console.log('El resultado es',a + b);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log("-Exercise 1.b")
var nombre = "Anna";
var apellido = "Rodriguez";
var nombre_completo = nombre + " " + apellido
console.log('Ella es ' + nombre_completo);

//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) 
//guardando el resultado de la suma en una 3er variable (utilizar length).

var nombre = "Silvio";
var apellido = "Gómez";
var cantidad = (nombre+apellido).length
console.log('Resultado ' + cantidad);