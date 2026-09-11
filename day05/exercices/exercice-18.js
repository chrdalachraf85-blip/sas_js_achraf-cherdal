/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day05/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let count = 0;
function count_e(phrase){
    for(let i = 0;i < phrase.length; i++){
        if(phrase[i] === "e" || phrase[i] === "E"){
            count++

        }
    }
    return count;
}
//console.log(count_e("Every evening, Elena prepares excellent green tea before she exercises near the peaceful seaside."))