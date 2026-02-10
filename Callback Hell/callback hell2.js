function dataStore(data, success, failure) {
    let networkSpeed = Math.floor(Math.random() * 10) + 1;
    // console.log(networkSpeed);
    if (networkSpeed > 4) {
        success();
    }
    else {
        failure();
    }
}

dataStore(
    "Apna College", () => {
        console.log("Success1 : Data1 is saved successfully");

        dataStore(
            "Naresh IT", () => {
                console.log("Success2 : Data2 is saved successfully");

                dataStore(
                    "SCOE", () => {
                        console.log("Success3 : Data3 is saved successfully")
                    }, () => {
                        console.log("Failure3 : Weak connection, data3 not saved")
                    }
                )
            }, () => {
                console.log("Failure2 : Weak connection, data2 not saved");
            }
        )
    }, () => {
        console.log("Failure1 : Weak connection, data1 not saved");
    }
);