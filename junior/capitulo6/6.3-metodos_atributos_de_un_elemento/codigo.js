const rangoEtario = document.querySelector(".rangoEtario")
// modificar valor del atributo
rangoEtario.setAttribute("type", "color")
const valorDelAtributo = rangoEtario.getAttribute("type")
document.write(valorDelAtributo)
/* eliminar atirbuto */
rangoEtario.removeAttribute("type")