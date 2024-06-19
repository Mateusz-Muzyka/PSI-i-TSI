const canvas = document.getElementById("canvas");
const reset = document.getElementById("button");
const ctx = canvas.getContext("2d");

let LevelSave = [
    [2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
    [2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
    [2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
    [2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
    [2,2,1,2,2,2,2,2,1,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [2,2,2,2,2,1,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,1,2,2,2,2,2,2,2,2,2]
]

let UserSave = []

     for(let i = 0;i<LevelSave.length;i++){
         UserSave[i] = new Array(LevelSave[1].length)
     }




const importBut = document.getElementById("import")

importBut.addEventListener("click",impor)
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
const cobble = document.getElementById("cobble")
const grass = document.getElementById("grass")


let size = 40;

const swipe = document.getElementById("sizerr")

let snapnap 
let snapnap2
         TPx = snapnap/size;

const pen = document.getElementById("pen")
const bucket = document.getElementById("bucket")

const panels = document.querySelectorAll(".colors")
panels.forEach(button => button.addEventListener('click', ChangeColor));

dirt.addEventListener('click', tools)
star.addEventListener('click', tools)
cobble.addEventListener('click', tools)
grass.addEventListener('click', tools)

reset.addEventListener("click", ()=>{    ctx.clearRect(0,0,canvas.width,canvas.height)})
canvas.addEventListener("mousedown", (e)=>{  draw = 1;});
window.addEventListener("mouseup", (e)=>{  draw = 0;});
canvas.addEventListener("mousemove", (e) => {
     PosX = e.offsetX;
     PosY = e.offsetY;
    if(draw == 1 && penA == true){
         snapnap = Math.floor(PosX / size) * size
         snapnap2 = Math.floor(PosY / size) * size
        if(penter == "Rect"){
            ctx.fillRect(PosX, PosY, width,height);
        }
        if(penter == "dirt"){
            console.log(snapnap, snapnap2)
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, snapnap,snapnap2,size,size)
            };
            img.src = "sprite1.jpg";
        }
        if(penter == "star"){
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, snapnap,snapnap2,size,size)
        
            };
            img.src = "sprite2.png";
        }
        if(penter == "cobble"){
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, snapnap,snapnap2,size,size)
        
            };
            img.src = "sprite3jpeg.jpeg";
            
        }
        if(penter == "grass"){
            const img = new Image();
            img.onload = () => {
              ctx.drawImage(img, snapnap,snapnap2,size,size)
        
            };
            img.src = "sprite4.png";
            
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


function impor(){
    // for(let i = 0;i<LevelSave.length;i++){
    //     UserSave[i] = new Array(LevelSave[1].length)
    //     for(let q = 0;q<LevelSave[1].length;q++){
    //         UserSave[i][q] = Math.round(Math.random() * 3); ;
    //     }
    //     console.log(UserSave)
    // }

  
    let input2U = document.getElementsByName("QuickSave") 

    for(let i=0;i<UserSave.length;i++){
        let quick = input2U[i].value
        quick = Array.from(quick)
        for(let q=0;q<LevelSave[0].length;q++){
            UserSave[i][q] = quick[q]
        }
    }
    console.log(UserSave)
    for(let i = 0;i<LevelSave.length;i++){
        for(let q = 0;q<LevelSave[1].length;q++){
            LevelSave[i][q] = UserSave[i][q]
        }
    }
    console.log( LevelSave)


for(let i = 0; i<8;i++){
    for(let q = 0; q<15;q++){
        let temp = LevelSave[i][q];
        
        switch(temp){
            case '0':
            
                break;
                
                case '1':
                const img = new Image();
                img.onload = () => {
                  ctx.drawImage(img, size*q,size*i,size,size)
                };
                img.src = "sprite1.jpg";
            break;
                
                case '2':
                const img2 = new Image();
                img2.onload = () => {
                  ctx.drawImage(img2, size*q,size*i,size,size)
                }
                img2.src = "sprite3jpeg.jpeg";
            break;
                case '3':
                const img3 = new Image();
                img3.onload = () => {
                  ctx.drawImage(img3, size*q,size*i,size,size)
                }
                img3.src = "sprite4.png";
            break;
        
        }
    }
}
}

function tools(){
    clicked = this.id;
    console.log(this.id)
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
        case "cobble":
            penter = "cobble" 
        break;
        case "grass":
            penter = "grass" 
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

function inputer(){

}

