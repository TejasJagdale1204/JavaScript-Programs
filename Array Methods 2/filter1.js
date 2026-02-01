let nums = [1,2,3,4,7,8,2,9,10,12,11];

let ans1 = nums.filter((element) => {
    return element%2==0;
});
console.log(ans1);

let ans2 = nums.filter((element) => {
    return element%2 != 0;
});
console.log(ans2);

let ans3 = nums.filter((element) => {
    return element<5;
});
console.log(ans3);