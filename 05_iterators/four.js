const coding = ["js","ruby", "cpp", "python"]
const values = coding.forEach((item) => {
    // console.log(item);
    return item
})
// console.log(values);


const mynumbers = [1,2,3,4,5,6,7,8,9]

const result = mynumbers
                .map((num) =>  (num+10))
                .map((num) => (num*10))
                .filter((num) => num > 150)
                
console.log(result);
