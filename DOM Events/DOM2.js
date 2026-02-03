let button = document.querySelectorAll("button");
console.dir(button);

function sayHello() {
    console.log("Button was clicked");
}

for(btns of button) {
    btns.onclick = sayHello;
    btns.onmouseenter = function () {
        console.log("your mouse arrow is on button");
    }
}