import styles from './PerguntasFrequentes.module.scss';

const faqs = [
  {
    id: 'faq-1',
    question: 'O que é a plataforma NR-1 da Cover?',
    answer: 'A plataforma NR-1 da Cover é uma solução digital completa para gestão de avaliações psicossociais conforme a NR-1.',
  },
  {
    id: 'faq-2',
    question: 'A plataforma atende às exigências da NR-1?',
    answer: 'Sim. A plataforma foi desenvolvida para atender integralmente às exigências da NR-1 e à LGPD.',
  },
  {
    id: 'faq-3',
    question: 'Quem pode utilizar a NR-1?',
    answer: 'Empresas, consultorias, profissionais de SST e equipes de RH.',
  },
  {
    id: 'faq-4',
    question: 'É possível gerenciar múltiplas empresas ou clientes?',
    answer: 'Sim. A plataforma NR-1 permite gerenciar múltiplas empresas e clientes em um único ambiente, com separação segura de dados, perfis de acesso personalizados e visão consolidada ou individual por organização. Ideal para consultorias e grupos empresariais que precisam de escala e controle.',
  },
  {
    id: 'faq-5',
    question: 'Os dados dos colaboradores são seguros?',
    answer: 'Sim. A NR-1 foi desenvolvida com foco em segurança e conformidade com a LGPD, utilizando criptografia, controle de acessos por permissão e armazenamento seguro dos dados. Todas as informações são tratadas com confidencialidade e transparência, garantindo proteção total aos colaboradores e às empresas.',
  },
  {
    id: 'faq-6',
    question: 'É possível personalizar questionários e acessos?',
    answer: 'Sim. A plataforma permite personalizar questionários, indicadores e níveis de acesso de acordo com a realidade de cada empresa ou cliente.',
  },
];

function PerguntasFrequentes() {
  return (
    <section id="perguntas-frequentes" className={styles['perguntas-frequentes']}>
      <div className="container">
        <div className="row d-flex flex-column align-items-center">
          <div className="col-12 mb-5">
            <span className={styles['perguntas-frequentes__tag']}>
              Suas dúvidas aqui
            </span>
            <h2 className={styles['perguntas-frequentes__title']}>
              Perguntas Frequentes
            </h2>
            <p className={styles['perguntas-frequentes__description']}>
              Reunimos aqui as principais dúvidas sobre a NR-1 e como a plataforma da Cover funciona na prática.
            </p>
          </div>

          <div className="col-12">
            <div className={`accordion ${styles['perguntas-frequentes__accordion']}`} id="faqAccordion">
              {faqs.map((faq) => (
                <div className="accordion-item" key={faq.id}>
                  <h2 className="accordion-header" id={`heading-${faq.id}`}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${faq.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${faq.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading-${faq.id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PerguntasFrequentes;
