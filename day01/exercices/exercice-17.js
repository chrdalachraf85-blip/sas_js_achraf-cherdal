/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let player1 = "Rock";
let player2 = "Scissors";

if (player1 === player2) {
    console.log("Draw!");
} else if (
    (player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Paper" && player2 === "Rock") ||
    (player1 === "Scissors" && player2 === "Paper")
) {
    console.log("Joueur 1 gagne !");
} else {
    console.log("Joueur 2 gagne !");
}