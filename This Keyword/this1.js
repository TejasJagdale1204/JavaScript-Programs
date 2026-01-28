const student = {
    name : "Tejas",
    age : 23,
    physics : 70,
    chemistry : 85,
    maths : 91,

    getAvg() {
        console.log(this);
        let avg = (this.physics + this.chemistry + this.maths) / 3;
        console.log(avg);
    }
}
student.getAvg();

console.log(this);