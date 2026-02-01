//Destructuring (Arrays)
let cricketers = ["virat","smith","root","kane","starc","josh","boland","pat"];
let[winner , runnerUp , secondRunnerup , ...other] = cricketers;

console.log(cricketers);
console.log(winner);
console.log(runnerUp);
console.log(secondRunnerup);
console.log(other);

//Destructuring (Objects)
const student = {
    name: "Tejas",
    age: 20,
    BE: "Second Year",
    subjects: ["hindi","english","math","science"],
    username: "tejas@1234",
    password: "NiT#1"
};
let{username, password, ... allOther} = student;

console.log(student);
console.log(allOther);
console.log(username);
console.log(password);