import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let forecastElements = [];

  for (let i = 0; i < 5; i++) {
    forecastElements.push(
      <div className="col">
        <p>
          <i className={props.data.iconClassList[i]}></i>
        </p>
        <div className="forecast-time">{props.data.timeList[i]}</div>
        <div>
          <span className="forecast-degrees">{props.data.degreesList[i]}</span>
          <strong>°</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="Forecast row mt-3" id="forecast-wrapper">
      {forecastElements}
    </div>
  );
}
