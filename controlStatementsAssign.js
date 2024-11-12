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

