const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P");
const h2_nuevo = document.createElement("H2");
parrafo.innerHTML = "Parrafo";
h2_nuevo.innerHTML = "Titulo"

const h2_antiguo = document.querySelector(".h2")
contenedor.replaceChild(h2_nuevo, h2_antiguo)
contenedor.removeChild(h2_nuevo)
let respuesta = contenedor.hasChildNodes();
if (respuesta) {
        document.write("El elemento no tiene hijos");
} else {
        document.write("El elemento NO tiene hijos")
}