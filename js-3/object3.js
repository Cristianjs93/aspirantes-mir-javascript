let receta = {
    nombre: 'sandwich',
    ingredientes: [
        {nombre: 'pan', cantidad: 2},
        {nombre: 'queso', cantidad: 1}
    ]
}

//Se imprime el nombre del primer ingrediente
let a = Object.values(receta);
let b = a[1];
let c = b[0]
let d = Object.values(c);
let e = d[0];
console.log (e);

//Imprime la suma las cantidades de los ingredientes

  //Se extrae el valor de la primera cantidad
  let f = Object.values(c);
  let g = f[1];

  //Se extrae el valor de la segunda cantidad
  let h = b [1]
  let i = Object.values(h);
  let j = i[1];

  //Se suman los valores
  console.log (g+j);



