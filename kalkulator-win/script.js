



let L1 = null;
let subL1 = null;
let L2 = null;
let subL2 = null;
let DZ = null;
let P = null;
let g = null;
let a = null;


let d = null;
let dd = null;
let o = null;
let pp = null;
let il = null;
let pr = null;

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
				
				d = 1;
				
				g = 0;
				a = 1;
			break;		

			case "-":
				ekran.value = ("-")
				o = 1;
				a = 1;
			break;		

			case "*":
				ekran.value = ("*")
				il = 1;
				a = 1;
			break;		

			case "/":
				ekran.value = ("/")
				dd = 1;
				a = 1;
			break;		

			case "%":
				
				ekran.value = ("%")
				pr = 1;
				a = 1;
			break;	
			
			case "=":
				
				
				
				
				if(pp == 1){
					if(L1 != null || L1 == 0){
					DZ = Math.sqrt(L1)
					console.log(L1)
				console.log(DZ)}
				else {
					DZ = Math.sqrt(L2)
					console.log(L2)
					console.log(DZ)
				}
					
			   }
				if(d == 1){
					DZ = parseInt(L1) + parseInt(L2)
				}
				
				if(dd == 1){
					DZ = L1 / L2
				}
				
				if(o == 1){
					DZ = L1 - L2;
				}
				
				if(il == 1){
					DZ = L1 * L2;				
				}
				
				if(pr == 1){
					pr = 0
				}
				
				ekran.value = (DZ)
				pp = null;
				o = null;
				d = null;
				dd = null;
				pr = null;
				il = null;
				L1 = null;
				L2 = null;
			break;		

			case "C/CE":
				DZ = 0;
				L1 = null;
				L2 = null;
				ekran.value = (null)
			break;
			
			case "MRC":
				a = 0;
				pp = null;
				o = null;
				d = null;
				dd = null;
				pr = null;
				il = null;
			break;
			

			case "√":
				ekran.value = ("√")
				
				pp = 1;
				
		}
		
	}
	
