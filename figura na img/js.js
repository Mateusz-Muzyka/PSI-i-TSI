const sek0 = document.getElementById('s0');
const sek1 = document.getElementById('s1');
const sek2 = document.getElementById('s2');

	sek0.addEventListener("click", przesun);
	sek1.addEventListener("click", przesun);
	sek2.addEventListener("click", przesun);

function przesun(){
	
	this.style.zIndex="1";
	
	
	console.log(this)
	
	}
