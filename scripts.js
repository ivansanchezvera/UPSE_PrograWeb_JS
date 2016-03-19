console.log("Inicio del programa");

var edad = prompt("Esta es la calculadora del tiempo. Ingrese su edad: ");
var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var diasPorSemana = 7;
var diasPorAnio = 365;
var semanasPorAnio = 52;

var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
var segundosVividos =  segundosPorDia * diasPorAnio * edad;
document.write("<h1>Calculadora del Tiempo</h1><p>Ud ha vivido ya mas de " 
	+ segundosVividos + " segundos. Aproveche su vida, no le queda ya mucho."
	+ "</p>");



console.log("Programa completado");