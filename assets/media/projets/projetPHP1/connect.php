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
    <link rel="stylesheet" href="./styles.css" />
</head>

<body>
    <h1 class="titre">Projet PHP 1</h1> <br />
    <div class="proposition">
        <h3>Vous pouvez choisir d'entrée votre prénom et un nombre</h3>
        <h3>ou</h3>
        <h3>bien de choisir les Prénoms suivant</h3>
    </div>
    <br>
    <div class="lien">
        <?php
				echo "<p><a href=\"http://localhost/portfolio/content/media/projets/projetPHP1/index.php?prenom=John&TM=4\" target=\"_blank\">John</a></p>";
				echo "<p><a href=\"http://localhost/portfolio/content/media/projets/projetPHP1/index.php?prenom=Paul&TM=5\" target=\"_blank\">Paul</a></p>";
				echo "<p><a href=\"http://localhost/portfolio/content/media/projets/projetPHP1/index.php?prenom=George&TM=6\" target=\"_blank\">George</a></p>";
				echo "<p><a href=\"http://localhost/portfolio/content/media/projets/projetPHP1/index.php?prenom=Ringo&TM=7\" target=\"_blank\">Ringo</a></p>";
        ?>
    </div>
    <div class="formBox">
        <h2>Login</h2>
        <form action="index.php" method=GET">
            <div class="inputBox">
                <input type="text" name="prenom" id="prénom" placeholder="Ex: toto" />
                <label for="prénom">Prénom</label>
            </div>

            <div class="inputBox">
                <input type="number" name="TM" id="param" placeholder="Ex : 2" min="1" max="50" />
                <label for="param">Nombre</label>
            </div>

            <p> <input type="submit" value="Envoyer"></p>
        </form>
    </div>
</body>

</html>
