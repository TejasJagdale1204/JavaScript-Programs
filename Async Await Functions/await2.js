let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.backgroundColor = color;
            resolve("color changed!");
        }, delay);
    });
}

async function demo() {
    await changeColor("red", 1500);
    await changeColor("orange", 1500);
    await changeColor("green", 1500);
    await changeColor("yellow", 1500);
    await changeColor("blue", 1500);
    changeColor("red", 1500);
}

demo();