const w = document.getElementById("size") 
const h = document.getElementById("size2") 
const X = document.getElementById("PosX") 
const Y = document.getElementById("PosY") 

const start = document.getElementById("starter")

let fullPath = window.location.pathname;
let filename = fullPath.split("/").pop();
if(filename = "index.html")
start.addEventListener("click",()=>{window.open("another.html")})



init()


function init(){
requestAnimationFrame(loop)
}
function loop(){
    w.innerHTML = window.innerWidth;
    h.innerHTML = window.innerWidth;
    X.innerHTML = window.screenX
    Y.innerHTML = window.screenY
    requestAnimationFrame(loop)
}

