// Higher Order Functions

// Example1
function multipleGreet(func , count) {
    for(i=1 ; i<=count ; i++) {
        func();
    }
}
let greet = function() {
    console.log("Hello!!!"); 
}
multipleGreet(greet,10);

// Example2
function printing(print , count) {
    for(i=1 ; i<=count ; i++) {
        print();
    }
}
printing(function(n) {console.log("HI!!!!");} , 25);


// Higher Order Functions (Returns)

// Example1
function OddEvenTest(request) {
    if(request == "odd") {
        function name(n) {
            console.log(!(n%2==0));
        }
        name(90);
    }
    else if(request == "even") {
        function name(n) {
            console.log(n%2==0);
        }
        name(10);
    }
    else {
        console.log("wrong request");
    }
}
OddEvenTest("odd");