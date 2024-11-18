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

// Problem 3: Write a JavaScript program to compare two numbers and log whether they are equal, greater, or lesser.

let firstNumber = parseFloat(prompt(`Enter the first number`));
let secondNumber = parseFloat(prompt(`Enter the second number`));

if(firstNumber === secondNumber){
    console.log(`Numbers are equal`);
}
else if(firstNumber > secondNumber){
    console.log(`First number is greater than second number`);
}
else if(firstNumber < secondNumber){
    console.log(`First number is less than second number`);
}
else{
    console.log(`Enter a valid number`);
}

// Problem 4: Write a JavaScript program to demonstrate logical operators in a conditional statement.

let age = parseInt(prompt(`Enter your age`));

if(age < 0){
    console.log(`Please enter a valid age`);
}
else if(age <= 10 && age >= 0 || age >= 60){
    console.log(`Ticket is free`);
}
else{
    console.log(`You have to pay for the tickets`);
}

// Problem 5: Write a JavaScript program to perform bitwise operations on two numbers.

let firstNumber = parseInt(prompt(`Enter the first number`));
let secondNumber = parseInt(prompt(`Enter the second number`));

//Bit-wise Operations:

let firstOperation = firstNumber & secondNumber;
console.log(`The value of bitwise AND operation is ${firstOperation}`);

let secondOperation = firstNumber | secondNumber;
console.log(`The value of bitwise OR operation is ${secondOperation}`);

let thirdOperation = firstNumber ^ secondNumber;
console.log(`The value of bitwise XOR operation is ${thirdOperation}`);

let fourthOperation = ~firstNumber;
console.log(`The value of bitwise NOT operation is ${fourthOperation}`);

let fifthOperation = firstNumber << secondNumber;
console.log(`The value of bitwise left shift operation is ${fifthOperation}`);

let sixthOperation = firstNumber >> secondNumber;
console.log(`The value of bitwise right shift operation is ${sixthOperation}`);

let seventhOperation = firstNumber >>> secondNumber;
console.log(`The value of bitwise unsigned right shift operation is ${seventhOperation}
`);

// Problem 6: Write a JavaScript program to use the ternary operator to determine the larger of two numbers.

let firstPersonAge = parseInt(prompt(`Enter first person age`));
let secondPersonAge = parseInt(prompt(`Enter second person age`));

let greaterAge = firstPersonAge > secondPersonAge
    ? firstPersonAge : secondPersonAge;
    
console.log(`The value of Ternary Operation is ${greaterAge}`);

// Problem 7: Write a JavaScript program to demonstrate type operators on different data types.

let number = 7;
console.log(`The typeof number is : ${typeof number}`);

let fullName = `Urooj Naqvi`;
console.log(`The typeof string is : ${typeof fullName}`);

let isMarried = false;
console.log(`The typeof is boolean is : ${typeof isMarried}`);

const person = {
    name : `Urooj`,
    age : 20
}
console.log(`The typeof object is : ${typeof person}`);

let arr = [1,2,3];
console.log(`The typeof array is : ${typeof arr}`);

let container = null;
console.log(`The typeof null is : ${typeof container}`);

let nothing;
console.log(`The typeof undefined is : ${typeof nothing}`);

function greetings(){
    console.log(`Hello`);
}
console.log(`The typeof function is : ${typeof greetings}`);

// Problem 8: Write a JavaScript program to use string operators to concatenate two strings.

// Problem 9: Write a JavaScript program to demonstrate the use of the typeof operator on different variables.
   // This is same as problem - 7
  
