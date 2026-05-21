-- Requete de creation de la table "livres"
CREATE TABLE livres(
    -- Identifiant unique du livre.
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,

    -- Titre du livre.
    titre VARCHAR(255) NOT NULL,

    -- Auteur du livre.
    auteur VARCHAR(255) NOT NULL,

    -- Description courte ou longue du livre.
    description TEXT,

    -- Prix du livre.
    prix DECIMAL(10, 2) NOT NULL,

    -- Quantite disponible en stock.
    stock INT NOT NULL
);

-- Requete d'insertion de donnees dans la table "livres"
INSERT INTO livres (titre, auteur, description, prix, stock) VALUES ('Le Petit Prince', 'Antoine de Saint-Exupery', 'Un conte poetique et philosophique', 9.99, 100);
