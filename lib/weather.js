// --------------------------------------------------------------------------------
// Weather Functions
//
// The callForecast function is a stub for calling a weather service.
// The Jasmine specs will use spies to mock it.
// Pretend that it calls a service and returns a real value.
// --------------------------------------------------------------------------------

function callForecast(month, day, year, zipcode) {
  return {};
}


// --------------------------------------------------------------------------------
// WeatherCaller Class
//
// The getForecast method calls callForecast internally and caches values.
// Spies on the callForecast function should be picked up within the class.
// --------------------------------------------------------------------------------

class WeatherCaller {
  
  constructor() {
    this.forecasts = {};
  }

  getForecast(month, day, year, zipcode) {
    let key = `${month}/${day}/${year} for ${zipcode}`;
    if (!(key in this.forecasts)) {
      this.forecasts[key] = callForecast(month, day, year, zipcode);
    }
    return this.forecasts[key];
  }

}


// --------------------------------------------------------------------------------
// Module Exports
// --------------------------------------------------------------------------------

module.exports = {
  WeatherCaller: WeatherCaller,
}
