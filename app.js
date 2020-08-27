// Importar modulos
// const axios=require('axios');
const lugar = require('./lugar/lugar.js');

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
lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => console.log(err));