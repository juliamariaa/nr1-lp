import styles from './ComparativoMercado.module.scss';

const CHECK = <img className={styles['comparativo-mercado__cell-image']} src="/img/icon-check.svg" alt="Ícone de check" />;
const CLOSE = <img className={styles['comparativo-mercado__cell-image']} src="/img/icon-close.svg" alt="Ícone de close" />;

const rows = [
  { recurso: 'Gestão de múltiplas empresas', nr1: CHECK, concorrentes: 'Limitado' },
  { recurso: 'Importação de colaboradores via Excel', nr1: CHECK, concorrentes: 'Parcial' },
  { recurso: 'Questionário baseado em Karasek', nr1: CHECK, concorrentes: 'Parcial' },
  { recurso: 'Customização de questões', nr1: CHECK, concorrentes: CLOSE },
  { recurso: 'Dashboard visual avançado', nr1: CHECK, concorrentes: CLOSE },
  { recurso: 'Relatório dinâmico e exportável', nr1: CHECK, concorrentes: 'Parcial' },
  { recurso: 'Perfis de acesso separados', nr1: CHECK, concorrentes: 'Parcial' },
  { recurso: 'Visualização individual não identificada (LGPD)', nr1: CHECK, concorrentes: CHECK },
  { recurso: 'Relatórios comparativos por setor', nr1: CHECK, concorrentes: CLOSE },
  { recurso: 'Suporte e evolução contínua', nr1: CHECK, concorrentes: CLOSE },
  { recurso: 'Integração futura com plataformas Cover', nr1: CHECK, concorrentes: 'Parcial' },
  { recurso: 'UX moderna e responsiva', nr1: CHECK, concorrentes: CLOSE },
];

function ComparativoMercado() {
  return (
    <section id="comparativo-mercado" className={styles['comparativo-mercado']} style={{ backgroundImage: "url('/img/comparativo-mercado__background.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col col-lg-4 mb-5 mb-lg-0 d-flex flex-column justify-content-between">
            <img
              className={styles['comparativo-mercado__image']}
              src="/img/logo-nr1-blue.svg"
              alt="Logo NR-1 azul"
              width="110"
              height="48"
            />
            <h2 className={styles['comparativo-mercado__title']}>
              NR-1 Cover em comparação com o mercado!
            </h2>
          </div>

          <div className="col col-lg-8 d-flex justify-content-end">
            <table className={styles['comparativo-mercado__table']}>
              <thead>
                <tr>
                  <th className={styles['comparativo-mercado__head']}>Recurso</th>
                  <th className={styles['comparativo-mercado__head']}>NR-1 Cover</th>
                  <th className={styles['comparativo-mercado__head']}>Concorrentes Tradicionais</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={index}>
                    <td className={styles['comparativo-mercado__cell']}>{row.recurso}</td>
                    <td className={styles['comparativo-mercado__cell']}>{row.nr1}</td>
                    <td className={styles['comparativo-mercado__cell']}>{row.concorrentes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComparativoMercado;
