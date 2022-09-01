(async function(){
    console.log("Vamos a ejecutar el código dentro de la función")
    const url2 = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read'
    const buscarVehiculo = id => {
        return new Promise((resolve, reject) => {
            fetch(`${url2}/${id}`)
            .then(res => {
                if(res.status === 200) {
                    return resolve(res.json())
                } else {
                    throw new Error('error desde el backend')
                }
            })
            .catch( error => {
                return reject("Error: imposible buscar vehiculo")
            })
        })
    }

    try {
        const vehiculo = await buscarVehiculo("3702c7bc-fc9d-4ce2-9127-7589f69a474b")
        console.log('Hola Mundo, este es mi vehiculo: ' + JSON.stringify(vehiculo))
    } catch(error) {
        console.log(error)
    }
})()