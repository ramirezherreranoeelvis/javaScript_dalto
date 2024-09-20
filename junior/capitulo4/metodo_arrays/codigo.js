const println = string => document.write(string + "<br>")
let nombres

function transformadores() {
        /* pop elmina y retorna el ultimo elemento */
        println("______POP______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)
        println(nombres.pop() + " -> el eliminado")
        println(nombres + "<br>")

        /* shift elimina  y retorna el primer elmento */
        println("______SHIFT______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)
        println(nombres.shift() + " -> el eliminado")
        println(nombres + "<br>")

        /* push agrega elementos al final y retorna nuevo lenght */
        println("______PUSH______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)
        println("Juan -> pusheado")
        nombres.push("Juan")
        println(nombres + "<br>")

        /* reverse */
        println("______REVERSE______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)
        println(nombres.reverse() + "<br>")

        /* unShift agrega uno  o mas elementos al inicio  y retorna nuevo lenght*/
        println("______UNSHIFT______")
        nombres = ["pedro", "maria", "jorge"]
        nombres.unshift("x", "y", "z")
        println(nombres + "<br>")

        /* Sort -> ordena ascendente, de diccionario o de menor a mayor tamaño */
        println("______Sort______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)
        println(nombres.sort())
        /* Splice */
        /*
        lo que hace es
        (de donde empeiza, cuantos quieres eleminar,....agregas datos que iran desde donde empieza)
        no eliina ninguno (1,0,....) 
        elimina  3 desde el elemento 0 y agrega (0,3,...)
        alimina y no agrega (0,3)
        para empezar al final es con -1 pero si va a agregar, remplaza al ultimo
         */
}

function accesores() {
        println("______JOIN______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)
        println(nombres.join(" * ") + "<br>")

        /* nos da una rreglo, desde donde, hasta donde el -1 si el posicion final */
        println("______SLICE______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)

        println(nombres.slice(0, 2) + "<br>")
}

function repeticion() {
        /*es como el foreach pero pude devolver con condicion*/
        println("______FILTER______")
        nombres = ["pedro", "maria", "jorge"]

        nombres.filter(nombre => {
                println(nombre)
        })

        println(nombres + "<br>")

        /* no retorna solo recorre */
        println("______FOREACH______")
        nombres = ["pedro", "maria", "jorge"]
        println(nombres)

        println(nombres + "<br>")

}

repeticion()