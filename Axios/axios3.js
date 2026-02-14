let btn = document.querySelector("button");
let url = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async ()=> {
    let link = await getImage();
    
    let image = document.querySelector("#result");
    image.setAttribute("src", link);
});
 
async function getImage() {
    try {
        let response = await axios.get(url);
        return response.data.message;
    } catch(e) {
        console.log("Error : " , e);
        return "/";
    }
} 