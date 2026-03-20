import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <a
              className={styles.footer__copyright}
              href="https://www.covertecnologia.com/"
              target="_blank"
              rel="noreferrer"
            >
              © 2025 Keep Sistemas by Cover Tecnologia
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
