/* let getElementById("x") */
const L1 = document.getElementById("x")
const L2 = document.getElementById("y")
const L3 = document.getElementById("wynik")


function suma(){
	let x = L1.value
	let y = L2.value
	sumnik = parseInt(x) + parseInt(y)
	console.log(sumnik)
	
	L3.value = sumnik
	
	
}

function odejmowanie(){
	let x = L1.value
	let y = L2.value
	sumnik = parseInt(x) - parseInt(y)
	console.log(sumnik)
	
	L3.value = sumnik
	
	
}

function iloczyn(){
	let x = L1.value
	let y = L2.value
	sumnik = parseInt(x) * parseInt(y)
	console.log(sumnik)
	
	L3.value = sumnik
	
	
}

function iloraz(){
	let x = L1.value
	let y = L2.value
	sumnik = parseInt(x) / parseInt(y)
	console.log(sumnik)
	
	L3.value = sumnik
	
	
}