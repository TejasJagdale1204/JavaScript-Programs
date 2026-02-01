//For printing maximum number in array
let nums = [2,3,4,5,3,4,7,8,12,2];
let result = nums.reduce((maximum , element) => {
    if(element > maximum) {
        return element;
    }
    else {
        return maximum;
    }
});
console.log(result);


//For printing minimum number in array
let numbers = [2,3,4,1,5,3,4,7,8,12,2];
let answer = numbers.reduce((minimum , value) => {
    if(value < minimum) {
        return value;
    }
    else {
        return minimum;
    }
});
console.log(answer);