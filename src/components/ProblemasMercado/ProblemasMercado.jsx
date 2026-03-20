import styles from './ProblemasMercado.module.scss';

const cards = [
  {
    icon: '/img/icon-dashboard.svg',
    alt: 'Ícone de dashboard',
    title: 'Ausência de dashboards',
    description: 'A falta de dashboards impede uma visão clara e rápida dos indicadores psicossociais, exigindo esforço extra para entender o cenário geral.',
    modifier: 'light',
  },
  {
    icon: '/img/icon-flow.svg',
    alt: 'Ícone de fluxo',
    title: 'Fluxos manuais',
    description: 'Processos manuais para inclusão ou importação de colaboradores tornam a operação lenta, suscetível a falhas e pouco escalável.',
    modifier: 'dark',
  },
  {
    icon: '/img/icon-security.svg',
    alt: 'Ícone de segurança',
    title: 'Baixa segurança',
    description: 'Falhas de segurança e pouca transparência no processamento de dados geram riscos legais e reduzem a confiança dos usuários.',
    modifier: 'light-offset',
  },
  {
    icon: '/img/icon-layout.svg',
    alt: 'Ícone de layout',
    title: 'Layouts engessados',
    description: 'Interfaces antigas e pouco intuitivas tornam o uso confuso, aumentam erros operacionais e dificultam a adoção da plataforma pelos usuários.',
    modifier: 'light',
  },
];

function ProblemasMercado() {
  return (
    <section id="problemas-mercado" className={styles['problemas-mercado']}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-lg-6 col-xl-4 mb-5 mb-lg-0 d-flex flex-column align-items-start">
            <h2 className={`${styles['problemas-mercado__title']} mb-2`}>
              As principais falhas das plataformas atuais
            </h2>
            <p className={`${styles['problemas-mercado__description']} mb-4`}>
              Hoje, a maioria das plataformas de avaliação psicossocial apresenta limitações significativas. A NR-1, desenvolvida pela Cover, surge para corrigir essas falhas e transformar a gestão psicossocial.
            </p>
            <a className={styles['problemas-mercado__cta']} href="#">
              Conhecer a NR-1
            </a>
          </div>

          <div className="col-12 col-lg-6 col-xl-8 d-flex flex-wrap justify-content-end gap-3">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${styles['problemas-mercado__card']} ${styles[`problemas-mercado__card--${card.modifier}`]}`}
              >
                <img
                  className={styles['problemas-mercado__card-image']}
                  src={card.icon}
                  alt={card.alt}
                  width="90"
                  height="90"
                />
                <h3 className={styles['problemas-mercado__card-title']}>
                  {card.title}
                </h3>
                <p className={styles['problemas-mercado__card-description']}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemasMercado;
