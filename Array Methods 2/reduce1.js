let nums = [10,20,30,40,50,60,70,80,90,100];
let finalVal = nums.reduce((result , element) => (result + element));
console.log(finalVal);
// (0+1) = 1
// (1+2) = 3
// (3+3) = 6
// (6+4) = 10
// (10+5) = 15 and so on --->>> final value

let nums1 = [1,2,3,4,5,6,7];
let finalValue = nums1.reduce((result , element) => {
    console.log(result);
    return result + element;
});
// console.log(finalValue);