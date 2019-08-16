const axios = require('axios');

const getLugarLatLng = async (dir) => {
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        // baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Buenos+Aires',
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'x-rapidapi-key': 'e908ffe99cmsh9d2649b68c2c136p136410jsn5cd0b85b23ba' }
    });

    const res = await instance.get();

    if (res.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
