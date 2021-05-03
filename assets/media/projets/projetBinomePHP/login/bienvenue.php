<!-- BUTTON + MSG BOX demande de confirmation de la déconnexion avec une instruction JS -->


<form method="post" action="./index.php">
    <img id="userImg" src="./contenu/media/image/user.png" alt="test">
    <div class="conteneurForm">
        <h2>Bienvenue <?php echo"$utilisateur";?></h2> <!-- instruction de JS qui commence avec l'attribut onclick(si retourne vrai alors on affiche mon mot) --->
        <input type="submit" name="deconnect" value="Se déconnecter" onclick="return confirm('Voulez-vous vraiment vous déconnecter, <?php echo $utilisateur ?> ?');" />
    </div>
</form>
