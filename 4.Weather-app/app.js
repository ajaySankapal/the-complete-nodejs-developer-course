// http request
const request = require("postman-request");
// const url =
//   "http://api.weatherstack.com/current?access_key=b7081576e6ba5b480ee272baac19ff8b&query=23.2599,-77.4126";

// request({ url: url, json: true }, (error, response) => {
//   const forecast = response.body.current.weather_descriptions[0];
//   const temperature = response.body.current.temperature;
//   const feelsLike = response.body.current.feelslike;
//   console.log(
//     `${forecast}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees`
//   );
// });

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b7081576e6ba5b480ee272baac19ff8b&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("error connecting to the server", undefined);
    } else if (body.error) {
      callback("location not found! Try different search", undefined);
    } else {
      const forecast = body.current.weather_descriptions[0];
      const temperature = body.current.temperature;
      const feelsLike = body.current.feelslike;
      callback(
        undefined,
        `${forecast}. It is currently ${temperature} degrees out. It feels like ${feelsLike} degrees`
      );
    }
  });
};
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)
const lat = process.argv[2];
const long = process.argv[3];
forecast(lat, long, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
