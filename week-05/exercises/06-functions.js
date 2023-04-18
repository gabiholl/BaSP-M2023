console.log("--EXERCISE 6: FUNCTIONS");

// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
//Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la 
//consola del navegador.

console.log("-Exercise 6.a")

var x = (6 + 8); 
function x () {
    return (6 + 8);
}
console.log(x);

// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
//no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error 
//y retornar el valor NaN como resultado.

console.log("-Exercise 6.b")

function resultado (a, b) {
    if (typeof(a)=="number" && typeof(b)=="number"){
        return (a + b);
    }
    else {
        alert("error de parametro");
        return (NaN);
    }
}
console.log(resultado(6, " "))

// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero 
//si es un número entero.

console.log("-Exercise 6.c")

function validateInterger(x) {
    if (Number.isInteger(x)) {
        return true;
    }
    else {
    return false
    }
}

console.log(validateInterger(6));
console.log(validateInterger(4.5));

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del 
//ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert 
//con el error y retornar el número convertido a entero (redondeado).

console.log("-Exercise 6.d")

function resultado (a, b) {
    if (!validateInterger (a)){
        alert("error");
        a = Math.round (a) ;
    }
    if (!validateInterger (b)){
        alert("error");
        b = Math.round (b) ;
    }
    if (typeof(a)=="number" && typeof(b)=="number"){
        return (a + b);
    }
    else {
        alert("error de parametro");
        return (NaN);
    }
}
console.log(resultado(4.8, 6))
console.log(resultado(6, "b"))

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva 
//función probando que todo siga funcionando igual que en el apartado anterior.

console.log("-Exercise 6.e")

function resultado1 (a) {
    if (!validateInterger (a)){
        alert("error");
        a = Math.round (a) ;
        return a;
    }
}

function resultado3 (a, b) {
    if (typeof(a)=="number" && typeof(b)=="number"){
        return (a + b);
    }
    else {
        alert("error de parametro");
        return (NaN);
    }
}

console.log(resultado1(4.8))
console.log(resultado3 (6.8, 3.2))
