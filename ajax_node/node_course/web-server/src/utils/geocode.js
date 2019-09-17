const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiaWFtcjBtYW4iLCJhIjoiY2swYzQ4ODE5MHk0bjNncGlhYm85azFlYSJ9.RN_5isB986nPjwvfJ0GCPw'

    request({ url, json: true }, (error, { body }) => {
        if(error){
            callback('Unable to connect to location services!', undefined);
        } else if ( body.features.lenght === 0){
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;