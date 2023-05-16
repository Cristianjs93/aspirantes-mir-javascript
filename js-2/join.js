// escribe la función join acá
function joi (array) {
    let string = "";

    for (let i = 0; i < array.length; i++) {
        string = string + array[i];

        if (i !== array.length - 1) {
            string = string + ' ';
        }
    }

    return string;    
}

console.log(joi([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12])) // 1

let arr = [1, 2, 3, 4, 5]
console.log(arr.join(" "));
