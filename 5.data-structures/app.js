'use strict';

const style = `
background:hotpink;
padding: 20px;
font-weight: 900;
font-size:2rem;
`;

console.log(`%cDon't Paste any code here.`, style);

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil'
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic'
// ]);

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const restaurant = {
  name: 'Foodsbd LTD',
  location: 'Jaldhaka, Nilphamari, Bangladesh',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Capress Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // before es6
  // openingHours: openingHours,

  // ES6 enhanced object literals
  openingHours,

  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// intersection methods

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods);
console.log([...commonFoods]);

// union methods
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union:', italianMexicanFusion);
console.log([...italianFoods, ...mexicanFoods]);
console.log(new Set([...italianFoods, ...mexicanFoods]));
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

//difference
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference mexican', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods);
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods));

// Sets

// “JavaScript Set” is a built-in object that lets you store unique values of any type—whether primitive values or object references.

// 🧠 Key Features:
// 	•	Stores unique values only (no duplicates).
// 	•	Maintains insertion order.
// 	•	Has built-in methods to add, delete, and check values.

// Sets are also iterable

//const mySet = new Set();

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Devnuru'));

console.log(new Set());

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
// orderSet.clear()
console.log(orderSet);
console.log(orderSet.size);

for (const order of orderSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Md. Nuruzzaman Chowdhury').size);

// 7 more methods

/*


//Optional Chaining (?.)

// console.log(restaurant.openingHours.mon.open);

// if(restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// without optional chaining
// console.log(restaurant.openingHours.mon.open);
// with optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Devnuru', email: 'hello@devnuru.com' }];
const users = [];

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');


*/

// The for...of loop in JavaScript is used to iterate over iterable objects — such as arrays, strings, maps, sets, and more.

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);

// // for (const element of object) {

// // }

// for (const item of menu) {
//   console.log(item);

// }

// for (const [i, el] of menu.entries()) {
//   // console.log(`${item[0] +1}: ${item[1]}`);
//   console.log(`${i +1}: ${el}`);

// }

// console.log(...menu.entries());

// for (const item of iterable) {
//   // code block to execute
// }

// const fruits = ['apple', 'banana', 'cherry']
//  for (const fruit of fruits) {
//    console.log(fruit);
//  }

/*

const rest1 = {
   name: 'Capri',
  //  numGuests: 28
   numGuests: 0
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Md. Nuruzzaman Chowdhury'
}

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'; 
rest2.owner &&= '<ANONYMOUS>'; 



console.log(rest1);
console.log(rest2);



*/

/*
/////////////////////////////////////////

// The Nullish Coalescing Operator (??)
// introduce in ES 2020
// The Nullish Coalescing Operator (??) in JavaScript (and TypeScript) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand.

// restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: null and undefined (Not 0 or '')
const guestNullish = restaurant.numGuests ?? 10;
console.log(guestNullish);

let a = null;
let b = 29;
let result = a ?? b;
console.log(result);

*/

// Behavior:
// 	•	If a is not null or undefined, result will be a.
// 	•	If a is null or undefined, result will be b.

// Short Circuiting (&& and ||)

// Short-circuiting with && and || in JavaScript is a common and powerful feature, especially useful for writing concise conditional logic.

// console.log('========OR=================');

// // They can use ANY data type,
// // They can return any data type
// // They do something call short circuiting evaluation
// console.log(3 || 'Devnuru'); // 3   in the || if the first value is truethy then the scond operand will not evaluate
// console.log('' || 'Devnuru'); // Devnuru
// console.log(true || 0); // true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 37 || null); // Hello

// // restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 20
// console.log(guest1);

// const guest2 = restaurant.numGuests || 200
// console.log(guest2);

// console.log('========AND=================');
// console.log(0 && 'Devnuru');  // 0
// console.log(7 && 'Devnuru'); // devnuru

// console.log('Hello' && 74 && null & 'Devnuru'); // null

// // Practical example
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('Mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'spinach');

// Common Use Cases:
// 1. Default values with ||
// const port = process.env.PORT || 3000;

// 2. Conditional execution with &&:
// isLoogedIn && showDashboard()

// Safe access
// const bio = user && user.profile && user.profile.bio
// (Though now you’d use optional chaining instead: user?.profile?.bio)

////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// •	Spread = “Expands”
// •	Rest = “Collects” Compress

// Spread, because on right side of =

// Arrays
// const arr = [1, 2, ...[3, 4]]

// const [a, b, ...othersNum] = [1, 2, 3, 4, 5];
// console.log(a, b, othersNum);

// const [pizza, , risotto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, othersFood);

// // Objects

// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum)
//   ;
//  //console.log(numbers);
// }
// add(2, 4);
// add(6, 8, 3);
// add(3, 5, 6, 8);

// const x = [33, 6, 8];
// add(...x)

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms')

////////////////////////////////////////////////////
// The Spread Operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2], arr[3]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, 'Devnuru'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 array

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets,. Not objects
// const firstName = 'Nuruzzaman';
// const letters = [...firstName, ' ', 'C.'];
// console.log(letters);
// console.log(...firstName);

// // Not work
// // console.log(`${...firstName} Chowdhury`);

// // Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 2?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Devnuru' };
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant}
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

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
