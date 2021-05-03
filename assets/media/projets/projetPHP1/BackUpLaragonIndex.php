<?php
  if (!empty($_GET['q'])) {
    switch ($_GET['q']) {
      case 'info':
        phpinfo(); 
        exit;
      break;
    }
  }
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Laragon</title>

        <link href="https://fonts.googleapis.com/css?family=Karla:400" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body 
			{
                margin: 0;
                padding: 0;
                width: 100%;
				display: table;
                font-weight: 100;
                font-family: 'Karla';
<!---			background: url(montagne.jpg);
				background-size: cover;   --->
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }

            .opt {
                margin-top: 30px;
            }

            .opt a {
              text-decoration: none;
              font-size: 150%;
            }
            
            a:hover {
              color: red;
            }
			
			p
			{
				font-size: 110%;
			}
			<!---	
			.formBox
			{
				position: absolute;
				top:50%;
				left:50%;
				transform:translate(-50%, -50%);
				width: 400px;
				padding: 40px;
				background: rgba(0,0,0,.8);
				box-sizing: border-box;
				box-shadow: 0 15px 25px rgba()0,0,0,.5);
				border-radius: 10px;
					
			}
--->
			.lien
			
			{
				display: -webkit-box;
				flex-direction: column;
				top: 20%;
				left: 50%;
				
			}
			
        </style>
    </head>
	
    <body>
        <div class="container">
            <div class="content">
                <div class="title" title="Laragon">Laragon Laily</div> <br />
				
				<div class="lien">
					<?php
					
//$prenom = "DC2019";
/*echo "
<ul>";
for($i=1;$i<6;$i++)
{	
echo '
<li>' .$i .' Bonjour ' .$prenom .'</li>';
}
echo "
</ul>";

// autre test					
for($i=1;$i<6;$i++)
{	
echo "<h$i> Bonjour $prenom </h$i>";
}
*/
					// autre again
					
						echo "<p><a href=\"http://localhost/monphp1/index.php?prenom=John&TM=4\" target=\"_blank\">John</a></p>";
						echo "<p><a href=\"http://localhost/monphp1/index.php?prenom=Paul&TM=5\" target=\"_blank\">Paul</a></p>";
						echo "<p><a href=\"http://localhost/monphp1/index.php?prenom=George&TM=6\" target=\"_blank\">George</a></p>";
						echo "<p><a href=\"http://localhost/monphp1/index.php?prenom=Ringo&TM=7\" target=\"_blank\">Ringo</a></p>";
					
					?>
				</div>
				
				<div class="formBox">
					<h2>Login</h2>
					<form action="monphp1/index.php" method=GET">
						<div class="inputBox">
							<input type="text" name="prenom" id="prénom" placeholder="Ex: toto"/>
							<label for="prénom">Prénom</label>
						</div>
						
						<div class="inputBox"> 
							<input type="number" name="TM" id="param" placeholder="Ex : 2" min="1" max="50"/>
							<label for="param">Nombre</label>
						</div>
						
						<p> <input type="submit" value="Envoyer"></p>
					</form>
				</div>
				
<!---				test d'affichage d'une map 
				<iframe id="maptest">
					title ="Gmaps"
					width="300"
					weigth="200"
					src="https://www.google.fr/maps/place/R%C3%A9union/@-21.1344716,55.2471209,10z/data=!3m1!4b1!4m5!3m4!1s0x2178778110b8e43b:0x4a7f8e89ecdbeaf9!8m2!3d-21.115141!4d55.536384"
				</iframe>
-->				

				<!---  affichage text suivant!
					<div class="info"><br />
                      <?php print($_SERVER['SERVER_SOFTWARE']); ?><br />
                      PHP version: <?php print phpversion(); ?>   <span><a title="phpinfo()" href="/?q=info">info</a></span><br />
                      Document Root: <?php print ($_SERVER['DOCUMENT_ROOT']); ?><br />

					</div>
				
					<div class="opt">
					<div><a title="Getting Started" href="https://laragon.org/docs">Getting Started</a></div>
					</div>
				--->
            </div>

        </div>
    </body>
</html>