'use strict';

// So again, first strict mode forbids us to do certain things

//and second it creates visible errors

//and the developer console, where in other situations

// more sucure code


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

 */


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











