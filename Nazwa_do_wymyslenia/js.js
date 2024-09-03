const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
window.addEventListener("keydown",PlayerMove)

const tools = document.querySelectorAll(".MainFuctions")


let PlayerX = (canvas.width-20)/2;
let PlayerY = canvas.height-20;
let PlayerSpeed = 5;

let Pressed;
let current;
let PosX = 0;
let PosY = 25;
let width = 40;
let height = 40;
let speed = 1;
let created;
let hitcheck = false;
let projectileY = PlayerY-40 ;
let CoH = "red"
let CoH2 = "red"
let hitMemo = false;
let hitMemo2 = false;

let obst = 0;
initializer();
window
function initializer(){
    window.requestAnimationFrame(Loop)
    
}

function Loop(){
    ctx.fillStyle = CoH;
    
    
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    if(obst == 0){
        ctx.fillStyle = CoH;
        ctx.fillRect(PosX, PosY, width,height);
        obst = 1;
    }
    if(obst == 1){
        obst = 0;
        ctx.fillStyle = CoH2;
        ctx.fillRect(PosX+width+20, PosY, width,height);
    }
    PosX += speed;

    if(PosX == canvas.width-100){
        speed = speed*-1
    }
    if(PosX == 0){
        speed = speed*-1
    }
    
    ctx.fillStyle = "blue"
    ctx.fillRect(PlayerX,PlayerY,width-20,height-20)
    ctx.fillRect(PlayerX+width,PlayerY,width-20,height-20)
    
    switch(Pressed){
      case "Z":  
        created = true;
      break;
    }
    if(created == true){
       ctx.fillRect(PlayerX+25,projectileY,10,30)
       projectileY = projectileY - 1;
       
    }
    if(projectileY == 0 || hitcheck == true){
        projectileY = PlayerY-40;
        created = false;
        hitcheck = false;
    }




    if(projectileY > 24 && projectileY < 66 && PlayerX+25 > PosX && PlayerX+25 < PosX+width){
        console.log("OJOJOJOJ")
        hitcheck = true;
        hitMemo = true;
    }
    if(projectileY > 24 && projectileY < 66 && PlayerX+25 > PosX+60 && PlayerX+25 < PosX+width+60){
        console.log("aj")
        hitcheck = true;
        hitMemo2 = true;
    }

    switch(hitMemo){
        case true:
            CoH = "blue"
        break;
        case false:
            CoH = "red"
        break;
    }
    switch(hitMemo2){
        case true:
            CoH2 = "blue"
        break;
        case false:
            CoH2 = "red"
        break;
    }

    window.requestAnimationFrame(Loop)
}




function PlayerMove(e){
    Key = e.code
    Filter(Key)
    console.log(Pressed)
    
    switch(Pressed){
        case "Left":
            if(PlayerX > 0)
                PlayerX -= PlayerSpeed;
            if(PlayerX == 0)
                PlayerX = canvas.width-60
        break;
        case "Right":
            if(PlayerX < canvas.width-(60))
                PlayerX += PlayerSpeed;
            if(PlayerX == canvas.width-60)
                PlayerX = 0;
        break;
        case "Up":
            // if(PlayerY > 0)
            //     PlayerY -= PlayerSpeed;
        break;
        case "Down":
            // if(PlayerY <  canvas.height-(height-20))
            //     PlayerY += PlayerSpeed;
        break;

    }
}

function Filter(Key){
    switch(Key){
        case "ArrowLeft":
            Pressed = "Left"
        break;
        case "ArrowRight":
            Pressed = "Right"
        break;
        case "ArrowUp":
            Pressed = "Up"
        break;
        case "ArrowDown":
            Pressed = "Down"
        break;
        
        
        case "KeyZ":
            Pressed = "Z"
        break;
    }
}

function projectile() {

}
