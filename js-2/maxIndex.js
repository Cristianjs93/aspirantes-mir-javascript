// escribe la función max acá
function maxIndex(array) {
    let mayor = 0;
    let ind;

    if (array.length === 0) {
        mayor = -1;
    } else { 
        for (let i = 0; i <= array.length; i++) {
            
            if (mayor < array[i]) {
            mayor = array[i];
            ind = array.indexOf(mayor);
            }
        }
    }
    return ind;
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1