//Data Types
var x = 1;
console.log(typeof x);

//Decimal number are also numbers
var y = 3.1416;
console.log(typeof y);

//MAX - MIN in JS
// Bear in mind that when we talk about the
//smallest numbers it can hold we are refering to the 
//absolute value (without sign)
var max = Number.MAX_VALUE;
console.log(max);

var min = Number.MIN_VALUE;
console.log(min);

//Artimetic operations
var a = 4 + 9;
console.log(a);

a = 3 * 4;
console.log(a);

a = x - y;
console.log(a);

a = 9 / 3;
console.log(a);

var b = 3;
//b = b + 2;
b += 2;
console.log(b);

var b = 3;
//b = b - 2;
b -= 2;
console.log(b);

b = 0;
//b = b + 1;
//b += 1;
b++;
console.log(b);

b = 1;
//b = b - 1;
//b -= 1;
b--;
console.log(b);

//Operator precedence
var c = 4 * 5 + 3;
//Will it be 23 or 32?
console.log(c);