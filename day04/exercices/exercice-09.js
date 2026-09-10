/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * MAXIMUM DE TROIS NOMBRES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Sans utiliser Math.max(), écrivez une fonction trouverMax(a, b, c) qui retourne le plus grand des trois nombres en utilisant des conditions if/else.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day03/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function trouverMax(a, b, c){
    let result ;
    if(a > b && a > c){
        result = a ;
    }else if(b > a && b > c){
        result = b ;
    }else{
        result = c ;
    }
    return result;
}
console.log(trouverMax(3, 100, 42))