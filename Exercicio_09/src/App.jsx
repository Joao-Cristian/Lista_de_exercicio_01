import './App.css'
import NivelEnsino from './components/NivelEnsino'

function App() {
  const nivelCategoria = "intermediário" //Para conferir os resultados digite "iniciante""intermediário""avançado"
   return (
    <>
      <NivelEnsino Nivel={nivelCategoria} />
    </>
  )
}

export default App
