<form method="post" action="./index.php">
    <div>
        <h2>Mon compte</h2>
    </div>

    <div class="username">
        <label for="id">Identifiant :</label> <br />
        <input type="text" name="id" required value="<?php echo $identifiant; ?>" /> <!-- garde en mémoire le dernier identifiant tapé -->
    </div> <br/>

    <div class="password">
        <label for="id">Mot de passe :</label> <br />
        <input type="password" name="pass" required />
    </div> <br/>

    <input type="submit" name="connect" value="Connexion"/>
    <p id="erreur">Identifiant et/ou mot de passe incorrect(s) !</p>
</form>


