const plansza = document.getElementById('plansza');
const fraza = document.getElementById('fraza');
const slowa = document.querySelectorAll('.slowo')
const ekran = document.getElementById('ekran')
plansza.addEventListener("keypress", sprawdz);
console.log(slowa)
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
let licznik = null;
function sprawdz() {
    fraza.style.backgroundColor = "aqua";
    for (let i = 0; i < slowa.length; i++) {
        slowa[i].style.backgroundColor = "aqua";
      }
      console.log(slowa)
      
      licznik++
      
      const HP = document.createElement('img')
      HP.src = imgs[licznik]
      HP.classList.add('wisielec');
      ekran.appendChild(HP)
    }