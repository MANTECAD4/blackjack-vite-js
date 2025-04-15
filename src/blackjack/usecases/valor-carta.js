
/**
 * Retorna el valor númerico asociado a la carta
 * @param {string} carta Ejemplo: 5D, AS, etc.
 * @returns {Number} 5D -> 5, AS -> 11, etc.
 */

export const valorCarta = ( carta ) => {
    if( !carta ){
        throw new Error('El parametro carta es obligatorio.');
    }
    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? 
            ( (valor === 'A') ? 11 : 10) 
            : Number(valor);
}