$(document).ready(function() {
	init();
});


function init()
{

	jQuery("#btn-obtener-bingo").on('click', function(e){
		e.preventDefault();
		numeros = obtenerNumerosRandom();
		clase 	= '.table-basica';

		mostrarResultadosBingo(clase, numeros);
		$(".resultado").html("");
		$("#verifica-tablero-resultado").attr('value', 1);
	});
	
	jQuery("#btn-resultado").on("click", function(e){
		e.preventDefault();


		var tablero = $("#verifica-tablero-resultado").val();
		// console.log(tablero);

		if (tablero== 0) {
			alert("No tenemos resultados de Bingo");
			return false;
		}
		numero = $("#numeroparticipantes").val();
		$(".resultado").html("");
		for (var i = 0; i < numero; i++) {
			generarTablaBingo(i);
		}
	})
}



function reordenarNumero(lista) {
	lista = lista.sort(function() {

		return Math.random() - 0.5
	});
	return lista;
}


function mostrarResultadosBingo(clase, numero) {

		var primeraFila 	= reordenarNumero(numero.slice(0, 15));
		var segundaFila 	= reordenarNumero(numero.slice(16, 30));
		var terceraFila 	= reordenarNumero(numero.slice(31, 45));
		var cuartaFila 		= reordenarNumero(numero.slice(46, 60));
		var quintaFila 		= reordenarNumero(numero.slice(61, 75));


		armarBingo(clase, primeraFila, "B");
		armarBingo(clase, segundaFila, "I");
		armarBingo(clase, terceraFila, "N");
		armarBingo(clase, cuartaFila, "G");
		armarBingo(clase, quintaFila, "O");
		
		$(clase).find(".clasegratuita").attr('value', 'FREE');
}


function ordernarArreglo() {
	Array.prototype.sortNumbers = function(){
	    return this.sort(
	        function(a,b){
	            return a - b
	        }
	    );
	}
}

function obtenerNumerosRandom() {
	var lista = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59, 60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
	lista = lista.sort(function() {

		return Math.random() - 0.5
	});
	

	// MOSTRAMOS SOLO 25 DIGITOS
	var numeros = lista.slice(0, 75);


	var n = numeros.sort((a, b) => a - b );
	// console.log(n);
	return n;
	// return numeros;
}


function armarBingo(clase, numeros, letra) {
	var contador = 1;
	$.each(numeros, function( index, value ) 
	{
		  $(clase).find("."+letra+""+contador).attr('value', value);
		  contador++;
	});
}


function generarTablaBingo(numero) {
	
	var tabla = '<table id="" class="table-modelo-'+numero+'" style="">';
		tabla += '		<thead>';
		tabla += '			<tr>';
		tabla += '				<th>B</th>';
		tabla += '				<th>I</th>';
		tabla += '				<th>N</th>';
		tabla += '				<th>G</th>';
		tabla += '				<th>O</th>';
		tabla += '			</tr>';
		tabla += '		</thead>';
		tabla += '		<tbody>';

		for (var i = 1; i < 6; i++) 
		{
					
			var gratuito = '';
			var clasegratuita = '';
			if (i == 3) {
				gratuito = 'FREE';
				clasegratuita = 'clasegratuita';
			}
				
			tabla += '			<tr class="numeros">';
			tabla += '				<td><input type="text" name="" class="form-control B'+i+'" style="height: 50px; width: 50px;"></td>';
			tabla += '				<td><input type="text" name="" class="form-control I'+i+'" style="height: 50px; width: 50px;"></td>';
			tabla += '				<td><input type="text" name="" class="form-control '+clasegratuita+' N'+i+'" style="height: 50px; width: 50px;" value="'+gratuito+'"></td>';
			tabla += '				<td><input type="text" name="" class="form-control G'+i+'" style="height: 50px; width: 50px;"></td>';
			tabla += '				<td><input type="text" name="" class="form-control O'+i+'" style="height: 50px; width: 50px;"></td>';
			tabla += '			</tr>';
			
		
		}
					
			tabla += '		</tbody>';
			tabla += '	</table>';

		$(".resultado").append(tabla);
		claseN 	= '.table-modelo-'+numero;
		numeral = obtenerNumerosRandom();
		mostrarResultadosBingo(claseN, numeral);

}