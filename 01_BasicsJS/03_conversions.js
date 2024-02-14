let score = "33abs"

console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//convert 33 into Numbers?? yes
// convert 33abs into Numbers?? no it gives NaN
// in boolean it gives 0 or 1

let isBool = 1
let bool = Boolean(isBool)
console.log(bool);