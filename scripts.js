console.log("Inicio del programa");
var numUsuario = prompt("Ingrese un numero: ");
var aleatorio = Math.floor(Math.random() * parseInt(numUsuario)) + 1;
alert("El numero aleatorio es: " + aleatorio);
console.log("Programa completado");