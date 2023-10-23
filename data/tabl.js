document.write("<table id='table'>")
	let x = 0;

	let white = true;
	for(let i=0; i<8; i++){
		document.write('<tr>')

		for(let i=0; i<8; i++){
		
		
			if(white = true){
				document.write("<td class='white'>"+i+"</td>");
				white = false;
			}
			else{
				document.write("<td class='black'>"+i+"</td>");
				white = true;
			}
		}
	document.write('</tr>')
}	
	
	document.write("</table>")

