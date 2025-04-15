'use strict';

const restaurant = {
  name: 'Foodsbd LTD',
  location: 'Jaldhaka, Nilphamari, Bangladesh',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Capress Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const numArr = [1, 2, 3, 4, 5];

const a = numArr[0];
const b = numArr[1];
const c = numArr[2];
const d = numArr[3];
const e = numArr[4];
console.log(a, b, c, d, e);

const [m, n, o, p, q] = numArr;
console.log(m, n, o, p, q);
console.log(numArr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//console.log(restaurant.order(2, 0));

// Receive 2 return values from a function
const [starter, mainOrder] = restaurant.order(2, 0);
console.log(starter, mainOrder);

// Nested destructuring
const nested = [2, 4, [5, 8]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// const [s, w, r] = [8, 9];
// console.log(s, w,r);

const [s = 1, w = 1, r = 1] = [8, 9];
console.log(s, w, r);
