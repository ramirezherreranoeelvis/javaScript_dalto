// una funcion que por parametro logicamente deberia ir otra
function prueba(callback) {
        callback("pedro")
}
function decirNombre(nombre) {
        console.log(nombre)
}
prueba(function decirNombre(nombre) {
        console.log(nombre)
})

prueba(nombre => {
        console.log(nombre)
})

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
console.log(personas[0].instagram)


const obtenerPersona = (id, cb) => {
        if (personas[id] == undefined) {
                cb("No se ha encontrado a personaa", null)
        } else {
                cb(null, personas[id])
        }
}
obtenerPersona(0, (err, persona) => {
        if (err) {
                console.log(err)
        } else {
                console.log(persona.nombre)
        }
})
const obtenerIstagram = (id, cb) => {
        if (personas[id] == undefined) {
                cb("No existe persona para obtener el instagram")
        } else {
                cb(null, personas[id])
        }

}
obtenerIstagram(0, (err, persona) => {
        if (err) {
                console.error(err)
        } else {
                console.log(persona.instagram)
        }
})
obtenerIstagram(0, (err, persona) => {
        if (err) {
                console.error(err)
        }
        console.log(persona.instagram)

})