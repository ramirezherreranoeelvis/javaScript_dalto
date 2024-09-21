let nombre = "pedro";
// es un objeto que resive un callback y ese cb recibe otros 2
// 
const promesa = new Promise((resolve, reject) => {
        if (nombre !== "pedro") {
                // para el catch
                reject("Lo siento, el nombre no es pedro")
        } else {
                // para el then
                resolve(nombre)
        }
})
// el then es para acceder el valor de resolve
// el primer callback 
// e then recibe un callback que recibe por parametro el valor
promesa.then(resultado => {
        // lo que no s da el resolve
        console.log(resultado)
}).catch(error => {
        //  este recibe por parametro el callback 
        //  qu es reject
        console.log(error)
})