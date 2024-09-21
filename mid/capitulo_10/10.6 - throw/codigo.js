// sirve para lanzar errores o lo que se dese como objetos
const pruebaTry = () => {
        try {
                throw {
                        error: "Nombre del error",
                        info: "informacion del error"
                }
                throw ["pedro", "jorge"]
                throw "pito"
        } catch (error) {
                console.log(error)
        }
}
console.log(pruebaTry())