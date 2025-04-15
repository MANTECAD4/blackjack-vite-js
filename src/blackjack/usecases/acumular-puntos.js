import { valorCarta } from "./valor-carta";
/**
 * Suma y muestra el valor de la carta extraida a la mano de un jugador
 * @param {Number} turno Turno : 0 -> primer jugador, length-1 -> computadora
 * @param {String} carta Ejemplo 5D, AS, etc. 
 * @param {Array<Number>} ptsJugadores  [0] - ptsJugador1, ..., [n-1] - ptsComputadora 
 * @param {HTMLSmallElement[]} contadores - Array de elementos <small> del DOM
 * @returns {Number} Puntos del jugador
 */
export const acumularPts = ( turno, carta, ptsJugadores, contadores ) => {
    ptsJugadores[turno] += valorCarta(carta);
    contadores[turno].innerText = ptsJugadores[turno];
    return ptsJugadores[turno];
};