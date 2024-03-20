function spostaText(){
    var text = document.getElementById("testoGroup");
    var size = text.getBoundingClientRect(text)

    if(size.width <= "400"){
        text.style.top = "95%"
        text.style.left = "2%"
        text.style.width = "96%"
        document.getElementById("video2").style.top = "150%"
        document.getElementById("title2").style.top = "130%"
        document.getElementById("documentRel").style.top = "210%"
        document.getElementById("documentRel").style.left = "2%"
    
    }else{
        text.style.left = "58%"
        text.style.width = "40%"

    }

}



spostaText();
