class Celular {
        constructor(color, peso, tamaño, rdc, ram) {
                this.color = color;
                this.peso = peso;
                this.tamaño = tamaño;
                this.resolucionDeCamara = rdc;
                this.memoriaRam = ram;
                this.encendido = false;
        }

        presionarBotonEncendido() {
                if (this.encendido == false) {
                        alert("celular prendido");
                        this.encendido = true;
                } else {
                        alert("celular apagado")
                        this.encendido = false;
                }
        }

        reiniciar() {
                if (this.encendido == true) {
                        alert("reiniciando celular")
                } else {
                        alert("el celular está apagado")
                }
        }

        tomarFoto = () => alert(`foto tomada en una resolucion de : ${this.resolucionDeCamara}`)

        grabarVideo = () => alert(`grabando video en ${this.resolucionDeCamara}`)

        mostrarInfo = () => `
                Color: <b>${this.color}</b><br>
                Peso: <b>${this.peso}</b><br>
                Tamaño: <b>${this.tamaño}</b><br>
                Resolución de Video: <b>${this.resolucionDeCamara}</b><br>
                Memoria Ram: <b>${this.memoriaRam}</b><br>
        `

}

const probarCelular = celular => {
        celular.presionarBotonEncendido();
        celular.tomarFoto();
        celular.grabarVideo();
        celular.reiniciar();
        celular.presionarBotonEncendido();
}
const celular1 = new Celular("rojo", "150g", "5'", "hd", "1GB");
const celular2 = new Celular("negro", "155g", "5.4'", "full hd", "2GB");
const celular3 = new Celular("blanco", "15046g", "5.9'", "full hd", "2GB");

document.write(`
        ${celular1.mostrarInfo()}<br>
        ${celular2.mostrarInfo()}<br>
        ${celular3.mostrarInfo()}
        `)