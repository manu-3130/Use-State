import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Juego from './juego.jsx'

function App() {
  const [nombre, setNombre] = useState("Manuela");
  const [numero, setNumero] = useState(0);

  function click(){
    setNombre("Alberto");
  }

  function cambiarNumero(){
    if(numero < 20){
      setNumero(numero + 1)
    }
  }

  function cambiarNumero2(){
    if(numero > 0){
      setNumero(numero - 1)
    }
    
  }

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <button onClick = {click}>Cambiar nombre</button>

      <h1>Numero: {numero}</h1>
      <button onClick = {cambiarNumero}> + </button>
      <button onClick = {cambiarNumero2}> - </button>

      <Juego />
    </div>
  )
}

export default App
