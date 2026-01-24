const student = {
    name:"Tejas",
    college:"SCOE",
    city:"Pune",
    age:20,
    gender:"Male",
    home:"Sangli",
    marks:9.02
};

console.log(student);

// get values
console.log(student["name"]);
console.log(student.name);

console.log(student["marks"]);
console.log(student.home);

// update values
student.marks=81.67;
console.log(student)

// add key-value pair
student.language="JavaScript";

// delete values
delete student.college;

// NESTED OBJECTS
const classInfo = {
    Tejas : {
        grade:"A+",
        city:"Sangli"
    } ,
    Shivtej : {
        grade:"A",
        city: "Kundal"
    } ,
    Ritvik : {
        grade:"O",
        city: "Palus"
    }
};

console.log(classInfo);

// Array of Objects
const details = [
    {
        name:"Tejas",
        grade:"A+",
        city:"Sangli"
    } ,
    {
        name:"Shivtej",
        grade:"A",
        city: "Kundal"
    } ,
    {
        name:"Ritvik",
        grade:"B+",
        city: "Palus"
    }
];

console.log(details);
console.log(details[0]);
console.log(details[0].name);
console.log(details[0].grade);
console.log(details[0].city);

details[1].age=23;
details[1].gender="Male";

delete details[2].grade;