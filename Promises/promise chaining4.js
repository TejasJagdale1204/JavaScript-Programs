let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.backgroundColor = color;

            // check if browser accepted the color
            if (h1.style.backgroundColor === color) {
                resolve(`color changed to ${color}`);
            } else {
                reject("color not changed");
            }
        }, delay);
    });
}

changeColor("red", 1500)
    .then((result) => {
        console.log(result);
        return changeColor("orange", 1500);
    })
    .then((result) => {
        console.log(result);
        return changeColor("green", 1500);
    })
    .then((result) => {
        console.log(result);
        return changeColor("yellow", 1500);
    })
    .then((result) => {
        console.log(result);
        return changeColor("blue", 1500);
    })
    .then((result) => {
        console.log(result);
        return changeColor("red", 1500);
    })
    .then((result) => {
        console.log(result);
    })
    
    .catch((error) => {
        console.log(error);
    });