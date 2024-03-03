var home = document.getElementById("menuHome");
var door = document.getElementById("Door")
var us = document.getElementById("openWho");
var rob = document.getElementById("openProj");
us.setAttribute("hidden", 'hidden')
rob.setAttribute("hidden", 'hidden')
home.addEventListener("click", openMenu);

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




function bubblesUp(){
    var ball = null;
    var index = 0;
    var numOFballs = window.innerWidth / 10;
    var measure = 0;
    var pos2 = 0;
    var pos3 = 0;
    var father = document.getElementById("containAnimations");

    while(index < numOFballs) {
        bid = 'b' + index;
        ball = document.createElement("div");
        ball.classList.add("ball");

        measure = Math.random() * 50;
        pos2 = Math.floor(Math.random() * window.innerWidth);
        pos3 = Math.floor(Math.random() * window.innerHeight);
        
        ball.style.left =  pos2 / 6 + "%";
        ball.style.bottom = pos3 / 6 + "%";

        ball.style.height = measure + 'px';
        ball.style.width = measure + 'px';

        ball.style.animationDuration = 1.5 *measure + "s";
        
        father.appendChild(ball);
        
        index++
    }
    
}

bubblesUp();



