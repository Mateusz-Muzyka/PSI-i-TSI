const points = document.getElementById("score");
const guzik = document.getElementById("button");
const czas = setInterval(combo, 3000);
const fire = document.getElementById("fire")
const fire2 = document.getElementById("fire2")
let y = 0;
let buddie = 0;
let meter = 0;
guzik.addEventListener("click", addpoints);
guzik.addEventListener("click", combo);
let i = 0;
function addpoints(){
	buddie = buddie+1;
	i = i+1;
	points.innerText = i;
	meter = meter+1;
}

function combo(){

	if(buddie > 3 && czas<3){
		fire.classList.remove("hide");
		fire.classList.add("unhide");
		buddie = 0
		fire2.innerText = meter;
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