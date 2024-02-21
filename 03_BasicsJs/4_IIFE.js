// Immediately Invoked Function Expression
// we use it because sometimes we need particular functions for a particular work without intruption of global variables like, function to connect with the database to seperate it or defend it from global pollution we make this expression

//(FUNCTION)(IIFE)

// function connection(){
//     console.log(`DB connected`);
// }

// connection()

(function connection(){
    console.log(`DB connected`);
})();//we can use arrow function in this but shart hai ki use ;