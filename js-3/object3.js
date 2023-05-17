//Se crea el objeto vacio receta
let receta = {};

//Se agrega la propiedad nombre con valor 'sandwich'    
receta.nombre = 'sandwich';

//Se agrega la propiedad ingredientes con valor arreglo vacio 
receta.ingredientes = [];

//Se agrega un objeto al arreglo ingredientes
receta.ingredientes.push({
    nombre: 'pan',
    cantidad: 2
});

//Se agrega otro objeto al arreglo ingredientes
receta.ingredientes.push({
    nombre: 'queso',
    cantidad: 1
});

//Se imprime por consola el nombre del primer ingrediente
console.log(receta.ingredientes[0].nombre);

//Se suman las cantidades de los ingredientes
console.log(receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad);