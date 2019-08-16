const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion).then(console.log);
// clima.getClima(-34.610001, -58.369999).then(console.log).catch(console.log);

const getInfo = async (direccion) => {

    // HECHO POR MI
    // const coords = await lugar.getLugarLatLng(direccion);
    // if (coords) {
    //     const lat = Number(coords.lat);
    //     const lng = Number(coords.lng);
    //     const temp = await clima.getClima(lat, lng);
    //     if (temp) {
    //         return `El clima de ${coords.direccion} es de ${temp}`;
    //     } else {
    //         return `No se pudo determinar el clima de ${coords.direccion}`;
    //     }
    // }


    // HECHO POR EL PROFE
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);