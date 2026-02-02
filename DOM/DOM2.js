//getElementById
console.dir(document.getElementById("heading1"));
console.dir(document.getElementById("heading2"));
console.dir(document.getElementById("para"));
console.dir(document.getElementById("abcd"));  //return null

//getElementsByClassName
let paragraphs = document.getElementsByClassName("index1");
console.log(paragraphs);
console.dir(paragraphs);


let photos = document.getElementsByClassName("images");
console.log(photos);
console.dir(photos);


for(i=0;i<photos.length;i++) {
    console.log(photos[i].src);
    console.dir(photos[i].src);
}

//getElementsByTagName
console.log(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("img"));
console.log(document.getElementsByTagName("p")[0].innerText="HTML CSS JavaScript");

//Query Selectors
console.log(document.querySelector('p'));
console.log(document.querySelector('.index1'));
console.log(document.querySelector('#para'));

console.log(document.querySelectorAll("p"));