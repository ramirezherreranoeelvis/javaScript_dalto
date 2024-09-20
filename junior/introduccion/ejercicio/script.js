var dineroCofla = pedirDinero("Cuanto dinero cofla?");
var dineroRoberto = pedirDinero("Cuanto dinero tiene Roberto?");
var dineroPedro = pedirDinero("Cuanto dinero tienes pedro?");
[dineroCofla, dineroRoberto, dineroPedro].forEach(dinero => {
        ofrecerHelado(dinero)
})

function ofrecerHelado(dinero) {
        if (dinero >= .6 && dinero < 1) {
                alert("comprate el helado de agua")
                alert("Te sobra: " + (dinero - .6).toFixed(2))
        } else if (dinero >= 1 && dinero < 1.6) {
                alert("comprate el helado de crema")
                alert("Te sobra: " + (dinero - 1).toFixed(2))
        } else if (dinero >= 1.6 && dinero < 1.7) {
                alert("comprate el helado marcada heladix")
                alert("Te sobra: " + (dinero - 1.6).toFixed(2))
        } else if (dinero >= 1.7 && dinero < 1.8) {
                alert("comprate el helado marca heladovich")
                alert("Te sobra: " + (dinero - 1.7).toFixed(2))
        } else if (dinero >= 1.8 && dinero < 2.9) {
                alert("comprate el helado marca helardo")
                alert("Te sobra: " + (dinero - 1.8).toFixed(2))
        } else if (dinero >= 2.9) {
                alert(`
                        comprate el potecito de helado con confites
                        comprate el pote de 1/4 KG
                `)
                alert("Te sobra: " + (dinero - 2.9).toFixed(2))
        } else {
                alert("lo siento, pobre de mierda, no te alcanza para un helado")
        }
}

function pedirDinero(mensaje) {
        return Number(prompt(mensaje));
}