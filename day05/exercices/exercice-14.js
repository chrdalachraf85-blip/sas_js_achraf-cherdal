/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE MOTS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Comptez le nombre de mots dans une longue chaîne. *Attention aux espaces multiples !* (Un mot est généralement séparé par un espace).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day05/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function countwords(phrase){
    let count = 0 ;
    phrase = phrase.split(" ")
    for(let i = 0 ; i < phrase.length ; i++){
        if(phrase[i] !== ""){
            count++
        }
    }
    return count ;
}
console.log(countwords("JavaScript                  helps students build useful projects while learning logic through daily practice"))