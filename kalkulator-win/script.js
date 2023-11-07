



let L1 = null;
let L2 = null;
let DZ = null;
let P = null;

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
				ekran.value = ("1")
/* 				if(L1 == null){
					
					L1 = '1';
				} else{
				if(L1 !==null && DZ == null){
				L1 += '1'}
				}else {
					if(L2 == null)
						L2 = '1'
					}else {
					L2 += '1'
					
					}
				 */
			break;
			
			
			case "2":
				ekran.value = ("2")
			break;
			
			case "3":
				ekran.value = ("3")
			break;
			
			case "4":
				ekran.value = ("4")
			break;
			
			case "5":
				ekran.value = ("5")
			break;
			
			case "6":
				ekran.value = ("6")
			break;
			
			case "7":
				ekran.value = ("7")
			break;
			
			case "8":
				ekran.value = ("8")
			break;			
			case "9":
				ekran.value = ("9")
			break;	
			
			case "0":
				ekran.value = ("0")
			break;	

			case "+":
				ekran.value = ("+")
				
				DZ = "dodawanie"
			break;		

			case "-":
				ekran.value = ("-")
			break;		

			case "*":
				ekran.value = ("*")
			break;		

			case "/":
				ekran.value = ("/")
			break;		

			case "%":
				ekran.value = ("%")
			break;	
			
			case "=":
				ekran.value = ("=")
			break;				
		}
		
	}