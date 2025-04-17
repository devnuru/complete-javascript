'use strict';

const restaurant = {
  name: 'Foodsbd LTD',
  location: 'Jaldhaka, Nilphamari, Bangladesh',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Capress Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

// The Spread Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Devnuru'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 array

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets,. Not objects
const firstName = 'Nuruzzaman';
const letters = [...firstName, ' ', 'C.'];
console.log(letters);
console.log(...firstName);

// Not work
// console.log(`${...firstName} Chowdhury`);

// Real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 2?'),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Devnuru' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant}
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

/////////////////////////////////
// Destructuring Objects
// restaurant.orderDelivery({
//     time:'22:30',
//     address: 'Jaldhaka Nilphamari',
//     mainIndex: 2,
//     starterIndex: 2
// })

// restaurant.orderDelivery({
//     address: 'Jaldhaka Nilphamari',
//     starterIndex: 1
// })

// // Object Destructuring

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 213;
// let b = 277;

// const obj = { a: 23, b: 8, c: 34 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {fri:{open:o, close: c}} = openingHours;
// console.log(o, c);

// for destructures array we use [] and for object we use {}

// const numArr = [1, 2, 3, 4, 5];

// const a = numArr[0];
// const b = numArr[1];
// const c = numArr[2];
// const d = numArr[3];
// const e = numArr[4];
// console.log(a, b, c, d, e);

// const [m, n, o, p, q] = numArr;
// console.log(m, n, o, p, q);
// console.log(numArr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //console.log(restaurant.order(2, 0));

// // Receive 2 return values from a function
// const [starter, mainOrder] = restaurant.order(2, 0);
// console.log(starter, mainOrder);

// // Nested destructuring
// const nested = [2, 4, [5, 8]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// // const [s, w, r] = [8, 9];
// // console.log(s, w,r);

// const [s = 1, w = 1, r = 1] = [8, 9];
// console.log(s, w, r);
