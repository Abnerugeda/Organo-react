import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import {v4 as uuidv4} from 'uuid';

function App() {
  
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      nome: 'Front End',
      cor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#FAE9FS'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(prop){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id != prop.id))
  }

  function mudarCorDoTime(cor, id){
    setTimes(times.map(time => {
      if(time.id === id){
        time.cor = cor;
      }
      return time;
    }))
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time =>
       <Time 
        id={time.id}
        mudarCor={mudarCorDoTime}
        key={time.id}
        nome={time.nome} 
        corPrimaria={time.cor} 
        cor={time.cor}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />)
      }

    </div>
  );
}

export default App;
