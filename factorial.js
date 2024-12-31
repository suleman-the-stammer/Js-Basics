
let n = prompt("Enter a Number : ");

let factoial = 1;
if ( n < 0) {
    alert(`negative are not allowed `)
}
else if(n==0) {
    alert(`Zero are Not allowed `)
} else {
    for (let i = 1; i <=n; i++) {
    
        factoial *= i;
           
       }
      
       alert(`Your Factoial is ${factoial}`);
}
