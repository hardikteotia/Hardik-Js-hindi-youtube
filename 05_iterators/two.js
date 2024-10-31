const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World!"

for (const greet of greetings) {
    if (greet === " ") {
        continue
    }    
    // console.log(greet);

}

const map = new Map

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);
// console.log(map.get("IN"));
// maps are known for its unique values, there cannot be any unique values in maps like if we try to enter same value in the map then it will not add it again because it's already existed in the map

for (const key of map) {
    // console.log(key);
    
}
/*---output---it gives an array
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'FR', 'France' ]*/

//  but if we dont want array so we do this
for (const [key, value] of map) {
    // console.log(key, value);
    
}
/*---output---it gives key, value pair
IN India
USA United States of America
FR France
*/