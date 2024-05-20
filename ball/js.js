const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "aqua";
ctx.strokeStyle = "aqua";
let PosX = (canvas.width/2)-5;
let PosY = (canvas.height/2)-10;

let Multiplier = 0.8;


let width = 10;
let height = 10;

initializer();

function initializer(){
    window.requestAnimationFrame(drawing)
    
}

function drawing(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.beginPath()
    ctx.arc(PosX, PosY, width,height, 2*Math.PI);
    ctx.stroke();
    console.log(PosY)
    width += Multiplier;
    height += Multiplier;
    PosX -= Multiplier/2;
    PosY -= Multiplier/2;    
    if(height >= canvas.height/2){  
        Multiplier = Multiplier*-1
      }
    if(height <= 10){
        Multiplier = 1;
    }
    




  window.requestAnimationFrame(drawing)
}