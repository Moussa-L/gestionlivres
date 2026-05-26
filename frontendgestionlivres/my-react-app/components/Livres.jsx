import styles from '../styles/Livres.module.css'

function Livres({ children }) {
  return (
    <header className={styles.hero}>
      <nav className={styles.nav} aria-label="Navigation principale">
        <span className={styles.logo}>ReadMarket</span>
        <div className={styles.navLinks}>
          <a href="#selection">Livres</a>
          <a href="#ajouter-livre">Ajouter</a>
          <a href="#services">Services</a>
          <a href="#panier">Panier</a>
        </div>
      </nav>

      <section className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.badge}>Librairie en ligne</p>
          {children}
          <p className={styles.subtitle}>
            Trouvez vos prochains romans, essais et livres jeunesse avec une selection claire,
            des prix visibles et une livraison rapide.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#selection">Voir les livres</a>
            <a className={styles.secondaryButton} href="#panier">Consulter le panier</a>
          </div>
        </div>

        <div className={styles.heroPanel} aria-label="Mise en avant boutique">
          <span>Offre du moment</span>
          <strong>3 livres achetes, livraison offerte</strong>
          <p>Valable sur toute la selection decouverte.</p>
        </div>
      </section>
    </header>
  )
}

export default Livres
