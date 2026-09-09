/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * LE PLUS PETIT CARRÉ PARFAIT SUPÉRIEUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Trouvez et affichez le plus petit carré parfait (ex: 4, 9, 16) strictement supérieur à 1000 en utilisant un while.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day02/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let i = 1;
let carre = i * i ;
while(carre <= 1000){
    i++;
    carre = i * i ;
}
console.log(carre)