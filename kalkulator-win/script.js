


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
			
			
			default:
				
				if(L1 == null ){
					L1 = event.target.innerText;
					ekran.value = (L1)
					console.log(L2)
						console.log(L1)
						a = 0
					} else if (a == 0) {
						
						L1 += event.target.innerText;
						ekran.value = (L1)
						console.log(L2)
						console.log(L1)
					} else if (L2 == null && a == 1 && L1 != null) {
						
						L2 = event.target.innerText;
						ekran.value = (L2)
						console.log(L2)
						console.log(L1)
						
						
					} else {
						
						L2 += event.target.innerText;
						ekran.value = (L2)
						console.log(L2)
						console.log(L1)
					}
					
				 
			break;
			
			


			case "+":
				ekran.value = ("+")
				
				DZ = parseInt(L1) + parseInt(L2);
				g = 0;
				a = 1;
			break;		

			case "-":
				ekran.value = ("-")
				DZ = L1 - L2;
				a = 1;
			break;		

			case "*":
				ekran.value = ("*")
				DZ = L1 * L2;
				a = 1;
			break;		

			case "/":
				ekran.value = ("/")
				DZ = L1 / L2;
				a = 1;
			break;		

			case "%":
				
				ekran.value = ("%")
				DZ = L1 % L2;
				a = 1;
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
	
	/* 
	
	for(let i=0; i< guz.length; i++){
	guz[i].addEventListener('dblclick', function(event2){dublak(event2)})
	
}
	function dublak(event2) {
		
			switch(event.target.innerText){
			
			
			case "1":
				
				ekran.value = ("11")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 11;}
				else	
					L2 = 11;
				 
			break;
			
			
			case "2":
				ekran.value = ("22")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 22;}
				else	
					L2 = 22;
			break;
			
			case "3":
				ekran.value = ("33")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 33;}
				else	
					L2 = 33;
			break;
			
			case "4":
				ekran.value = ("44")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 44;}
				else	
					L2 = 44;
			break;
			
			case "5":
				ekran.value = ("55")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 55;}
				else	
					L2 = 55;
			break;
			
			case "6":
				ekran.value = ("66")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 66;}
				else	
					L2 = 66;			
			break;
			
			case "7":
				ekran.value = ("77")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 77;}
				else	
					L2 = 77;
			break;
			
			case "8":
				ekran.value = ("88")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 88;}
				else	
					L2 = 88;
			break;			
			case "9":
				ekran.value = ("99")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 99;}
				else	
					L2 = 99;
			break;	
			
			case "0":
				ekran.value = ("00")
				if(L1 == null || L1 != null && g == 1){
					g = 0;
				L1 = 00;}
				else	
					L2 = 00;
			break;	

			case "+":
				ekran.value = ("+")
				
				DZ = L1 + L2;
				g = 0;
				a = 1;
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
		 */
		
		
		
	
