/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * ÉCHANTILLONNAGE (SLICE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * À partir d'un grand tableau de 100 éléments, utilisez .slice() pour extraire les 10 premiers (la première page).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day05/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let numbers = [12, 45, 7, 89, 23, 56, 34, 91, 18, 67,3, 78, 42, 15, 99, 61, 27, 84, 10, 53,71, 6, 38, 92, 25, 64, 17, 80, 49, 31,95, 14, 58, 2, 76, 43, 87, 20, 69, 35,51, 9, 83, 29, 60, 97, 16, 74, 40, 5,88, 22, 63, 47, 11, 79, 32, 94, 55, 19,68, 4, 85, 37, 72, 26, 100, 13, 59, 46,81, 24, 66, 8, 90, 39, 54, 21, 75, 33,98, 1, 62, 44, 86, 28, 70, 52, 96, 30,77, 41, 57, 93, 36, 65, 48, 82, 50, 73];
let page1 = numbers.slice(0,10);
console.log(page1)