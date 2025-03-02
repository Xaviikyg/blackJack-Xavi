
/**
 * Esta función me permite tomar una carta
 * @param {Array>String>} deck es un arreglo de String
 * @return {String} retorna la carta del Deck
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}