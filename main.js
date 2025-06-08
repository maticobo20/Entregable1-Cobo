const opciones = ["Piedra", "Papel", "Tijera"];
let MAX_RONDAS = 5;

let victoriasJugador1 = 0;
let victoriasJugador2 = 0;
let empateTotal = 0;
let rondasJugadas = 0;

let historial = [];

function pedirRondas() {
    let rondas = prompt("¿Cuántas rondas quieres jugar?", "5");

    rondas = parseInt(rondas);
    if(isNaN(rondas) || rondas <= 0) {
        alert("Entrada no válida. Se jugarán 5 rondas por defecto.");
        MAX_RONDAS = 5;
    } else {
        MAX_RONDAS = rondas;
    }
}

function generarEleccionJugador2() {
    const i = Math.floor(Math.random() * opciones.length);
    const eleccion = opciones[i]
    console.log(`Jugador2 eligió: ${eleccion}`);
    return eleccion;
}

function jugar(eleccionJugador1) {
    if (rondasJugadas >= MAX_RONDAS) {
        alert("¡Se alcanzaron las 3 rondas! El juego se reiniciará.");
        reiniciarJuego();
        return;
    }


    console.log(`Jugador eligió: ${eleccionJugador1}`);
    const eleccionJugador2 = generarEleccionJugador2();
    let resultado = "";


    if (eleccionJugador1 === eleccionJugador2) {
        resultado = `Empate. Ambos eligieron ${eleccionJugador1}.`; empateTotal++;
        console.log(`Empate.`);
    } else if (
        (eleccionJugador1 === "Piedra" && eleccionJugador2 === "Tijera") ||
        (eleccionJugador1 === "Papel" && eleccionJugador2 === "Piedra") || 
        (eleccionJugador1 === "Tijera" && eleccionJugador2 === "Papel")
    ) {
        resultado = `¡Ganaste! ${eleccionJugador1} vence a ${eleccionJugador2}.`;
        victoriasJugador1++;
        console.log(`¡Ganaste!`);
    } else {
        resultado = `Perdiste. ${eleccionJugador2} vence a ${eleccionJugador1}.`;
        victoriasJugador2++;
        console.log(`Perdiste.`);
    }

    rondasJugadas++;

    historial.push({
        jugador1: eleccionJugador1,
        jugador2: eleccionJugador2,
        resultado: resultado
    });

    actualizarHistorial();

    if (rondasJugadas >= MAX_RONDAS) {
        setTimeout(() => {
            let mensajeFinal = `Juego terminado. Jugador 1: ${victoriasJugador1} victorias. Jugador2: ${victoriasJugador2} victorias. Empates: ${empateTotal}`;
            
            if (victoriasJugador1 > victoriasJugador2) {
                mensajeFinal += "¡Jugador1 gana la partida!";
            } else if (victoriasJugador2 > victoriasJugador1) {
                mensajeFinal += "¡Jugador2 gana la partida!";
            } else {
                mensajeFinal += "La partida terminó en empate";
            }


            alert(mensajeFinal);
            reiniciarJuego();
        }, 100);
    }
}

function reiniciarJuego() {

pedirRondas();

    victoriasJugador1 = 0;
    victoriasJugador2 = 0;
    empateTotal = 0;
    historial = [];
    rondasJugadas = 0;

    console.log(`Juego reiniciado.`);

    document.getElementById("historial").innerHTML = "";
    document.getElementById("jugador1").textContent = "0";
    document.getElementById("jugador2").textContent = "0";
}

function actualizarHistorial() {
    const historialElement = document.getElementById("historial");
    historialElement.innerHTML = historial.map(item => `<p>${item.resultado} (Jugador1: ${item.jugador1}, Jugador2: ${item.jugador2})</p>`).join("");

    document.getElementById("jugador1").textContent = victoriasJugador1;
    document.getElementById("jugador2").textContent = victoriasJugador2;
}

pedirRondas();