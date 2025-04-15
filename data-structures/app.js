'use strict';

const restaurant = {
    name: 'Foodsbd LTD',
    location: 'Jaldhaka, Nilphamari, Bangladesh',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Capress Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto']
}

const numArr = [1, 2, 3, 4, 5];

const a = numArr[0];
const b = numArr[1];
const c = numArr[2];
const d = numArr[3];
const e = numArr[4];
console.log(a, b, c, d, e);

const[m, n, o, p, q] = numArr;
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