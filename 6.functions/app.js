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

const flight = 'LH234';
const devnuru = {
  name: 'Md. Nuruzzaman Chowdhury',
  passport: 73478237893,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH734';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 73478237893) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, devnuru);
// console.log(flight);
// console.log(devnuru);

// // Is the same as doing ....
// const flightNum = flight;
// const passenger = devnuru;


const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);

}
newPassport(devnuru);
checkIn(flight, devnuru)


// JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.



