let form = document.querySelector("form");
form.addEventListener("submit" , function (event) {
    event.preventDefault();

    let username = document.querySelector("#user");
    let password = document.querySelector("#pass");

    console.dir(`username is : ${username.value}`);
    console.dir(`password is : ${password.value}`);

    alert(`username and password is saved successfully`);
});