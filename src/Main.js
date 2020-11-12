import React, { useState } from "react";
import axios from "axios";

import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Buttons from "./Buttons.js";
import Greeting from "./Greeting";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import { getTargetTimestamp, formatTime } from "./commonFunctions.js";

export default function Main(props) {
  let units = "metric";
  let apiKey = "5e57088cf979d1802c908d421701c2db";

  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false }); // Weather API is not loaded by default
  const [forecastData, setForecastData] = useState({ ready: false }); // Forecast API is not loaded by default

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getData();
  }

  function handleForecastResponse(response) {
    let forecastDegreesList = [];
    let forecastTimeList = [];
    let forecastIconList = [];

    for (let i = 0; i < 5; i++) {
      // Fills forecastDegreesList
      let forecastDegrees = response.data.list[i].main.temp;
      forecastDegreesList.push(Math.round(forecastDegrees));

      // Fills forecastTimeList
      let forecastTimestamp = getTargetTimestamp(
        response.data.list[i].dt,
        response.data.city.timezone
      );
      forecastTimeList.push(formatTime(forecastTimestamp));

      // Fills forecastIconList
      let forecastIconId = response.data.list[i].weather[0].id;
      let now = new Date(forecastTimestamp);
      let hours = now.getHours();
      let daytime = "";
      if (hours >= 5 && hours < 18) {
        daytime = "day";
      } else {
        daytime = "night";
      }
      forecastIconList.push(
        `forecast-icon wi wi-owm-${daytime}-${forecastIconId}`
      );
    }

    // Changes the state forecastData
    setForecastData({
      ready: true, // API is loaded
      forecastDegreesList: forecastDegreesList,
      forecastTimeList: forecastTimeList,
      forecastIconList: forecastIconList,
    });
  }

  function handleWeatherResponse(response) {
    // Changes the state weatherData
    setWeatherData({
      ready: true, // API is loaded
      city: response.data.name,
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      timezone: response.data.timezone,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  function getData() {
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(weatherApi).then(handleWeatherResponse);
    let forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(forecastApi).then(handleForecastResponse);
  }

  // If API is loaded show the current weather, else make an API call
  if (weatherData.ready && forecastData.ready) {
    return (
      <div>
        <div className="Header row justify-content-center mt-4">
          <Logo />
          {/* Sends functions defined here to SearchBar component */}
          <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
          <Buttons />
        </div>
        <div className="Main">
          {/* Sends API data retrieved here to other components using it */}
          <Greeting data={weatherData} />
          <CurrentWeather data={weatherData} />
          <Forecast data={forecastData} />
        </div>
      </div>
    );
  } else {
    getData();

    return "Loading...";
  }
}
