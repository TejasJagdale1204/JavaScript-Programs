arr1=[3,5,7,14,25,144,263,51,2,8,9,7,45].every((element) => (element%2 == 0));
arr2=[3,5,7,14,25,144,263,51,2,8,9,7,45].every((element) => (element%2 != 0));
arr3=[3,5,7,14,25,144,263,51,2,8,9,7,45].every((element) => (element < 264));
arr4=[3,5,7,14,25,144,263,51,2,8,9,7,45].every((element) => (element < 263));

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);