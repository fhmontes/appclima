// Importar modulos
// const axios=require('axios');
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

// Definir formato de entrada por consola
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener la temperatura',
        demand: true
    }
}).argv;
// console.log('Direccion: '+argv.direccion);

// Mostrar datos
/*
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => console.log(err));
*/

let getInfo = async(direccion) => {
    let coors = await lugar.getLugarLatLng(direccion);
    let temp = await clima.getClima(coors.lat, coors.lng);
    // let temp = await clima.getClima(-16.495647,-68.133542);
    // return temp;
    return `En ${coors.direccion} se tiene una temperatura de ${temp.temperatura} Grados`;
};

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));