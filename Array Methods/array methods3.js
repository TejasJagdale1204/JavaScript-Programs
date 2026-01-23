let first = ["red","yellow"];
let second = ["orange","green","violet"];
let third = ["pink","black","white","blue"];

console.log(first);
console.log(second);
console.log(third);

//concat method
console.log(first.concat(second));
console.log(second.concat(third));
console.log(third.concat(first));

console.log(first.concat(second).concat(third));

//reverse method
console.log(first.reverse());
console.log(second.reverse());
console.log(third.reverse());

//slice method
let names = ["A","B","C","D","E","F"];

console.log(names.slice());
console.log(names.slice(2));
console.log(names.slice(3,4));
console.log(names.slice(-3));
console.log(names.slice(1,5));

//splice method
let colors = ["red","yellow","blue","orange","pink","white"];

console.log(colors);

console.log(colors.splice(4));
console.log(colors);

console.log(colors.splice(0,1));
console.log(colors);

console.log(colors.splice(0,1,"black","grey"));
console.log(colors);

console.log(colors.splice(1,2));
console.log(colors);

colors.push("purple");
console.log(colors);

colors.push("brown");
console.log(colors);

console.log(colors.splice(1,0,"voilet"));
console.log(colors);

colors.splice(4,0,"aqua","green");
console.log(colors);