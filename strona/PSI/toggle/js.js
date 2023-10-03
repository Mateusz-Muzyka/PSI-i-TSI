const bd=document.body
let Dark = true;
function zmien(){
	
	bd.style.background = "grey";
	bd.style.color = "white";
	
}


function zmien2(){
	bd.style.background = "White";
	bd.style.color = "grey";
}

function sprawdzenie(){
if(Dark == true){
	zmien();
	document.getElementById("guzior").innerHTML = "jasny"
	Dark = false;
} else {
	zmien2();
	document.getElementById("guzior").innerHTML = "ciemny"
	Dark = true
}
}