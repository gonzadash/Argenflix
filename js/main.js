const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

/* ---- ----- ----- Event Listener para la flecha derecha ----- ----- ----- */
flechaDerecha.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

/* ---- ----- ----- Event Listener para la flecha izquierda ----- ----- ----- */
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});

/* ---- ----- ----- Paginacion ----- ----- ----- */
const numeroPaginas = Math.ceil(peliculas.lenght / 5);
for(let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');
    document.querySelector('.indicadores').appendChild(indicador);

}