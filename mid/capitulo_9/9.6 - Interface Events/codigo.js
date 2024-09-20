addEventListener("load", () => {
        console.log("ha carfado el sitio")
})
// unload es cuando ya se fue y beforeunload es antes de que se large
addEventListener("beforeunload", () => {
        alert("Te estas largando de la pagina")
})
addEventListener("resize", () => {
        console.log("Esta cambiando el tamaño")
})
// si empieza en no el original tambien se lanza
addEventListener("scroll", () => {
        console.log("se ha scrolleado")
})
const inputText = document.querySelector(".input-text")
const seleccionado = document.querySelector(".seleccionado")
inputText.addEventListener("select", (e) => {
        //  no letra por letra
        console.log("se ha seleccionad")
        //  no letra por letra
        console.log(e.target.selectionStart)
        console.log(e.target.selectionEnd)
        let start = e.target.selectionStart;
        let end = e.target.selectionEnd;
        let textoCOmpleto = inputText.value
        seleccionado.innerHTML = textoCOmpleto.substring(start, end)
})
inputText.addEventListener("keyup", (e) => {
        let tecla = e.key
        seleccionado.innerHTML = "La ultima tecla presionada fue: " + tecla
})