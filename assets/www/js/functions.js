function calculaCombustivel(){
	var valor_etanol = $('#etanol').val();
    var valor_gasolina = $('#gasolina').val();  

    var resultado = valor_etanol/valor_gasolina*100;
	
	if(resultado > 70.00) {
		$("#resultado").val('Gasolina');
	} else {
		$("#resultado").val('Etanol');
	}
}
