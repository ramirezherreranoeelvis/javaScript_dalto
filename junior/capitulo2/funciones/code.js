function saludar() {
        respuesta = prompt("Hola lucas como fue tu dia")
        if (respuesta == "bien") {
                alert("esta bien")
        } else {
                alert("espero que mejores")
        }
}

function retornable(parametro1) {
        return "el parametro1 es => " + parametro1;
}

function suma(numero1, numero2) {
        return suma = numero1 + numero2;
}
document.write(suma(1, 2))
// tambien se peude hacer esto
var producto = function multiplicar(numero1, numero2) {
        return numero1 * numero2;
}
// funciones flecha:
const funcionFlecha = nombre => {
        document.write(`¡Hola ${nombre}! ¿Comó estás?`)
        respuesta = prompt("Hola lucas como fue tu dia")
}
funcionFlecha("xd")