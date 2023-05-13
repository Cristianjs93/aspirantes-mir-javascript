// escribe la función sum acá
function sum(array) {
    let acumulado = 0;
    for (let i = 0; i < array.length; i++) {
        acumulado = acumulado + array[i];
    }
    return acumulado;
}

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0