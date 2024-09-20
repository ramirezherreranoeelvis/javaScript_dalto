const button = document.querySelector(".button");
const contenedor = document.querySelector(".contenedor");
/* siempre se ejecuta el evento del mas especifico en este caso el boton */
/* para quitar eso, como ultimo parametro de event listener se pone true */
contenedor.addEventListener("click", () => {
        alert("di click en un contenedor")
})
button.addEventListener("click", (e) => {
        alert("di click en un boton")
        e.stopPropagation()
        /* 
                esto hace que no se propage osea solo
                este se ejecuta si se da click aca, osea aca para
         */
})