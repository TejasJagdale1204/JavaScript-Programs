for(let i=1 ; i<=10 ; i++) {
    console.log(i);
}
console.log("Multiplication Table");

let n = prompt("Enter a number");
n = parseInt(n);

for(i=n ; i<=n*10 ; i+=n) {
    console.log(i);
}