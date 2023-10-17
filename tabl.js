document.write("<table id='table'>")
	let x = 0;
for(let i=0; i<8; i++){
	document.write('<tr>')
	for(let i=0; i<8; i++){
		
		
		if(i % 2 == 0){
			document.write("<td class='white'>"+i+"</td>");
			
		}
		else{
			document.write("<td class='black'>"+i+"</td>");
			
		}
	}
	document.write('</tr>')
}	
	
	document.write("</table>")

