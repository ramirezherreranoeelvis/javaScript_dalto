setTimeout(() => {
        document.write("Hola")
}, 2000)

const temporizador = setTimeout(saludar, 4000)
// terminar temporizador
clearTimeout(temporizador)
function saludar() {
        document.write("Hola")
}
// para intervalos
const intervalo = setInterval(() => {
        document.write("hola")
}, 5000)
// par saber cuando se deb cortar
setTimeout(() => {
        clearInterval(intervalo)
}, 10000)