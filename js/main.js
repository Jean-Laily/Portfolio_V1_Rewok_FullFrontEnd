$(document).ready(function(){

    // lors du chargement de la page tous les contenus tel que ( profil, résumer, portfolio et contact).
    $("#profilGeneral, #contentResumer, #portfolioGlobal, #contactForm").hide();

    // lors d'un click sur la 1er icone on cache tous les contenus autre que le profil
    $(".icon-1 a").click(function(){
        $("#contentResumer, #portfolioGlobal, #contactForm").hide();
        infoPerso2();
        $("#profilGeneral").show();
        
    });

    // lors d'un click sur la 2eme icone on cache tous les contenus autre que le résumer
    $(".icon-2 a").click(function(){
        $("#profilGeneral, #portfolioGlobal, #contactForm").hide();
        infoPerso();
        $("#contentResumer").show();
    });

    // lors d'un click sur la 3eme icone on cache tous les contenus autre que le portfolio
    $(".icon-3 a").click(function(){
        $("#profilGeneral, #contentResumer, #contactForm").hide();
        infoPerso();
        $("#portfolioGlobal").show();
    });

    // lors d'un click sur la 4eme icone on cache tous les contenus autre que le contact
    $(".icon-4 a").click(function(){
        $("#profilGeneral, #contentResumer, #portfolioGlobal").hide();
        infoPerso();
        $("#contactForm").show();
    });

    // changement de texte pour la parti information personnel lors d'un clic sur profil
    function infoPerso(){
        $("#info-profil").replaceWith("<div class=\"col-lg-8 m-auto\" id=\"info-personnel\">"+
                                            "<h3 class=\"col\">Yan-Sin-Ha-Yeung Jean Laily</h3>"+
                                            "<p class=\"col\"> Developpeur Web et Web mobile </p>"+
                                            "<p class=\"col\">Étant un passionné de nouvelle technologie et de l'informatique, il était naturel pour moi de me diriger vers le métier de développeur. Grâce à l'AFPAR et leur formation passerelle cela m'a permis de découvrir les bases du développement et peut être pouvoir continuer vers la formation titrante.</p>"+
                                        "</div>");
    };


    // changement de texte pour la parti information personnel lors d'un clic sur profil
    function infoPerso2(){
        $("#info-personnel").replaceWith("<div id=\"info-profil\" class=\"col-lg-8 m-auto\">"+
                                            "<article class=\"col\">"+
                                                "<h4 class=\"col-12 px-0 py-0 text-center\">PROFIL</h4>"+
                                                "<ul class=\"profil px-0 py-0\">"+
                                                    "<li><label>Nom :</label> YAN-SIN-HA-YEUNG </li>"+
                                                    "<li><label>Prénom :</label> Jean Laily</li>"+
                                                    "<li><label>Date de naissance:</label> 06/11/1985</li>"+
                                                    "<li><label>Email: </label> jean.yansin@gmail.com</li>"+
                                                "</ul>"+
                                            "</article>"+
                                        "</div>");
    };



}); // fin fonction ready

