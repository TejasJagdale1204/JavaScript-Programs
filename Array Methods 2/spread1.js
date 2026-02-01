let arr = [5,8,99,2,4,79,20,41,58,7,3,5,17,9,3,21,49,6,8,45];

console.log(Math.min(...arr));
console.log(Math.max(...arr));

function array() {
    return Math.min(...arr);
}
console.log(array());

console.log(...arr);    //prints all elements individually

console.log("ApnaCollege");
console.log(..."ApnaCollege");

//Spread (Array Literals)
let chars = [..."Tejas Jagdale"];
console.log(chars);

let numbers = [4,58,7,5,8,5,8,7,6,54,8,6,2,4];
let newNumbers = [...numbers];
console.log(newNumbers);

//Spread with Object Literals

let data = {
    email: "tejasjagdale999@gmail.com",
    password: "abcd"
};
let dataCopy = {...data, id: 123 , country: "India"};

console.log(data);
console.log(dataCopy);

console.log(...data.email);
console.log(...data.password);
//console.log(...dataCopy.id);    //The spread operator ... works only on iterable
                                //values (like strings, arrays), not on numbers.

console.log(...dataCopy.country);