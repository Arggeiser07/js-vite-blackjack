/**
 * Función que crea la carta ( partiendo del string) y la coloca en el div. jugador o comp.
 * @param {String} carta string de la carta correspondiente.
 *@returns {HTMLImageElement} retorna la imagen.
*/
export const crearCartaHTML = ( carta ) => {
    //Hago if a los argumentos:
    if( !carta ) throw new Error ( 'No hay carta ');

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD...
    imgCarta.classList.add('carta');

    return imgCarta;
}