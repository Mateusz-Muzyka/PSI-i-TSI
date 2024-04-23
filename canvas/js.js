const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")



// ctx.beginPath();
// ctx.arc(280, 400, 80, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.fillStyle = "aliceblue";
// ctx.fill();

// ctx.beginPath();
// ctx.arc(280, 300, 60, 0, 2 * Math.PI);
// ctx.stroke();
// ctx.fillStyle = "aliceblue";
// ctx.fill();





// ctx.beginPath();
// ctx.arc(280, 200, 50, 0, 2 * Math.PI);
// ctx.fillStyle = "aaliceblue";
// ctx.stroke();
// ctx.fill();

// ctx.strokeRect(50,50,100,50);
// ctx.clearRect(50, 50, 100, 50);

let x=20,y=20,width=50,height=50;

for(let i = 0; i<7;i++){
   x = 20;
    for(let j = 0; j<6;j++){

        x = x+width
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    }
    y=y+height
}