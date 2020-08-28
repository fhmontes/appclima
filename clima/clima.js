// Importar modulos
const axios=require('axios');
// Crear funcion para obtener la temperatura
const getClima = async (lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=26794c820bb415d58ddb929a9baeea37&units=metric`);
    // Retornar temperatura
    return { temperatura : resp.data.main.temp };
};
// Exportar funcion
module.exports = {
    getClima
};