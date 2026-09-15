/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple) et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day07/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.


let array = [];
function ajouterUtilisateur(nom, email){
    
    let id = "";
    for(let i = 0 ; i < 4 ;i++){
if(Math.random() < 0.5){
        id += Math.floor(Math.random() * 10);
    }else{
        id += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    }

    }
    let objet = {
        identification : id ,
        name : nom ,
        gmail : email,
    }
    array.push(objet)
    return objet;
}
function trouverParEmail(email){
    for(let user of array ){
        if(user.gmail === email){
            return user 
        }
     
    }
    return undefined
} 
function supprimerParId(id){
    let index ;
    for(let target of array){
        if(target.identification === id){

            index = array.indexOf(target)
            array.splice(index,1)
            return target
        }
    }
    return undefined
}
function afficherAnnuaire(){
    for(let users of array){
        console.log(`ID: ${users.identification} | Name: ${users.name} | Email: ${users.gmail}`)
    }


}

let user1 = ajouterUtilisateur("achraf","chrdalacharf@email.com")
let user2 = ajouterUtilisateur("oussama","oussama1@email.com")
console.log(trouverParEmail("oussama1@email.com"))
afficherAnnuaire()
supprimerParId(user2.identification)
afficherAnnuaire()