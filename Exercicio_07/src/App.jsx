import './App.css'
import Desconto from './components/Desconto'

function App() {
  const produto_descontado = true
  return (
    <>
      <Desconto TemDesconto = {produto_descontado}/>
    </>
  )
}

export default App
