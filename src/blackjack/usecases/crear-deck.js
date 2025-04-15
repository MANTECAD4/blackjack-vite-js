import { shuffle } from 'underscore';

/**
 * Esta funcion crea el deck de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0) 
        throw Error('Tipos de carta es obligatorio. Debe ser un arreglo de string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0) 
        throw Error('Tipos de carta especiales es obligatorio. Debe ser un arreglo de string');
    
    let deck = [];
    
    for (let i = 2; i <= 10; i++){
        for(let tipo of tiposDeCarta){
                deck.push(i + tipo);
        }
    }
    
    for (let especial of tiposEspeciales){
        for (let tipo of tiposDeCarta){
            deck.push(especial + tipo);
        }
    }
    
    return shuffle(deck);
}

// export default crearDeck;