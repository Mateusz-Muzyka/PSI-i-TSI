
/*

state == 0 --> start gry
state == 1 --> trwanie gry
state == 2 --> koniec gry + zawieszenie działania


*/







const tablica = document.querySelectorAll("th")
const table = document.getElementById("table")
const startscreen = document.getElementById("startscreen")
const endscreen = document.getElementById("endscreen")
const btn1 = document.getElementById("btnStart")
const btnEnd = document.getElementById("btnEnd")
const text = document.getElementById("text")
const Winner = document.getElementById("playerWin")

btnEnd.addEventListener("click", restart)


let state = 0;

let schema = [
//w wierszach
   "1,1,1,0,0,0,0,0,0",
   "0,0,0,1,1,1,0,0,0",
   "0,0,0,0,0,0,1,1,1",
//w kolumnach
   "1,0,0,1,0,0,1,0,0",
   "0,1,0,0,1,0,0,1,0",
   "0,0,1,0,0,1,0,0,1",
//na ukos
   "1,0,0,0,1,0,0,0,1",
   "0,0,1,0,1,0,1,0,0",
//reszta kombinacji
    //nieskończenie wiele;
   
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

//zmiana kolejki
function change(){
 if(state != 2){
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
}

function start(){
    startscreen.style.display = "none";
    table.style.display = "block";
    text.style.display = "block";
    btn1.style.display = "none";
    state = 1;
}


function gameloop(){
//dla X
    for(let i = 0; i<9; i++){
        if(tablica[i].innerText === "X"){
            SchemaOfScheme[i] = "1";
        }else if(tablica[i].innerText === "O" || tablica[i].innerText === ""){
                SchemaOfScheme[i] = "0";
            }
    }
//dla O
    for(let i = 0; i<9; i++){
        if(tablica[i].innerText === "O"){
            SchemaOfScheme2[i] = "1";
        }else if(tablica[i].innerText === "X" || tablica[i].innerText === ""){
                SchemaOfScheme2[i] = "0";
            }
    }
    console.log(SchemaOfScheme)
//sprawdzanie zwycięzcy
    for(let i = 0; i<schema.length;i++){
        console.log("SchemeofSheme " + SchemaOfScheme.join())
        console.log(schema[i])
       if(schema[i] === SchemaOfScheme.join()){
            endscreen.style.display = "block";
            btnEnd.style.display = "block";
            Winner.innerText = "1"
            state = 2;

       }
       if(schema[i] === SchemaOfScheme2.join()){
           endscreen.style.display = "block";
            btnEnd.style.display = "block";
            Winner.innerText = "2"
            state = 2;
       }
    }


}   
let helper = "";
//tablica dla X
let SchemaOfScheme = [];
//tablica dla O
let SchemaOfScheme2 = [];
function points(event){
    console.log(event.target.id)
    //wypisywanie na ekranie
    if(state != 2){
    switch(osoba){
        case 1:
            helper = "X";
        break;

        case 2:
            helper = "O";
        break;
    }
    document.getElementById(event.target.id).innerText = helper;
    gameloop();
   }
}




function restart(){
    btnEnd.style.display = "none";
    endscreen.style.display = "none";
    osoba = 2;
    state = 1;

    for(let i = 0; i<tablica.length;i++){
        tablica[i].innerText = "";
        SchemaOfScheme[i] = "";
    }
    change();
}