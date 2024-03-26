
const tablica = document.querySelectorAll("th")
const table = document.getElementById("table")
const startscreen = document.getElementById("startscreen")
const btn1 = document.getElementById("btnStart")
const text = document.getElementById("text")

let schema = [
    "1,1,1,0,0,0,0,0,0",

]

let i = 0;
let p = 0;
let osoba = true;
btn1.addEventListener('click',start);
const kolejka = document.getElementById('kolejka');
console.log(tablica);
for(i; i<tablica.length; i++){
    tablica[i].addEventListener('click', change)
    tablica[i].addEventListener('click', points)

}
function change(){
    
    if(osoba == 1){
        osoba = 2;
        kolejka.innerText = 2;
        console.log('1');
    }else if(osoba == 2){
        osoba = 1;
        kolejka.innerText = 1;
        console.log('2');
    }
}

function start(){
    startscreen.style.display = "none";
    table.style.display = "block";
    text.style.display = "block";
    btn1.style.display = "none";
}


function gameloop(){

}

function points(event){
    console.log(event.target.id)
}
