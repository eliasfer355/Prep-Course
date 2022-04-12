// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

const { map } = require("@11ty/eleventy/src/TemplateGlob");

// Crea una variable "string", puede contener lo que quieras:
const Hola = "HOLA MANOLA";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1 = 0

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

//Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1.05;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código: 
  return Str

  
  
}
devolverString("manola")

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  console.log (x + y)
  
  
}
suma(2, 3)

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  console.log(x - y)
  
  
}
resta(2, 1)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log(x * y)
  var multiplicacion = x * y;
  return multiplicacion
  
}
multiplica (1,3)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var division = x / y;
  return division
}
divide(3, 2)

function sonIguales(x, y) { if (x,y = 2) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
 return true ; 
}
return false }
sonIguales(1 + 1)

function tienenMismaLongitud(str1, str2){ if (str1,str2 < 100 )  {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  return true ;
}
 return false  
} 

tienenMismaLongitud("10cm" , "20cm")
function menosQueNoventa(num){if (num < 90) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
return true;


}
return false ;}
menosQueNoventa(70)

function mayorQueCincuenta(num){if(num > 50) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return true;
  
}
return false; }
mayorQueCincuenta(10)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var resto = x % y;
return resto 
}
obtenerResto(10,50)


function esPar(num)  {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(4,2 )
  
  return cuadrado
  
}
elevarAlCuadrado()

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
 var cubo = Math.pow(2,3 )
  
return cubo

}
elevarAlCubo()


function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
 var num = 10
  var exponent = 2
  var elevado = Math.pow(num,exponent)

 return elevado
}
elevar ()

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeo = Math.round(61.5)
  return redondeo
  
}
redondearNumero()

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var Redondeo = Math.ceil(60.000003)
  return Redondeo
  
}
redondearHaciaArriba()

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var NumeroAleatorio = Math.random()
  return NumeroAleatorio
  
}
numeroRandom()

function esPositivo(numero)
{if(numero >0) {
  
  return "Es positivo"
    
 }
  return "es negativo"  }
  

esPositivo(-5)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código: 
  var a = "!"
  return  str + a
}
agregarSimboloExclamacion("HELLO WORLD")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
 console.log(`Hola mi nombre es ${nombre} ${apellido}`);
 var minombre = "elias" + " fernandez";
}
combinarNombres(minombre);

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  console.log("Hola,Como estas" + nombre)
  return `hola ,${nombre}`
}
obtenerSaludo(" elias")
obtenerSaludo(" juan")
obtenerSaludo(" sofia")

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var alto = alto 
var ancho = ancho 
return alto + ancho}
obtenerAreaRectangulo("10 metros", "30 metros")

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,}
