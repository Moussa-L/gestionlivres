// J'importe les modeles pour acceder a la table livres.
const db = require("../models");

// Je recupere le modele Livres depuis l'objet db.
const Livres = db.livres;

// Affiche la page livres.ejs dans le navigateur.
exports.livresView = (req, res) => {
    res.render("livres");
};

// Cree un nouveau livre avec les donnees envoyees dans le formulaire ou en JSON.
exports.create = async (req, res) => {
    try {
        // J'insere un nouveau livre dans la base de donnees.
        const livre = await Livres.create({
            // Titre du livre envoye par le client.
            titre: req.body.titre,

            // Auteur du livre envoye par le client.
            auteur: req.body.auteur,

            // Description du livre envoyee par le client.
            description: req.body.description,

            // Prix du livre envoye par le client.
            prix: req.body.prix,

            // Stock disponible envoye par le client.
            stock: req.body.stock
        });

        // Je renvoie le livre cree avec le statut HTTP 201.
        res.status(201).json(livre);
    } catch (error) {
        // Je renvoie une erreur si la creation a echoue.
        res.status(500).json({ message: error.message });
    }
};

// Recupere tous les livres presents dans la base de donnees.
exports.findAll = async (req, res) => {
    try {
        // Je demande a Sequelize de trouver tous les livres.
        const livres = await Livres.findAll();

        // Je renvoie la liste des livres au format JSON.
        res.status(200).json(livres);
    } catch (error) {
        // Je renvoie une erreur si la recuperation a echoue.
        res.status(500).json({ message: error.message });
    }
};

// Supprime un livre grace a son id.
exports.delete = async (req, res) => {
    try {
        // Je supprime le livre dont l'id correspond au parametre de l'URL.
        const deletedCount = await Livres.destroy({
            where: { id: req.params.id }
        });

        // Si aucun livre n'a ete supprime, cela veut dire que l'id n'existe pas.
        if (deletedCount === 0) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        // Message de confirmation quand la suppression a reussi.
        res.status(200).json({ message: "Livre supprime" });
    } catch (error) {
        // Je renvoie une erreur si la suppression a echoue.
        res.status(500).json({ message: error.message });
    }
};

// Supprime tous les livres de la table.
exports.deleteAll = async (req, res) => {
    try {
        // Je supprime toutes les lignes de la table livres.
        const deletedCount = await Livres.destroy({
            where: {},
            truncate: false
        });

        // Je renvoie le nombre de livres supprimes.
        res.status(200).json({ message: `${deletedCount} livre(s) supprime(s)` });
    } catch (error) {
        // Je renvoie une erreur si la suppression totale a echoue.
        res.status(500).json({ message: error.message });
    }
};

// Met a jour un livre grace a son id.
exports.update = async (req, res) => {
    try {
        // Je modifie le livre dont l'id correspond au parametre de l'URL.
        const [updatedCount] = await Livres.update(req.body, {
            where: { id: req.params.id }
        });

        // Si aucun livre n'a ete modifie, cela veut dire que l'id n'existe pas.
        if (updatedCount === 0) {
            return res.status(404).json({ message: "Livre introuvable" });
        }

        // Je recupere le livre mis a jour pour le renvoyer au client.
        const livre = await Livres.findByPk(req.params.id);

        // Je renvoie le livre mis a jour.
        res.status(200).json(livre);
    } catch (error) {
        // Je renvoie une erreur si la mise a jour a echoue.
        res.status(500).json({ message: error.message });
    }
};
