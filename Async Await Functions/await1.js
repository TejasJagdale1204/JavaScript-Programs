function greet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1500);
    })
}
async function demo() {
    await greet();
    await greet();
    await greet();
    await greet();
    greet();

}
demo();