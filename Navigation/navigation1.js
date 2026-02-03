let element1 = document.querySelector('div');
console.log(element1.parentElement);

let element2 = document.querySelector('span');
console.log(element2.parentElement);

let element3 = document.querySelector('p');
console.log(element3.parentElement);

let element4 = document.querySelector('b');
console.log(element4.parentElement);

let element5 = document.querySelector('u');
console.log(element5.parentElement);

let element6 = document.querySelector('h1');
console.log(element6.parentElement);

let element7 = document.querySelector('form');
console.log(element7.children);
console.log(element7.children[0]);
console.log(element7.children[1]);
console.log(element7.children[2]);
console.log(element7.children[3]);

console.log(element7.childElementCount);

let element8 = document.querySelector('button');
console.log(element8.children);
console.log(element8.childElementCount);

console.log(element8.children[0].previousElementSibling);
console.log(element8.children[1].previousElementSibling);
console.log(element8.children[2].previousElementSibling);
console.log(element8.children[0].nextElementSibling);
console.log(element8.children[1].nextElementSibling);
console.log(element8.children[2].nextElementSibling);

console.dir(element8.children[0].nextElementSibling.style.color="red");