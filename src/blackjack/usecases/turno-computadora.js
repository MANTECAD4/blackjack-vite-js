import { determinarGanador } from './determinar-ganador.js';
import {pedirCarta, acumularPts, addCarta } from './index.js';

/**
 * Turno de la PC - sacara cartas tratando de superar al jugador, sin pasarse de 21.
 * @param {Number} ptsMinimos Puntos obtenidos por el jugador humano (a vencer/superar)
 * @param {Array<Number>} ptsJugadores  [0] - ptsJugador1, ..., [n-1] - ptsComputadora 
 * @param {Array<String>} deck Ejemplo: ['2C', '3D', '5H', 'AS',...]
 * @param {HTMLSmallElement[]} contadores - Array de elementos <small> del DOM
 * @param {HTMLDivElement[]} manoJugadores - Array de los div que representan la mano de los jugadores en el DOM.
 */
export const turnoComputadora = ( ptsMinimos, ptsJugadores, deck, contadores, manoJugadores ) => {
    let ptsComputadora = 0;
    do {
        const carta = pedirCarta( deck );
        ptsComputadora = acumularPts( ptsJugadores.length - 1, carta, ptsJugadores, contadores);
        addCarta( ptsJugadores.length-1, carta, manoJugadores );

    } while ((ptsComputadora <= ptsMinimos) && (ptsMinimos <= 21));
    determinarGanador( ptsJugadores );
}