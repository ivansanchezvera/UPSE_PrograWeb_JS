var html = '';
var rgbColor;

function obtenerColorRGB()
{
	return rgbColor = 'rgb(' + obtenerColor() + ',' + obtenerColor() + ',' + obtenerColor() + ')';
}

function obtenerColor()
{
	return Math.floor(Math.random() * 256 );
}



for (var i = 0; i < 10; i++) {
	rgbColor = obtenerColorRGB();
	html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);