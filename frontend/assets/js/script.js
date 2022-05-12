function handleLoguin(){
    let loguinDrop = document.getElementById("loguinDropdown");
    loguinDrop.classList.toggle("show");

}

function handleSignup(){
let descricaoArea = document.querySelector(".description-area");
descricaoArea.classList.add("hide");

let signupAreaExist = document.querySelector(".banner-right .loguin-area");
if(!signupAreaExist){
let signupArea = document.querySelector(".model .loguin-area").cloneNode(true);
document.querySelector(".banner-right").append(signupArea);
}
}