const getName = async () => {
        // se cordar con await ya se tiene el resultado sin necesidad del then
        let peticion = await fetch("informacion.txt");
        let resultado = await peticion.json();
        console.log(resultado)
        document.querySelector(".resultado").textContent = resultado.Edad
}

const botton = document.querySelector("#button")
botton.addEventListener('click', () => {
        getName()
})