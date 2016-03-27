function numeroAlAzarEntreLimites( limiteInferior, limiteSuperior ){
	var num = Math.round(Math.random() * (limiteSuperior-limiteInferior)) + limiteInferior;
	return num;
}

var limiteSuperior = parseInt(prompt("Ingrese un limite superior para el numero al azar"));
var limiteInferior = parseInt(prompt("Ingrese un limite inferior para el numero al azar"));

alert("Su numero al Azar es: " + numeroAlAzarEntreLimites(limiteInferior,limiteSuperior));
