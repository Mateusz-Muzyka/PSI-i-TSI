window.addEventListener("keydown", jump);
const player = document.getElementById("player")
const obst = document.getElementById("obstacle")

function jump(e){
    let pressed = e.code;
    console.log(pressed)
    if(pressed === "Space"){
        console.log("klik");
        player.classList.add("jump")
        setTimeout(function() { player.classList.remove("jump")},1000)
       
    }
    
}

gameLoop();

function gameLoop(){
    window.requestAnimationFrame(gameLoop)
    // console.log("your ip: ",)
    const obstPos = obst.getBoundingClientRect();
    const PlayerPos = player.getBoundingClientRect();
    // console.log(obstPos.left)
    console.log(Math.round(obstPos.left))
    console.log(Math.round(PlayerPos.left))
    if( Math.round(obstPos.left) == Math.round(PlayerPos.left)){
        // alert("kolizja")
        console.log("rere")
    }
} 