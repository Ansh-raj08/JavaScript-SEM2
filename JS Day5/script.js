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

