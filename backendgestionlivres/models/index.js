// J'importe Sequelize pour avoir acces aux types et aux operateurs Sequelize.
const Sequelize = require("sequelize");

// J'importe la connexion Sequelize creee dans db.js.
const sequelize = require("../db");

// Cet objet va regrouper la connexion et tous les modeles du projet.
const db = {};

// Je stocke Sequelize dans db pour pouvoir l'utiliser ailleurs si besoin.
db.Sequelize = Sequelize;

// Je stocke la connexion a la base de donnees.
db.sequelize = sequelize;

// Je charge le modele Livres et je lui donne la connexion Sequelize.
db.livres = require("./Livres")(sequelize, Sequelize);

// J'exporte db pour que les controleurs puissent utiliser les modeles.
module.exports = db;
