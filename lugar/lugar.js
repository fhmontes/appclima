// Importar modulos
const axios=require('axios');

const getLugarLatLng = async(direccion) => {
    let encodeDireccion = encodeURI(direccion);
    // Llamar al servicio web
    let resp = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=5L1BbAyM9I4DxmSBnLn1As0ekJi8GKdD&location=${encodeDireccion}`);
    
    // Aplicar validacion
    if(resp.data.info.statuscode === 400){
        throw new Error(`Datos incorrectos para la direccion ${encodeDireccion}`);
    }

    // Obtener latitud, longitud
    let location = resp.data.results[0].locations[0].adminArea3;
    let coors = resp.data.results[0].locations[0].latLng;

    // Retornar resultados 
    return {
        direccion: location,
        lat: coors.lat,
        lng: coors.lng
    };

        /*
        .then( resp => {
            // Obtener latitud y longitud
            // console.log(resp);
            console.log('Lugar: ' + resp.data.results[0].locations[0].adminArea3);
            let coors = resp.data.results[0].locations[0].latLng;
            console.log('Latitud: '+coors.lat);
            console.log('Longitud: '+coors.lng);
        })
        .catch( err => {
            // Montrar error
            console.log('ERROR! ',err);
        });
        */
}

// Exportar 
module.exports = {
    getLugarLatLng   
}