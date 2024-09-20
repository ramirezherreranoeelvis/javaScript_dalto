class animal {
        constructor(especie, edad, color) {
                this.especie = especie;
                this.edad = edad;
                this.color = color
                this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
        }
        verinfo() {
                document.write(this.informacion)
        }
        verInformacion = () => {
                document.write(this.informacion + "<br>")
        }
}

let perro = new animal("perro", 5, "marrón")
let gato = new animal("gato", 2, "negro")
let pajaro = new animal("pajaro", 1, "verde")
perro.verInformacion()
gato.verInformacion()
pajaro.verInformacion()