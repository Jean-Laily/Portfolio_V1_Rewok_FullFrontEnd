$(document).ready(function(){
    var arrayProfil = [ "#profilGeneral", "#contentResumer", "#portfolioGlobal", "#contactForm"];
   
    // lors du chargement de la page tous les contenus tel que ( profil, résumer, portfolio et contact) doivent être cacher.
    hideAllElement();

    // lors d'un click sur la 1er icône on cache tous les contenus différents de profil
    $(".icon-1 a").click(function(){
        let idContenue = "#profilGeneral";
        infoPerso2();
        checkContent(idContenue);
    });

    // lors d'un click sur la 2eme icône on cache tous les contenus différents de résumer
    $(".icon-2 a").click(function(){
        let idContenue = "#contentResumer";
        infoPerso();
        checkContent(idContenue);
    });

    // lors d'un click sur la 3eme icône on cache tous les contenus différents de portfolio
    $(".icon-3 a").click(function(){
        let idContenue = "#portfolioGlobal";
        infoPerso();
        checkContent(idContenue);
    });

    // lors d'un click sur la 4eme icône on cache tous les contenus différents de contact
    $(".icon-4 a").click(function(){
        let idContenue = "#contactForm";
        infoPerso();
        checkContent(idContenue);
    });

    // changement de texte pour la partie information personnel lors d'un clic sur profil
    function infoPerso(){
        $("#info-profil").replaceWith("<div class='col-lg-8' id='info-personnel'>"+
                                            "<h3 class='col'>Yan-Sin-Ha-Yeung Jean Laily</h3>"+
                                            "<p class='col'> Développeur Web et Web Mobile </p>"+
                                            "<p class='col'>Étant un passionné de nouvelle technologie , de l'informatique et de la programmation en générale, il était naturel pour moi de me diriger vers se métier de développeur."+
                                            "Grâce à l'AFPAR et leur formation passerelle j'ai pu découvrir les bases du développement ce qui m'a permis ensuite permis d'accéder à la formation titrante de niveau V (nouvelle nomenclature)."+
                                            "Titre professionnel que j'ai obtenu en février 2021, ce qui me permet maintenant de me diriger vers une formation de niveau IV en alternance.</p>"+
                                        "</div>");
    };

    // changement de texte pour la partie information personnel lors d'un clic sur les autres icônes différente de profil
    function infoPerso2(){
        $("#info-personnel").replaceWith("<div id='info-profil' class='offset-lg-1 col-lg-8'>"+
                                            "<article class='col'>"+
                                                "<h4 class='col text-center'>PROFIL</h4>"+
                                                "<div class='row'>"+
                                                    "<ul class='col profil px-0 py-0'>"+
                                                        "<li><label>Nom: </label> YAN-SIN-HA-YEUNG </li>"+
                                                        "<li><label>Prénom: </label> Jean Laily</li>"+
                                                        "<li><label>Email professionnel: </label> jean.yansin@gmail.com</li>"+
                                                        
                                                    "</ul>"+
                                                    "<ul class='col profil px-0 py-0'>"+
                                                        "<li><label>Age:</label> 35 ans</li>"+
                                                        "<li><label>Date de naissance: </label> 06/11/1985</li>"+
                                                        "<li><label>hobby:</label> Développer, découvrir de nouvelle méthode de développement, jeux video</li>"+
                                                    "</ul>"+
                                                "</div>"+
                                            "</article>"+
                                        "</div>");
    };

    /**
    * Fonction qui à pour but de vérifier si un des id est appeler si c'est bien le cas alors on cache le reste.
    */
    function checkContent(content){
        var elmtValide;
        //lecture du tableau défini plus haut
        arrayProfil.forEach(element => {
           
            if(content == element){
                elmtValide = element;
            }
            $(element).hide();
        });

        return $(elmtValide).show();
    }

    /**
     * Permet de ne pas afficher les sections et leurs contenus dès l'ouverture du portfolio
     */
    function hideAllElement(){
        for(let i = 0; i < arrayProfil.length; i++){
            $(arrayProfil[i]).hide();
        }
    }

}); // fin fonction ready

