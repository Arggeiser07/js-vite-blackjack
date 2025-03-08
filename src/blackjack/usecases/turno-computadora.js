import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * 
 * @param {Number} puntosMinimos puntos necesarios que la comp. necesita para ganar
 * @param {HTMLElement} puntosHTML muestra puntos de los jugadore( es un elemento HTML )
 * @param {HTMLElement} divCartasComputadora lugar donde muestra cartas de la comp.
 * @param {Array<String>} deck realiza la función pedirCarta, luego necesito meter deck como argumento
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {//Incluimos todos los argumentos que se usan en la función: usamos el deck, puntosMin, usamos tb el deck y el divComp.

    if( !puntosMinimos ) throw new Error ('Son necesarios puntosMinimos');
    if( !puntosHTML ) throw new Error ('Son necesarios puntosHTML');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;// HE quitado el [1] de innertext, y no hay errores... PORQUE?
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}