async function greet() {
    return "hello...!!";
}

greet()
    .then((msg) => {
        console.log("promise is resolved");
        console.log("result is : ", msg);
    })
    .catch((err) => {
        console.log("promise is rejected with error : ", err);
    });

//===========================================================================

async function trend() {
    throw "404 page not found";
}

trend()
    .then((msg) => {
        console.log("promise is resolved");
        console.log("result is : ", msg);
    })
    .catch((err) => {
        console.log("promise is rejected");
        console.log("error is : ", err);
    });

//===========================================================================

let demo = async () => {
    return 5;
};
demo()
    .then((msg) => {
        console.log(msg);
    })