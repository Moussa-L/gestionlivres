/*
 * Ce fichier sert a creer la connexion entre Sequelize et MySQL.
 */

// J'importe Sequelize pour communiquer avec la base de donnees.
const Sequelize = require("sequelize");

// Je cree une instance Sequelize avec le nom de la base, l'utilisateur et le mot de passe.
const sequelize = new Sequelize("livres", "root", "Lidyamoussa2907!", {
    // Adresse du serveur MySQL.
    host: "localhost",

    // Type de base de donnees utilisee.
    dialect: "mysql",

    // Desactive l'affichage des requetes SQL dans la console.
    logging: false
});

// J'exporte la connexion pour l'utiliser dans les modeles.
module.exports = sequelize;
