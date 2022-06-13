5 * 4 * 3 * 2 * 1



var factorial = 1;
for (var i = 1; i <= 8; i++) {
    factorial = factorial * i;
}
console.log(factorial)

// Factorial Using Function 

function getFactorial(factorial) {
    var facto = 1;
    for (var i = 1; i <= factorial; i++) {
        facto = facto * i;
    }
    return facto
}

var factoResult = getFactorial(8)
console.log(factoResult)

function getNewFactorial(Number) {
    var factorial = 1;
    let i = 1;
    while (i <= Number) {
        factorial = factorial * i;
        i++
    }
    return factorial;
}

var newResult = getNewFactorial(5);
console.log(newResult);

function getNewFactorial(Number) {
    var factorial = 1;
    let i = 1;
    while (i <= Number) {
        factorial = factorial * i;
        i--
    }
    return factorial;
}

var newResult = getNewFactorial(5);
console.log(newResult);