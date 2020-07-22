<?php 

define('VERSION', time());
?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="assets/js/jquery-1.11.3-jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="assets/js/all.js?v=<?= VERSION;?>" type="text/javascript" charset="utf-8"></script>
</head>
<body>
	
<div class="row">
	<div class="cabecera">
		<div class="col-sm-3">
			<input type="hidden" name="verifica-tablero-resultado" id="verifica-tablero-resultado" value="0">
			<a href="#" title="" class="btn btn-success btn-sm" id="btn-obtener-bingo">Obtener Número BINGO</a>

		</div>
	</div>



	<table id="" class="table-basica">
		<thead>
			<tr>
				<th>B</th>
				<th>I</th>
				<th>N</th>
				<th>G</th>
				<th>O</th>
			</tr>
		</thead>
		<tbody>
			<?php  
			for ($i=1; $i < 6; $i++) { 
				$gratuito = '';
				$clasegratuita = '';
				if ($i == 3) {
					$gratuito = 'FREE';
					$clasegratuita = 'clasegratuita';
				}
			?>
			<tr class="numeros">
				<td><input type="text" name="" class="form-control B<?php echo $i;?>" style="height: 50px; width: 50px;"></td>
				<td><input type="text" name="" class="form-control I<?php echo $i;?>" style="height: 50px; width: 50px;"></td>
				<td><input type="text" name="" class="form-control <?php echo $clasegratuita;?> N<?php echo $i;?>" style="height: 50px; width: 50px;" value="<?php echo $gratuito;?>"></td>
				<td><input type="text" name="" class="form-control G<?php echo $i;?>" style="height: 50px; width: 50px;"></td>
				<td><input type="text" name="" class="form-control O<?php echo $i;?>" style="height: 50px; width: 50px;"></td>
			</tr>
			<?php	
			}

			?>
			
		</tbody>
	</table>
</div>
<div class="row">
	<div class="participantes">
		<div class="col-sm-3">
			<form action="" method="post" accept-charset="utf-8">
				<input type="text" name="numeroparticipantes" id="numeroparticipantes" value="5">
				<input type="button" name="btn-resultado" id="btn-resultado" value="Ver Resultado Particpantes">

			</form>

		</div>

		<div class="resultado">
			

		</div>
	</div>
</div>


</body>
</html>