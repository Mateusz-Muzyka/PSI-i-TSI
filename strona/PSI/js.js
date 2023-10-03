let wiek = 15;
let komunikat;
if(wiek < 15){
	komunikat = "Jesteś dzieckiem";
	console.log(komunikat);
}

if(wiek > 15 && wiek < 18 ){
	komunikat = "Już niedługo będziesz dorosłym";
	console.log(komunikat);
}


if(wiek > 18 && wiek < 40){
	 komunikat = "Jesteś dorosły";
	console.log(komunikat);
}

if(wiek > 40){
	komunikat = "Jesteś stary";
	console.log(komunikat);
}