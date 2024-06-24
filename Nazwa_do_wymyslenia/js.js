const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "red";

let PosX = 0;
let PosY = 10;
let width = 40;
let height = 40;
let speed = 1;

initializer();

function initializer(){
    window.requestAnimationFrame(Loop)
    
}

function Loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(PosX, PosY, width,height);
    
    PosX += speed;

    if(PosX == canvas.width-40){
        speed = speed*-1
    }
    if(PosX == 0){
        speed = speed*-1
    }
    
    window.requestAnimationFrame(Loop)

}