const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url =
    'https://api.darksky.net/forecast/99d19e06f8b893b56b90fd2a95b21b1b/' +
    latitude +
    ',' +
    longitude +
    '?units=si';

  request({ url, json: true }, (error, { body }) => {
    if (error) callback('Unable to connect to location services', undefined);
    else if (body.error) callback('Unable to find location');
    else {
      callback(undefined, body.currently.summary);
    }
  });
};

module.exports = forecast;
