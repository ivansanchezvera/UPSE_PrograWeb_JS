console.log("Inicio del programa");
alert("Este es el juego del cuenta cuentos. Sigue las instrucciones.");
var sustantivo1 = prompt("Ingrese un Sustantivo");
var adjectivo1 = prompt("Ingrese un Adjectivo");
var verbo1 = prompt("Ingrese un verbo");

var cuento = "El " + adjectivo1 + " " + sustantivo1 + " queria " + verbo1 + " en el balcon de su caleta!";
document.write("<h1>Cuento</h1><p>" + cuento + "</p>");
console.log("Programa completado");