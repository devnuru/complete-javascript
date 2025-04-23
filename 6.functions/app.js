'use strict';

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
