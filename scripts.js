console.log("Inicio del programa");

var segundosPorMinuto = 60;
var minutosPorHora = 60;
var horasPorDia = 24;
var diasPorSemana = 7;
var semanasPorAnio = 52;

var segundosPorDia = segundosPorMinuto * minutosPorHora * horasPorDia;
document.write("<h1>Calculadora del Tiempo</h1><p>Hay " + segundosPorDia
	+ " en un dia</p>");


console.log("Programa completado");