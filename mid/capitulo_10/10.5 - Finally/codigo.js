// el finally se muestra siempre
try {
        asdasdasd
} catch (error) {
        console.log("Lo siento paso un error de referencia")
} finally {
        console.log("me muestro igual")
}
// incluso puede llegar a soreponser a un retunr
const pruebaTry = () => {
        try {
                return 1
        } catch (error) {
                return 2
        } finally {
                return 3
        }
        return 4
}
console.log(pruebaTry())