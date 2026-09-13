/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
let tab1 = [1, 3, 5];
let tab2 = [2, 4, 6];
let merge = [];
let i = 0;
let j = 0;
while(i < tab1.length && j < tab2.length){
    if(tab1[i] < tab2[j]){
        merge.push(tab1[i])
        i++
    }else if(tab1[i] > tab2[j]){
        merge.push(tab2[j])
        j++
    } 
}
while (i < tab1.length) {
    merge.push(tab1[i])
    i++
}
while (j < tab2.length) {
    merge.push(tab2[j])
    j++
}
console.log(merge)



