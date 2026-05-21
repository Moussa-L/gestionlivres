// Ce fichier contient les informations de configuration MySQL.
module.exports = {
    // Adresse du serveur de base de donnees.
    HOST: "localhost",

    // Nom d'utilisateur MySQL.
    USER: "root",

    // Mot de passe MySQL.
    PASSWORD: "Lidyamoussa2907!",

    // Nom de la base de donnees.
    BD: "livres",

    // Type de base de donnees utilisee.
    dialect: "mysql",

    // Configuration du pool de connexions Sequelize.
    pool: {
        // Nombre maximum de connexions ouvertes en meme temps.
        max: 5,

        // Nombre minimum de connexions gardees ouvertes.
        min: 0,

        // Temps maximum pour obtenir une connexion.
        acquire: 30000,

        // Temps avant de fermer une connexion inactive.
        idle: 10000
    }
};
