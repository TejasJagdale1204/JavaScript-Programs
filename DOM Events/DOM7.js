let btn = document.querySelector("button");

btn.addEventListener("click",function (e) {
    console.log(e);
    console.log("button clicked");
});

btn.addEventListener("dblclick",function (e) {
    console.log(e);
    console.log("double clicked");
});

//--------------------------------------------------

let input = document.querySelector("input");

input.addEventListener("keydown",function (e) {
    console.log("key = ", e.key);
    console.log("code = ", e.code);
    console.log("Key was pressed");
});

input.addEventListener("keyup",function (e) {
    console.log(e);
    console.log("Key comes up");
});