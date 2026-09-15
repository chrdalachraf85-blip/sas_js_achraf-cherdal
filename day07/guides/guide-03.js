/**
 * JOUR 07 — GUIDE 03
 * Parcourir un Objet
 *
 * OBJECTIF
 * Affichez toutes les clés et leurs valeurs de l'objet voiture sous la forme "clé : valeur".
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let voiture = {
    marque : "toyota",
    modele : "corola",
    annee : 2020,
}
for(let key in voiture){
    console.log(key + " : " + voiture[key])
}