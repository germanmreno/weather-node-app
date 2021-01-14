const weather = require('./weather/weather');

const argv = require('yargs').options({
    address: {
        alias: 'a',
        desc: 'Country address',
        demand: true,
    },
}).argv;

weather
    .getWeather(argv.address)
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err));
