//EJERCICIO 1:
function sumaTodosImpares(array) {
    // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
    // y debe devolver la suma total entre todos los numeros impares.
    // ej:
    // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15
  
    // Tu código aca:  
      let suma = 0;
    
      for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) { // Comprobar si el número es impar
          suma += array[i]; // Sumar el número impar a la suma total
        }
      }
    
      return suma;
    }
    
    // Aca se deberia aplicar el array a comprobar...
    const numerosTotales = [1, 5, 2, 9, 6, 4];
    const resultado = sumaTodosImpares(numerosTotales);
    console.log(resultado); 
  
  
  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 2:
  function stringMasLarga(str) {
    // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
    // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
    // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
    // Tip: podes usar el metodo de String 'split'
  
    // Tu código aca: 

    const palabras = str.split(' ');
    let palabraMasLarga = '';
  
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i].length > palabraMasLarga.length) {
        palabraMasLarga = palabras[i];
      }
    }
  
    return palabraMasLarga;
    }
    
    const frase1 = 'Ayer fui a pasear a una plaza';
    const resultado1 = stringMasLarga(frase1);
    console.log(resultado1);
    
    const frase2 = 'Me gusta mucho javascript';
    const resultado2 = stringMasLarga(frase2);
    console.log(resultado2);
  
  //---------------------------------------------------------------------------------------------------------------------------
//EJERCICIO 3:
  function estaOffline(usuarios, nombre) {
    // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
    // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
    // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
    // ej:
    // var usuarios = [
    //     {
    //       nombre: 'toni',
    //       online: true
    //     },
    //     {
    //       nombre: 'emi',
    //       online: true
    //     },
    //     {
    //       nombre: 'agus',
    //       online: false
    //     }
    // ];
    // estaOffline(usuarios, 'agus') retorna true
    // estaOffline(usuarios, 'emi') retorna false
  
    // Tu código aca:

      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === nombre) {
          return !usuarios[i].online;
        }
      }
    
      return false;
    }
    
    var usuarios = [
      {
        nombre: 'toni',
        online: true
      },
      {
        nombre: 'emi',
        online: true
      },
      {
        nombre: 'agus',
        online: false
      }
    ];
    
    //Console.log que pide el propio ejercicio...
    console.log(estaOffline(usuarios, 'agus')); 
    console.log(estaOffline(usuarios, 'emi')); 
    
  
    //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 4:
    function actividadesEnComun(persona1, persona2) {
    // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
    // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
    // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
    //     persona2 = ['comer', 'dormir', 'futbol']
    // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
    // Tip: podes usar ciclos for anidados.
    // Tu código aca:
   
      const actividadesComunes = [];
    
      for (let i = 0; i < persona1.length; i++) {
        for (let j = 0; j < persona2.length; j++) {
          if (persona1[i] === persona2[j]) {
            actividadesComunes.push(persona1[i]);
          }
        }
      }
    
      return actividadesComunes;
    }
    
    const persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
    const persona2 = ['comer', 'dormir', 'futbol'];
    const resultadoEjercicio4 = actividadesEnComun(persona1, persona2);
    console.log(resultadoEjercicio4);
    
  
  
  
  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 5:
  function buscaDestruye(arreglo, num) {
    // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
    // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
    // La función debe retornar el array sin los números sacados.
    // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
    // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
    // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
    //
    // Tu código aca:
   
      const resultado = [];
    
      for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] !== num) {
          resultado.push(arreglo[i]);
        }
      }
    
      return resultado;
    }
    
    const arreglo1 = [1, 2, 3, 4];
    const resultado1Ejercicio5 = buscaDestruye(arreglo1, 2);
    console.log(resultado1Ejercicio5);
    
    const arreglo2 = [1, 2, 3, 4, 1];
    const resultado2Ejercicio5 = buscaDestruye(arreglo2, 1);
    console.log(resultado2Ejercicio5);


  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 6:
  function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que 
    //contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos,
    // y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, 
    //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
    //let a = [[5, 5], 4, [10, 15], [25, 10]].
  let resultadoEjercicio6 = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      if (array[i].length === 2 && typeof array[i][0] === 'number' && typeof array[i][1] === 'number') {
        resultadoEjercicio6.push(array[i][0] + array[i][1]);
      }
    } else if (typeof array[i] === 'number') {
    resultadoEjercicio6.push(array[i]);
    }
  }
  return resultadoEjercicio6;
  }

  let a = [[5, 5], 4, [10, 15], [25, 10]];
  let resultadoEjercicio6 = sumaDeArrays(a);
  console.log(resultadoEjercicio6);

  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 7:
  function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
    const resultado = [];
  
    if (numero % divisor !== 0) {
      return false;
    }
  
    const elemento = numero / divisor;
  
    for (let i = 0; i < divisor; i++) {
      resultado.push(elemento);
    }
  
    return resultado;
  }
  
  // Ejemplos de uso
  console.log(mismoValorMismosElementos(10, 2));  // [5, 5]
  console.log(mismoValorMismosElementos(15, 3));  // [5, 5, 5]
  console.log(mismoValorMismosElementos(8, 4));   // [2, 2, 2, 2]
  console.log(mismoValorMismosElementos(7, 2));   // false 
  
  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 8:
  function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código: 
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      const result = cb(array[i]);
      newArray.push(result);
    }

    return newArray;
}

// Ejemplo de uso
const numeros = [1, 2, 3, 4, 5];
const duplicados = map(numeros, function(num) {
  return num * 2;
});

console.log(duplicados); // [2, 4, 6, 8, 10]
  
  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 9:
function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    const newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'string' && array[i][0].toLowerCase() === 'a') {
        newArray.push(array[i]);
      }
    }
  
    return newArray;
  }
  
  // Ejemplo de uso
  const palabras = ['manzana', 'banana', 'pera', 'sandía', 'avión'];
  const palabrasConA = filter(palabras);
  
  console.log(palabrasConA); // ['manzana', 'avión']
  
  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 10:
function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca: 
  const resultadoEjercicio10 = {};

  for (let i = 0; i < arreglo.length; i++) {
    const tipo = arreglo[i];

    if (resultadoEjercicio10[tipo]) {
      resultadoEjercicio10[tipo]++;
    } else {
      resultadoEjercicio10[tipo] = 1;
    }
  }

  return resultadoEjercicio10;
}

// Ejemplo de uso
const vehiculos = ['auto', 'moto', 'auto'];
const resultadoEjercicio10 = sumarElTipo(vehiculos);

console.log(resultadoEjercicio10);

  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 11:
function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".  
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
var gato = {
  nombre: nombre,
  edad: edad,
  meow: function() {
    return "Meow!";
  }
};
return gato;
}
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 12:
function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto 
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código: 
  //objeto [property]= null;  
objeto[property] = null;
return objeto;
}

  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 13:
function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código: 
objeto[metodo]();
}
//COMO USARLO...
var miObjeto = {
saludar: function() {
  console.log("¡Hola!");
}
};

invocarMetodo(miObjeto, "saludar");
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 14:
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
var resultado = objetoMisterioso.numeroMisterioso * 5;
return resultado;
}

  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 15:
function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation = Notacion de corchetes. 
  // Devuelve el objeto 
  // Tu código:
delete objeto[unaPropiedad];
return objeto;
}

  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 16:
function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los 
  // argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
const usuario = {
  nombre: nombre,
  email: email,
  password: password
};

return usuario;
}
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 17: 
function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código
if (usuario && usuario.email !== undefined) {
  return true;
} else {
  return false;
}
}
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 18:
function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
  //cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
return propiedad in objeto;
}

const miObjetoo = {
nombre: 'Osvaldo',
edad: 21,
ciudad: 'Mercedes'
};

console.log(tienePropiedad(miObjetoo, 'nombre'));
console.log(tienePropiedad(miObjetoo, 'apellido'));
console.log(tienePropiedad(miObjetoo, 'ciudad'));
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 19:  
function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código: 
return usuario.password === password;
}
const usuario1 = {
nombre: 'Chicho',
email: 'chicho@gmail.com',
password: 'soycontraseña123'
};

console.log(verificarPassword(usuario1, 'soycontraseña123'));
console.log(verificarPassword(usuario1, 'otracontraseña123'));
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 20:  
function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:
usuario.password = nuevaPassword;

return usuario;
}
const usuarioo1 = {
nombre: 'Valen',
email: 'valen@hotmail.com',
password: 'holahola'
};

console.log(usuarioo1);
actualizarPassword(usuarioo1, 'chauchau');
console.log(usuarioo1);
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 21:    
function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código: 
if (usuario.hasOwnProperty('amigos') && Array.isArray(usuario.amigos)) {
  usuario.amigos.push(nuevoAmigo);
} else {
  usuario.amigos = [nuevoAmigo];
}

return usuario;
}
//ASI AGREGARIAMOS UN AMIGO...
const usuarioX = {
nombre: 'Juan',
amigos: ['Pedro', 'María']
};

const nuevoAmigo = 'Carlos';
const usuarioActualizado = agregarAmigo(usuarioX, nuevoAmigo);

console.log(usuarioActualizado);

  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 22:  
function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el  array de usuarios
  // Tu código: 
for (let i = 0; i < usuarios.length; i++) {
  usuarios[i].esPremium = true;
}

return usuarios;
}
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 23:    
function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código: 
let sumaLikes = 0;

if (usuario.hasOwnProperty('posts') && Array.isArray(usuario.posts)) {
  for (let i = 0; i < usuario.posts.length; i++) {
    if (usuario.posts[i].hasOwnProperty('likes') && Number.isInteger(usuario.posts[i].likes)) {
      sumaLikes += usuario.posts[i].likes;
    }
  }
}

return sumaLikes;
}
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 24:    
function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código: 
producto.calcularPrecioDescuento = function() {
  return producto.precio - (producto.precio * producto.porcentajeDeDescuento);
};

return producto;
}

//EJEMPLO DADO...
const miProducto = {
nombre: 'Camiseta',
precio: 20,
porcentajeDeDescuento: 0.2
};

agregarMetodoCalculoDescuento(miProducto);

const precioConDescuento = miProducto.calcularPrecioDescuento();
console.log(precioConDescuento);
  
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 25:   
  //-------------------------------------------Interacción con el DOM--------------------------------------------------------
  // En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
  // Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
  // agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
  // Tu código acá:
const spanElement = document.querySelector("#createdBy");

spanElement.innerHTML += " Osvaldo";

  
  //-----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 26:  
  // La función debe realizar lo siguiente:
  //    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
  //    2) Asignarle a 'toDoShell' la clase 'toDoShell'
  //    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
  //    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
  //       asignándole el valor de la propiedad 'description' del objeto ToDo.
  //    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  //    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //          - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //          - Si es false: no asignarle ninguna clase
  //    7) Agregar 'toDoText' como hijo de 'toDoShell'
  //    8) Devolver la variable toDoShell
  
  function createToDoElement(toDo, index) { //todo es un objeto de la clase TODO. //index numerico 
    // Tu código acá:
    const toDoShell = document.createElement('div');
    toDoShell.classList.add('toDoShell');
   
    // Consigna 3
    const toDoText = document.createElement('span');
    // Consigna 4
    toDoText.innerHTML = toDo.description;
    // Consigna 5
    toDoText.id = index;
    // Consigna 6
    if (toDo.complete) {
      toDoText.classList.add('completeText');
    }
    // Consigna 7
    toDoShell.appendChild(toDoText);
    // Consigna 8
    return toDoShell;
}
  
  //----------------------------------------------------------------------------------------------------------------------
//EJERCICIO 27:  
  // La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
  //  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
  //  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
  //  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
  //  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
  //  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
  //  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página
  
  function displayToDos() {
  // Tu código acá:
  //Paso 1; 
  const toDoContainer = document.getElementById('toDoContainer');
  // Paso 2: 
  toDoContainer.innerHTML = '';
  // Paso 3;
  const toDoItems = [];
  const builtToDos = buildToDos(toDoItems);
   //Paso 4; 
   for (const toDoElement of builtToDos) {
    toDoContainer.appendChild(toDoElement);
  }
}

displayToDos();
  
  //-----------------------------------------------------------------------------------------------------------------------