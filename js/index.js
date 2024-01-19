
let contenedorClick = document.getElementById('contenedor-click')
let contenedorEfectos = document.querySelector('#contenedor-efectos')


contenedorClick.addEventListener('mouseover', ()=> {
    contenedorEfectos.style.backgroundColor = 'black'

})

contenedorClick.addEventListener('mouseout', ()=> {
    contenedorEfectos.style.backgroundColor = 'lightblue'

})