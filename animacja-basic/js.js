const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";

let PosX = 0;
let PosY = 0;

let speedX = 1;
let speedY = 1;

let width = 10;
let height = 10;


let token = 1;
initializer();

function initializer(){
    window.requestAnimationFrame(drawing)
    
}

function drawing(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    ctx.fillRect(PosX, PosY, width,height);
  
        PosX += speedX;
        PosY += speedY;

        if(PosY > canvas.height-10){
            speedX = speedX * 1
            speedY = speedY * -1
        }
        if(PosY < 0){
            
            speedX = speedX * -1
            speedY = speedY * -1
        }
        if(PosX > canvas.width-10){
            speedX = speedX * -1
            speedY = speedY * 1
        }


  window.requestAnimationFrame(drawing)
}