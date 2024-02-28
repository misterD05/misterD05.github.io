var home = document.getElementById("menuHome");
var door = document.getElementById("Door");
var but1Us = document.getElementById("openWho");
var but1Rob = document.getElementById("openProj");
but1Us.setAttribute("hidden", "hidden");
home.addEventListener("click", openMenu);


function openMenu(){
    home.className = (home.className == "menuOp") ? "menuOp2": "menuOp";
    door.className = (door.className == "door") ? "door2" : "door";
    
    if (but1Us.hidden) {
        but1Us.removeAttribute("hidden");
        but1Rob.removeAttribute("hidden");
     } else {
        but1Us.setAttribute("hidden", "hidden");
        but1Rob.setAttribute("hidden", "hidden");
     }
    return;
}
