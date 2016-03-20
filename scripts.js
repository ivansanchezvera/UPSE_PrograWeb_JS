console.log("Inicio del programa");
document.write("<h1>Adivina el numero y gana un billo!</h1>");
var numeroAdivinable = Math.floor(Math.random() * 10) + 1;
var numeroUsuario = prompt("Que numero crees que es el secreto (del 1 al 10)");
if(parseInt(numeroUsuario)===numeroAdivinable)
{
	document.write("<p>Ganaste un billo</p>");
}else{
	document.write("<p>Perdiste la apuesta pelad@</p>");
}

console.log("Programa completado");