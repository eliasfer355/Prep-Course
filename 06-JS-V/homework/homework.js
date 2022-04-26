// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
    constructor(opciones) {
      this.Usuario = opciones.Usuario;
      this.Nombre = opciones.Nombre;
      this.Email = opciones.Email;
      this.password = opciones.password;
    }
    saludar() {
      return "Hola mi nombre es " + this.Nombre;
    }
  }
 return Usuario;
} 


  

  




function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  constructor.prototype.saludar = function (){
    return "Hello World!";
  }


}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
String.prototype.reverse = function(){
  var StringInvertida = '' ;
for (var i = this.length -1 ; i >= 0 ; i-- );
  StringInvertida += this[i]
 
}
 return StringInvertida;
}
function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
String.prototype.reverse = function invertida(){
  return this.split("").reverse().join("");
}
 return String
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre,apellido,edad,domicilio) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio;
     this.detalle = function(){
      return{ Nombre : this.nombre,
        Apellido : this.apellido,
        Edad : this.edad,
       Domicilio: this.domicilio
      }
    }
    var elias = new persona("elias","fernandez","21","Av siempre viva 123")
    } 
  }

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var persona = new Persona(nombre,apellido,edad,dir);
  return Persona
} crearInstanciaPersona("sadasd","dsfsdfd","dfsdf","213123")


function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  persona.prototype.datos = function(){
     return( this.Nombre ) +"," + ( this.Edad + " años");
   }
  


}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
;