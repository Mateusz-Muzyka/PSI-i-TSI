const imiona=["Ala", "Ela", "Ula", "Aga"]
const wiek=["17", "16", "19", "13"]
document.write('<hr>' + "to jest for:")
for(let i = 0; i<4; i++){
	
	document.write('<p>' + imiona[i] + " ma " +  wiek[i] + " lat" + '</p>')
	
}
let i = 0;
document.write('<hr>' + "to jest while")

while(i<4){
	 document.write('<p>' + imiona[i] + " ma " +  wiek[i] + " lat" + '</p>')
	 i++
}

document.write('<hr>' + "to jest do...while")
 i = 0;
do{
	 document.write('<p>' + imiona[i] + " ma " +  wiek[i] + " lat" + '</p>')
	 i++	
}
while(i<3)