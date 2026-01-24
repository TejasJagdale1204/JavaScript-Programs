console.log(Math.PI);

console.log(Math.E);

console.log(Math.abs(8));
console.log(Math.abs(-85));
console.log(Math.abs(-45));

console.log(Math.pow(2,4));
console.log(Math.pow(9,3));
console.log(Math.pow(5,5));

console.log(Math.floor(32.9999999999));
console.log(Math.floor(69.5));
console.log(Math.floor(-45.18));
console.log(Math.floor(-12.77));

console.log(Math.ceil(32.9999999999));
console.log(Math.ceil(69.5));
console.log(Math.ceil(-45.18));
console.log(Math.ceil(-12.77));

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// Generating Random Integers
console.log("Generating Random Integers");

//Example1

let num = Math.random();
console.log(num);

num = num * 100;
console.log(num);

num = Math.floor(num);
console.log(num);

num = num + 1;
console.log(num);

//Example2
console.log("Generating Random Integers");

let numnber = Math.random();
console.log(numnber);

numnber = numnber * 1000;
console.log(numnber);

numnber = Math.floor(numnber);
console.log(numnber);

numnber = numnber + 1;
console.log(numnber);

//Example3
console.log("printing numbers from 1 to 10");
console.log(Math.floor(Math.random()*10)+1);

//Example4
console.log("printing numbers from 1 to 5");
console.log(Math.floor(Math.random()*5)+1);

//Example5
console.log("printing numbers from 20 to 25");
console.log(Math.floor(Math.random()*5)+21);

console.log(Math.min(4,5,856,1,7,55,45,7,214,7,78));
console.log(Math.max(4,5,856,1,7,55,45,7,214,7,78));