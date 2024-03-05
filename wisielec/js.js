const plansza = document.getElementById('plansza');
const fraza = document.getElementById('fraza');
const slowa = document.querySelectorAll('.slowo')
const ekran = document.getElementById('ekran');
const powiadomienie = document.getElementById("popup");
let p = 0;
let delta = true;
let klikniety = null;
let stan = 0;


let haslo = [
  "banan",
  "kiwi"
];


let b = haslo.length - 1;
console.log(b)
let losowe = Math.round(Math.random() * b);
console.log(haslo[losowe])
console.log(losowe)



let wylosowany = haslo[losowe]
let weto = String(wylosowany.length)
for(let a = 0; a < weto; a++){
  console.log(wylosowany.charAt(a))
  slowa[a].style.display = "flex";
  slowa[a].classList.add('slowa2');
}

const slowa2 = document.querySelectorAll('.slowa2')

const teksty = {
  start:{
    title: "WISIELEC",
    desc: "lorem",
    btn: "START"
    
  },
  wygrana:{
    title: "WYGRANA!",
    desc: "lorem",
    btn: "SPRÓBUJ PONOWNIE"
  },
  przegrana:{
    title: "PRZEGRANA!",
    desc: "lorem",
    btn: "SPRÓBUJ PONOWNIE"
  }
};

let imgs = [  
  "assets/01.png",
  "assets/02.png",
  "assets/03.png",
  "assets/04.png",
  "assets/05.png",
  "assets/06.png",
  "assets/07.png",
  "assets/08.png",
  "assets/09.png",
  "assets/10.png"
];

for(let q = 0; q < slowa2.length; q++){
  console.log(slowa2.length)
  slowa2[q].addEventListener('input', sprawdz)
}


let licznik = null;
function sprawdz() {
    // fraza.style.backgroundColor = "aqua";
    // for (let i = 0; i < slowa2.length; i++) {
    //     slowa2[i].style.backgroundColor = "aqua";
    //   }
      

        
      // if(delta == false){
      licznik++
      if(licznik < imgs.length){
      const HP = document.createElement('img')
      HP.src = imgs[licznik]
      HP.classList.add('wisielec');
      ekran.appendChild(HP)}else{
        endgame();
      }
    // }

    }

    
function endgame(){
  if(p == 0){
    alert('Koniec gry! przegrales!')
    p = 1;
  }
  for (let i = 0; i < slowa2.length; i++) {
    slowa2[i].readOnly = true;
  }
}
function kontrola(ST){
  const tytul = "<h1>" + teksty[ST].title + "</h1>"; 
  const opis = "<p>" + teksty[ST].desc + "</p>"; 

  powiadomienie.innerHTML = tytul + opis; 

};

switch(stan){
  case 0:
    kontrola("start");
  break;
  
  case 1:
    kontrola("wygrana");
  break;

  case 2:
    kontrola("przegrana");
  break;
}