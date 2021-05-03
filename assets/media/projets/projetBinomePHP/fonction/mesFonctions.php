<?php
    // renvoie la valeur vrai si le compte existe
    function ceCompteExiste($id, $pass)
    {
        $comptes = array
        (
            "Sébastien" => "1234",
            "Laily" => "4321",
            "afpar" => "afpar"
        );

        foreach ($comptes as $identifiant => $motDePasse)
        {
            if ($id === $identifiant and $pass === $motDePasse)
            {
                return true;
            }
        }

        return false;
    }
?>