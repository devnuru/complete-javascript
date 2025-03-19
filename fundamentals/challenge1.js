//BMI = mass / height ** 2 = mass / (height * height)

const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

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


