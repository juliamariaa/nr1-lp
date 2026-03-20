import styles from './Sobre.module.scss';

function Sobre() {
  return (
    <section id="sobre" className={styles.sobre}>
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <span className={styles.sobre__tag}>
              Sobre nós
            </span>
            <h2 className={styles.sobre__title}>
              Uma nova forma de cuidar da saúde psicossocial
            </h2>
          </div>

          <div className="col d-flex flex-column justify-content-between align-items-start">
            <p className={styles.sobre__description}>
              A NR-1 é uma solução digital completa para empresas e consultorias que precisam aplicar a avaliação psicossocial com segurança, clareza e conformidade legal. A plataforma automatiza processos, organiza dados e transforma informações em análises estratégicas.
            </p>
            <a href="#" className={styles.sobre__cta}>
              Conhecer a NR-1
            </a>
          </div>
        </div>

        <div className="row d-flex justify-content-between gap-4 gap-lg-0">
          <div className="col-12 col-lg-9">
            <img
              className={styles['sobre__dashboard-image']}
              src="/img/sobre-dashboard.png"
              alt="Preview Dashboard NR-1"
            />
          </div>

          <div className="col-12 col-lg-3 d-flex flex-column justify-content-between gap-3">
            <div className={`${styles.sobre__card} ${styles['sobre__card--blue']}`}>
              <img
                className={styles['sobre__card-image']}
                src="/img/logo-nr1-blue.svg"
                alt="Logo NR-1 Azul"
              />
              <p className={`${styles['sobre__card-description']} mt-3`}>
                Criamos uma plataforma segura, inteligente e em conformidade com a legislação para transformar dados em decisões claras.
              </p>
            </div>

            <div className={`${styles.sobre__card} ${styles['sobre__card--white']}`}>
              <p className={styles['sobre__card-description']}>
                Decisões até <strong>3x mais rápidas</strong><br />
                <span>com dashboards e indicadores visuais.</span>
              </p>
            </div>

            <div className={`${styles.sobre__card} ${styles['sobre__card--dark']}`}>
              <p className={styles['sobre__card-description']}>
                Automação, segurança e visão clara em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
