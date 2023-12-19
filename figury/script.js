const niebieski = document.getElementById("bot");
const zolty = document.getElementById("mid");
const czerwony = document.getElementById("top");

czerwony.addEventListener("click", przesun);
zolty.addEventListener("click", przesun);
niebieski.addEventListener("click", przesun);

function przesun(event){
	let element = event.target;
	
	if(element.id == "bot"){
		niebieski.style.zIndex = 90;
		zolty.style.zIndex = 50;
		czerwony.style.zIndex = 40;
		console.log("ok");
	}	
	if(element.id == "mid"){
		niebieski.style.zIndex = 50;
		zolty.style.zIndex = 90;
		czerwony.style.zIndex = 60;
		console.log("ok");
	}	
	if(element.id == "top"){
		niebieski.style.zIndex = 50;
		zolty.style.zIndex = 60;
		czerwony.style.zIndex = 90;
		console.log("ok");
	}	
}