// Question-1:   Input the distance in Kilometers and Convert it into Meters and Centimeters

let disInKms = parseFloat(prompt("Enter the distance"));
let disInMeters = disInKms * 1000;
let disInCentiMeters = disInKms * 100000;

console.log(`Distance in kiloMeters :  ${disInKms}`);
console.log(`Distance in CentiMeters : ${disInCentiMeters}`);
console.log(`Distance in Meters : ${disInMeters}`);

//Question-2:    WAP to input the radius of a circle and log the area of a circle.

let radius = parseFloat(prompt(`Enter the radius of the circle`));
const pi = Math.PI; // Instead of manually typing it
let area = pi * radius * radius;
console.log(`The radius of the circle entered by you is : ${radius}`);
console.log(`The area of the radius is : ${area}`);

//Question-3:    WAP to input two numbers and perform arithmetic operations on those numbers.

let firstNum = parseFloat(prompt("Please enter your first number"));
let secondNum = parseFloat(prompt("Please enter your second number"));

// Arithmetic Operations:
let add = firstNum + secondNum;
let sub = firstNum - secondNum;
let multi = firstNum * secondNum;
let div = firstNum / secondNum;
let modulo = firstNum % secondNum;

console.log(`The value of addition operation is : ${add}`);
console.log(`The value of subtraction operation is : ${sub}`);
console.log(`The value of multiplication operation is : ${multi}`);
console.log(`The value of division operation is : ${div}`);
console.log(`The value of modulo operation is : ${modulo}`);

//Question-4:    WAP to calculate total marks in two subjects and then calculate the percentage.

let firstSubject = parseFloat(prompt(`Enter your subject - 1 marks `));
let secondSubject = parseFloat(prompt(`Enter your subject - 2 marks`));

let totalMarks = firstSubject + secondSubject;
let percentage = totalMarks/200 * 100;
percentage = percentage.toFixed(2);

console.log(`Marks in first subject is : ${firstSubject}`);
console.log(`Marks in second subject is : ${secondSubject}`);
console.log(`Total marks is : ${totalMarks} out of 200`);
console.log(`Final percentage is : ${percentage}% `);

//Question-5:    WAP to input the length and breadth of the rectangle and calculate the area and perimeter of the rectangle

let length = parseFloat(prompt(`Enter the length of the rectangle`));
let breadth = parseFloat(prompt(`Enter the breadth of the rectangle`));

let area = length * breadth;
let perimeter = 2 * (length + breadth);

console.log(`The value of area of rectangle is : ${area}`);
console.log(`The value of perimeter of rectangle is : ${perimeter}`);

//Question-6:    WAP to input n numbers and log the average of those number.

let firstNum = parseFloat(prompt(`Enter first number`));
let secondNum = parseFloat(prompt(`Enter second number`));
let thirdNum = parseFloat(prompt(`Enter third number`));
let fourthNum = parseFloat(prompt(`Enter fourth number`));
let fifthNum = parseFloat(prompt(`Enter fifth number`));

let average = (firstNum + secondNum + thirdNum + fourthNum + fifthNum) / 5;

console.log(`The average of all the entered numbers is : ${average}`);  

//Question-7:    WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

let distanceBtwCities = parseFloat((prompt(`Enter the distance between two cities in kms`)));

let disInMeter = distanceBtwCities * 1000;
let disInFeet = distanceBtwCities * 3280.84;
let disInInches = distanceBtwCities * 39370.1;
let disInCentimeter = distanceBtwCities * 100000;

console.log(`The distance between two cities in kms is : ${distanceBtwCities} `);
console.log(`And after conversion in meters : ${disInMeter}, in feet : ${disInFeet}, in inches : ${disInInches}, and in centimeters : ${disInCentimeter}.`);

//Question-8:    WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

let tempInFar = parseFloat(prompt(`Enter the temperature in Fahrenheit`));

let tempInCel = ((tempInFar - 32) * 5/9).toFixed(2);

console.log(`Temperature in Fahrenheit is : ${tempInFar}, and after conversion in celsius it is : ${tempInCel}.`);

//Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

let quantityOfProduct = parseFloat(prompt(`Enter the quantity of product`));
let rateOfProduct = parseFloat(prompt(`Enter the rate of product`));

let totalAmountBeforeDiscount = quantityOfProduct * rateOfProduct;
let discountAmount = totalAmountBeforeDiscount * 0.10;
let finalAmountAfterDiscount = totalAmountBeforeDiscount - discountAmount;

console.log(`The quantity of product ${quantityOfProduct} and rate of product is ${rateOfProduct}`);
console.log(`The total amount before discount is : ${totalAmountBeforeDiscount}. And discount amount is : ${discountAmount}`);
console.log(`The final amount after discount is : ${finalAmountAfterDiscount}`);

//Question-10:    Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

let principalAmt = parseFloat(prompt(`Enter the value of principal amount`));
let rateOfInterest = parseFloat(prompt(`Enter the value of rate of interest`));
let numOfYears = parseInt(prompt(`Enter the value of number of years`));

let simpleInterest = (principalAmt * rateOfInterest * numOfYears) / 100;

console.log(`The value of principal amount is : ${principalAmt}, rate of interest ${rateOfInterest}%, and number of years is : ${numOfYears}.`);

console.log(`Then the simple interest comes out to be : ${simpleInterest}`);
