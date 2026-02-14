let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let response = await axios.get(url);
        console.log(response);
        console.log(response.data);
        console.log(response.status);
        console.log(response.data.fact);
    } catch(e) {
        console.log("Error : " , e);
    }
} 

getFacts();