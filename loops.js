let a = "Stammer";
let b = "Yes always Great ";
let c = 5;
let obj = {
    "name":"Stammer",
     "age ": 22,
     "salary" : 45000
}

// Simple For LOOp
for (let i = 0; i < c; i++) {
    console.log(a , b)    
}
// For in loop For Keys 
for (const key in obj) {
    
        const element = obj[key];
        console.log(element, key) 
}
// For OF loop for string/array
for (const a of "Stammer") {
    console.log(a)
}