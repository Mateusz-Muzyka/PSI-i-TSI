



let L1 = null;
let subL1 = null;
let L2 = null;
let subL2 = null;
let DZ = null;
let P = null;
let g = null;
let a = null;

const ekran = document.querySelector('#ekran')
const guz = document.querySelectorAll(".but")
	console.log(guz)

for(let i=0; i< guz.length; i++){
	guz[i].addEventListener('click', function(event){licz(event)})
	
}
	function licz(event){
		
		//console.log(event.target.innerText)
		switch(event.target.innerText){
			
			
			case "1":
				
				if(L1 == null || L1 != null && g == 1){
					g = 0;
					a = 1;
					L1 = 1;
					ekran.value = ("1")
					}
				else if(L1 != null && a == 0)	
					L2 = 1;
					ekran.value = ("1")
				if(L1 != null && a == 1){
					
					ekran.value = ("1" + "1")
					L1 = 11;
				}
				 
			break;
			
			
			case "2":
				ekran.value = ("2")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 2;}
				else	
					L2 = 2;
			break;
			
			case "3":
				ekran.value = ("3")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 3;}
				else	
					L2 = 3;
			break;
			
			case "4":
				ekran.value = ("4")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 4;}
				else	
					L2 = 4;
			break;
			
			case "5":
				ekran.value = ("5")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 5;}
				else	
					L2 = 5;
			break;
			
			case "6":
				ekran.value = ("6")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 6;}
				else	
					L2 = 6;			
			break;
			
			case "7":
				ekran.value = ("7")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 7;}
				else	
					L2 = 7;
			break;
			
			case "8":
				ekran.value = ("8")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 8;}
				else	
					L2 = 8;
			break;			
			case "9":
				ekran.value = ("9")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 9;}
				else	
					L2 = 9;
			break;	
			
			case "0":
				ekran.value = ("0")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 0;}
				else	
					L2 = 0;
			break;	

			case "+":
				ekran.value = ("+")
				
				DZ = L1 + L2;
				g = 0;
				a = 0;
			break;		

			case "-":
				ekran.value = ("-")
				DZ = L1 - L2;
			break;		

			case "*":
				ekran.value = ("*")
				DZ = L1 * L2;
			break;		

			case "/":
				ekran.value = ("/")
				DZ = L1 / L2;
			break;		

			case "%":
				ekran.value = ("%")
				DZ = L1 % L2;
				P = parseInt(DZ)
				ekran.value = (P)
			break;	
			
			case "=":
				
				P = parseInt(DZ)
				ekran.value = (P)
				
				
			break;		

			case "C/CE":
				DZ = 0;
				L1 = null;
				L2 = null;
				ekran.value = (null)
				
			case "MRC":
				a = 0;
		}
		
	}