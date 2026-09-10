/**
 * JOUR 03 — GUIDE 01
 * Créer sa première fonction
 *
 * OBJECTIF
 * Créez une fonction nommée saluer qui prend un nom en paramètre et qui retourne la chaîne de caractères "Bonjour, [nom] !". Testez-la.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

function saleur(name){
    let call = `Hello, ${name}!`;
    return call;
}
let result = saleur("achraf")
console.log(result)