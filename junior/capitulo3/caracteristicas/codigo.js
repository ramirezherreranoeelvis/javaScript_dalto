class animal {
        constructor(especie, edad, color) {
                this.especie = especie;
                this.edad = edad;
                this.color = color
                this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
        }
        verInformacion = () => {
                document.write(this.informacion + "<br>")
        }
}

class Perro extends animal {
        constructor(edad, color, raza) {
                super("perro", edad, color);
                this.raza = raza;
        }

        ladrar = () => document.write("¡Waw! <br>")
}

let perro = new Perro(5, "marrón", "doberman")
let gato = new animal("gato", 2, "negro")
let pajaro = new animal("pajaro", 1, "verde")
// var animales = [perro, gato, pajaro]
// for (const animal of animales) {
//         animal.ladrar()
// }
perro.ladrar();
