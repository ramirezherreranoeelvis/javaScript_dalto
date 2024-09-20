let cadena = new String("Cadena de prueba")
let cadena2 = " cadena 2"
const println = string => document.write(string + "<br>")
/* concatena */
const concat = cadena.concat(cadena2);
/* compara si una cadena empieza con la otra */
const startWish = cadena.startsWith(cadena2);
/* compara si una termina con la otra */
const endWish = cadena.endsWith(cadena2)
/* para buscar en una cadena esta otra */
const includes = cadena.includes(cadena2)
/* desde qque parte del texto empieza el texto2 */
const indexOf = cadena.indexOf(cadena2)
/* desde qque parte del texto empieza el texto2 pero de la ultima coincidencia */
const lastIndexOf = cadena.lastIndexOf(cadena2)
/* resultados */
println(concat)
println(startWish)
println(endWish)
println(includes)
println(indexOf)
println(cadena[0])
println(lastIndexOf)
/* rellena desde inicio con tal caracteres  las veces que se quiera hasta que el string este completo*/
/* string tamaño deseado, con lo que se rellena si falta */
const padStart = "AAAA".padStart(10, "0")
const endStart = "AAAA".padEnd(10, "0")
println(padStart)
println(endStart)
/* hace que se repita xd */
println("AAAA".repeat(2))
/* 
split()-> divide cadena como lo pidamos{
ejemplo: split(",")-> separa por comas y devuelve array
}
trim -> elimina espacios en blanco principio-final
trimEnd -> elimina epacios en blanco final
trimStart -> elimina pero los de inicio
 */