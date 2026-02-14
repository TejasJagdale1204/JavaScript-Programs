const student = {
    name: "Tejas",
    age:20,
    marks:95,
    prop: this,  //global scope
    getName: function() {      
        console.log(this);
        return this.name;
    } ,
    getMarks: () => {
        console.log(this);      // parent's scope --> window
        return this.marks;
    } ,
    getInfo1: function () {
        setTimeout( () => {
            console.log(this);  //student object
        } , 2000);
    } ,
    getInfo2: function () {
        setTimeout( function () {
            console.log(this);  //window object
        } , 2000);
    }
}
console.log(student.name);

console.log(student.getName());
console.log(student.getMarks());
student.getInfo1();
student.getInfo2();