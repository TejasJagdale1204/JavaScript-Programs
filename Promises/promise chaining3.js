function saveData(data) {
    return new Promise((resolve, reject) => {
        let networkSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(networkSpeed);
        if (networkSpeed > 4) {
            resolve("Data was saved successfully");
        } else {
            reject("Weak connection");
        }
    });
}

saveData("Apna College")
    .then((result) => {
        console.log("data1 saved");
        console.log(result);
        return saveData("hello world");
    })
    .then((result) => {
        console.log("data2 saved");
        console.log(result);
        return saveData("Naresh iT");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log(result);
        return saveData("SCOE");
    })
    .then((result) => {
        console.log("data4 saved");
        console.log(result);
        return saveData("JavaScript");
    })
    .then((result) => {
        console.log("data5 saved");
        console.log(result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(error);
    });