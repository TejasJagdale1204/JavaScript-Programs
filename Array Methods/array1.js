let arr = [45,88,82,65,18,22,14,75,30];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[4]);

let arr1 = ["Tejas","Shivtej","Ritvik"];
console.log(arr1);
console.log(arr1.length);
console.log(arr1[0]);

console.log(arr1[1]);
console.log(arr1[1][0]);
console.log(arr1[1][1]);

console.log(arr1[2]);

let arr2 = [45,18,"SCOE",75,"Tejas",96.30,81.67];
console.log(arr2);
console.log(arr2.length);
console.log(arr2[5]);

//Arrays are Mutable
let array = [45,"SCOE",90.15];
console.log(array);
console.log(array[1]);
array[1] = "COEP";
console.log(array);
console.log(array[1]);

let fruits = ["apple","banana","mango","pineapple"];
console.log(fruits);
console.log(fruits[1]);
fruits[1] = "papaya";
console.log(fruits);

fruits[10] = "strawberry";
console.log(fruits);  //check result on console window
console.log(fruits[7]);  //undefined