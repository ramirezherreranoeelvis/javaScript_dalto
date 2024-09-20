let free = false;
const validarCliente = time => {
        let edad = prompt("¿Cúal es tu edad?");
        if (edad > 18) {
                if (time >= 2 && time < 7 && free == false) {
                        alert("Podes pasar gratis");
                        free = true;
                } else {
                        alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entrada`);
                }
        } else {
                alert("mira papu, sos menor de edad por ende no vas a personalbar, MAQUINOLA");
        }
}

validarCliente(3);