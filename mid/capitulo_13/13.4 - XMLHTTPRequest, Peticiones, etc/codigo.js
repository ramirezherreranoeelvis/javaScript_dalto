// funciona con servidor prendido
const peticion = new XMLHttpRequest();


// cuando el readystate cambie, para que tenga tiempo de procesar
peticion.addEventListener('readystatechange', () => {
        console.log(peticion.readyState)
        if (peticion.readyState == 4 && peticion.status == 200) {
                {
                        console.log(peticion.response)
                }
        }
})

peticion.open("GET", "informacion.txt")
peticion.send()
