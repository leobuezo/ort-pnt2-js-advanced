function imprimirUno(){
    console.log('Uno')
}

function imprimirDos(){
    console.log('Dos')
}

function imprimirTres(){
    console.log('Tres')
}

setTimeout(imprimirUno, 3000)
setTimeout(imprimirDos)
//imprimirUno()
//imprimirDos()
imprimirTres()
console.log('pasé por aquí...')

setInterval(imprimirUno, 1000)