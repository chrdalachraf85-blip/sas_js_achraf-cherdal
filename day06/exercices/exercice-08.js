/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let numbers = [34, 7, 82, 15, 3, 67, 41, 96, 12, 55];
function minandmax(array){
    let min = array[0]
    let max = array[0]
     for (let number of array) {
        if(min > number){
            min = number
        }
        if(max < number){
            max = number
        }
    }
    return  `the largest is ${max} \nthe smallest is ${min}`
}
console.log(minandmax(numbers))