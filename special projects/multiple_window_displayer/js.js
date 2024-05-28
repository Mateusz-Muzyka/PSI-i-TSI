const w = document.getElementById("size") 
const h = document.getElementById("size2") 
const X = document.getElementById("PosX") 
const Y = document.getElementById("PosY") 
const arrow = document.getElementById("pointer")
const start = document.getElementById("starter")


let window1 = "index.html"
let window2 = "another.html"

let H1, H2;
let p1,p2;
let fullPath2
let filename2
let fullPath = window.location.pathname;
let filename = fullPath.split("/").pop();
if(filename = window1)
start.addEventListener("click",()=>{
    window.open(window2)
})



init()


function init(){
requestAnimationFrame(loop)
}
function loop(){
    
     fullPath2 =  window.location.pathname;
     filename2 =  fullPath2.split("/").pop();
    w.innerHTML = "innerWidth = " + window.innerWidth;
    h.innerHTML = "InnerHeight = " + window.innerHeight;
    X.innerHTML = "X = " + window.screenX
    Y.innerHTML = "Y = " +window.screenY
    if(filename == window1){
        p2 = window.screenY
        H1 = window.screenY;
    }
    if(filename2 == window2){
        p1 = window.screenY
        H2 = window.screenY;
    }

    if(filename == window1){
        // X.innerHTML = window.screenX
        
        H1 = H1 - p1;
        arrow.style.transform = 'rotate('+ p2 +'deg)';
        for(let i=0; i>5;i++){
            if((p1-p2)==0+i || (p1-p2)==0+i){
                arrow.style.transform = 'rotate('+ 0 + 'deg)';
            }
            if((p1-p2)==0-i || (p1+p2)==0-i ){
                arrow.style.transform = 'rotate('+ 0 + 'deg)';
            }
            
        }
    }
    
    if(filename2 == window2){
        // X.innerHTML = window.screenX
        
        H2 =  p2;
        if(p1 != p2)
            arrow.style.transform = 'rotate('+ p1 +'deg)';
        for(let i=0; i>5;i++){
            if((p1-p2)==0+i || (p1-p2)==0+i){
                arrow.style.transform = 'rotate('+ 0 + 'deg)';
            }
            if((p1-p2)==0-i || (p1+p2)==0-i ){
                arrow.style.transform = 'rotate('+ 0 + 'deg)';
            }
            
        }
    }

    
    requestAnimationFrame(loop)


}

