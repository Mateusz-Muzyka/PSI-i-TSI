const points = document.getElementById("score");
const guzik = document.getElementById("button");
const czas = setInterval(combo, 3000);
const fire = document.getElementById("fire")
const fire2 = document.getElementById("fire2")
const multi = document.getElementById("multiplier")
const buy = document.getElementById("buy")
const buy2 = document.getElementById("buy2")
const praca = document.getElementById("pracownik")
let y = 0;
let buddie = 0;
let meter = 0;
let multik = 1;
let giver = 1;
guzik.addEventListener("click", addpoints);
guzik.addEventListener("click", combo);
buy.addEventListener("click", Shop);
buy2.addEventListener("click", Shop);
let pkt = 0;
function addpoints(){
	buddie = buddie+1;
	giver = 1*multik;
	pkt = pkt+giver;
	points.innerText = pkt;
	meter = meter+1;
	giver = 1;
}

function combo(){
	fire2.innerText = meter;
	if(buddie > 3 && czas<3){
		fire.classList.remove("hide");
		fire.classList.add("unhide");
		buddie = 0
		clearInterval(czas);
		if(y == 0){setTimeout(EoC, 5000); y = 1;}
	}
}
function EoC(){
fire.classList.add("hide");
fire.classList.remove("unhide");
y = 0;
meter = 0;
}
let licznik = 10;
let p = 10;
function Shop(){

	if(pkt >= licznik){
		p = licznik;
		p = p/2
		pkt = pkt - licznik
		pkt = Math.round(pkt)
		licznik = licznik + p;
		multi.innerText = Math.round(licznik); 
		points.innerText = pkt;
		let erm = this.id
		console.log(erm)
		switch(erm){
			case "buy":
				multik = multik+1;
				
			break;
				
			case "buy2":
				let img = document.createElement('img')
				img.src = 'pracownik.png';
				praca.appendChild(img);
			break;
			}
	}else{
		let b = licznik - pkt;
		b = Math.round(b);
		let str = "demo"
		if(b == 1){
			str = " punkt"
		}else if(b > 1 && b < 5){
			str = " punkty"
		} else {
			str = " punktów"
		}
		
		blurt({
			title: 'BRAK ŚRODKÓW!', 
			text: 'brakuje ci ' + b  + str,
			type: 'success'});
	}

}