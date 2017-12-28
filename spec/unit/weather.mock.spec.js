// --------------------------------------------------------------------------------
// Imports
// --------------------------------------------------------------------------------

const rewire = require('rewire');
const sinon = require('sinon');


// --------------------------------------------------------------------------------
// Rewirings
//
// The rewire package allows monkeypatching for mocking.
// https://github.com/jhnns/rewire
// --------------------------------------------------------------------------------

const weather = rewire('../../lib/weather');


// --------------------------------------------------------------------------------
// WeatherCaller Specs
//
// These specs test the WeatherCaller class.
// The callForecast function is monkeypatched to return a test value.
// Each spec tests unique aspects of the class, so assertion calls are not repeated.
// --------------------------------------------------------------------------------

describe("WeatherCaller Class", function() {

  // Test constants
  const dummyForecast = {"high": 42, "low": 26};

  // Test variables
  let callForecastMock;
  let weatherModuleRestore;
  let weatherCaller;

  beforeEach(function() {
    // Mock the inner function's return value using sinon
    // Do this for each test to avoid side effects of call count
    callForecastMock = sinon.stub().returns(dummyForecast);
    weatherModuleRestore = weather.__set__("callForecast", callForecastMock);

    // Construct the main caller object
    weatherCaller = new weather.WeatherCaller();
  });

  it("should be empty upon construction", function() {
    // No mocks required here
    expect(Object.keys(weatherCaller.forecasts).length).toBe(0);
  });

  it("should get a forecast for a date and a zipcode", function() {
    // This simply verifies that the return value is correct
    let forecast = weatherCaller.getForecast(12, 25, 2017, 21047);
    expect(forecast).toEqual(dummyForecast);
  });

  it("should get a fresh forecast the first time", function() {
    // The inner function should be called and the value should be cached
    // Note the sequence of assertions, which guarantee safety
    let forecast = weatherCaller.getForecast(12, 25, 2017, 21047);
    const forecastKey = "12/25/2017 for 21047";
    expect(callForecastMock.called).toBeTruthy();
    expect(Object.keys(weatherCaller.forecasts).length).toBe(1);
    expect(forecastKey in weatherCaller.forecasts).toBeTruthy();
    expect(weatherCaller.forecasts[forecastKey]).toEqual(dummyForecast);
  });

  it("should get a cached forecast the second time", function() {
    // The inner function should be called only once
    // The same object should be returned by both method calls
    let forecast1 = weatherCaller.getForecast(12, 25, 2017, 21047);
    let forecast2 = weatherCaller.getForecast(12, 25, 2017, 21047);
    expect(callForecastMock.calledOnce).toBeTruthy();
    expect(forecast1).toBe(forecast2);
  });

  it("should get and cache multiple forecasts", function() {
    // The other tests verify the mechanics of individual calls
    // This test verifies that the caller can handle multiple forecasts

    // Initial forecasts
    let forecast1 = weatherCaller.getForecast(12, 25, 2017, 27518);
    let forecast2 = weatherCaller.getForecast(12, 25, 2017, 27518);
    let forecast3 = weatherCaller.getForecast(12, 25, 2017, 21047);

    // Change forecast value
    weatherModuleRestore();
    const newForecast = {"high": 39, "low": 18}
    callForecastMock = sinon.stub().returns(newForecast);
    weatherModuleRestore = weather.__set__("callForecast", callForecastMock);

    // More forecasts
    let forecast4 = weatherCaller.getForecast(12, 26, 2017, 21047);
    let forecast5 = weatherCaller.getForecast(12, 27, 2017, 21047);

    // Assertions
    expect(Object.keys(weatherCaller.forecasts).length).toBe(4);
    expect("12/25/2017 for 27518" in weatherCaller.forecasts).toBeTruthy();
    expect("12/25/2017 for 21047" in weatherCaller.forecasts).toBeTruthy();
    expect("12/26/2017 for 21047" in weatherCaller.forecasts).toBeTruthy();
    expect("12/27/2017 for 21047" in weatherCaller.forecasts).toBeTruthy();
    expect(forecast1).toEqual(dummyForecast);
    expect(forecast2).toEqual(dummyForecast);
    expect(forecast3).toEqual(dummyForecast);
    expect(forecast4).toEqual(newForecast);
    expect(forecast5).toEqual(newForecast);
  });

  afterEach(function() {
    // Undo the monkeypatching
    weatherModuleRestore();
  });

});
