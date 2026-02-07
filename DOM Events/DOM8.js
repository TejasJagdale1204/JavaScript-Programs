let arrows = document.querySelector("input");
arrows.addEventListener("keydown", function (e) {
    console.log("code = ", e.code);

    if (e.code == "ArrowUp") {
        console.log("character moves forward");
    }
    else if (e.code == "ArrowDown") {
        console.log("character moves backward");
    }
    else if (e.code == "ArrowRight") {
        console.log("character moves rightward");
    }
    else if (e.code == "ArrowLeft") {
        console.log("character moves leftward");
    }
    else {
        console.log("entered character is not arrow");
    }
});