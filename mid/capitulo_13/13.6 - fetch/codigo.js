const users = "https://reqres.in/api/users";
const peticion = fetch("https://reqres.in/api/unknown/2")
// then es para cuando se obtenga respues y es asincrono
// json, text, blob => los datos de una imagen
// GET
peticion
        .then(respuesta => {
                return respuesta.json()
        }).then(respuesta2 => {
                console.log(JSON.stringify(respuesta2))
        })
// POST
const peticionPost = fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({
                "nombre": "Lucas",
                "apellido": "Dalto"
        }),
        headers: {
                "Content-type": "application/json"
        }
})
        .then(res => res.json())
        .then(res => console.log(res))
// BLOB 
fetch("image.png")
        .then(res => res.blob())
        .then(img => {
                let imgHTML = document.querySelector("img")
                // crea una url para la img el cual se guarda el src
                // url temporal
                imgHTML.src = URL.createObjectURL(img)
        })