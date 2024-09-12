let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");



function ShowPass(){
    if (password.type == "password") {
        password.type = "text";
        eyeIcon.src = "eye-open.png"
    }
    else{
        password.type = "password"
        eyeIcon.src = "eye-close.png"
    }
}