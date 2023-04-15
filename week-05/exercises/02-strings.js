console.log("--EXERCISE 2: STRINGS");
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
//(utilizar toUpperCase).

console.log("-Exercise 2.a")

var nombre = "televisión";
var mayúscula = (nombre).toUpperCase();
console.log('Resultado ' + mayúscula);

//b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
//primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.b")

var nombre = "vacaciones"
console.log(nombre.substring(0,5));

//c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
//últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log("-Exercise 2.c")

var nombre= "colchoneta"
console.log(nombre.substring(nombre.length -3, nombre.length));

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera 
//letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
//(utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.d")

var animal = "golondrina"
var mayuscula01 = animal.substring(0,1).toUpperCase() + animal.substring(1,animal.length).toLowerCase();
console.log(mayuscula01);

// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log("-Exercise 2.e")

var nombre = "vacaciones lindas"
var index = nombre.indexOf(" ");
console.log(index)

//f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
//entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga 
//la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
//(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log("-Exercise 2.f")

var nombre = "golondrina maravillosa"
var resultado = nombre.substring(0,1).toUpperCase() + nombre.substring (1,nombre.indexOf (" ")).toLowerCase() + 
nombre.substring(nombre.indexOf(" "),nombre.indexOf (" ")+2).toUpperCase() + 
nombre.substring(nombre.indexOf (" ") +2, nombre.length).toLowerCase();
console.log(resultado);