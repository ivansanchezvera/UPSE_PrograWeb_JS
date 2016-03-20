/*
Este programa simula un juego de adivinar un numero.
El numero a adivinar es escogido al comienzo y es un numero al azar.
El jugador tiene que adivinar el numero. Si no adivina al primer
intento, se le da una pista y puede intentar una segunda vez.
Si no adivina en 2 intentos es un LOOOOOOSEEEEEEER!
Este programa es para practicar condiciones IF-ELSE y comentarios.
*/
console.log("Inicio del programa");
var adivinoCorrectamente = false;
document.write("<h1>Adivina el numero y gana un billo!</h1>");
//Escogemos el numero a adivinar entre el 1 y el 10 inclusivo.
var numeroAdivinable = Math.floor(Math.random() * 10) + 1;
var numeroUsuario = prompt("Que numero crees que es el secreto (del 1 al 10)");
if(parseInt(numeroUsuario)===numeroAdivinable)
{
	adivinoCorrectamente = true;
	
}else if(parseInt(numeroUsuario)>numeroAdivinable)
{
	alert("Hey! Por alli dicen que el numero adivinable es menor que el que pusiste!");
	//Segunda oportunidad de adivinar
	var nuevoIntento = prompt("Intentalo de nuevo");
	if(parseInt(nuevoIntento)===numeroAdivinable)
	{
		adivinoCorrectamente = true;
	}
}else if(parseInt(numeroUsuario)<numeroAdivinable)
{
	alert("Me sapearon que el numero es mayor al que dijiste, apuestale con confianza!");
	//Segunda oportunidad de adivinar
	var nuevoIntento = prompt("Intentalo de nuevo");
	if(parseInt(nuevoIntento)===numeroAdivinable)
	{
		adivinoCorrectamente = true;
	}
}

if(adivinoCorrectamente){
	document.write("<p>Ganaste un billo</p>");
}else{
	document.write("<p>Perdiste la apuesta pelad@. El numero correcto era: " 
		+ numeroAdivinable + "</p>");
}

console.log("Programa completado");