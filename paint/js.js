const canvas = document.getElementById("canvas");
const reset = document.getElementById("button");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
let draw
let PosX
let PosY
let width = 10;
let height = 10;
let penA = true;
let bucketA = false;
let penter = "Rect";
const blue = document.getElementById("blue")
const red = document.getElementById("red")
const yellow = document.getElementById("yellow")
const green = document.getElementById("green")
const white = document.getElementById("white")
const orange = document.getElementById("orange")
const black = document.getElementById("black")

const dirt = document.getElementById("dirt")
const star = document.getElementById("star")




const swipe = document.getElementById("sizerr")



const pen = document.getElementById("pen")
const bucket = document.getElementById("bucket")

const panels = document.querySelectorAll(".colors")
panels.forEach(button => button.addEventListener('click', ChangeColor));

dirt.addEventListener('click', tools)
star.addEventListener('click', tools)

reset.addEventListener("click", ()=>{    ctx.clearRect(0,0,canvas.width,canvas.height)})
canvas.addEventListener("mousedown", (e)=>{  draw = 1;});
window.addEventListener("mouseup", (e)=>{  draw = 0;});
canvas.addEventListener("mousemove", (e) => {
     PosX = e.offsetX;
     PosY = e.offsetY;
    if(draw == 1 && penA == true){
        if(penter == "Rect"){
            ctx.fillRect(PosX, PosY, width,height);
        }
        if(penter == "dirt"){
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, PosX, PosY);
              ctx.beginPath();
              ctx.moveTo(width, height);
              ctx.lineTo(width, height);
              ctx.lineTo(width, height);
              ctx.lineTo(width, height);
              ctx.stroke();
            };
            img.src = "sprite1.jpg";
        }
        if(penter == "star"){
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, PosX, PosY);
              ctx.beginPath();
              ctx.moveTo(width, height);
              ctx.lineTo(width, height);
              ctx.lineTo(width, height);
              ctx.lineTo(width, height);
              ctx.stroke();
            };
            img.src = "sprite2.png";
        }
    }

});

canvas.addEventListener("click", ()=>{
    if(bucketA == true){
        ctx.fillRect(0,0,canvas.width,canvas.height)
    }
})
pen.addEventListener("click",tools)
bucket.addEventListener("click",tools)



initializer()

function initializer(){
    window.requestAnimationFrame(drawing)
    
}
function drawing(){  
    window.requestAnimationFrame(drawing)  
    width = swipe.value/5
    height = swipe.value/5
}

function tools(){
    clicked = this.id;
    switch(clicked){
        case "pen":
            penA = true;
            bucketA = false
        break;
        case "bucket":
            penA = false;
            bucketA = true
        break;
        case "dirt":
            penter = "dirt"
        break;
        case "star":
            penter = "star"
        break;
    }
}


function ChangeColor(){
  console.log(this.id)
  clicked = this.id;
  switch(clicked){
    case "blue":
        ctx.fillStyle = "blue";
        penter = "Rect"
    break;
    
    case "red":
        ctx.fillStyle = "red";
        penter = "Rect"
    break;
    case "yellow":
        ctx.fillStyle = "yellow";
        penter = "Rect"
    break;
    case "green":
        ctx.fillStyle = "green";
        penter = "Rect"
    break;
    case "white":
        ctx.fillStyle = "white";
        penter = "Rect"
    break;
    case "orange":
        ctx.fillStyle = "orange";
        penter = "Rect"
    break;
    case "black":
        ctx.fillStyle = "black";
        penter = "Rect"
    break;

  }
}



