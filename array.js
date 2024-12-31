let a = [1,4,22,13,12,11];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}
console.log(a.sort());
console.log(a.join("  and  "))

//for each loop
a.forEach((value, index, arr) => {
    console.log("This is forEach " , value, index, arr)
})

//let a = [1,2,3,4,"Stammer"]

a.forEach((value, index, Array)=>{
   console.log(value, index, Array)
})
// map loop in arrays
a.map((value, index , Array)=>{
   console.log(value * value)
})