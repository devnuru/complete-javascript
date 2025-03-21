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



// Taking Decisions: if / else Statements

const age = 15;


if(age >= 18) {
    console.log('Md. Nuruzzaman can start driving license 🚗');
} else {
   const yearsLeft = 18 - age;
   console.log(`Md. Nuruzzaman is too young. Wait another ${yearsLeft} years :)`);
}

// control stucture - if else statement
// if() {

// } else {

// }

const birthYear = 1997;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);


*/

// Type Conversion and Coercion

// Type Conversion
const inputYear = '1997';
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18);

console.log(Number('Md. Nuruzzaman'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');
console.log('23' - '10' - 3); // 10 Mins oppertor triggers the opposite conversion. So in this case, strings are converted to numbers. and not the other way around.
console.log('23' + '10' + 3); // 23103 3 will be converted to string and then concatenated with the other strings.

console.log('23' * '2'); //  46 Strings are converted to numbers. because * operator triggers the conversion to numbers.
console.log('23' / '2'); // 11.5 Strings are converted to numbers. because / operator triggers the conversion to numbers.

console.log('23' > '18'); // true Strings are converted to numbers. because > operator triggers the conversion to numbers.

let n = '1' + 1; // '11'
n = n - 1; // 10    - operator triggers the conversion to numbers.

const l = 10 - 4 - 3 - 2 + '5'; // 15
// 6 - 3 - 2 + '5'
// 3 - 2 + '5'
// 1 + '5'
// '15'

console.log(l);

// 5 falsy values: 0, '', undefined, null, NaN
//They're not exactly false initially, but they will become when converted to a boolean.

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false
console.log(Boolean("Devnuru")); // True
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean({})); // True

const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED'); // 0 is a falsy value
}

// Equality Operators: == vs. ===

const age = 18;
if (age === 18) console.log('You just became an adult :D (strict)'); // strict equality operator
 //the triple equals does not perform type coercion.
if (age == 18) console.log('You just became an adult :D (loose)'); // loose equality operator
//the double equal does type coercion. So what this means is that this string here is 18 will be converted to a number and then the number 18 is the same as this number 18


// switch statement - control structure

const day = 'thursday';
switch(day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday': 
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples execute for both days(wednesday and thursday)');
        break;        
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default: 
        console.log('Not a valid day!');
}

// if (day === 'monday') {  // if else statement 
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
// } else if (day === 'tuesday') {
//     console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Write code examples execute for both days(wednesday and thursday)');
// } else if (day === 'friday') {
//     console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy the weekend :D');
// } else {
//     console.log('Not a valid day!');
// }

// Statements and Expressions