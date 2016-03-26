/*
Este programa pregunta 5 cosas*/
console.log("Inicio del programa");
var preg1 = prompt("En que año se fundo la UPSE?");
var preg2 = prompt("Pais donde murio Bolivar?");
var preg3 = prompt("JS es un lenguaje compilado, si o no?");
var preg4 = prompt("Cual es el Pais con mas habitantes en el mundo?");
var preg5 = prompt("Si Necesita Reggaeton?");
var puntaje = 0;
if(preg1 == '1998')
{
	puntaje++;
}

if(preg2.toLowerCase() == 'colombia')
{
	puntaje++;
}

if(preg3.toLowerCase() == 'no')
{
	puntaje++;
}

if(preg4.toLowerCase() == 'china')
{
	puntaje++;
}

if(preg5.toLowerCase() == 'dale')
{
	puntaje++;
}

if(puntaje>4){
	alert("Medalla de oro");
}else if(puntaje>2){
	alert("Medalla de plata");
}else if(puntaje>0){
	alert("Medalla de bronce");
}else{
	alert("LOOOOOOOOOOSEEEEEEER!");
}





console.log("Programa completado");