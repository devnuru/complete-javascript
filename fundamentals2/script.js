"use strict";

// So again, first strict mode forbids us to do certain things

//and second it creates visible errors

//and the developer console, where in other situations

// more sucure code

/*

let hasDiverslicense = false;
const passTest = true;

if (passTest) hasDiverslicense = true
if(hasDiverslicense) console.log('I an drive :D');

// const interface = 'Video'

// n JavaScript, "use strict"; is a directive that enables strict mode, which helps catch common coding mistakes and improves security. It was introduced in ECMAScript 5 (ES5) and can be applied to an entire script or a specific function.

// JavaScript Function 

function logerFunc() {
    console.log('My Name is Md. Nuruzzaman Chowdhury.');
}
// Calling / running / invoking function 
logerFunc();
logerFunc();
logerFunc();


function fruitProcessor(apples, watermelons) {
// console.log(apples, watermelons);
 const juice = `Juice with ${apples} apples and ${watermelons} watermelons.`;
//  In JavaScript, return is used inside a function to specify the value that the function should output when it is called. When a function encounters a return statement, it immediately stops executing and returns the specified value.
 return juice;
}

const appleJuice = fruitProcessor(6, 8)

console.log(appleJuice);
// console.log(fruitProcessor(6, 8));

const appleWatermelonJuice = fruitProcessor(2, 4);
console.log(appleWatermelonJuice);

// functions allow us to write more maintainable code

// DRY--- Don't repeat yourself

console.log(Number('33'));

// Function decliration and Function expression


// Fuction declaration
function calcAge1(birthYear) {
// const age = 2025 - birthYear;
//  return age;

return 2025 - birthYear;
}

const age1 = calcAge1(1997)
console.log(age1);
//it's a function without a name basically, which is also called an anonymous function.

// So all of this here is basically an expression. And expression produces value.


// Function Expression 
const calcAge2 = function (birthYear) {
    return 2025 - birthYear;
}

const age2 = calcAge2(1999)

console.log(age1, age2);

// So a function is not a type, okay? It's not like a string or number type but it's also a value. And so if it's a value, we can store it in a variable.


// So what is the big difference between function declarations and function expressions?

// Well, the main practical difference is that we can actually call function declarations before they are defined in the code.

// Arrow Function Added in ES6

/*

const calcAge3 = birthYear =>  2025 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// const variable = (params1, params2) => {
//     // code block 
// }

 const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement; 
    return `${firstName} retires in ${retirement} year`
 }

 console.log(yearUntilRetirement(1971, 'Jasim Chowdhury'));
 console.log(yearUntilRetirement(1997, 'Md. Nuruzzaman Chowdhury'));




 function cutFruitPieces(fruit) {
    return fruit * 4;
    
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} oranges.`
    return juice;
    
 }
 console.log(fruitProcessor(2, 3));


const f1 = 'Md. Nuruzzaman Chowdhury';
const f2 = 'Devnuru';
const f3 = 'John';
const f4 = 'Peter';
const f5 = 'Steven';

const friends = ["Md. Nuruzzaman Chowdhury", "Devnuru", "John", "Peter", "Steven"]
console.log(friends);

const years = new Array(1997, 1996, 1945, 2025);
console.log(years[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
//friends = ['Bob', 'Alice'] // We can't do that. It's illigal

// diffrent types at the same time
const firstName = "Md. Nuruzzaman Chowdhury";
const devnuru = ['Nuruzzaman', 'Chowdhury', 2025 - 1997, 'teacher', friends]
console.log(devnuru);
console.log(devnuru.length);


// Exersise
const calcAge = function(birthYear) {
    return 2025 - birthYear;
}

const yearsArr = [1991, 1971, 1992, 2000];

console.log(calcAge(yearsArr)); // this will not work 

const ageArr1 = calcAge(yearsArr[0]);
const ageArr2 = calcAge(yearsArr[1]);
const ageArrLast = calcAge(yearsArr[yearsArr.length - 1]);
console.log(ageArr1, ageArr2, ageArrLast);

const ages = [calcAge(yearsArr[0]), calcAge(yearsArr[1]), calcAge(yearsArr[yearsArr.length - 1])]
console.log(ages);

// JavaScript has some build in method these are called method
// We can thinks methods as  Arrays operations 


const car = ['Toyota', 'BMW', 'Volvo', 'Tesla'];

// Add Elements 
const newLenth = car.push('Mercedes'); // push method use to add new elements at the end of the array. It's tyically a function
console.log(car);
console.log(newLenth);

// unshift method use to add a new elements to the beginning of the array
car.unshift('Lamborgini');
console.log(car);


// Remove elemnts 
car.pop() // Last elemnt remove
const popped = car.pop() // Last elemnt remove
console.log(car);
console.log(popped);

const shifted = car.shift(); // First elemnt remove
console.log(shifted);
console.log(car);

// Which position certain elemnts 
console.log(car.indexOf('BMW'));
console.log(car.indexOf('Not Available in the array'));

car.push(23)
console.log(car.includes('BMW')); // true because it's available in the array
console.log(car.includes('Nisan')); // False because it's not available in the array.
console.log(car.includes('23')); // false cause it's strict equality. 
console.log(car.includes(23)); // true number number. 


if (car.includes('BMW')) {
    console.log('You have a BMW Car');
}


// Array 
const devnuruArr = [
    'Nuruzzaman', 
    'Chowdhury',
    2025 - 1997,
    'teacher',
    ['Michel', 'Peter', 'Steven']
];



// object 

// this is object litarel syntax

const devnuruObj = {
    firstName: 'Nuruzzaman',
    lastName: 'Chowdhury',
    age: 2025 - 1997,
    job:  'Developer',
    friends: ['Michel', 'Peter', 'Steven'],
    hasDiverslicense: true
}

console.log(devnuruObj);

// dot notation

console.log(devnuruObj.firstName);
// we can do same thing using bracket[]
console.log(devnuruObj['lastName']);

const nameKey = 'Name';
console.log(devnuruObj['first' + nameKey]);
console.log(devnuruObj['last' + nameKey]);

// not work
//console.log(devnuruObj. 'last' + nameKey);

const interestedIn = prompt('What do you want to know about Devnuru? Choose between firstName, lastName, age, job, and friends')


//console.log(devnuruObj[interestedIn]);

if (devnuruObj[interestedIn]) {
    console.log(devnuruObj[interestedIn]);
} else {
    console.log(
      "Wrong request! Choose between firstName, lastName, age, job, and friends");
}

devnuruObj.location = 'Bangladesh';
devnuruObj['gitHub'] = '@devnuru'
console.log(devnuruObj);

// Challenge
// "Devnuru has 3 friends, and his best friend is called Michael"



console.log(`${devnuruObj.firstName} has ${devnuruObj.friends.length} friends, and his best friend is called ${devnuruObj.friends[0]}`);

 */

const devnuruObj = {
  firstName: "Nuruzzaman",
  lastName: "Chowdhury",
  birthYear: 1997,
  job: "Developer",
  friends: ["Michel", "Peter", "Steven"],
  hasDiverslicense: false,

  // Object Method
  // Only function expression will work. Function decliration will not work

  //   calcAge: function(birthYear) {
  //    return 2027 - birthYear
  //   }

  // calcAge: function() {
  //      console.log(this);
  //     return 2025 - this.birthYear
  // }

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${devnuruObj.firstName} is a ${this.calcAge()} years old ${
      devnuruObj.job
    }, and he has ${this.hasDiverslicense ? "a" : "no"} driver's license.`;
  },
};

console.log(devnuruObj.calcAge());

console.log(devnuruObj.age);
console.log(devnuruObj.age);
console.log(devnuruObj.age);
console.log(devnuruObj.age);

// console.log(devnuruObj['calcAge'](1994));

//Challenge
// Devnuru is a 28 years old teacher, and he has a driver's license"
console.log(devnuruObj.getSummary());

console.log("Lifting weights repetition 1 🏋️‍♀️");
console.log("Lifting weights repetition 2 🏋️‍♀️");
console.log("Lifting weights repetition 3 🏋️‍♀️");
console.log("Lifting weights repetition 4 🏋️‍♀️");
console.log("Lifting weights repetition 5 🏋️‍♀️");
console.log("Lifting weights repetition 6 🏋️‍♀️");
console.log("Lifting weights repetition 7 🏋️‍♀️");
console.log("Lifting weights repetition 8 🏋️‍♀️");
console.log("Lifting weights repetition 9 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");
console.log("Lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

const devnuruArray = [
  "Md. Nuruzzaman",
  "Chowdhury",
  2025 - 1997,
  "Developer",
  ["Micheal", "Peter", "Steven"],
  true,
  'Devnuru',
  
  
];

const types = [];



// console.log(devnuruArray[0]);
// console.log(devnuruArray[1]);
// console.log(devnuruArray[2]);
// ...
// console.log(devnuruArray[4]);
// devnuruArray[5] = 'Devnuru';
// devnuruArray[5] doese not exist yet

for(let i = 0; i < devnuruArray.length; i++) {
  // Reading from devnuruArray
 console.log(devnuruArray[i], typeof devnuruArray[i]);

 // Filling types array
//  types[i] = typeof devnuruArray[i];
 types.push(typeof devnuruArray[i]);
}

// typesp[0] = 'string';

console.log(types);

const years = [1991, 1997, 1996, 2000];
const ages = [];

for (let i = 0; i < years.length; i++) {
ages.push(2025 - years[i]);
}
console.log(ages);

// continue and break
// So continue is to exit the current iteration of the loop and continue to the next one.

// On the other hand, break is used to completely terminate the whole loop.
console.log("---- ONLY STRINGS ----");
for (let i = 0; i < devnuruArray.length; i++) {
  // with continue we can exit the current iteration of the loop
  if (typeof devnuruArray[i] !== "string") continue;
  
 console.log(devnuruArray[i], typeof devnuruArray[i]);
  
}

console.log("---- BREAK WITH NUMBER ----");
for (let i = 0; i < devnuruArray.length; i++) {
  // with continue we can exit the current iteration of the loop
  // but with break we can exit the whole loop
  // So here we want to break the loop as soon as we find a number
  // So we can use break to exit the loop 

  if (typeof devnuruArray[i] === "number") break;

  console.log(devnuruArray[i], typeof devnuruArray[i]);
}

