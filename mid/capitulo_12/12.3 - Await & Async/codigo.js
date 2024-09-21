const objeto = {
        propiedad1: "valor1",
        propiedad2: "valor2",
        propiedad3: "valor3",
}
const obtenerInformacion = () => {
        return new Promise((resolve, reyect) => {
                setTimeout(() => {
                        resolve(objeto)
                }, 1000)
        })
}
obtenerInformacion().then(resultado => {
        console.log(resultado)
})
// async para crear asincronia y await para llamarlas
// con aeait se pude obtener el valor q retorna una promesa
const mostrarResultado = async () => {
        resultado = await obtenerInformacion();
        console.log(resultado);
}
mostrarResultado();

const obtenerTextInformacion = text => {
        return new Promise((resolve, reyect) => {
                setTimeout(() => {
                        resolve(text)
                }, 1000)
        })
}
//  si lo trajeramos individualmente, nos  traeria
// direcmante apenas lo obtiene osea desordenadamente
// el metodo encapsula la logica para que funcione simultaneo
const mostrarData = async () => {
        data1 = await obtenerTextInformacion("1: pito");
        data2 = await obtenerTextInformacion("2: benardo");
        data3 = await obtenerTextInformacion("3: eduardo");
        console.log(data1)
        console.log(data2)
        console.log(data3)
}
mostrarData()