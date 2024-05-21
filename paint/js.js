const canvas = document.getElementById("canvas");
const reset = document.getElementById("button");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
let draw

let PosX
let PosY
let width = 10;
let height = 10;
reset.addEventListener("click", ()=>{    ctx.clearRect(0,0,canvas.width,canvas.height)})
canvas.addEventListener("mousedown", (e)=>{  draw = 1;});
window.addEventListener("mouseup", (e)=>{  draw = 0;});
canvas.addEventListener("mousemove", (e) => {
     PosX = e.offsetX;
     PosY = e.offsetY;
    if(draw == 1)
        ctx.fillRect(PosX, PosY, width,height);
});




initializer()

function initializer(){
    window.requestAnimationFrame(drawing)
    
}
function drawing(){  
    window.requestAnimationFrame(drawing)    
}

