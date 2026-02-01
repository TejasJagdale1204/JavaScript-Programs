let arr = [1,2,3,4,5];

//1
let print = function(elements) {
    console.log(elements);
};
arr.forEach(print);

//2
arr.forEach(function(elements) {
    console.log(elements);
});

//3
arr.forEach((element) => {
    console.log(element);
});

//4
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
    marks: 93
}];
array.forEach((elements) => {
    console.log(elements);
});
array.forEach((elements) => {
    console.log(elements.marks);
});
array.forEach((elements) => {
    console.log(elements.name);
})