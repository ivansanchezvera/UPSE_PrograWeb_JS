function numeroAlAzarEntreLimites( limiteInferior, limiteSuperior ){
	//Verficiando que sean numeros
	if(isNaN(limiteInferior)||isNaN(limiteSuperior))
	{	//Lanzando errores
		throw new Error("Valor ingresado no corresponde a un numero");;
	}

	var num = Math.round(Math.random() * (limiteSuperior-limiteInferior)) + limiteInferior;
	return num;
}

var limiteSuperior = prompt("Ingrese un limite superior para el numero al azar");
var limiteInferior = prompt("Ingrese un limite inferior para el numero al azar");

alert("Su numero al Azar es: " + numeroAlAzarEntreLimites(parseInt(limiteInferior),parseInt(limiteSuperior)));

