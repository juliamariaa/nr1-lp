import './styles/global.scss';

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/Sobre';
import ProblemasMercado from './components/ProblemasMercado/ProblemasMercado';
import Beneficios from './components/Beneficios/Beneficios';
import ComparativoMercado from './components/ComparativoMercado/ComparativoMercado';
import PerguntasFrequentes from './components/PerguntasFrequentes/PerguntasFrequentes';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <ProblemasMercado />
      <Beneficios />
      <ComparativoMercado />
      <PerguntasFrequentes />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
