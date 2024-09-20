const users = "https://reqres.in/api/users";

const peticion = fetch("https://reqres.in/api/unknown/2")
// then es para cuando se obtenga respues y es asincrono
// json, text, blob
peticion
        .then(respuesta => respuesta.json())
        .then(respuesta2 => console.log(respuesta2))
