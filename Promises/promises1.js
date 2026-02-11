function saveData(data) {
    return new Promise((resolve,reject) => {
        let networkSpeed = Math.floor(Math.random() *10) + 1;
        console.log(networkSpeed);
        if(networkSpeed > 4) {
            resolve("Data was saved");
        } else {
            reject("Weak connection");
        }
    });
}

let request = saveData("Apna College");
console.log(request);