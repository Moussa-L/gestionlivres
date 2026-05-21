// Point d'entree du serveur Node.js.

// Importation du module HTTP natif de Node.js pour creer un serveur web.
const http = require("http");

// Importation de l'application Express definie dans app.js.
const app = require("./app");

// Creation du serveur HTTP en utilisant l'application Express.
const server = http.createServer(app);

// Numero du port sur lequel le serveur va ecouter.
const numPort = 3008;

// Demarrage du serveur sur le port choisi.
server.listen(numPort, () => {
    // Message affiche dans la console quand le serveur est lance.
    console.log("Le serveur est demarre sur le port ", numPort);
});
