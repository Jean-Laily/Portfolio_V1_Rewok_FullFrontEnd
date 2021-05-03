<?php
	// Si la session existe ? alors activer le message de bienvenue
	if (isset($_SESSION ["id"]))
	{
		include("./login/bienvenue.php");

		// le bouton deconnect a été activé ? alors détruire la session et retourner à l'index
		if (isset($_POST ["deconnect"]))
		{
			session_unset ();
			session_destroy ();
			header("location: ./index.php");
		}
	}
	else
	{	
		/* Si les variables de type $POST existent 
		 * on affecte leurs valeurs aux variables @_$identifiant et @_$motDePasse?
		 * c'est variables sont dans une fonction()
		 * sinon proposer le formulaire de connexion.
		 */
		if (isset($_POST ["id"]) and isset($_POST ["pass"]))
		{
			$identifiant = $_POST ["id"];
			$motDePasse = $_POST ["pass"];

			/* Si le compte existe dans la table 
			 * alors ouvrir une session et passer en "estAutorise"
			 * sinon afficher le formulaire de connexion avec erreur
			 */
			$estAutorise = ceCompteExiste($identifiant, $motDePasse);

			if ($estAutorise)
			{
				session_start();
				
				$_SESSION ["id"] = $_POST ["id"];
				$_SESSION ["estAutorise"] = $estAutorise;

				header("location: ./index.php");
			}
			else
			{	
				include("./login/formulaireConnexionAvecErreur.php");
			}
		}
		else
		{
			include("./login/formulaireConnexion.php");
		}
	}
?>
