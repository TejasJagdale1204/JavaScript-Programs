//1.Global Scope Example

let sum = 54;   //Global Scope
console.log(sum);



//2.Function Scope Example

function calSum(a,b) {
    let sum = a + b;   //Function Scope
    console.log(sum);
}
calSum(4,5);



//3.Block Scope Example

{
    let a = 25;   //Block Scope
}
//console.log(a);     it gives us error bcs variable is declard inside a {}



//4.Lexical Scope Example

function outerFunc() {
    let x = 5;
    let y = 7;
    function innerFunc() {
        console.log(x);    //Lexical Scope 
        console.log(y);    //Lexical Scope 
    }
    innerFunc();
}
outerFunc();


//Function Expression

const addition = function(a,b,c) {
    return a + b +c;
}
let add = addition(4,5,6);
console.log(add);