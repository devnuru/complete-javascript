//BMI = mass / height ** 2 = mass / (height * height)

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

 const markHigherBMI = BMIMark > BMIJohn;
 console.log(markHigherBMI);


/*
 const massMark = 78;
 const heightMark = 1.69;

 const massJohn = 92;
 const heightJohn = 1.95;

 const BMIMark = massMark / (heightMark * heightMark);
 const BMIJohn = massJohn / (heightJohn * heightJohn);

 console.log(BMIMark, BMIJohn);

 const markHigherBMI = BMIMark > BMIJohn;

 console.log(markHigherBMI);

*/

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`); 
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}


// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas);

// if(scoreDolphins > scoreKoalas) {
//   console.log("Dolphins wins the trophy");
// } else if (scoreKoalas > scoreDolphins ) {
//   console.log("Koalas wins the trophy");
// } else if (scoreDolphins === scoreKoalas) {
//   console.log("Both wins the trophy");
// }

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;

console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100 ) {
  console.log("Dolphins wins the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100 ) {
  console.log("Koalas wins the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both wins the trophy");
} else {
  console.log("No One wins the trophy")
}



