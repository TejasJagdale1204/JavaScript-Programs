let jsonResponce =
    '{"fact":"Abraham Lincoln loved cats. He had four of them while he lived in the White House.","length":82}';

console.log(jsonResponce);

let validResponce = JSON.parse(jsonResponce);
console.log(validResponce);
console.log(validResponce.fact);
console.log(validResponce.length);

//=====================================================================

let student = {
    name : "Tejas",
    age : 20,
    marks : 95
};  

let objectData = JSON.stringify(student);
console.log(objectData);