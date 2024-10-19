import Autenticador from './componets/Autenticador';
import './App.css'

function App() {
  const autenticador_usuario = true;
  return (
    <>
    <div>
      <Autenticador prop = {autenticador_usuario}/>
      </div>
    </>
  )
}

export default App
