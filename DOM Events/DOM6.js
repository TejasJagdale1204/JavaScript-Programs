let btn = document.querySelector("button");
btn.addEventListener("click",function () {
    console.log(this);
    console.dir(this);

    console.dir(this.innerText);
    this.style.backgroundColor = "aqua";
});
//-----------------------------------------
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let u = document.querySelector("u");
let i = document.querySelector("i");
let p = document.querySelector("p");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "#f4c08c"
}

h1.addEventListener("click",changeColor);
h2.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
u.addEventListener("click",changeColor);
i.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);