import personas from './personas.js'
/**
 * ESTRUCTURA de datos
 *  * [
 *  {
 *    firstName,
 *    lastName,
 *    age,
 *    phone
 *  },
 *  ...,
 *  n
 * ]

 * 
 * CONSIGNA:
 * dada una lista d contactos, crear un afunción que agrupe
 * los contactos segun la primera letra de su nombre completo.
 * La estructura sería así:
 * {
 *      F: [{}, ... {}],
 *      L: [{nombreCompleto: 'Landa, Gabriel', edad: 48, telefono: '22-111-333'}, ... {}],
 * }
 * 
 */

const CANTIDAD_CONTACTOS = 3
const nombres = ['Carlos', 'Gabriel', 'Camila', 'Leo', 'Santiago']
const apellidos = ['Landa', 'Fiorito', 'Pignata', 'Buezo', 'Guzman']

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const generarNombre = () => `${nombres[random(0, nombres.length -1)]}`
const generarApellido = () => `${apellidos[random(0, apellidos.length -1)]}`
const generarTelefono = () => `${random(10, 99)}-${random(100, 999)}-${random(100, 999)}`

const crearContacto = () => {
    return {
        nombreCompleto: `${generarApellido()}, ${generarNombre()}`,
        telefono: generarTelefono(),
        edad: random(10, 50)    
    }
}

const prueba = crearContacto()
console.log(prueba)

const contactos = Array.from({
    length: CANTIDAD_CONTACTOS,
}, crearContacto)

console.log(contactos)

const reductora = personas.reduce( elem => elem )

/**
 * Ejemplo reduce sumando las edades del listado
 */
const sumEdad = contactos.reduce((previousValue, elem) => {
    console.log(previousValue, elem)
    return previousValue + elem.edad
}, 0)

console.log('Sumatoria de edades con reduce: ', sumEdad)