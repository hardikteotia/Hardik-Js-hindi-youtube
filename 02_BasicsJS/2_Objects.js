//object singleton
// Object.create
// const mysymbol = Symbol("mykey")
// object literals
const User = {
    name : "Hardik", // here name is taken by js as "name" string
    age : 20,
    id : "my@gmail.com",
    myArr : [1,2,3,4],
    "full name" : "Hardik Teotia", // we can't access it using dot(.) Operator we have to use console.log(User["fullname"])
    // [mysymbol] : "mykey"
}

// accessing
// console.log(User.mysymbol);

// console.log(typeof([mysymbol]));

// console.log(User.name, User.age);
// console.log(User["name"]);
// console.log(User["full name"])
// console.log(User.full name) unable to write (full name) in console.log

// for values over writing in object do this (User.age = 21)
// and to stop this you can freeze the object by doing this
// Object.freeze(User)
// User.age = 21
// console.log(User.age);
// console.log(User.age);

const mySym = Symbol("symbol1")
const object = {
    [mySym] : "key1"
}
console.log(object[mySym]);
console.log(typeof(object[mySym]));
console.log(object);
