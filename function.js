// Declare a function:
function getNumber() {
    // console.log('Hello JavaScript Function')
}

// Call the function:
getNumber()

// -------- Input Parameter --------

function bringMilk(taka) {
    console.log('Taka Nen', taka)
    milkPrice = 70;
    milkQuantity = taka / milkPrice;
    // console.log('Bhai milk nen', milkQuantity);
    return milkQuantity;
}

var result = bringMilk(280);
console.log('Bhai milk nen', result);

// -------- Input Multiple Parameter --------
function getTwoNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var total = getTwoNumber(10, 20);
console.log(total)


// -------- Practice Problem 1 --------

function namata(Number) {
    for (var i = 1; i <= 10; i++) {
        var total = i * Number;
        console.log(i, '*', Number, total);
    }
}

// function call

namata(13);

namata(5);


// -------- Practice Problem 2 --------

