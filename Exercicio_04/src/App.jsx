import React from 'react'
import VerificarIdade from './componets/VerificarIdade'
import './App.css'

function App() {
  const idadeUsuario = 17
  return (
    <>
      <VerificarIdade prop={idadeUsuario}/>
    </>
  )
}

export default App
