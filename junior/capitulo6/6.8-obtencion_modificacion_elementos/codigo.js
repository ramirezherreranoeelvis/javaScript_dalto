const titulo = document.querySelector('.titulo')
// con textContent coje todo el texto si es visible o o no independiente del estilo
// el outherHTML, innerHTML, innerText, outerText No
// el innetHTML esta desfasado
/* 
        el navegador lee tl cual por ende no muestra las etiquetas, en cambio si se guarda en
        el valor con innerHTML 
        el inner todo le con tiene menos la etiqueta principal
        el outher muestra la etiqueta y todo lo que contiene
        y los text solo texto puro
*/
let resultado = titulo.innerHTML
document.write(resultado)
// alert(resultado)