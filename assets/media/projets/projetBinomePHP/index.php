<?php
	session_start();

	/* On fait appel a la fonction ceCompteExiste
	 * pour fournir depuis tableaux les comptes autorisé
	 * les données envoyer sont de type $POST 
	 */
	include("./fonction/mesFonctions.php");
	
	/* @$choixPage s'affiche selon les choix de navigation 
	 * si @choixPage existe et qu'il n'est pas null alors
	 * on initialise la variable @$choixPage avec @$_GET['choixPage'] qui detient les parametres
	 * sinon on renvoie false
	 */
	if (isset($_GET ["choixPage"]))
	{
		$choixPage = $_GET ["choixPage"];
	}
	else
	{
		$choixPage = false;
	}

	include("./structurePage/hautHTML.php");

	if (isset($_SESSION ["estAutorise"]) and $_SESSION ["estAutorise"])
	{
		$utilisateur = $_SESSION ["id"];

		include("./structurePage/navPageIdentifie.php" );

		switch ($choixPage)
		{
			case 1:
				include("./contenu/vues/maFormation.php");
				break;	
			case 2:
				include("./contenu/vues/formations.php");
				break;
			case 3:
				include("./contenu/vues/nosViennoiseries.php");
				break;
			case 4:
				include("./contenu/vues/formateurs.php");
				break;
			default:
				include("./contenu/vues/accueil.php");
				break;
		}
	}
	else
	{
		session_destroy();

		include("./structurePage/navPage.php" );

		switch ($choixPage)
		{
			case 1:
				include("./contenu/vues/formations.php");
				break;
			case 2:
				include("./contenu/vues/nosViennoiseries.php");
				break;
			case 3:
				include("./contenu/vues/formateurs.php");
				break;
			case 0:
				include("./contenu/vues/accueil.php");
				break;
		}
	}

	include("./login/connexion.php");
	include("./structurePage/basHTML.php");
?>