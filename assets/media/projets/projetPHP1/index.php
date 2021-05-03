<?php
	setlocale(LC_TIME, 'french');
	date_default_timezone_set("Indian/Reunion");	
	
	$date = utf8_encode(strftime('%d %B %Y'));
	$heure = strftime('%H:%M');
	
	
	$prenom = NULL;
	$tableDemandee = NULL;
	
	if(isset($_GET["TM"])) // si condition est null on affiche
	{
		$tableDemandee = $_GET["TM"];
		$prenom = $_GET["prenom"];	
	}
	$nombre1 = $tableDemandee +1;
	$nombre2 = $tableDemandee +2;
	$prec = $tableDemandee -3;
	$nexts = $tableDemandee +3;

	
	
		 
		?>

<!DOCTYPE html>
<html lang="fr">
	<head>
		<title>CSS Template</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="stylesheet" href="./styles.css" />
	</head>
	
	<body>

		<h2>CSS Template using Flexbox</h2>
		<p>In this example, we have created a header, three unequal columns and a footer. On smaller screens, the columns will stack on top of each other. Resize the browser window to see the responsive effect.</p>
		<p><strong>Note:</strong> Flexbox is not supported in Internet Explorer 10 and earlier versions.</p>

		<div class="header">
		
		<!-- partie php -->
		
		<?php	
			echo "$date";
			echo "</br>";
			echo "$heure";
			echo "<h2>Bonjour $prenom!</h2>";
			 
		?>
		
		</div>

		<div class="row">
			<div class="column side" style="background-color:#aaa;">
				
				<?php
				echo "<h3>Colonne 1: </h3>";
					if(isset($tableDemandee))
					{
						echo '<p>vous avez demandée: ' .$tableDemandee .'</p>';
						echo '<p>Je vais produire les tables de '.$tableDemandee .', ' .$nombre1 .' et ' .$nombre2 .'.</p>';
					}
					else
					{
						echo "<script>alert(\"Vous n'avez pas entré de paramètre\")</script>";
					}
				?>
			</div>
			
			<div class="column middle" style="background-color:#bbb;">
				
				<?php
                /* affichage des tables de multiplication sur 1 colonne */
					echo"<h3>Colonne 2: </h3>";
					if(isset($tableDemandee))
					{
							echo "<h3>TABLE de $tableDemandee</h3>";
							if($tableDemandee !== 0)
							{
                                /*boucle pour afficher de 0 à 10 max  */
								for ($i=0; $i<11; $i++)
								{
									$resultat = $i * $tableDemandee;
									echo '<p>'.$i .' fois ' .$tableDemandee .' , ' .$resultat .'</p>';
								}
								
							}
							
							echo "<hr>";
							echo "<h3>TABLE de $nombre1</h3>";
							
							if($nombre1 == $tableDemandee +1)
							{
								for ($i=0; $i<11; $i++)
								{
									$resultat = $i * $nombre1;
									echo '<p>'.$i .' fois ' .$nombre1 .' , ' .$resultat .'</p>';
								}
							}
							
							echo "<hr>";
							echo "<h3>TABLE de $nombre2</h3>";
							
							if($nombre2 == $nombre1 +1)
							{
								for ($i=0; $i<11; $i++)
								{
									$resultat = $i * $nombre2;
									echo '<p>'.$i .' fois ' .$nombre2 .' , ' .$resultat .'</p>';
								}
							}
							echo "<hr>";
					}
				?>
			
			 </div>
			 
			 <div class="column side" style="background-color:#ccc;">
				<?php 
					echo "<h3>Colonne 3</h3>"; /* Ce template est issu de  : <br />https://www.w3schools.com/css/css_templates.asp */
					
					if($nombre1 != 50)
					{
					echo "<p id=\"next\"><a href='http://localhost/portfolio/content/media/projets/projetPHP1/index.php?prenom=$prenom&TM=$nexts'>suivant</a></p>";
					}
					
					if($nombre2 != 0)
					{
					echo "<p id=\"prec\"><a href='http://localhost/portfolio/content/media/projets/projetPHP1/index.php?prenom=$prenom&TM=$prec'>précédent</a></p>";
					}
				?>
			 </div>
		</div>

		<div class="footer">
		
		<?php
			echo "<p>Au revoir $prenom!</p>";
		?>
		
		</div>
		
	</body>
</html>