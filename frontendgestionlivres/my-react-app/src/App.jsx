import { useMemo, useState } from 'react'
import Livres from '../components/Livres'
import Bibli from '../components/Bibli'
import LivresItem from '../components/LivresItem'
import styles from '../styles/Livres.module.css'

const livresDepart = [
  {
    titre: 'Le Petit Prince',
    auteur: 'Antoine de Saint-Exupery',
    prix: '8,90 EUR',
    prixNombre: 8.9,
    categorie: 'Classique',
  },
  {
    titre: 'L Art de la simplicite',
    auteur: 'Dominique Loreau',
    prix: '12,50 EUR',
    prixNombre: 12.5,
    categorie: 'Bien-etre',
  },
  {
    titre: 'Tout le bleu du ciel',
    auteur: 'Melissa Da Costa',
    prix: '19,90 EUR',
    prixNombre: 19.9,
    categorie: 'Roman',
  },
  {
    titre: 'Clean Code',
    auteur: 'Robert C. Martin',
    prix: '34,00 EUR',
    prixNombre: 34,
    categorie: 'Informatique',
  },
]

function App() {
  const [livres, setLivres] = useState(livresDepart)
  const [panier, setPanier] = useState([])

  const total = useMemo(
    () => panier.reduce((somme, livre) => somme + livre.prixNombre * livre.quantite, 0),
    [panier],
  )

  const ajouterAuPanier = (livre) => {
    setPanier((articles) => {
      const articleExiste = articles.find((article) => article.titre === livre.titre)

      if (articleExiste) {
        return articles.map((article) =>
          article.titre === livre.titre
            ? { ...article, quantite: article.quantite + 1 }
            : article,
        )
      }

      return [...articles, { ...livre, quantite: 1 }]
    })
  }

  const ajouterLivre = (nouveauLivre) => {
    setLivres((listeLivres) => [nouveauLivre, ...listeLivres])
  }

  return (
    <>
      <Livres>
        <h1 className={styles.title}>Achetez vos livres preferes</h1>
      </Livres>
      <Bibli
        livres={livres}
        onAjouterAuPanier={ajouterAuPanier}
        onAjouterLivre={ajouterLivre}
      />
      <LivresItem panier={panier} total={total} />
    </>
  )
}

export default App
