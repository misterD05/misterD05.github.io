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

var ID = null;

function animation(element, posStarter){

    clearInterval(ID);
    ID = setInterval(frame, 40);
    var finish = false;
    function frame(){
        if(finish){
            clearInterval(ID);
        }else{
            for (let index = 1; index < 12; index++) {
                posStarter[index] = posStarter[index] + 2;
                element[index].style.bottom = posStarter[index] + "px";
            }
         }
    }
}
myWallpaper();


function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
  }

function graphicSfondoSet(){
    var b = "";
    var ball = null;
    var measure = 0;
    var pos2 = 0;
    var pos3 = 0;
    const posStart =[];
    for (let index = 1; index < 13; index++) {
        b = 'b' + index;
        ball = document.getElementById(b);
        measure = getRandomIntInclusive(10, 40);
        pos2 = getRandomIntInclusive(0,100);
        pos3 = getRandomIntInclusive(-800, 0);
        ball.style.height = measure + 'px';
        ball.style.width = measure + 'px';
        ball.style.left = pos2 + "%"
        ball.style.bottom = pos3 + "px";
        posStart[index] = pos3;
    }

    return posStart;
}


function myWallpaper(){
        var posStarter = graphicSfondoSet();
        var b = "";
        var ball = null;
        const balls = [];
        for (let index = 1; index < 13; index++) {
            b = "b" + index;
            ball = document.getElementById(b);
            balls[index] = ball;

        }
        animation(balls, posStarter);
        
}
