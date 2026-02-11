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
        console.log("data1 saved");
        return saveData("hello world");
    })
    .then(() => {
        console.log("data2 saved");
        return saveData("Naresh iT");
    })
    .then(() => {
        console.log("data3 saved");
        return saveData("SCOE");
    })
    .then(() => {
        console.log("data4 saved");
        return saveData("JavaScript");
    })
    .then(() => {
        console.log("data5 saved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });