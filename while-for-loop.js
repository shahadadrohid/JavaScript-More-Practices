// While Loop 

var biryaniPacket = 0;
while (biryaniPacket <= 10) {
    console.log(biryaniPacket)
    console.log('Alhamdulillah biryani packet sobaike dite parchi');
    biryaniPacket++
}

// While Loop Odd Number

var oddNumber = 1;
while (oddNumber < 20) {
    console.log(oddNumber)
    oddNumber = oddNumber + 2;

}

// While Loop Even Number

var evenNumber = 0;
while (evenNumber < 20) {
    console.log(evenNumber)
    evenNumber = evenNumber + 2;
}
// For Loop

for (var i = 0; i <= 10; i++) {
    console.log(i)
}

// Even Number 
for (var i = 0; i <= 10; i = i + 2) {
    console.log(i)
}

// Odd Number 
for (var i = 1; i <= 10; i = i + 2) {
    console.log(i)
}

// Array Loop 

var numbers = [15, 19, 20, 25, 26, 32, 18, 35, 40, 44];

// Array by While loop 
var i = 0;
while (i < numbers.length) {
    var element = numbers[i]
    console.log(element)
    i++
}

// Array by For loop 
for (var i = 0; i < numbers.length; i++) {
    var element = numbers[i]
    console.log(element);
}

