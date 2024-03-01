var home = document.getElementById("menuHome");
var door = document.getElementById("Door")
var us = document.getElementById("openWho");
var rob = document.getElementById("openProj");
us.setAttribute("hidden", 'hidden')
rob.setAttribute("hidden", 'hidden')
home.addEventListener("click", openMenu);

graphicSfondoSet();

function openMenu(){
    home.className = (home.className == "menuOp") ? "menuOp2" : "menuOp";
    door.className =(door.className == "door") ? "door2" : "door";
    if(home.className == "menuOp"){
        us.setAttribute("hidden", 'hidden')
        rob.setAttribute("hidden", 'hidden')
    }else{
        us.removeAttribute("hidden")
        rob.removeAttribute("hidden")
    }
}


function graphicSfondoSet(){
    var b = "";
    for (let index = 1; index < 13; index++) {
        b = "b" + index;
        var ball = document.getElementById(b);
        var measure = Math.random(10, 40);
        ball.style.height = (measure + "px");
        ball.style.width = (measure + "px");

        ball.style.left = (Math.random(0,100) + "%")
    }
}
