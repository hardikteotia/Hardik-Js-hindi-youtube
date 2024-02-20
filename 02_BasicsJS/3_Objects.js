// we can do nesting in objects
const obj1 = {
    Details : {
        FullName : {
            FirstName : "Ram",
            LastName : "Swaroop"
        }
    },
    Numbers : {
        n1 : 1,
        n2 : 2,
        n3 : 3,
        n4 : 4
    }
}

console.log(obj1.Details.FullName.FirstName);

console.log(Object.keys(obj1)); // Convert [[objects]] in one array we can use loops in this as per our need
console.log(Object.values(obj1)); // Convert [[objects Values]] in one array we can use loops in this as per our need
console.log(Object.entries(obj1)); // Convert [[objects : Values]] in one array we can use loops in this as per our need
// We can merge two objects

const List1 = {1: "a", 2: "b"}
const List2 = {4: "c", 3: "d"}

const FinalList = { ...List1, ...List2}

console.log(FinalList);