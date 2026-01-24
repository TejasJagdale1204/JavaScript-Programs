//Example1
let fruits1 = ["Mango","Apple","Papaya","Chickoo","Orange","Grapes"];
for(i=0 ; i<fruits1.length ; i++) {
    console.log(i + " " + fruits1[i]);
}

//Example2
let fruits2 = [
    ["Mango","Apple","Papaya"],
    ["Chickoo","Orange","Grapes"]
];

for(i=0 ; i<fruits2.length ; i++) {
    console.log(i , fruits2[i]);
    
    for(j=0 ; j < fruits2[i].length ; j++) {
        console.log(j , fruits2[i][j]);
    }
}