var myName = 'Mohammad Shahadad Hossain';
var myHeigth = 5;
var isJavaScriptLearnComplete = false;
var myWeigth = '56kg';

// Change Variable Value 
var myHeigth = myHeigth + 1;
console.log(myHeigth)

var milkPrice = 70;
milkPrice--
console.log(milkPrice)
milkPrice += 4;
console.log(milkPrice)

// Types of Variable
var result = (typeof myName);
console.log(result);

// Simple Math 
// Addition -----

var whiteBoardPrice = 450;
var whiteBoardStandPrice = 700;
var total = whiteBoardPrice + whiteBoardStandPrice;
console.log(total);

// Subtraction -----

var myBudget = 5000;
var tripodPrice = 1750;
var subtotal = myBudget - tripodPrice;
console.log(subtotal)

// Multiplication -----

var tshirtPrice = 445;
var tshirtQuantity = 4;
var multiTotal = tshirtPrice * tshirtQuantity;
console.log(multiTotal)

// Division  -----

var myBudget = 2000;
var shirtPrice = 250;
var divTotal = myBudget / shirtPrice;
console.log(divTotal)

// String Addition 

var firstName = 'Mohammad';
var secondName = 'Shahadad';
var thirdName = 'Hossain';
var fourthName = 'Rohid';
var stringSum = firstName + ' ' + secondName + ' ' + thirdName + ' ' + fourthName;
console.log(stringSum)

// Integer 
var honeyPrice = '225';
var chanachurPrice = '90';
console.log(honeyPrice + chanachurPrice)

var newHoneyPrice = parseInt(honeyPrice);
console.log(newHoneyPrice)

var newchanachurPrice = parseInt(chanachurPrice);
console.log(newchanachurPrice)

console.log(newHoneyPrice + newchanachurPrice);

// Float 

let mousePrice = '3750.5464';
console.log(mousePrice)

let newMousePrice = parseFloat(mousePrice);
console.log(newMousePrice);

let num1 = 0.1;
let num2 = 0.2;
console.log(num1 + num2);
var total = num1 + num2;
total = total.toFixed(2);
console.log(total)
total = parseFloat((total));
console.log(total)