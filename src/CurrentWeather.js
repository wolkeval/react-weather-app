import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div
      className="CurrentWeather row justify-content-center mt-5 mb-5"
      id="current-weather"
    >
      <div className="col col-sm-4 mt-4" id="current-temperature">
        <span id="current-degrees">{Math.round(props.data.temp)}</span>
        <span id="units">°</span>
      </div>
      <div className="col col-sm-4">
        <p>
          <i id="current-icon" className="wi wi-owm-day-801"></i>
        </p>
      </div>
      <div className="col col-sm-4 current-details">
        <ul>
          <li>
            <i className="fas fa-thermometer-three-quarters"></i> Feels like:
            <span id="feels-like"> {Math.round(props.data.feelsLike)}°</span>
          </li>
          <li>
            <i className="fas fa-tint"></i> Humidity:
            <span id="humidity"> {props.data.humidity}%</span>
          </li>
          <li>
            <i className="fas fa-wind"></i> Wind Speed:
            <span id="wind"> {props.data.wind} km/h</span>
          </li>
        </ul>
      </div>
      <p className="text-uppercase" id="description">
        <strong>{props.data.description}</strong>
      </p>
    </div>
  );
}
