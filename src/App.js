
import './App.css';
import dakodev from './imagenes/dakodev.png'

function App() {
  return (
    <div className="App">
      <div className='logoDakodevContenedor'>
        <img className='logoDakodev' src={dakodev} alt='logoDakodev' />
      </div>
      <div className='contenedorCalculadora'>
        <div className='fila'>fila</div>
        <div className='fila'>fila</div>
        <div className='fila'>fila</div>
        <div className='fila'>fila</div>
        <div className='fila'>fila</div>
      </div>
    </div>
  );
}

export default App;
