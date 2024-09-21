// deserializado
json = {
        "variable1": "valor1"
}
document.write(json.variable1)

// serializado
serializado = '{"variable1": "valor1"}'

// serializar
const serializar = JSON.stringify(json)
document.write(serializar)
// deserializar
const deserializar = JSON.parse(serializar)
document.write(deserializar)