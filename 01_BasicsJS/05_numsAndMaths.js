const num = 100
console.log(num);

const num1 = new Number(100)
console.log(num1);

console.log(num1.toString().length);
console.log(num1.toFixed(2));

const anotherNum = 1000000000000
console.log(anotherNum.toLocaleString());//as per US standards
console.log(anotherNum.toLocaleString('en-IN'));//as per INDIAN standards

// Math functions are: floor, ceil, round, Min, Max, random, etc
console.log((Math.random()*20).toFixed(0));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1)+ min))
console.log(Math.min(3,4,5,6));
console.log(Math.max(3,4,5,6));
