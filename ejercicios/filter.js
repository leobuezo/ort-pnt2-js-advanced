import personas from './personas.js'
/**
 * CONSIGNA: 
 * Realizar una función que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar a un casino.
 * (definido por el ejercicio)
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */
//const recuperarPersonasAptasCasino = (function())

console.log(personas)

const array = personas.filter( elem => elem.age >= 18 )

console.log(array)