console.log('*** Closures***')

function helloFunction() {
    var mensaje = 'Hola Mundo'
    var edad = 18
    var pais = 'Argentina'

    function getMensage() {
        return mensaje
    }

    function getEdad() {
        return edad
    }
    return {
        getMensage,
        getEdad,
        tipo: 'tipo',
        pais
    }
}

console.log(typeof mensaje)
const clousure = helloFunction()

console.log(clousure.pais)
console.log(clousure.tipo)
