function addOne(num) {
    throw new Error('Aquí hay un error forzado.')
    return num + num
}
function getNum() {
    console.log('estoy en getNum')
    return addOne(10)
}

function c() {
    console.log('estoy en c...')
    console.log(getNum())
}

c()
