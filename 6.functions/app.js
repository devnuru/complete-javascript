'use strict';

/*
const bookingsArr = [];

const createBooking = function (flightName, numPassengers = 1, price = 190 * numPassengers) {
  // ES5 short circuting
  // numPassengers = numPassengers || 1;
  // price = price || 170;

  const booking = {
    flightName,
    numPassengers,
    price,
  };

  console.log(booking);
  bookingsArr.push(booking);
};

createBooking('LH1234');
createBooking('LH1234', 2, 800);
createBooking('LH1234', 2);
createBooking('LH1234', 8);
createBooking('LH1234', undefined, 800);



*/

// const flight = 'LH234';
// const devnuru = {
//   name: 'Md. Nuruzzaman Chowdhury',
//   passport: 73478237893,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH734';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 73478237893) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, devnuru);
// console.log(flight);
// console.log(devnuru);

// // Is the same as doing ....
// const flightNum = flight;
// const passenger = devnuru;

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);

// }
// newPassport(devnuru);
// checkIn(flight, devnuru)

// JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.

// First-Class Functions

// ***** JavaScript treats functions as first class citizens

// ** this means that functions are simply value

// *** Functions are just another type of object

/*

// ** Store functions in variables or properties
const add = (a, b) => a + b;

const counter = {
  value: 25,
  inc: function () {
    this.value++;
  },
};

// *** Pass functions as arguments to other functions 
const greet = () => console.log('Hey Devnuru');
btnClose.addEventListener('click', greet);

// Return functions from functions
// Call methods on functions 
counter.inc.bind(someOtherObject);

// Higher-order function 
// ***** A function that receives another function as an argument, that returns a new function, or both 
// This is only possible because of first class function 

// Function that receives another function 
const greetH = () => console.log('Hey Nuru');
btnClose.addEventListener('click', greetH);
// AddEventListener Higher-order function
// greetH callback function 

// *** Function that returns new function 
function count() {
    // Count Higher order function
    let counter = 0;
    return function() {
        counter++;
    }
}

*/

// Functions Accepting Callback Functions
/*

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fnt) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fnt(str)}`);

  console.log(`Transformed by: ${fnt.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// JS uses callback all the time
const heyDevnuru = function () {
  console.log('👋🏻');
};
document.body.addEventListener('click', heyDevnuru);

['Devnuru', 'Martha', 'Adam'].forEach(heyDevnuru);


*/

//Functions Returning Functions

/*

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('Hey');
greeterHey('Md. Nuruzzaman Chowdhury');
greeterHey('Devnuru')

greet('Hello')('Chowdhury Nuru');

// Arrow Function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterArrHey = greetArr('Hello');
greeterArrHey('Wife');
greetArr('Hey')('Chowdhury')

*/

// The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(flightNum, name) {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(623, 'Md. Nuruzzaman Chowdhury');
lufthansa.book(739, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

//Does not work
// book(73, 'Sarah Williams');

// Call method
book.call(eurowings, 38, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 7823, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 783, 'Swiss Cooper');
console.log(swiss);

// Apply method

// the apply method does basically exactly the same thing. The only difference is that apply does not receive a list of arguments after the this keyword,
//*** Apply method not use in modern javascript

const flightData = [236, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// * skipping bind method and challenge

// *** Immediately Invoked Function Expressions (IIFE)

// Normal
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// ** IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 623;
})();
// Not Work
// console.log(isPrivate);


(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 783;
 var notPrivate = 383;
}
// console.log(isPrivate);
console.log(notPrivate);