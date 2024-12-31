
function p1(compete) {
    return new Promise(function (resolve, reject) {
        console.log("Fetching DAta please wait Sir ")
        setTimeout(() => {

            if (compete) {
                resolve("I am successfull");
               
            }
            else {
                reject("mai fail hua bc ");
               
            }
        }, 3000);

    })
}
let done = (result) => {
    console.log(result);
}
let mukala = (erro) => {
    console.log(erro);
}

p1(false).then(done).catch(mukala);

//  p1.then(console.log("Kia baat ha stammer ki "));
// p1.catch(console.log("stammer bhi chotia ha ")); 