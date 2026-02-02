// Select container
let box = document.getElementById("box");

// 1. appendChild()
let p1 = document.createElement("p");
p1.textContent = "Added using appendChild()";
box.appendChild(p1);

// 2. append()
let p2 = document.createElement("p");
p2.textContent = "Added using append()";
box.append(p2);

// 3. prepend()
let p3 = document.createElement("p");
p3.textContent = "Added using prepend()";
box.prepend(p3);

// 4. insertAdjacentElement()
let p4 = document.createElement("p");
p4.textContent = "Added using insertAdjacentElement()";

// positions: beforebegin, afterbegin, beforeend, afterend
box.insertAdjacentElement("beforeend", p4);