var persona = {
	nombre: "Ivan",
	pais: "Ecuador",
	edad: 27,
	laborando: true,
	habilidades: ["Java", "C#", "C++", "Python", "JavaScript", "R"]
};

function printHTML(mensaje)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

var saludo = "<p>Hola " + persona.nombre + " bienvenido</p>";
saludo += "<p>Como estan las cosas en " + persona.pais + "?</p>";
persona.nombre = "ProgramadorVagabundo";
saludo += "<p>Tu nombre de usuario es: " + persona.nombre + "</p>";
saludo += "<p>Tu edad pronto sera " + (persona.edad+1) + "</p>";
saludo += "<p>Tienes al momento " + persona.habilidades.length + " habilidades</p>";
saludo += "<p>Las habilidades son: " + persona.habilidades.join(", ") + "</p>";
printHTML(saludo);