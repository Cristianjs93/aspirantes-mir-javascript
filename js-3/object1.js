let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", " squash", " piano"]
}

//Imprime el valor de edad
console.log(pedro.edad);

//Añade la llave estatura
pedro.estatura = 1.8;

//Se borra la llave "activo"
delete pedro.activo;

//Recorrer las propiedades del objeto e imprimirlas por consola
let llaves = Object.keys(pedro);

for (let i=0; i < llaves.length; i++) {

  console.log(llaves[i]+ ": " + pedro[llaves[i]]);
}

//Funcion saluda
pedro.saluda = saluda

function saluda () {
    return console.log('Hola, me llamo ' + this.nombre);
}

pedro.saluda();