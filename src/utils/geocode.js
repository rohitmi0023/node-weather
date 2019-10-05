const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1Ijoicm9oaXRtaTAwMjMiLCJhIjoiY2sxOTc2Y3d2MDBhejNoczlhbGF6b3RhYiJ9.Xu_JX1JHm-TB7dEMK9NZNw';

  request({ url, json: true }, (error, { body }) => {
    if (error) console.log('Unable to connect to location services', undefined);
    else if (body.features.length === 0)
      console.log('Unable to find location. Try another search.', undefined);
    else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
