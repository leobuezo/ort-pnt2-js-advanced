function obtenerUserInDB(callback){
    // Simulamos una llamada a la DB
    setTimeout(() => {
        const userData = {
            firstName: 'Leo',
            lastName: 'Buezo',
            age: 39
        }
        // el callback se aplica como respuesta de la función, luego de 1.5 segundos.
        callback(userData)
    }, 1500)
}

function saludaUsuario(user) {
    console.log(`Hola ${user.firstName} ${user.lastName}`)
}

obtenerUserInDB(console.log)
obtenerUserInDB(console.warn)
obtenerUserInDB(console.error)

obtenerUserInDB(saludaUsuario)

obtenerUserInDB(user => {
    user.edad = 19
    if(user.edad >= 18){
        console.log('Bienvenido al casino')
    } else {
        console.log('No puedes entrar al casino')
    }
})