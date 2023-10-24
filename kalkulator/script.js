/* let getElementById("x") */
const L1 = document.getElementById("x")
const L2 = document.getElementById("y")
const L3 = document.getElementById("wynik")

function jeden(){
	
	console.log(L1.value)
	
	
}

function dwa(){
	
	console.log(L2.value)
	
	
	
}

function wynik(){
	
	L3.value = L1.value+L2.value
	console.log(L3.value)
	
	
	
}