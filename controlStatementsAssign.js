//Question-1 :   WAP that checks if a variable x is greater than 10. If it is, log "x is greater than 10," otherwise, log "x is not greater than 10."

let x = 5;
if(x > 10){
    console.log(`x is greater than 10`);   
}
else{
    console.log(`x is not greater than 10`); 
}

//Question-2 :   WAP that check that if an user is illegible for drive a car or not ( take user age as input).

let age = parseInt(prompt(`Please enter your age`));

if(age >= 18){
    console.log(`You're eligible to drive a car.`);
}
else{
    console.log(`You're not eligible.`);
}

//Question-3:    WAP to assign a grade for a student. For example, if the score is between 90 and 100, assign the grade "A." (Take score of every subject as input).

let firstSubject = parseFloat(prompt(`Enter your first subject marks`));
let secondSubject = parseFloat(prompt(`Enter your second subject marks`));
let thirdSubject = parseFloat(prompt(`Enter your third subject marks`));
let fourthSubject = parseFloat(prompt(`Enter your fourth subject marks`));

let totalMarks = firstSubject + secondSubject + thirdSubject + fourthSubject;
let average = totalMarks / 4;
console.log(`Your average is : ${average}`);


let marks = average;

if(marks >= 90 && marks < 100){
    console.log(`You got A grade,`);
}
else if(marks >= 80 && marks < 90) {
    console.log(`You got B grade`);
}
else if (marks >= 70 && marks < 80){
    console.log(`You got C grade`);
}
else if(marks >= 60 && marks < 70){
    console.log(`You got D grade`);
}
else if(marks >= 50 && marks < 60){
    console.log(`You got E grade`);
}
else{
    console.log(`You got F grade`);
}

//Question-4:   WAP to check  time of day based on the current hour. For example, if it's before noon, log "Good morning.". (take time as an input).

let hour = parseInt(prompt(`Enter the current time between 1 - 24 hrs`));
if(hour >= 1 && hour < 12){
    console.log(`Good Morning`);
}
else if(hour >= 12 && hour < 16 ){
    console.log(`Good Afternoon`);
}
else if(hour >= 16 && hour < 20){
    console.log(`Good evening`);
}
else if(hour >= 20 && hour < 24){
    console.log(`Good night`);
}
else{
    console.log(`Invalid input. Please enter an hour between 1 and 24.`);
}

//Question-5:   WAP using Switch-case to display day name according to number, for eg: 1 => Sunday. (take a number as input).

let numberOfDay = parseInt(prompt(`Enter the number between 1 - 7`));

switch (numberOfDay) {
    case 1:
        console.log(`Sunday`);
        break;

    case 2:
        console.log(`Monday`);
        break;

    case 3:
        console.log(`Tuesday`);
        break;

    case 4:
        console.log(`Wednesday`);
        break;

    case 5:
        console.log(`Thursday`);
        break;

    case 6:
        console.log(`Friday`);
        break;

    case 7:
        console.log(`Saturday`);
        break;

    default:
        console.log(`Enter a valid number`);
        break;
}

//Question-6:   WAP using Switch-case to display month name according to number, for eg: 1 => January. (take a number as input).

let numberOfMonth = parseInt(prompt(`Enter the number between 1 - 12 to get the month name`));

switch (numberOfMonth) {
    case 1:
        console.log(`January`);
        break;

    case 2:
        console.log(`February`);
        break;

    case 3:
        console.log(`March`);
        break;

    case 4:
        console.log(`April`);
        break;

    case 5:
        console.log(`May`);
        break;

    case 6:
        console.log(`June`);
        break;

    case 7:
        console.log(`July`);
        break;

    case 8:
        console.log(`August`);
        break;

    case 9:
        console.log(`September`);
        break;

    case 10:
        console.log(`October`);
        break;

    case 11:
        console.log(`November`);
        break;

    case 12:
        console.log(`December`);
        break;

    default:
        console.log(`Enter a valid number`);
        break;
}

//Question-7:   Implement a switch case statement to determine the type of fruit based on a variable. Handle at least three different fruit options.

let fruit = prompt(`Choose one fruit from the three: Apple, Mango, Banana`);

switch (fruit) {
    case `Apple`:
        console.log(`The fruit is apple`);
        break;

    case `Mango`:
        console.log(`The fruit is mango`);
        break;

    case `Banana`:
        console.log(`The fruit is banana`);
        break;
            
    default:
        console.log(`Choose the right option`);
        break;
}
