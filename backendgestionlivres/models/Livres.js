// J'importe DataTypes pour definir le type de chaque colonne.
const { DataTypes } = require("sequelize");

// J'exporte une fonction qui cree le modele Livres avec la connexion Sequelize.
module.exports = (sequelize) => {
    // Le modele correspond a la table "livres" dans MySQL.
    const Livres = sequelize.define("livres", {
        // Colonne id : cle primaire auto-incrementee.
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        // Colonne titre : texte obligatoire.
        titre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // Colonne auteur : texte obligatoire.
        auteur: {
            type: DataTypes.STRING,
            allowNull: false
        },

        // Colonne description : texte long facultatif.
        description: {
            type: DataTypes.TEXT
        },

        // Colonne prix : nombre decimal obligatoire.
        prix: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },

        // Colonne stock : nombre entier obligatoire.
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        // La table n'a pas les colonnes createdAt et updatedAt.
        timestamps: false
    });

    // Je retourne le modele pour qu'il soit enregistre dans models/index.js.
    return Livres;
};
