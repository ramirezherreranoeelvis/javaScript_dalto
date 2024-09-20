const button = document.querySelector('.button')
/* la manera masrecomendada */
/* es una escucha de eventos */
button.addEventListener('click', () => {
        alert("saludar 2")
})

const button2 = document.querySelector('.button2');
button2.onclick = () => {
        alert("saludar 3")
}

/* para el nombre del envento */
button.addEventListener('click', (evt) => {
        alert(evt.target)
})