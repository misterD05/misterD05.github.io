var home = document.getElementById("menuHome");
var door = document.getElementById("Door")
var us = document.getElementById("openWho");
var neck = document.getElementById("neck");
var rob = document.getElementById("openProj");
var eye1 = document.getElementById("r")
var eye2 = document.getElementById("l")
us.setAttribute("hidden", 'hidden')
rob.setAttribute("hidden", 'hidden')
home.addEventListener("click", openMenu);
home.addEventListener("dblclick", openHome)
us.addEventListener("click", openWho);
rob.addEventListener("click", openRob)
//home.addEventListener("onmouseover", )

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

function openHome(){
    home.className = (home.className == "menuOp") ? "menuOp2" : "menuOp";
    door.className =(door.className == "door") ? "door2" : "door";
    window.location.href = "index.html"
}

function openWho(){
    us.className = (us.className == "menuOp") ? "menuOp2" : "menuOp";
    neck.className =(neck.className == "collo") ? "collo2" : "collo";
    window.location.href = "us.html";
}


function openRob(){
    rob.className = (us.className == "menuOp") ? "menuOp2" : "menuOp";
    eye1.className =(eye1.className == "occhio") ? "occhio2" : "occhio";
    eye2.className =(eye2.className == "occhio") ? "occhio2" : "occhio";
    window.location.href = "rob.html";
}





function bubblesUp(){
    var ball = null;
    var index = 0;
    var numOFballs = window.innerWidth / 15;
    var measure = 0;
    var pos2 = 0;
    var pos3 = 0;
    var father = document.getElementById("containAnimations");

    while(index < numOFballs) {
        bid = 'b' + index;
        ball = document.createElement("div");
        ball.classList.add("ball");

        measure = Math.random() * 50;
        pos2 = Math.floor(Math.random() * 575);
        pos3 = Math.floor(Math.random() * 575);
        
        ball.style.left =  pos2 / 6 + "%";
        ball.style.bottom = pos3 / 6 + "%";

        ball.style.height = measure + 'px';
        ball.style.width = measure + 'px';

        if(measure < 30){
            ball.style.zIndex = 4;
            ball.style.filter = "blur(" + (Math.abs(measure/8)) + "px)"; 
        }else{
            ball.style.filter = "blur(" + (Math.abs(measure/18)) + "px)"; 
        }
        
        ball.style.animationDuration = 700 *measure + "ms";
        
        father.appendChild(ball);
        
        index++
    }
    
}

function changeSizeFont(){
    var font = document.body;
    var style1 = font.getBoundingClientRect(font);
    font = style1.width / 15
    var text = document.getElementById("subtit");
    if(40 > font){
        font = 40;
    } 
    text.style.fontSize = font + "px";
}
bubblesUp();
