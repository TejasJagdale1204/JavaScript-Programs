// Functions

function hello() {
    console.log("HI!");
    console.log("HELLO!");
}
hello();


function vote() {
    let age = 17;
    if(age>=18) {
        console.log("You can vote");
    }
    else {
        console.log("you cannot vote");
    }
}
vote();


function roleDice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
roleDice();

// Functions with arguments

function printInfo(name,age,city) {
    console.log(`Name is ${name} , age is ${age} and city of ${name} is ${city}`);
}
printInfo("Tejas",20,"Pune");
printInfo("Viraj",19,"Vita");


function add(a,b) {
    console.log(`Addition of ${a} and ${b} is ${a+b}`);
}
add(6,4);
add(3,89);
add(45,18);
add(2.25,4.65);


function table(n) {
    console.log(`Multiplication table for ${n}`);
    for(i=n ; i<=n*10 ; i+=n) {
        console.log(i);
    }
    console.log("End of table");
}
table(4);
table(6);
table(8);

// return value

function sum(a,b) {
    return a + b;
}
let addition = sum(5,7);
console.log(addition);


function index(a,b) {
    return a + b;
}
console.log(index(index(12,23),35));


function isAdult(age) {
    if(age>=18) {
        return "Adult";
    }
    else {
        return "Not Adult";
    }
    console.log("bye bye");  //after return statement it does not executes any conditions
}
console.log(isAdult(15));
console.log(isAdult(27));


function getSum(n) {
    let sum = 0;
    for(let i=1 ; i<=n ; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(getSum(10)); 
console.log(getSum(5)); 


let arr = ["Hi","Hello","Byy","!"];
function concat(arr) {
    let str = "";
    for(let i=0 ; i<arr.length ; i++) {
        str = str + arr[i];
    }
    return str;
}
console.log(concat(arr));