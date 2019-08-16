const axios = require('axios');

const getClima = async (lat, lng) => {

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=46f148107b53d617950f53b3b7e44077&units=metric`);
    return res.data.main.temp;
}

module.exports = {
    getClima
}
