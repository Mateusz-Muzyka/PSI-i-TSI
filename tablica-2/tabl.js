const users = "Jan_Kowalski,Wiesław_Nowak,Nazar_Boiko,Oskar_Laga,Marek_Połata,Maks_Kleinert,Bożydar_Terkam,Bartłomiej_Bielski,Bartosz_Joniec,Leonard_Gustawski"
const people = users.split(",")
const MyList = document.getElementById('lista')
	for(let i=0; i<people.length; i++)
	{
		const newElement = document.createElement('li')
		const zakres = people[i].split("_")
		
		newElement.innerText = zakres[0] + ' ' + zakres[1] + '|' + zakres[0].indexOf('a');
		MyList.appendChild(newElement);
	
	}
	document.write("</table>")