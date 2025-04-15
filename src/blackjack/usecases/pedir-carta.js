
/**
 * Saca el primer elemento de la baraja y lo retorna
 * @param {Array<String>} deck Ejemplo: ['2C', '3D', '5H', 'AS',...]
 * @returns {String} Ejemplo : '5C'
 */

export const pedirCarta = ( deck ) => {
    if (!deck || deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }
    return deck.shift();
}