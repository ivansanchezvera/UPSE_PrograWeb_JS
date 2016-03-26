function numeroAlAzarHastaLimite( limite ){
	var num = Math.floor(Math.random() * limite) + 1;
	return num;
}

var limite = parseInt(prompt("Ingrese un limite superior para el numero al azar"));
alert("Su numero al Azar es: " + numeroAlAzarHastaLimite(limite));

