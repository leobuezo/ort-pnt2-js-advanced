const url = 'https://rickandmortyapi.com/api/character/39'

const peticion = fetch(url)
console.log(peticion)

peticion.then( res => {
    console.log("Todo bien acá")
    //console.log(res)
})
peticion.then(() => console.log("hola mundo!"))
peticion.then(res => {
    return res.json()
}).then(data => console.log(data))
peticion.catch(res => {
    console.error("algo salió mal")
})
peticion.finally(() => {
    console.log("Se cumpla o no la promesa, pasamos por aquí.")
})