import { useState } from 'react';
import './juego.css'

function Juego() {
    const [jugador1, setJugador1] = useState("");
    const [jugador2, setJugador2] = useState("");
    const [puntos1, setPuntos1] = useState(0);
    const [puntos2, setPuntos2] = useState(0);
    let numero;
    let al = ["Piedra", "Papel", "Tijera"]
    let ganador;


    function aleatorio1() {
        setJugador1("Piedra")
        numero = Math.floor(Math.random() * 3)
        setJugador2(al[numero])
        console.log(jugador2)
    }

    function aleatorio2() {
        setJugador1("Papel")
        numero = Math.floor(Math.random() * 3)
        setJugador2(al[numero])
        console.log(jugador2)
    }

    function aleatorio3() {
        setJugador1("Tijera")
        numero = Math.floor(Math.random() * 3)
        setJugador2(al[numero])
        console.log(jugador2)
    }

    if (jugador1 === "Piedra" && jugador2 === "Papel") {
        ganador = "Perdiste"
        
    }else if (jugador1 === "Piedra" && jugador2 === "Tijera") {
        ganador = "Ganaste"
        
    }if (jugador2 === "Piedra" && jugador1 === "Papel") {
        ganador = "Ganaste"
        
    }else if (jugador2 === "Piedra" && jugador1 === "Tijera") {
        ganador = "Perdiste"
        
    }else if (jugador1 === "Papel" && jugador2 === "Piedra") {
        ganador = "Ganaste"
        
    }else if (jugador1 === "Papel" && jugador2 === "Tijera") {
        ganador = "Perdiste"
        
    }if (jugador2 === "Papel" && jugador1 === "Piedra") {
        ganador = "Perdiste"
        
    }else if (jugador2 === "Papel" && jugador1 === "Tijera") {
        ganador = "Ganaste"
        
    }else if (jugador1 === "Tijera" && jugador2 === "Piedra") {
        ganador = "Perdiste"
        
    }else if (jugador1 === "Tijera" && jugador2 === "Papel") {
        ganador = "Ganaste"
        
    }if (jugador2 === "Tijera" && jugador1 === "Piedra") {
        ganador = "Ganaste"
        
    }else if (jugador2 === "Tijera" && jugador1 === "Papel") {
        ganador = "Perdiste"
        
    }else if (jugador1 === jugador2) {
        ganador = "Empate"
    }

    return (
        <div>
            <h1>Piedra, papel o tijeras</h1>
            <p>Vamos a jugar</p>
            <button onClick={aleatorio1}>Piedra</button>
            <button onClick={aleatorio2}>Papel</button>
            <button onClick={aleatorio3}>Tijera</button>

            <p>Tu sacaste {jugador1}</p>
            <p>Tu oponente saco {jugador2}</p>
            <p>Gano: {ganador}</p>

            <p>Tienes {puntos1} puntos y tu oponente {puntos2} puntos</p>
        </div>
    )
}

export default Juego