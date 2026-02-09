function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

// ==================================================================================

// three(); --> three() --> two() --> two() --> one() --> one() --> return 1 --> 
// one() --> one() --> return 1 --> return2 --> one() --> one() --> return 1 --> 
// ans --> console.log(ans) --> exit

// ==================================================================================

// three(); 
// → three() starts
// → calls two()

// two()
// → calls one()
// → one() returns 1
// → calls one() again
// → one() returns 1
// → two() returns 2

// back to three()
// → calls one()
// → one() returns 1

// ans = 2 + 1
// console.log(ans)   // 3
// program exits

// ==================================================================================