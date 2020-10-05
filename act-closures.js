function range(start, end) {
    //Si el rango final me lo pasan, calculo el rango entre los dos límites directamente 
    if (end != undefined) {
        return rellenarArray(start, end);

    /*
    Si no, me creo, una función que devuelva el rango final,que ha su vez
    tenga enclausurada la funcion para calcular el rango entre los dos límites
    */
    } else {
        return function rangeFinal(end) {
            return rellenarArray(start, end);
        }

    }

    //Esta función es para rellenar a partir de los dos limites el array
    function rellenarArray(start, end) {
        var arrayParaDevolver = [];
        var contador = 0;
        for (let i = start; i <= end; i++) {
            arrayParaDevolver[contador] = i;
            contador++;
        }
        return arrayParaDevolver;
    }
}



console.log(range(3, 3));    // [3]
console.log(range(3, 8));    // [3,4,5,6,7,8]
console.log(range(3, 0));    // []


var start3 = range(3);
var start4 = range(4);

console.log(start3(3));     // [3]
console.log(start3(8));     // [3,4,5,6,7,8]
console.log(start3(0));     // []
console.log(start4(6));     // [4,5,6]
