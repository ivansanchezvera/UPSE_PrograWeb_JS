function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

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

