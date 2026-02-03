let btns = document.querySelectorAll("button");

for(btn of btns) {
    btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", sayHi);
}

function sayHello() {
    console.log("Hello!");
}

function sayName() {
    alert("Apna College");
}

function sayHi() {
    console.log("Hi!!");
}