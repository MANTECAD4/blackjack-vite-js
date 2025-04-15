

/**
 * Agrega la imagen de la carta extraida a la mano del jugador en el HTML
 * @param {Number} turno Turno : 0 -> primer jugador, length-1 -> computadora
 * @param {String} carta Ejemplo 5D, AS, etc. 
 * @param {HTMLDivElement[]} manoJugadores - Array de los div que representan la mano de los jugadores en el DOM.
 */
export const addCarta = ( turno, carta, manoJugadores ) => {
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    manoJugadores[turno].append(imgCarta);
};