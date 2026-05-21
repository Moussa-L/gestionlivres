/*
==============================================
Fichier d'initialisation de l'application 
Express pour l'application NODE MVC
==============================================
*/ 

// J'importe le module express pour créer l'application web
const express = require("express");
const cors = require("cors");

// J 'importe Msql2 pour la connexion à la base de données
const mysql2 = require("mysql2");

// J'importe l' express-connection pour gérer les connexions à la base de données
const myConnection = require("express-myconnection");

// Importation des routes pour la page d'accueil
const livresRoute = require("./route/livresRoute");

const db = require("./models");

// Création de l'application Express
const app = express();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Configuration du dossier contenant les templates de vues
app.set("views", "./views");

// Configuration du moteur de template EJS pour le rendu des vues
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({}).then(() => {
    console.log("La base de donnees est synchronisee.");
}).catch((error) => {
    console.error("Erreur lors de la synchronisation de la base de donnees : " + error.message);
});

app.use("/", livresRoute);

module.exports = app;
