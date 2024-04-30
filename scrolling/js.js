window.addEventListener("scroll",loop);
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
function loop(){
    let y = this.scrollY;
    console.log(y)
    

    if(y >= 1300){

        c.style.animationName = "color";
        c.style.animationDuration = "3s";
        c.style.animationFillMode = "forward";

    }else{
        c.style.animationName = "colorBack";
        c.style.animationDuration = "3s";
        c.style.animationFillMode = "forward";
    }


}



