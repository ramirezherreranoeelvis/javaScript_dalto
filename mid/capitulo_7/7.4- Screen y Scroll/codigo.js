const screen = window.screen;
console.log(screen)
document.write(screen.availHeight + "<br>")
// para la possicion x de la ventana es lo mismo que screenX
const screenLeft = window.screenLeft;
// para la posicion y de la ventana es lo mismo que screenY
const screenTop = window.screenTop;
document.write(`Left: <b>${screenLeft}<b><br>
                Top: <b>${screenTop}</b>`)


// el scrollY es la posicion de scroll en la ventana
// el scrollX igualmente pero en pos x
// para desplazar
window.scroll(0, 100)