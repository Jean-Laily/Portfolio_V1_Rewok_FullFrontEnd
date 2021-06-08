$(document).ready(function(){
    var arrayProfil = [ '#profilGeneral', '#contentResumer', '#portfolioGlobal', '#contactForm'];
   
    // lors du chargement de la page tous les contenus tel que ( profil, résumer, portfolio et contact) doivent être cacher.
    hideAllElement();

    /*****************************************************************************************************************
     *                                          Partie manipulation DOM en jQuery                                                   *
     * ************************************************************************************************************* */


    // lors d'un click sur la 1er icône on cache tous les contenus différents de profil
    $('.icon-1 a').click(function(){
        infoPerso()
        $("#profilGeneral").fadeToggle(1000);
        checkContent("#profilGeneral");
    });

    // lors d'un click sur la 2eme icône on cache tous les contenus différents de résumer
    $('.icon-2 a').click(function(){
        infoPerso();
        $("#contentResumer").fadeToggle(1000);
        checkContent("#contentResumer");
    });

    // lors d'un click sur la 3eme icône on cache tous les contenus différents de portfolio
    $('.icon-3 a').click(function(){
        infoPerso()
        $("#portfolioGlobal").fadeToggle(1000);
        checkContent("#portfolioGlobal");
    });

    // lors d'un click sur la 4eme icône on cache tous les contenus différents de contact
    $('.icon-4 a').click(function(){
        infoPerso()
        $("#contactForm").fadeToggle(1000);
        checkContent("#contactForm");
    });

    // afficher en modal le certificat sélectionné
    $('#modalViewCertificat').on('show.bs.modal', function(event){
        var modal= $(event.relatedTarget);
        var url = modal.data('view-img');
        var title = $('.card-title').val();
        console.log(title);

        $('#imgCertif').replaceWith("<img id='imgCertif' src="+url+" class='d-block w-75 m-auto' alt='une image' >");
    });

     // afficher en modal le certificat sélectionné
     $('#modalViewCertificat').on('show.bs.modal', function(event){
        var modal= $(event.relatedTarget);
        var url = modal.data('view-img');
        var title = $('.card-title').val();
        console.log(title);

        
        $('.carousel-inner').append('<div class="carousel-item active">'+
                                        '<img src="'+ url +'" class="d-block w-100" alt="...">'+
                                    '</div>');
    });

    




    /*****************************************************************************************************************
     *                                          Partie fonction                                                      *
     * ************************************************************************************************************* */

    /**
     * M: changement de texte pour la partie information personnel lors d'un clic sur les autres icônes différente de profil
     * O:
     * I:
     */
    function infoPerso(){
        $('#info-personnel').replaceWith("<div class='col-lg-8 m-auto' id='info-personnel' >"+
                                            "<h4 class='pl-0'>PROFIL</h4>"+
                                            "<div class='row'>"+
                                                "<ul class='col list-unstyled'>"+
                                                    "<li><t>Nom:</t> <ts> YAN-SIN-HA-YEUNG </ts></li>"+
                                                    "<li><t>Prénom:</t> <ts> Jean Laily </ts></li>"+
                                                    "<li><t>Email professionnel:</t><ts><a class='text-decoration-none' href='mailto:jean.yansin@gmail.com'> jean yan-sin-ha-yeung</a></ts></li>"+
                                                    "<li><t>Curriculum vitae:</t> <ts><a class='text-decoration-none' href='assets/media/document/Curriculum_Vitae_YanSinHaYeungJeanLaily.pdf'> Download PDF</a></ts></li>"+
                                                "</ul>"+
                                                "<ul class='col list-unstyled pr-0'>"+
                                                    "<li><t>Age:</t> <ts> 35 ans </ts></li>"+
                                                    "<li><t>Date de naissance:</t> <ts> 06/11/1985 </ts></li>"+
                                                    "<li><t>Hobby:</t> <ts> Développer, jeux de logique, jeux video </ts></li>"+
                                                "</ul>"+
                                            "</div>"+
                                        "</div>");
    };


    /**
    * M: Fonction qui à pour but de vérifier si un des id est appeler si c'est bien le cas alors on cache le reste.
    * O:
    * I:
    */
     function checkContent(content){
        //lecture du tableau défini plus haut
        arrayProfil.forEach(element => {
            if(content !== element){
                $(element).hide();
            }

        });

    }

    /**
     * M: Permet de ne pas afficher les sections et leurs contenus dès l'ouverture du portfolio
     * O:
     * I:
     */
    function hideAllElement(){
        for(let i = 0; i < arrayProfil.length; i++){
            $(arrayProfil[i]).hide();
        }
    }

}); // fin fonction ready

