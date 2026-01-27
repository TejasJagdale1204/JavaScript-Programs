// Methods 
const calculator = {
    add : function(a,b) {
        return a + b;
    } ,
    sub : function(a,b) {
        return a - b;
    },
    mul : function(a,b) {
        return a * b;
    }
};
console.log(calculator.add(5,4));
console.log(calculator.sub(5,4));
console.log(calculator.mul(5,4));


// Methods (ShortHand)
const calci = {
    add(a,b) {
        return a + b;
    } ,
    sub(a,b) {
        return a - b;
    },
    mul(a,b) {
        return a * b;
    }
};
console.log(calci.add(20,25));
console.log(calci.sub(20,25));
console.log(calci.mul(20,25));