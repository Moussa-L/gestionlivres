import styles from '../styles/Livres.module.css'

import { useState } from 'react'

const livreVide = {
  titre: '',
  auteur: '',
  prix: '',
  categorie: '',
}

function Bibli({ livres, onAjouterAuPanier, onAjouterLivre }) {
  const [formulaire, setFormulaire] = useState(livreVide)

  const modifierChamp = (event) => {
    const { name, value } = event.target

    setFormulaire((valeurs) => ({
      ...valeurs,
      [name]: value,
    }))
  }

  const soumettreLivre = (event) => {
    event.preventDefault()

    const prixNombre = Number(formulaire.prix.replace(',', '.'))

    if (!formulaire.titre || !formulaire.auteur || !formulaire.categorie || prixNombre <= 0) {
      return
    }

    onAjouterLivre({
      titre: formulaire.titre.trim(),
      auteur: formulaire.auteur.trim(),
      categorie: formulaire.categorie.trim(),
      prix: `${prixNombre.toFixed(2).replace('.', ',')} EUR`,
      prixNombre,
    })

    setFormulaire(livreVide)
  }

  return (
    <main>
      <section className={styles.formSection} id="ajouter-livre">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Gestion</p>
          <h2>Ajouter un livre</h2>
        </div>

        <form className={styles.bookForm} onSubmit={soumettreLivre}>
          <label>
            Titre
            <input
              name="titre"
              onChange={modifierChamp}
              placeholder="Ex : L Etranger"
              type="text"
              value={formulaire.titre}
            />
          </label>

          <label>
            Auteur
            <input
              name="auteur"
              onChange={modifierChamp}
              placeholder="Ex : Albert Camus"
              type="text"
              value={formulaire.auteur}
            />
          </label>

          <label>
            Prix
            <input
              min="0"
              name="prix"
              onChange={modifierChamp}
              placeholder="Ex : 14,90"
              step="0.01"
              type="number"
              value={formulaire.prix}
            />
          </label>

          <label>
            Categorie
            <input
              name="categorie"
              onChange={modifierChamp}
              placeholder="Ex : Roman"
              type="text"
              value={formulaire.categorie}
            />
          </label>

          <button type="submit">Ajouter le livre</button>
        </form>
      </section>

      <section className={styles.section} id="selection">
        <div className={styles.sectionHeader}>
          <p className={styles.kicker}>Selection</p>
          <h2>Livres disponibles</h2>
        </div>

        <div className={styles.bookGrid}>
          {livres.map((livre) => (
            <article className={styles.bookCard} key={livre.titre}>
              <div className={styles.bookCover}>
                <span>{livre.categorie}</span>
              </div>
              <div className={styles.bookInfo}>
                <h3>{livre.titre}</h3>
                <p>{livre.auteur}</p>
                <div className={styles.bookFooter}>
                  <strong>{livre.prix}</strong>
                  <button type="button" onClick={() => onAjouterAuPanier(livre)}>
                    Ajouter
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Bibli
