import './App.css'
import Login from './components/Login'

function App() {
  const UsuarioLogin = true
  return (
    <>
      <Login Logado={UsuarioLogin}/>
    </>
  )
}

export default App
