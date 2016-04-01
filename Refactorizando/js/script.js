var html = '';
var red;
var green;
var blue;
var rgbColor;

function obtenerColorRGB()
{
	return Math.floor(Math.random() * 256 );
}

for (var i = 0; i < 10; i++) {
	red = obtenerColorRGB();
	green = obtenerColorRGB();
	blue = obtenerColorRGB();
	rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);