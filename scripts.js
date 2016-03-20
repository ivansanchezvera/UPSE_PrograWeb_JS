console.log("Inicio del programa");
var adivinoCorrectamente = false;
document.write("<h1>Adivina el numero y gana un billo!</h1>");
var numeroAdivinable = Math.floor(Math.random() * 10) + 1;
var numeroUsuario = prompt("Que numero crees que es el secreto (del 1 al 10)");
if(parseInt(numeroUsuario)===numeroAdivinable)
{
	adivinoCorrectamente = true;
	
}

if(adivinoCorrectamente){
	document.write("<p>Ganaste un billo</p>");
}else{
	document.write("<p>Perdiste la apuesta pelad@. El numero correcto era: " 
		+ numeroAdivinable + "</p>");
}

console.log("Programa completado");