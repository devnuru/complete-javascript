/*
console.log("Hello World");

let js = "amazing";
 console.log(6
3 + 367 + 23 - 23);
*/

/*
Multiline comments
Thank You Javascript
You're welcome devnuru

*/

//console.log(js);
/*
console.log("Md. Nuruzzaman");
console.log(44);

let firstName = "Devnuru";
console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions
letmyFirstJob = "Developer";
let myCurrentJob = "Programmer";

let job1 = "Developer";
let job2 = "Programmer";


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);

// dynamic typing - javascript is dynamically typed language

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1997;
console.log(typeof year);

console.log(typeof null);



// let, const, var
// let is block-scoped
// var is function-scoped
// const is block-scoped and cannot be reassigned
let age = 30;
age = 31;

const birthYear = 1997;
// birthYear = 1998; // error

var job = 'programmer';
job = 'developer';

lastName = 'Chowdhury';
console.log(lastName);



// Basic Operators
// Math operators 
  
const now = 2025;
const ageNuru = now - 1997;
const ageWife = now - 2020;
console.log(ageNuru, ageWife);

console.log(ageNuru * 2, ageNuru / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Md. Nuruzzaman';
const lastName = 'Chowdhury';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageNuru > ageWife); // >graterthan, <lessthan, >=grater and equal, <=     
console.log(ageWife >= 18);

const isFullAge = ageWife >= 18;
console.log(now - 1997 > now - 2020);


// Operator Precedence

const now = 2025;
const ageNuru = now - 1997;
const ageWife = now - 2005;
console.log(ageNuru, ageWife);

console.log(now - 1997 > now - 2020);

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageNuru + ageWife) / 2;
console.log(ageNuru, ageWife, averageAge);



const firstName = 'Md. Nuruzzaman';
const job = 'Developer';
const birthYear = 1997;
const year = 2025;

const devnuru = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(devnuru);

// Template literals

const devnuruNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(devnuruNew);

console.log(`Just 
a 
regular "Template Literal" 
string...`);

*/

// Taking Decisions: if / else Statements

const age = 15;
const isOldEnough = age >= 18;

if(isOldEnough) {
 console.log('Md. Nuruzzaman can start driving license 🚗');
}
