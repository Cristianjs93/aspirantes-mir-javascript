let persona = {
    nombre: 'Cristian',
    edad: 29,
    ciudad: 'Worldwide',
    profesión: 'Developer'
}

//Imprime el objeto persona
console.log(persona);

//Se crea la funcion presentacion que arroja los valores de las llaves nombre, edad y ciudad
function presentacion (objeto) {
    let v = Object.values(persona);
    v.splice(3,3);
    return console.log(v.join(' '));
}

//Se crea la variable mensaje para almacenar el valor de la funcion presentacion
let mensaje = presentacion();

//Imprime por consola la variable mensaje
console.log(mensaje) //undefined

//Se agrega la propiedad hobbies
persona.hobbies = ['peliculas', 'bicicleta', 'leer', 'salir'];

//Ciclo para imprimir los valores de la llave hobbies
let acum = '';
for (let i = 0; i < persona.hobbies.length; i++) {
    acum += ' ' + persona.hobbies[i];
}
console.log(acum);