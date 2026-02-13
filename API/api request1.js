let url = "https://catfact.ninja/fact";

fetch(url)
    .then((response1) => {
        console.log(response1);
        return response1.json();
    })
    .then((data1) => {
        console.log(data1);
        return data1.fact;
    })
    .then((fact1) => {
        console.log(fact1);
        return fact1.length;
    })
    .then((length1) => {
        console.log(length1);
        return fetch(url);
    })

    .then((response2) => {
        console.log(response2);
        return response2.json();
    })
    .then((data2) => {
        console.log(data2);
        return data2.fact;
    })
    .then((fact2) => {
        console.log(fact2);
        return fact2.length;
    })
    .then((length2) => {
        console.log(length2);
    })

    .catch((error) => {
        console.log("Error : ", error);
    });