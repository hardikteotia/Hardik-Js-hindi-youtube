let score = "33abs"

//console.log(typeof score);

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


//convert 33 into Numbers?? yes
// convert 33abs into Numbers?? no it gives NaN
// in boolean it gives 0 or 1

let isBool = 1
let bool = Boolean(isBool)
//console.log(bool);

console.log("2" < 3);
console.log("2" < "3");
console.log("22" == 3);
console.log(null == 0 );//explaination below
// Comparison Steps:

// When comparing null to 0, JavaScript first checks if the two values are of the same type. Since null is an object and 0 is a number, it tries to coerce one or both values to a common type.
// In this case, null is not converted to a number when compared to 0, and thus the comparison null == 0 evaluates to false.
console.log("2" === 2);
