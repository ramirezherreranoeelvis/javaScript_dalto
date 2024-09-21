// https://github.com/axios/axios
fetch("informacion.txt")
        .then(res => res.json())
        .then(res => console.log(res))

axios("informacion.txt")
        .then(res => console.log(res))
axios.get("informacion.txt")
        .then(res => console.log(res))


axios.post("https://reqres.in/api/users", {
        "nombre": "gatomontes",
        "email": "@gatomontes"
})
        .then(res => console.log(res.data))