let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.backgroundColor = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1500, () => {
    changeColor("orange", 1500, () => {
        changeColor("green", 1500, () => {
            changeColor("yellow", 1500, () => {
                changeColor("blue", 1500, () => {
                    changeColor("red", 1500, () => {

                    })
                })
            })
        })
    })
});