window.addEventListener("keydown", jump);
const player = document.getElementById("player")
const obst = document.getElementById("obstacle")
let points = 0;
function jump(e){
    let pressed = e.code;
    console.log(pressed)
    if(pressed === "Space"){
        console.log("klik");
        player.classList.add("jump")
        setTimeout(function() { player.classList.remove("jump")},1000)
        points += 1;
    }
    
}

gameLoop();



function gameLoop(){
    console.log(points)
    window.requestAnimationFrame(gameLoop)
    // console.log("your ip: ",)
    const obstPos = obst.getBoundingClientRect();
    const PlayerPos = player.getBoundingClientRect();
    // console.log(obstPos.left)
    // console.log(Math.round(PlayerPos.right))
    // console.log(Math.round(PlayerPos.left))
    // console.log(PlayerPos.bottom)

    for(let i = 1; i<4; i++){

    if( Math.round(obstPos.left)+i == Math.round(PlayerPos.right) && Math.round(PlayerPos.bottom) >= Math.round(obstPos.top)){
        alert("kolizja")
        console.log("rere")
    }
  }
} 
