// Arrow Functions
const sum = (a,b) => {
    return a + b;
}

let a = sum(12,27);
console.log(a);

console.log(sum(4,5));
console.log(sum(7,8));

// Implicit Return in Arrow Functions
const add = (a,b) => (
    a + b
);

let b = add(66,4);
console.log(b);

console.log(add(34,66));
console.log(add(75,75));

(() => 
    console.log(450)
)
();