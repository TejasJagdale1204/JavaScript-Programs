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
    .then(() => {
        console.log("data1 saved. promise was resolved");

        saveData("hello world")
            .then(() => {
                console.log("data2 saved. promise was resolved");
            })
    })
    .catch(() => {
        console.log("promise was rejected");
    });