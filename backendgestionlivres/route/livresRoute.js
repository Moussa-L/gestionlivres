// Importation du module Express pour creer un routeur.
const express = require("express");

// Importation du controleur qui contient les fonctions des routes livres.
const livresControllers = require("../controllers/livresControllers");

// Creation d'un routeur Express pour organiser les routes.
const router = express.Router();

// Route GET /livres/formulaire : affiche la page livres.ejs.
router.get("/livres/formulaire", livresControllers.livresView);

// Route POST /livres : ajoute un nouveau livre dans la base de donnees.
router.post("/livres", livresControllers.create);


// Route GET /livres : recupere tous les livres.
router.get("/livres", livresControllers.findAll);

// Route DELETE /livres/:id : supprime un livre avec son id.
router.delete("/livres/:id", livresControllers.delete);

// Route DELETE /livres : supprime tous les livres.
router.delete("/livres", livresControllers.deleteAll);

// Route PUT /livres/:id : modifie un livre avec son id.
router.put("/livres/:id", livresControllers.update);

// Exportation du routeur pour l'utiliser dans app.js.
module.exports = router;
