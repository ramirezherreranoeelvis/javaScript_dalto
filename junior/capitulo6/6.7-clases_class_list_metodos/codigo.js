const titutlo = document.querySelector(".titulo")

titutlo.classList.add("grande")

titutlo.classList.remove("grande")
let clase = titutlo.classList.item(0)
document.write(clase)

titutlo.addEventListener('click', () => {
        alert("xd");
})

titutlo.addEventListener('click', alerta)

function alerta() {
        alert("diste un click")
}