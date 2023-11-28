const users = "Jan_Kowalski,Wiesław_Nowak,Nazar_Boiko,Oskar_Laga,Marek_Połata,Maks_Kleinert,Bożydar_Terkam,Bartłomiej_Bielski,Bartosz_Joniec,Leonard_Gustawski"
const peo = users.replaceAll("_",",");
const people = peo.split(",")
let x = 0
	document.write("<table>")
	document.write("<tr>")
	document.write("<th>")
	document.write("Lp.")
	document.write("</th>")
	document.write("<th>")
	document.write("Imię")
	document.write("</th>")
	document.write("<th>") 
	document.write("Nazwisko")
	document.write("</th>")
	document.write("</tr>")	
	for(let i=0; i<20; i++)
	{
		x = x + 1
		o = i + 1
		document.write("<tr>")
		document.write("<td>")
		document.write(x)
		document.write("</td>")	
		if(i % 2 == 0){
			document.write("<td>")
			document.write(people[i])
			document.write("</td>")
			document.write("<td>")
			document.write(people[o])
			document.write("</td>")
		}else{	
			document.write("<td>")
			document.write(people[i])
			document.write("</td>")
			document.write("<td>")
			document.write(people[o])
			document.write("</td>")
		}
		i = i + 1;
	}
	document.write("</table>")