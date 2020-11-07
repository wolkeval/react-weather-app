import React, { useState } from "react";
import axios from "axios";

import Logo from "./Logo.js";
import SearchBar from "./SearchBar.js";
import Buttons from "./Buttons.js";
import Greeting from "./Greeting";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

import {
  getTargetTimestamp,
  formatDate,
  formatTime,
} from "./commonFunctions.js";

export default function Main() {
  const [city, setCity] = useState("Tokyo");
  const [weatherData, setWeatherData] = useState({ ready: false }); // API is not loaded by default
  const [forecastData, setForecastData] = useState({ ready: false });

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getCity();
  }

  function handleForecastResponse(response) {
    let degreesList = [];
    let timeList = [];
    let iconClassList = [];

    for (let i = 0; i < 5; i++) {
      let forecastDegrees = response.data.list[i].main.temp;
      degreesList.push(Math.round(forecastDegrees));

      let forecastTimestamp = getTargetTimestamp(
        response.data.list[i].dt,
        response.data.city.timezone
      );
      timeList.push(formatTime(forecastTimestamp));

      let forecastIconId = response.data.list[i].weather[0].id;

      let now = new Date(forecastTimestamp);
      let hours = now.getHours();
      let daytime = "";
      if (hours >= 5 && hours < 18) {
        daytime = "day";
      } else {
        daytime = "night";
      }
      iconClassList.push(
        `forecast-icon wi wi-owm-${daytime}-${forecastIconId}`
      );
    }

    setForecastData({
      ready: true,
      degreesList: degreesList,
      timeList: timeList,
      iconClassList: iconClassList,
    });
  }

  function handleWeatherResponse(response) {
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

  function getCity() {
    let units = "metric";
    let apiKey = "5e57088cf979d1802c908d421701c2db";

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
          <SearchBar handleSubmit={handleSubmit} handleChange={handleChange} />
          <Buttons />
        </div>
        <div className="Main">
          <Greeting data={weatherData} />
          <CurrentWeather data={weatherData} />
          <Forecast data={forecastData} />
        </div>
      </div>
    );
  } else {
    getCity();

    return "Loading...";
  }
}
