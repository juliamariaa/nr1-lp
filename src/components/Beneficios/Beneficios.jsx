import styles from './Beneficios.module.scss';

const beneficios = [
  {
    step: '/img/step-01.svg',
    alt: 'Step 1',
    title: 'Para Empresas',
    description: 'A NR-1 reduz riscos jurídicos ao garantir conformidade com a norma e facilita auditorias e inspeções. Além disso, permite o monitoramento contínuo da saúde psicossocial, oferecendo uma visão clara por setores e grupos vulneráveis.',
    alignment: '',
  },
  {
    step: '/img/step-02.svg',
    alt: 'Step 2',
    title: 'Para Consultores',
    description: 'A plataforma facilita a gestão eficiente de múltiplos clientes em um único ambiente, reduz drasticamente o trabalho manual e fortalece a diferenciação competitiva no mercado, com relatórios profissionais e totalmente customizáveis.',
    alignment: 'align-self-center',
  },
  {
    step: '/img/step-03.svg',
    alt: 'Step 3',
    title: 'Para Colaboradores',
    description: 'A NR-1 oferece total privacidade no tratamento dos dados e uma experiência simples e rápida, transmitindo confiança em todo o processo de avaliação psicossocial.',
    alignment: 'align-self-end',
  },
];

function Beneficios() {
  return (
    <section id="beneficios" className={styles.beneficios}>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 d-flex flex-column align-items-center">
            <span className={styles.beneficios__tag}>
              Principais Benefícios
            </span>
            <h2 className={styles.beneficios__title}>
              Vantagens reais para empresas, consultores e colaboradores.
            </h2>
          </div>

          <div className="col-12 d-flex flex-column">
            {beneficios.map((item, index) => (
              <div
                key={index}
                className={`${styles.beneficios__card} d-flex gap-2 justify-content-between ${item.alignment}`}
              >
                <div>
                  <img
                    className={styles['beneficios__card-image']}
                    src={item.step}
                    alt={item.alt}
                  />
                </div>
                <div className={styles['beneficios__card-content']}>
                  <h3 className={styles['beneficios__card-title']}>
                    {item.title}
                  </h3>
                  <p className={styles['beneficios__card-description']}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Beneficios;
