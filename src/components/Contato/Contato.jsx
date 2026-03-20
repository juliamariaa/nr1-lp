import styles from './Contato.module.scss';

function Contato() {
  return (
    <section id="contato" className={styles.contato} style={{ backgroundImage: "url('/img/contato__background.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col mb-4 mb-md-0">
            <div>
              <span className={styles.contato__tag}>
                Contato
              </span>
              <h2 className={styles.contato__title}>
                Fale conosco
              </h2>
            </div>
            <p className={styles.contato__description}>
              Avalie. Analise. Aja. Tudo em um único sistema, com segurança, transparência e resultados confiáveis!
            </p>
          </div>

          <div className="col">
            <div className={styles.contato__form}>
              <div className={styles['contato__form-field']}>
                <label className={styles['contato__form-label']} htmlFor="name">Nome</label>
                <input className={styles['contato__form-input']} id="name" type="text" />
              </div>

              <div className={styles['contato__form-field']}>
                <label className={styles['contato__form-label']} htmlFor="phone">Telefone</label>
                <input className={styles['contato__form-input']} id="phone" type="number" />
              </div>

              <div className={styles['contato__form-field']}>
                <label className={styles['contato__form-label']} htmlFor="message">Mensagem</label>
                <textarea className={styles['contato__form-textarea']} id="message" />
              </div>

              <a href="#" className={styles['contato__form-button']}>
                Enviar mensagem
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contato;
