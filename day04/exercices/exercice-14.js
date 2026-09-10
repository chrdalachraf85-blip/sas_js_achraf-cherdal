/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CALCULATRICE MODULAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction calculatrice(a, b, signe). Utilisez un switch sur signe pour appeler l'une des 4 opérations de base (+, -, *, /) que vous aurez écrites en tant que fonctions distinctes.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day03/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
const multiplier = (a,b) => {return a * b}
const addition = (a,b) => {return a + b}
const division = (a,b) => {return a / b}
const subtraction = (a,b) => {return a - b}
function calculatrice(a, b, signe){
    let result;
    switch(signe){
        case "+":
        result = addition(a,b)
        break;
        case "/":
        result = division(a,b)
        break;
        case "-":
        result = subtraction(a,b)
        break;
        case "*":
        result = multiplier(a,b)
        break;
    }
    return result ;
}
console.log(calculatrice(5 , 6 ,"*"))