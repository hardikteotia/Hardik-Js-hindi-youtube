const mynum = [1,2,3]

// const res = mynum.reduce(function (acc, currentVal) {
//     console.log(acc);
    
//     return acc + currentVal
// }, 0)
const res = mynum.reduce((acc, curval) => acc + curval, 0)
console.log(res);
