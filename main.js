const opciones = ["piedra", "papel", "tijera"];


let victoriasJugador1 = 0;
let victoriasJugador2 = 0;
let empateTotal = 0;

let historial = [];

function generarEleccionJugador2() {
    const i = Math.floor(Math.random() * opciones.length);
    const eleccion = opciones[i]
    console.log(`Jugador2 eligió: ${eleccion}`);
    return eleccion;
}

function jugar(eleccionJugador1) {
    console.log(`Jugador eligió: ${eleccionJugador1}`);
    const eleccionJugador2 = generarEleccionJugador2();
    let resultado = "";


    if (eleccionJugador1 === eleccionJugador2) {
        resultado = `Empate. Ambos eligieron ${eleccionJugador1}.`; empateTotal++;
        console.log(`Empate.`);
    } else if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") || 
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        resultado = `¡Ganaste! ${eleccionJugador1} vence a ${eleccionJugador2}.`;
        victoriasJugador1++;
        console.log(`¡Ganaste!`);
    } else {
        resultado = `Perdiste. ${eleccionJugador2} vence a ${eleccionJugador1}.`;
        victoriasJugador2++;
        console.log(`Perdiste.`);
    }


    historial.push({
        jugador1: eleccionJugador1,
        jugador2: eleccionJugador2,
        resultado: resultado
    });

    actualizarHistorial();
}

function reiniciarJuego() {
    victoriasJugador1 = 0;
    victoriasJugador2 = 0;
    empateTotal = 0;
    historial = [];

    console.log(`Juego reiniciado.`);

    document.getElementById("historial").innerHTML = "";
}

function actualizarHistorial() {
    const historialElement = document.getElementById("historial");
    historialElement.innerHTML = "";

}

