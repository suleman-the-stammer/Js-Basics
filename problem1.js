// Randomly Color boxes Using Dom concepts
console.log("Your Script is Runnig Tension na lai")
//let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children

//console.log(boxes);

function getrandom(){
    let c1 = Math.ceil(0 + Math.random() * 255);   // IF you want to get a number between 2 elements 
    let c2 = Math.ceil(0 + Math.random() * 255);   // than formula is 
    let c3 = Math.ceil(0 + Math.random() * 255);   // Math.ceil( min + math.random() * max)
    return `rgb(${c1}, ${c2} , ${c3} )`            // Other's Formula's Also Exists .
}

Array.from(boxes).forEach(e=>{
   
   e.style.backgroundColor = getrandom();
    e.style.color = getrandom();
})