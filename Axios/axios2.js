let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let fact = await getFacts();
    console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    } catch(e) {
        console.log("Error : " , e);
        return "No fact found";
    }
} 