import React, { useState } from "react";
import axios from "axios";

import Greeting from "./Greeting";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Main(props) {
  let units = "metric";
  let apiKey = "5e57088cf979d1802c908d421701c2db";

  const [weatherData, setWeatherData] = useState({ ready: false }); // API is not loaded by default

  function handleResponse(response) {
    setWeatherData({
      ready: true, // API is loaded
      city: response.data.name,
      temp: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      timezone: response.data.timezone,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    }
    )
  }

  // If API is loaded show the current weather, else make an API call
  if (weatherData.ready) {
  return (
    <div className="Main">
      <Greeting
        data={weatherData}
      />
      <CurrentWeather
        data={weatherData}
      />
      <Forecast />
    </div>
  );
  } else {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
