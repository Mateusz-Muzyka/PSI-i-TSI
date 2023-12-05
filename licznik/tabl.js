
	const area = document.getElementById("arena");
	const meter = document.getElementById("licznik");
	
function licznik1(){
	let i = area.value
	console.log(i)

	
	let spacja = i.split(' ')
	let ile = spacja.length
	console.log(ile)
	console.log(spacja.length)
	meter.innerText = ile
	
	
	
	if(ile > 10){
		document.text
		alert("za dużo słów!")
		
		
	}
}
