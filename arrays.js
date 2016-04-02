/*
Este programa muestra una lista musical.
Sirve para demostrar el uso de arreglos y los metodos
push y unshift
*/

//Esta funcion arma el HTML una lista ordenada de elementos
function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

//Esta funcion imprime el HTML que le demos
function print(html) {
  document.write(html);
}

var playList = [];
playList.push("Strangers in the night");
playList.push("Mi conejito era tan bandidon");
playList.push("Borro Cassette", "Ginza");
playList.unshift("The girl from Ipanema");
playList.unshift("Soneros de Bailadores");

printList( playList );

