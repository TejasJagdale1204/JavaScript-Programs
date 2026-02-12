let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if (num < 4) {
                reject("promise rejected");
            }

            h1.style.backgroundColor = color;
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    try {
        await changeColor("red", 1500);
        await changeColor("orange", 1500);
        await changeColor("green", 1500);
        await changeColor("yellow", 1500);
        await changeColor("blue", 1500);
        await changeColor("red", 1500);
    }
    catch (err) {
        console.log("caught error");
        console.log(err);
    }

    let a = 5;
    console.log(a);
    console.log("new number = ", a + 5);
}

demo();