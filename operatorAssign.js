// Problem 1: Write a JavaScript program to perform arithmetic operations on two numbers (addition, subtraction, multiplication, division).

let firstNumber = parseFloat(prompt(`Enter the first number`));
let secondNumber = parseFloat(prompt(`Enter the second number`));
let addition = firstNumber + secondNumber;
let subtraction = firstNumber - secondNumber;
let multiplication = firstNumber * secondNumber;
let division = firstNumber / secondNumber;


console.log(`The addition of first number and second number is : ${addition} `);
console.log(`The subtraction of first number and second number is : ${subtraction} `);
console.log(`The multiplication of first number and second number is : ${multiplication} `);
console.log(`The division of first number and second number is : ${division} `);

// Problem 2: Write a JavaScript program to demonstrate the use of assignment operators on variables.

//Basic Assignment Operator:
let firstNumber = 5;
let secondNumber = 7;
console.log(`First number is ${firstNumber} and second number is ${secondNumber}`);

//Compound Assignment Operator:
firstNumber += 5; //firstNumber + 5
console.log(`First number after += is : ${firstNumber}`);

firstNumber -= 5; //firstNumber - 5
console.log(`First number after -= is : ${firstNumber}`);

firstNumber *=5; //firstNumber * 5
console.log(`First number after *= is : ${firstNumber}`);

firstNumber /= 5; //firstNumber / 5
console.log(`First number after /= is : ${firstNumber}`);

firstNumber %= 5; //firstNumber % 5
console.log(`First number after %= is : ${firstNumber}`);

firstNumber = 5;
firstNumber **= 7; //firstNumber ** 5
console.log(`First number after **= is : ${firstNumber}`);

//Bitwise Assignment Operator:
firstNumber &= 5; // AND
console.log(`First number after &= is : ${firstNumber}`);

firstNumber |= 4; // OR
console.log(`First number after |= is : ${firstNumber}`);

firstNumber ^= 3; // XOR 
console.log(`First number after ^= is : ${firstNumber}`);

firstNumber <<= 2; // Left-shift
console.log(`First number after <<= is : ${firstNumber}`);

firstNumber >>= 1; // Right-shift
console.log(`First number after >>= is : ${firstNumber}`);

//Logical Assignment Operator:
firstNumber = 0;
firstNumber &&= secondNumber;
console.log(`First number after &&= is : ${firstNumber}`);

firstNumber ||= secondNumber;
console.log(`First number after ||= is : ${firstNumber}`);

