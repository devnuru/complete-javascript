'use strict';

const xyz = 'Hello JavaScript!';
if (xyz === 'Hello JavaScript!') {
  console.log(xyz);
}

const calcAge = birthYear => {
  const age = 2025 - birthYear;
  return age;
};
const age = calcAge(1990);
console.log(`You are ${age} years old.`);
console.log(xyz);
