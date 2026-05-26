import styles from '../styles/Livres.module.css'

function LivresItem({ panier, total }) {
  const totalFormate = total.toLocaleString('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  })

  return (
    <section className={styles.services} id="services">
      <div>
        <p className={styles.kicker}>Services</p>
        <h2>Une boutique simple pour acheter vos livres</h2>
      </div>

      <div className={styles.serviceGrid}>
        <article>
          <strong>Catalogue clair</strong>
          <p>Des livres ranges par categorie pour trouver rapidement ce qui vous interesse.</p>
        </article>
        <article>
          <strong>Paiement prepare</strong>
          <p>Une base propre pour connecter ensuite un vrai panier et un module de paiement.</p>
        </article>
        <article className={styles.cart} id="panier">
          <strong>Panier</strong>
          {panier.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <>
              <ul className={styles.cartList}>
                {panier.map((livre) => (
                  <li key={livre.titre}>
                    <span>{livre.titre}</span>
                    <strong>x{livre.quantite}</strong>
                  </li>
                ))}
              </ul>
              <div className={styles.cartTotal}>
                <span>Total</span>
                <strong>{totalFormate}</strong>
              </div>
            </>
          )}
        </article>
      </div>
    </section>
  )
}

export default LivresItem
