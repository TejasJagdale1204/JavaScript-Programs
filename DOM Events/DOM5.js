let para = document.querySelector("p");
para.addEventListener("click",function () {
    console.log("paragraph was clicked");
});

let div = document.querySelector(".box");
div.addEventListener("mouseenter",function () {
    console.log("cursor is on the div");
});