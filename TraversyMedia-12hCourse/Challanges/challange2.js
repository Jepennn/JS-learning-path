//Challange 2

const randomNum1To100 = Math.floor((Math.random() * 100 + 1));
const randomNum1To50 = Math.floor(((Math.random() * 100 + 1) / 2));


const sum = randomNum1To100 + randomNum1To50;
const diffrent = randomNum1To100 - randomNum1To50;
const product = randomNum1To100 * randomNum1To50;
const quient = randomNum1To100 / randomNum1To50;
const reminder = randomNum1To100 & randomNum1To50;


console.log(`${randomNum1To100} + ${randomNum1To50} = ${sum}`);
console.log(`${randomNum1To100} - ${randomNum1To50} = ${diffrent}`);
console.log(`${randomNum1To100} * ${randomNum1To50} = ${product}`);
console.log(`${randomNum1To100} / ${randomNum1To50} = ${quient}`);
console.log(`${randomNum1To100} / ${randomNum1To50} = ${reminder}`);