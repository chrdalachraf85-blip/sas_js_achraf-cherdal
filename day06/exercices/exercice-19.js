/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * RECHERCHE BINAIRE (CONCEPT DE BASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Contrairement à la recherche linéaire (parcourir tout le tableau un par un), la recherche binaire cherche un élément dans un tableau TRIÉ en coupant l'espace de recherche en deux à chaque fois. Essayez de comprendre et d'implémenter ce concept pour trouver l'index de 45 dans [10, 20, 30, 40, 45, 50, 60].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day05/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let array = [10, 20, 30, 40, 45, 50, 60];
let search = 45 ; 
let left = 0;
let right = array.length - 1;
let middle;
//middle = Math.floor((left + right)/2);
while(left <= right){
    middle = Math.floor((left + right) / 2);
    if(array[middle] === search){
        console.log(`Found at index:  ${middle}`)
        break;
    }else if(array[middle] < search){
        left = middle+ 1
    }else if(array[middle] > search){
        right = middle-1
    }
    
}    
