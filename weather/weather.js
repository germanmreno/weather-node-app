const axios = require('axios');

const getWeather = async (city) => {
    try {
        const APIKEY = 'ca8202bc5cac27db35817d8f642143b3';

        const resp = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
        );

        const { temp } = resp.data.main;

        return `La temperatura actual en ${city} es de ${temp} grados.`;
    } catch (error) {
        return 'Hubo un error. Por favor inténtelo nuevamente.';
    }
};

module.exports = {
    getWeather,
};
