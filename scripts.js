console.log("Inicio del programa");
var preguntas = 3;
var preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones.");
var sustantivo1 = prompt("Ingrese un Sustantivo. " + preguntasFaltantes);
preguntas -= 1;
preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
var adjectivo1 = prompt("Ingrese un Adjectivo " + preguntasFaltantes);
preguntas -= 1;
preguntasFaltantes = "Quedan " + preguntas + " preguntas.";
var verbo1 = prompt("Ingrese un verbo " + preguntasFaltantes);

var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " en el balcon de su caleta!";
document.write("<h1>Cuento</h1><p>" + cuento + "</p>");
console.log("Programa completado");