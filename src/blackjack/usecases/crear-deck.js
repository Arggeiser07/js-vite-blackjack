
import _ from 'underscore';

/**
 *Esta función crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ej: [C,D,H,S]
 * @param {Array<String>} tiposEspeciales Ej: [A,J,Q,K]
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta es obligatorio');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio');
   
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    // console.log( deck );
    return deck;
}

// export default crearDeck;// Exportación x defecto, solo puedo tener 1.