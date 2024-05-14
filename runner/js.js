   /*
        state = 0 ----> pauza
        state = 1 ----> podczas gry
        state = 2 ----> endgame or startgame
   */
   
   
   
   
   
   
   window.addEventListener("keydown", jump);

const kontener = document.getElementById("container")
const player = document.getElementById("player")
const obst = document.getElementById("obstacle")
const score = document.getElementById("points")
const paus  = document.getElementById("pauseInfo")
const img  = document.getElementById("img")
const start  = document.getElementById("start")
const menemu  = document.getElementById("MainMenu")
const nowRunning  = document.getElementById("gameRun")







obst.classList.add("moving")
let tablica = ["hydrant.png", "obst2.png", "obst3.png"]


obst.addEventListener("animationcancel", () => {
    obst.classList.remove("moving") 
    setTimeout(function() { obst.classList.add("moving")},500)
})
obst.addEventListener("animationend", () => {
    console.log("regan")
    let qiwi = Math.floor(Math.random() * 2);
    img.src = tablica[qiwi];
    setTimeout(function() { obst.classList.add("moving")},500)
})
obst.addEventListener("animationstart", () => {
    console.log("regan2")
    obst.classList.add("moving")
    setTimeout(function() { obst.classList.remove("moving")},2010)
})

let points = 0;
const obstPos = obst.getBoundingClientRect();
const PlayerPos = player.getBoundingClientRect()

const screenOfRunning = document.getElementById("gameRun")


//endgame screen{
const EndgameScreen = document.getElementById("endgame")
const Messege = document.getElementById("Winner_messege")
const tryagain = document.getElementById("tryAgain")
const exit = document.getElementById("exit")

tryagain.addEventListener("click",reload);
exit.addEventListener("click", BackToBack);
//}



let x,y,state = 3;
let i = 0;
let arg = 0;

start.addEventListener("click",() => {
    menemu.style.display = "none";
    nowRunning.style.display = "block"
    state = 1;
    setTimeout(function() { obst.classList.add("moving")},500)
    kontener.style.background = "none";

    kontener.classList.remove("backS")
    kontener.style.backgroundImage = 'url("back.jpg")'
})

function jump(e){
    let pressed = e.code;
    console.log(pressed)
    if(pressed === "Space"){
        console.log("kliki")
        console.log(state)
        if(state == 1 ){
            player.classList.add("jump")
            setTimeout(function() { player.classList.remove("jump")},1000)
            scoring();
        }
    }
    if(pressed === "Escape"){
        if(obst.style.animationPlayState != "paused"){
                 obst.style.animationPlayState = "paused"
                 state = 0;
                 paus.innerText = "GRA ZATRZYMANA"
                }else{
                    obst.style.animationPlayState = "running"
                    state = 1;
                    paus.innerText = ""
                }
    }

   

    
}
function scoring(){

    points += 1;
    score.innerText = points
}

gameLoop();

 
function reload(){
    points = 0;
    score.innerText = "0";
    EndgameScreen.style.display = "none";
    screenOfRunning.style.display = "block";
    obst.style.animationDelay = "2s"; 
    setTimeout(function() { obst.classList.add("moving")},500)
    
}
function BackToBack(){
    EndgameScreen.style.display = "none";
    screenOfRunning.style.display = "none";
    menemu.style.display = "block"
    kontener.style.backgroundImage = 'none'
    kontener.style.backgroundColor = 'aqua'
   
  
    state = 3;
}
function EndThatGame(){

    EndgameScreen.style.display = "block";
    screenOfRunning.style.display = "none";
    Messege.innerText = points;
}




function gameLoop(){
    let timer = 2;
    let CurrentSprite = "hydrant.png"
    window.requestAnimationFrame(gameLoop)
    const obstPos = obst.getBoundingClientRect();
    const  PlayerPos = player.getBoundingClientRect();
    x = Math.round(obstPos.top)
    y = Math.round(PlayerPos.bottom)
    for(let i = 1; i<4; i++){

    if( Math.round(obstPos.left)+i == Math.round(PlayerPos.right) && Math.round(PlayerPos.bottom) >= Math.round(obstPos.top)){
        state = 1;
        EndThatGame();
    }  
  }


  if(points > 9){
    obst.style.animationDuration = "1.5s";
    timer = 1500;
  }
  if(points < 10){
    obst.style.animationDuration = "2s";
    timer = 2000;
  }





} 
