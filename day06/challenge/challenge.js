/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let panier = [101, 105, 101, 102];
let cache = {}
let input = 101;
function ajouterAuPanier(id){
    panier.push(id)
    return panier;
}
function retirerDuPanier(id){

    let index = panier.indexOf(id);

    while (index !== -1) {
        panier.splice(index, 1);
        index = panier.indexOf(id);
    }

    return panier
}
function afficherQuantites(id){
    for(let i = 0 ; i < panier.length ; i++){
        if(cache[panier[i]] === undefined ){
            cache[panier[i]] = 1
        }else{
            cache[panier[i]]++
        }
    }
    return cache; 
}
console.log(ajouterAuPanier(input))
console.log(retirerDuPanier(input))
console.log(afficherQuantites(input))