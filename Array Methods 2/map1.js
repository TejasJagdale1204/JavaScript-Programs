//1
let num = [1,2,3,4];
let number = num.map((element) => {
    return element**3;
});
console.log(number);

//2
let array = [
{
    name: "Tejas",
    marks: 95
},
{
    name: "Shivtej",
    marks: 90
},
{
    name: "Ritvik",
    marks: 93.5
}];
let arr = array.map((element) => {
    return element.marks/10;
});
console.log(arr);