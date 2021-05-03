// Déclaration des variables 
var choix;
var saisi = "";
const tabNoms = ["Lévisse", "Nelsonne", "Canister", "Mentos"];
const tabPrénoms = ["Carole", "Mélodie", "John", "Alamenthe"];
const tabTel = ["0692516244", "0692477889", "0693215487", "555846214"];
const tabOptions = ["1: Lister les contacts", "2: Ajouter un contact", "3: Supprimer un contact", "0: Quitter"];


    // déclaration de l'objet "contact" constitué de plusieurs method pour la gestion de contact
    const contact = {

        //method 1 pour l'affichage des noms & prénoms selon la grandeur du tableau
        afficher() {
            for (let i = 0; i < tabNoms.length, i < tabPrénoms.length, i < tabTel.length; i++) {
                console.log(`Nom: ${tabNoms[i]}, Prénom: ${tabPrénoms[i]}, Tel: ${tabTel[i]}`);
            }
        },

        //method 2 
        ajoutNom() {
            // test de la variable saisi pour eviter le probleme d'une valeur null lors d'ajout de contact
            while (!saisi) {
                // saisi prend prompt comme nouvelle valeur
                saisi = prompt("Entrez le nom du contact: ");

                // SI la varaiable saisi est null ou undefined alors j'informe l'utilisateur sinon je valide la saisi
                if (!saisi) {
                    alert("\n Entrez une valeur correct !");
                } else {
                    tabNoms.push(saisi);
                }
            }

        },

        //method 3
        ajoutPrénom() {
            while (!saisi) {
                saisi = prompt("Entrez le prénom du contact: ");

                if (!saisi) {
                    alert("\n Entrez une valeur correcte !");
                } else {
                    tabPrénoms.push(saisi);
                }
            }
        },
        
         //method 4
        ajoutTel() {
            while (!saisi) {
                saisi = prompt("Entrez le Numéro du contact: ");

                if (!saisi) {
                    alert("\n Entrez une valeur correcte !");
                } else {
                    tabTel.push(saisi);
                }
            }
        },

    };


function launch() {

    //debut du programme
    console.log("Bienvenue dans le gestionnaire des contacts !");

    while (choix !== "0") {

        console.log("\n");
        //on appel la tabOption pour afficher les options avec un forEach
        tabOptions.forEach(option => {
            console.log(option)
        });
        

        choix = prompt("Choisissez une option :");

        switch (choix) {
            case "0":
                console.log("\n Au revoir !");
                break;
            case "1":
                console.log("\n Voici la liste de tous vos contacts :");
                contact.afficher();
                break;
            case "2":
                //1er instruction
                contact.ajoutNom();
                // réinitialisation de la variable saisi après chaque instruction
                saisi = "";
                //2eme instruction
                contact.ajoutPrénom();
                //reinitialisation variable
                saisi = "";
                //3eme instruction
                contact.ajoutTel();
                //reinitialisation variable
                saisi = "";
                //affichage de confirmation
                console.log("\n Le nouveau contact a été ajouté");
                break;
                // un ajout possible dans une version 2	
            case "3":
                console.log("\n Vous n'avez pas les droits pour faire cela, veuillez contacter votre administrateur local!");
                break;
                // cas ou le User appuie sur Annuler
            case null:
                choix = "0";
                console.log("\n Vous avez quitté le gestionnaire de contact.");
                break;
            default:
                alert("\n Valeur incorrect !");
        }
    }
}
// fin du programme 
