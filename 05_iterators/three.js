const myobject = {
    game1 : "NFS",
    game2 : "COD",
    game3 : "MLBB",
    game4 : "Minecraft"
}

for (const key in myobject) {
    // console.log(myobject[key]);
    // console.log(`${key} is ${myobject[key]}`);
    
}

//for in loop on arrays

const myarr = [1,2,3,4,5]
for (const key in myarr) {
    console.log(key, myarr[key]);
    
}