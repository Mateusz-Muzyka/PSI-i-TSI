
const tablica = document.querySelectorAll("th")
let i = 0;
let p = 0;
let osoba = 1;
const kolejka = document.getElementById('kolejka');
console.log(tablica);
for(i; i<tablica.length; i++){
    tablica[i].addEventListener('click', change)

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
    
    switch()
}
