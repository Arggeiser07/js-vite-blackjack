
/**
 * Esta función obtiene el valor de la carta pedida.
 * @param {String} carta 
 * @returns {Number} retorna el string del valor de la carta 
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    if (valor >= 21){
        throw Error( 'No puedes pedir más cartas' );
    }
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}