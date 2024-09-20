let numero = 0;

while (numero < 6) {
        numero++;
        document.write(numero)
}
numero = 0;
do {
        numero++;
        document.write(numero)
        break;
} while (numero < 6)

/* for */
let i = 0
for (; i < 6; i++) {
        if (i == 3) {
                continue;
        }
        document.write(i + "<br>")
}
/* for in */
/* muestra indices y patributos/propiedades si son objetos */
let animales = ["gato", "perro", "tiranosaurio rex"]
for (animal in animales) {
        document.write("🚀 ~ animal:", animal)
        document.write("🚀 ~ animal:", animales[animal])
}
document.write("<br>")

/* for of */
/* muestra valores */
for (animal of animales) {
        document.write(animal + ", ")
}

document.write("<br>")
array1 = ["maria", "josefa", "roberta"]
array2 = ["arrray1", array1]
/* labels para poner nombres a bucles */
forRancio:
for (let array in array2) {
        if (array == 1) {
                for (const element of array1) {
                        document.write(element + "<br>")
                        continue forRancio;
                }
        } else {
                document.write(array + "<br>")
        }

}