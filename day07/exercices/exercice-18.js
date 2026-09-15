/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day07/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let obj11 = {
    name: "Achraf",
    age: 18,
    city: "Nador"
};

let obj22 = {
    name: "Achraf",
    age: 18,
    city: "Nador"
};
function sontIdentiques(obj1, obj2){
    /*let key =Object.keys(obj1)
    let  value = Object.values(obj1)*/
    for(let key in obj1){

        if( obj1[key] !== obj2[key] ){
            return false
        }
    }
    return true
}
console.log(sontIdentiques(obj11,obj22))