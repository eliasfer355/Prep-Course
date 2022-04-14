// No cambies los nombres de las funciones.

function obtenerMayor(x, y) { if (x > y ){
  return x;
}else if ( x < y){return y;}
 else return x || y;
  
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código: 
  
}
obtenerMayor (3,4)

function mayoriaDeEdad(edad) { if ( edad >= 18){
  console.log ("allowed")
  return ;}
  else { console.log ("not allowed")
return ;}
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
mayoriaDeEdad(18)
  
function conection(status) { if (status === 1){return "Online"}
else if (status === 2){return "away"}
else return "Offline"
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
}
conection(1)

function saludo(idioma) {
  if (idioma === "aleman"){return "Guten Tag!" 
}else if (idioma === "mandarin"){return "Ni Hao!"}
else if (idioma === "ingles"){return "Hello"}
else 
return "Hola!"

 
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  
}
saludo("aleman")

function colors(color) { switch(color){
  case "blue" :
    return "this is blue";
    case "red" :
      return "this is red";
      case "orange" :
        return "this is orange";
        case "green" :
          return "this is green"
          default :
          return "color not found"
      

}}
colors("red")

function esDiezOCinco(numero){ if (numero === 10 || numero === 5 )
  { return true; }
  else { return false;} 
} esDiezOCinco(5)

function estaEnRango(numero) { if (numero < 50 && numero >20){return true
;}else { return false;}
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
} estaEnRango()

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  return (numero %1 === 0);
}

function fizzBuzz(numero) {if(numero  % 3 === 0 && numero % 5 === 0 ){return "fizzbuzz";
}
else if (numero % 5 === 0 ){return "buzz";
}
else if (numero  % 3 === 0  ){return "fizz";}
else {return numero
} 

  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
} fizzBuzz(15)

function operadoresLogicos(num1, num2, num3){ if(num1 === 0 || num2 === 0 || num3 ===0 ){return "Error";
}else if (num1 < 0 || num2 < 0 || num3 < 0){return "Hay negativos";}
 else if (num1 > 0 && num1 > num2 && num1 > num3){return "numero 1 es mayor y positivo" ;
}else if (num3 > 0 && num3 > num1 && num3 > num2){ return num3+1;}
else{ return false ;
}
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function esPrimo(numero) {if (numero ===2){
  return true;
}else if (numero < 2 ){
  return false;
}for(var i = 2 ; i < numero ; i++){if
(numero % i === 0){
  return false
}

}
}esPrimo()

function esVerdadero(valor){if (valor === true ){return "soy verdadero";
}else if (valor === false){
  return "soy falso";
}
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

}esVerdadero()

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  
}

function tieneTresDigitos(numero){if(numero >= 100){return true
}else return false
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
}tieneTresDigitos()

function doWhile(numero) { 
  var contador = 8;
  var resultado= 0 ;
  do{
    resultado = resultado +5; //tambien se puede hacer como resultado += 5;
    contador = contador -1;   // tambien se puede hacer contador -= 1;

  }while (contador !== 0)
return numero + resultado;
} doWhile(0)


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
