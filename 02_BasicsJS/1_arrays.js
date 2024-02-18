const arr = [1,2,3,4,5,6]
// let name = "Hardik"// experiment
// const strArr = ["hi", "my", "Name", "is", name]

// console.log("before push");
// console.log(arr);
// arr.push(7)
// console.log("after push");
// console.log(arr);
// console.log("after pop");
// arr.pop()
// arr.pop()
// console.log(arr);
//another methos for declaring arrays
// const array = new Array(1,2,23,3)
// console.log(array);

//--> Operations 
// arr.unshift(9)
// console.log(arr);
// arr.shift()
// console.log(arr);
// console.log(arr.includes(5));
// console.log(typeof(arr.join()));  // convert array to string


//slice or splice
console.log("Original array:", arr);


const myArray1 = arr.slice(1,3)//it includes 1 but not 3 

console.log("slice:", myArray1);
console.log("Original array:", arr);

const myArray2 = arr.splice(1,3);//it includes start and end both
                                 // and splice original array me kuch portion bahar krdeta hai

console.log("splice:", myArray2);
console.log("Original array:", arr);


// more operations in array
const vegs = ["raddish", "carrot", "tomato"]
const fruits = ["mango",  "banana", "apple"]
//spread operator we can use in place of concat
const temp = vegs.concat(fruits)
console.log(temp);
// console.log(temp.length);

const temp2 = [...vegs, ...fruits]
console.log(temp2);