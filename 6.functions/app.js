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


