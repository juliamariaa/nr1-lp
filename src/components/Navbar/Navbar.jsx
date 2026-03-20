import styles from './Navbar.module.scss';

function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg bg-white rounded-4 px-4 py-3 py-lg-4 ${styles.navbar}`}>
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img
            src="/img/logo-nr1-black.svg"
            alt="Logo da NR-1"
            height="32"
          />
        </a>

        <button
          className={`navbar-toggler ${styles['navbar-toggler']}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-3">
            <li className="nav-item mt-2 mt-lg-0">
              <a className={`nav-link active ${styles['nav-link']}`} href="index.html">Início</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles['nav-link']}`} href="#sobre">Sobre nós</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles['nav-link']}`} href="#beneficios">Nosso Diferencial</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${styles['nav-link']}`} href="#perguntas-frequentes">Perguntas Frequentes</a>
            </li>
          </ul>

          <a href="#contato" className={styles.navbar__btn}>
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
