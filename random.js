function tiraDados(){
	var dado = Math.floor(Math.random() * 6) + 1;
	return dado;
}

alert("Tiramos 3 dados: ");
alert(tiraDados());
alert(tiraDados());
alert(tiraDados());
