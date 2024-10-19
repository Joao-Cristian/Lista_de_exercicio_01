import ValidacaoEstudante from './components/ValidacaoEstudante'
import './App.css'

function App() {
  const verificar = true;
  return (
    <>
      <ValidacaoEstudante prop={verificar}/>
    </>
  )
}

export default App
