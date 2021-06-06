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
        $("#info-personnel").replaceWith( "<div class='col-lg-8 m-auto' id='info-personnel'>"+
                                            "<h3 class='col'>Yan-Sin-Ha-Yeung Jean Laily</h3>"+
                                            "<p class='col'> Développeur Web et Web Mobile </p>"+
                                            "<p class='col'>Étant un passionné de nouvelle technologie, de l'informatique et de la programmation en générale, je me suis naturellement diriger vers le domaine de développement."+
                                            " Grâce à l'AFPAR et leur formation passerelle j'ai pu découvrir les bases du développement ce qui m'a permis ensuite permis d'accéder à la formation de niveau V."+
                                            " J'ai obtenu mon Titre professionnel en février 2021 et aujourd'hui je suis à la recherche de nouvelle opportunité.</p>"+
                                        "</div>" );
    };

    // changement de texte pour la partie information personnel lors d'un clic sur les autres icônes différente de profil
    function infoPerso2(){
        $("#info-personnel").replaceWith("<div class='col-lg-8 m-auto' id='info-personnel' >"+
                                            "<article class='row'>"+
                                                "<h4 class='col-12 pl-0'>PROFIL</h4>"+
                                                    "<ul class='col profil pl-0'>"+
                                                        "<li><t>Nom:</t> <ts> YAN-SIN-HA-YEUNG </ts></li>"+
                                                        "<li><t>Prénom:</t> <ts> Jean Laily </ts></li>"+
                                                        "<li><t>Email professionnel:</t><ts><a class='text-decoration-none' href='mailto:jean.yansin@gmail.com'> jean yan-sin-ha-yeung</a></ts></li>"+
                                                        "<li><t>Curriculum vitae:</t> <ts><a class='text-decoration-none' href='assets/media/document/Curriculum_Vitae_YanSinHaYeungJeanLaily.pdf'> Download PDF</a></ts></li>"+
                                                        
                                                    "</ul>"+
                                                    "<ul class='col profil pr-0'>"+
                                                        "<li><t>Age:</t> <ts> 35 ans </ts></li>"+
                                                        "<li><t>Date de naissance:</t> <ts> 06/11/1985 </ts></li>"+
                                                        "<li><t>Hobby:</t> <ts> Développer, jeux de logique, jeux video </ts></li>"+
                                                    "</ul>"+
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

