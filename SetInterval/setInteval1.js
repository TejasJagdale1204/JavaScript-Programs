// Example1
console.log("Hi...!");
let id = setInterval( ()=> {
    console.log("Apna College");
} , 2500);
console.log("Welcome to");
clearInterval(id);   //stops the execution

// Example2
const square = (n) => {
    return n*n;
}
let sq = square(12);
console.log(sq);

// Que. Write a function that prints "Hello World" 5 times at intervals of 2s each.
let msg = setInterval( () => {
    console.log("Hello World");
} , 2000);

setTimeout( () => {
    clearInterval(msg);
    console.log("Hello World executed 5 times");
} , 10000);