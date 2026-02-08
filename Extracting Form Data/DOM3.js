let form = document.querySelector("form");
form.addEventListener("submit" , function (event) {
    event.preventDefault();
    console.dir(form);

    let username = this.elements[0];  //form.elements[0]
    let password = this.elements[1];  //form.elements[1]
    let email = this.elements[2];     //form.elements[2]
    let number = this.elements[3];    //form.elements[3]

    console.dir(`username is : ${username.value}`);
    console.dir(`password is : ${password.value}`);
    console.dir(`email is : ${email.value}`);
    console.dir(`number is : ${number.value}`);
});