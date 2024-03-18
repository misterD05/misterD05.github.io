function spostaText(){
    var text = document.getElementById("testoGroup");
    var size = text.getBoundingClientRect(text)

    if(size.width <= "400"){
        text.style.top = "85%"
        text.style.left = "2%"
        text.style.width = "96%"
    }else{
        text.style.left = "55%"
        text.style.width = "42%"
    }

}



spostaText();
