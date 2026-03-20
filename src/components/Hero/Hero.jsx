import styles from './Hero.module.scss';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div
          className={`row ${styles.hero__row}`}
          style={{ backgroundImage: "url('/img/hero__background.png')" }}
        >
          <div className={`col-12 d-flex flex-column justify-content-between align-items-center px-3 px-md-0 ${styles.hero__content}`}>
            <div>
              <h1 className={styles.hero__title}>
                Simplifique a gestão psicossocial da sua empresa com a NR-1
              </h1>
              <p className={styles.hero__description}>
                Centralize avaliações, indicadores e relatórios psicossociais em uma plataforma segura, visual e feita para empresas e consultorias.
              </p>
            </div>
            <a href="#" className={styles.hero__cta}>
              Falar com um especialista
            </a>
          </div>

          <div className={`col-12 ${styles['hero__video-wrapper']}`}>
            <video
              className={styles.hero__video}
              src="/video/video-hero.mp4"
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
