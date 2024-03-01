var home = document.getElementById("menuOp");
home.addEventListener("click", openMenu);


function openMenu(){
    home.className = (home.className == "menuOp") ? "menuOp2" : "menuOp";
}
