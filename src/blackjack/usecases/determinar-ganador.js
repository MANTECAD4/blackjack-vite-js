
/**
 * Muestra un mensaje con el resultado de la partida
 * @param {Array<Number>} ptsJugadores  [0] - ptsJugador1, ..., [n-1] - ptsComputadora 
 */
export const determinarGanador = ( ptsJugadores ) => {
    const [ ptsMinimos, ptsComputadora ] = ptsJugadores;
    setTimeout( () => {
        if ( ptsComputadora === ptsMinimos){
            alert('EMPATE');
        } else if (ptsComputadora > 21 || ptsMinimos === 21){
            alert('GANASTE');
        } else if ( (ptsMinimos > 21) || (ptsComputadora > ptsMinimos) ){
            alert('PERDISTE');
        } 
    }, 100);
}