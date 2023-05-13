// escribe la función join acá
function join (array) {
    let string = "";

    for (let i = 0; i < array.length; i++) {
        string = string + array[i];

        if (i !== array.length - 1) {
            string = string + ' ';
        }
    }

    return string;    
}

console.log(join([1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12])) // 1


