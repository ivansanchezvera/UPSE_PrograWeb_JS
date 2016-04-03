var preguntas = [];
preguntas.push(["Cuantos goles le metio Barcelona a Liga?", 5]);
preguntas.push(["Porque perdio Ecuador en Barranquilla?", "achilier"]);
preguntas.push(["Cuantas areas protegidas tiene el Ecuador?", 50]); //http://www.ambiente.gob.ec/areas-protegidas-3/
preguntas.push(["Cuantos años lleva Correa en el poder ejecutivo?", 9]);
preguntas.push(["Quien escribio la carta de Jamaica?", "bolivar"]);

//Imprime las respuestas, distinguiendo del tipo, correcta o incorrecta
function imprimirRespuestas(tipoRespuestas)
{
	var arregloRespuestas;
	var stringRespuestas = '';
	if(tipoRespuestas.toLowerCase()=="correctas" || tipoRespuestas.toLowerCase()=="incorrectas")
	{
		if(tipoRespuestas=="correctas")
		{
			arregloRespuestas = correctas;
		}else{
			arregloRespuestas = incorrectas;
		}

		if(arregloRespuestas.length<1)
		{
			stringRespuestas = "No hubo respuestas " + tipoRespuestas;
		}
		for (var i =0; i<arregloRespuestas.length; i++)
		{
			stringRespuestas += "<p><b>" + arregloRespuestas[i][0] + "</b><br>" + 
			arregloRespuestas[i][1] + "</p>";
			
			//Si la respuesta es incorrecta, agregar las respuesta verdadera
			if(tipoRespuestas=="incorrectas")
			{
				stringRespuestas+= "<i>La respuesta correcta era: " + 
				arregloRespuestas[i][2] + "</i>";
			}
		}
	}else{
		alert("error, vea consola!");
		throw new Error("Tipo de Respuesta no aceptado");
	}
	return stringRespuestas;
}

//Imprime todas el cuestionario, incluyendo respuestas correctas e incorrectas
function imprimirCuestionario()
{
	html += "<h3>Respuestas Correctas</h3>";
	html += imprimirRespuestas("correctas");
	html += '<h3 style="color:red;"">Respuestas Incorrectas</h3>';
	html += imprimirRespuestas("incorrectas");
	return html;
}

function printHTML(mensaje)
{
	//document.write(html);
	//Reemplazado por Get elementByID para tomar el nodo (Node Object) en el DOM
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

var respuestas = [];
var correctas = [];
var incorrectas = [];

//Preguntamos y procesamos las respuestas
for(var i=0; i<preguntas.length; i++)
{
	var respuestaSimple;
	do{
		respuestaSimple = prompt("Responda: " + preguntas[i][0]);
	}while(respuestaSimple=='')

	if(isNaN(respuestaSimple))
	{
		respuestas.push(respuestaSimple.toLowerCase());
	}else{
		respuestas.push(parseInt(respuestaSimple));
	}

	if(respuestas[i]==preguntas[i][1])
	{
		correctas.push(preguntas[i]);
	}else{
		incorrectas.push([preguntas[i][0],respuestas[i],preguntas[i][1]]);
	}
}

var html = "<h1>Pregunta Pregunton</h1>";
html += "<h2>Aqui el resultado de sus respuestas</h2>"
html += imprimirCuestionario();
printHTML(html);