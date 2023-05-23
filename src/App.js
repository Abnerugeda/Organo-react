
import Banner from './components/Banner';
import TextCamp from './components/TextCamp';

function App() {
  return (
    <div className="App">
      <Banner/>
      <TextCamp label="Nome" placeholder="Digite o seu Nome"/>
      <TextCamp label="Cargo" placeholder="Digite o seu Cargo"/>
      <TextCamp label="Imagem" placeholder="Coloque uma Imagem" />
    </div>
  );
}

export default App;
