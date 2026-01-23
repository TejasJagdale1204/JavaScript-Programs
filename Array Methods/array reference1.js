let arr = ['a','b','c','d'];
console.log(arr);

let arrCopy = arr;
console.log(arrCopy);

if(arr=arrCopy) {
    console.log("TRUE");
}

arr.push('e');
console.log(arr);
console.log(arrCopy);

arrCopy.pop();
console.log(arr);
console.log(arrCopy);