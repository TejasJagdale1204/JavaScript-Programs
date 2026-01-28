console.log("Hello");
console.log("Hello");

try {
    console.log(a);
}
catch(err) {
    console.log("Caught an error ... a is not defined");
    console.log(err);  // Reference Error
}

console.log("Hi");
console.log("Hi");