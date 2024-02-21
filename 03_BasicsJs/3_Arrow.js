// this keyword refers to the current context like

const user = {
    name : "Sam",
    Id : 73648,

    func : function details(){
            console.log(`Id of ${this.name} is, ${this.Id}`);
            // console.log(this);
    }
}

user.func()
user.name = "hardik"
user.func()
console.log(this);


// -------arrow function---------

// const addTwoNums = (n1, n2) => {
//     return n1+n2
// }

const addTwoNums = (n1, n2) => n1+n2 // we can wite it in this way also
// const addTwoNums = (n1, n2) => (n1+n2) its another way mostly used in reactJS

console.log(addTwoNums(5, 5));

const printObjInArrowFunc = () => ({name : "mike"})
console.log(printObjInArrowFunc());