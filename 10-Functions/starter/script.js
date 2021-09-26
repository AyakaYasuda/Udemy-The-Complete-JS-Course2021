'use strict';

const bookings = [];

const createBooking = function (
  frightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5 way to set the default
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    frightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
