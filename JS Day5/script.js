// let str = "java script is amazing";
// let sub = str.substring(2,11);
// console.log(sub)

// let firststi = "hello";
// let secstr = "world";
// let fullsen = firststr.concat(" ",secstr);
// console.log(fullsen)

// string literals

// let firststr = "ansh";
// let lastname = "raj";

// let fullname = `${firststr} this is my first name and --> this is my last name ${lastname}`
// console.log(fullname)

let Fname = "Ansh Raj";
let university = "K.R Mangalam";
let program = "BCA AI/DS";

let fullsentence = `My name is ${Fname} and i'm pursuing ${program} from ${university} Sohna road, Gurgaon `
console.log(fullsentence)

// Spread Operator

let arr = [1,2,3]
let arr2 = [4,5,6]
let fiarr = [...arr,...arr2]
console.log(fiarr)

// modulus function

let remainder = 5906%6;
console.log(remainder)

// XOR Function

let int = 3^3;
console.log(int)

// Increment and Decrement Operators

let a = 8;
let b = ++a;
let c = --a;
console.log(a)
console.log(b)
console.log(c)

// Assignment Operators

let n = 7;
n += 3;

let m = 10;
m -= 3;

console.log(n)
console.log(m)

// Ternary Operator

let age = 20;
let canVote = age >= 18 ? "yes" : "no"
console.log(canVote)

// Nullish Operator

let value = null;
let defaultValue = "Null Hai";
let result = value ?? defaultValue;
console.log(result)

// if statement

let age2 = 20;
if (age2>=20) {
    console.log("You are an adult")
}

// if-else statement

let isSnowing = true;
if (isSnowing) {
    console.log("Stay at home")
} else {
    console.log("You can go outside")
}

// Nested If-Else Statements

let score = 70;
if (score>=60) {
    console.log("You passed the exam.");
    if (score>=90) {
        console.log("You got grade A.")
    } else {
        console.log("You got grade B.")
    }
} else {
    console.log("You Failed the exam.")
    console.log("Take a retest.")
}

// Cascaded If-Else Statement

let grade = 'A';
if (grade === 'A') {
    console.log("Excellent! Good Job.")
} else if (grade === 'B') {
    console.log("Good Job!.")
} else if (grade === 'C') {
    console.log("Can do better.")
} else {
    console.log("You really really need improvement.")
}

// Switch Case

let dayofweek = 'monday';
switch (dayofweek) {
    case 'monday':
        console.log("First day of the week.");
        break;
    case 'wednesday':
        console.log("Mid day of the week.");
        break;
    default:
        console.log("Just a Weekday.")
}

// Break statement

for (i=1; i<=10; i++) {
    if (i===6){
        break;
    }
    console.log(i)
}

// Continue Statement

for (i=1; i<=10; i++) {
    if (i===6) {
        continue;
    }
    console.log(i)
}

// JS Maths Functions

// Absolute ( turns any positive or negative function to positive.)

Math.abs(-22)

// sqrt - gives the square root of the given number

Math.sqrt(64)

// pow- power function ( x, y), x- given number, y- given power.

Math.pow(2,3)

// round- gives nearest integer

Math.round(89.9000001889)

// floor- takes the float(decimal) value to it's downward value, irrespective how close the float value is, if it's 3.9 then the output will be 3 and if it's 3.3 then also it's 3.

Math.floor(3.9)

// ceil- takes the float(decimal) value to it's upward value, irrespective how far the float value is, if it's 3.9 then the output will be 4 and if it's 3.3 then also it's 4.

Math.ceil(3.3)

// min- prints the minimum value from the given numbers.

list = (7, 42, 15, 88, 3, 29, 64, 11, 95, 22, 50, 8, 77, 34, 19, 91, 46, 2, 63, 31);


