const request = require('request')

const forecast = (lat, long, callback) => {

    const url = `https://api.darksky.net/forecast/115782ccf3fbb5f990b56edeff399ee5/${lat},${long}`
    
    request({ url, json: true}, (error, {body}) => {
        if(error){
            console.log('Unable to connect location services', undefined);
        } else if(body.error){
            console.log('Unable to find location', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
};

module.exports = forecast;