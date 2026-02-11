function saveData(data) {
    return new Promise((resolve, reject) => {
        let networkSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(networkSpeed);
        if (networkSpeed > 4) {
            resolve("Data was saved");
        } else {
            reject("Weak connection");
        }
    }); 
}

saveData("Apna College")
    .then((msg) => {
        console.log(msg);
    })
    .catch((msg) => {
        console.log(msg);
    });