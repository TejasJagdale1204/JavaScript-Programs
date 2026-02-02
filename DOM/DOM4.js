//changing id of tag
let pic = document.querySelector('img');

console.log(pic.getAttribute('id'));
pic.setAttribute('id','catImage');
console.log(pic.getAttribute('id'));

console.log(document.getElementById('catImage'));

//changing source of image
let image = document.querySelector('img');

console.log(image.getAttribute('src'));
image.setAttribute('src','dog.jpg');
console.log(image.getAttribute('src'));

if (image.getAttribute('src') === 'dog.jpg') {
    console.log("Source updated successfully");
}

//Manipulating Style (with style attribute
let heading = document.querySelector("h1");
console.log(heading);

heading.style.color='rgb(255, 0, 0)';
heading.style.backgroundColor='black';
heading.style.width='500px';
heading.style.height='40px';
heading.style.textAlign='center';