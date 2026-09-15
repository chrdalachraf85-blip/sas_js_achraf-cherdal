/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let objet1 = {
    name : "achraf",
    objet2 :{
        age : 18,
        city : "nador",

    }
}
let copy = {...objet1} 
copy.objet2.age = 17
console.log(copy.objet2.age)
console.log(objet1.objet2.age)
//the inner objet dont change if the outer objet does and keep connection with the copy so they always have the same value 
let copy2 = structuredClone(objet1)
copy2.objet2.age = 12
console.log(copy2.objet2.age)
console.log(objet1.objet2.age)
//with the modren solution the copy has its own identite u can change it without touching the originegit