console.log("--EXERCISE 3: ARRAYS");
//a. Dado el siguiente array: 
//["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
//"Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log("-Exercise 3.a")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses[4],meses[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log("-Excercise 3.b")
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.sort();
console.log(meses);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log("-Excercise 3.c")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.push("navidad");
meses.unshift ("playa");
console.log(meses);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log("-Excercise 3.d")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.shift();
meses.pop();
console.log(meses);

//e. Invertir el orden del array (utilizar reverse).

console.log("-Excercise 3.e")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
meses.reverse();
console.log(meses);

//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
//(utilizar join).

console.log("-Excercise 3.f")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses.join("-"));

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log("-Excercise 3.g")

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(meses.slice(4,11));