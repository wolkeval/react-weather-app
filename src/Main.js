import React, { useState } from "react";
import axios from "axios";

import Greeting from "./Greeting";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Main(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      currentCity: response.data.name,
      currentDegrees: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description
    }
    )
  }

  if (weatherData.ready) {
  return (
    <div className="Main">
      <Greeting
        greeting="Good morning"
        currentCity={weatherData.currentCity}
        currentTime="21:21"
        currentDate="Saturday, 27/09/2020"
      />
      <CurrentWeather
        currentDegrees={weatherData.currentDegrees}
        feelsLike={weatherData.feelsLike}
        humidity={weatherData.humidity}
        wind={weatherData.wind}
        description={weatherData.description}
      />
      <Forecast />
    </div>
  );
  } else {
    let units = "metric";
    let apiKey = "5e57088cf979d1802c908d421701c2db";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
