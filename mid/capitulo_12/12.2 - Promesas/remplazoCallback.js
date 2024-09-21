class Persona {
        constructor(nombre, instagram) {
                this.nombre = nombre
                this.instagram = instagram
        }
}

const data = [
        ["Elvis Ramirez", "@Gatomontes"],
        ["Robertico", "@Robertico"],
        ["RancioRamirez", "@RancioRamirez"],
        ["Camila Nesa", "@Milanesa"]
];
const personas = [];
for (let i = 0; i < data.length; i++) {
        personas[i] = new Persona(data[i][0], data[i][1])
}

const obtenerPersona = id => {
        return new Promise((res, rej) => {
                if (personas[id] == undefined) {
                        rej("No se ha encontrado a personaa", null)
                } else {
                        res(personas[id])
                }
        })
}

obtenerPersona(0).then(persona => {
        console.log(persona.nombre)
}).catch(err => {
        console.error(err)
})

const obtenerInstagran = id => {
        return new Promise((res, rej) => {
                if (personas[id] == undefined) {
                        rej("No se encontro la persona")
                }
                res(personas[id].instagram)

        })
}

obtenerInstagran(1).then(instagram => {
        console.log(instagram)
}).catch(err => {
        console.log(err)
})
// promise anidado

obtenerPersona(2).then(persona => {
        return obtenerInstagran(2)
}).then(instagram => {
        console.log(instagram)
}).catch(e => {
        console.log(e)
})