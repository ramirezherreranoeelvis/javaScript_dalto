

const input = document.querySelector('.input-normal');

document.write(input.className + "<br><br>")
document.write(input.value + "<br><br>")
input.type = "file"
/* el accept es para especificar formato de lo que se espera como en file */
input.accept = "image/png"
document.write(input.type + "<br><br>")
// el form es apra saber a que formulario pertenece si esque el submit esta fuera
// el minlenght es el minimo de caracteres aceptados para que se acepte
input.minLength = 4;