const saludar = (function() {
    var message = 'hola mundo'

    console.log(message)

    function greetings() {
        console.log(`message into clousure ${message}`)
    }

    return greetings
})()

console.log(typeof saludar)
saludar()
console.log('showing another thing...')
saludar()

const counter = function() {
    let contador = 0

    console.log('Initializing counter... (searching data from API)')

    return {
        showContador: function(){
            console.log(contador)
        },
        sum: (sum) => contador += sum,
        inc: () => contador++,
        dec: () => contador--
    }
}()

console.log(counter, typeof counter)
counter.showContador()
counter.sum(15)
counter.showContador()
counter.inc()
counter.inc()
counter.showContador()