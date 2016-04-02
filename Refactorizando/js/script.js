/*
Este programa muestra varios colores RGB al azar por pantalla.
Fue hecho para demostrar la utilidad de los ciclos for y la refactorizacion.
Principio DRY.
*/
var html = '';
var rgbColor;

//Devuelve cualquier color RGB al azar
function obtenerColorRGB()
{
	return rgbColor = 'rgb(' + obtenerColor() + ',' + obtenerColor() + ',' + obtenerColor() + ')';
}

//Obtiene un color individual para formar el color RGB
function obtenerColor()
{
	return Math.floor(Math.random() * 256 );
}

//Muestra varios colores RGB por pantalla
for (var i = 0; i < 10; i++) {
	rgbColor = obtenerColorRGB();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);