import personas from './personas.js'
/**
 * CONSIGNA:
 * Realizar una función que dado un array de objetos devuelva
 * un array con un atributo 'allowed' (__boolean__) que indique
 * si puede entrar o no en un casino.
 */

const validarEdad = edad => edad >= 18
const agregarAllowed = elem => {
    const aux = Object.assign({}, elem)
    aux.allowed = validarEdad(aux.age)
    return aux
}

//const mapita = personas.map( elem => agregarAllowed(elem) )
//const mapita = personas.map(agregarAllowed)
const mapita = personas.map(elem => {
    return {
        ...elem,
        allowed: validarEdad(elem.age)
    }
})

console.log(personas)
console.log(mapita)

