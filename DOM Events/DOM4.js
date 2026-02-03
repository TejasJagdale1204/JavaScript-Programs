let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    let h1 = document.querySelector("h1");
    let rc = randomColor();
    h1.innerText = rc;

    let div = document.querySelector(".box");
    div.style.backgroundColor = rc;

    console.log("color updated");
});

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}