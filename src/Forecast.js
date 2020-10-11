import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast row mt-3" id="forecast-wrapper">
      <div className="col">
        <p>
          <i className="forecast-icon wi wi-owm-night-803"></i>
        </p>
        <div className="forecast-time">20:00</div>
        <div>
          <span className="forecast-degrees">12</span>
          <strong>°</strong>
        </div>
      </div>
      <div className="col">
        <p>
          <i className="forecast-icon wi wi-owm-night-803"></i>
        </p>
        <div className="forecast-time">23:00</div>
        <div>
          <span className="forecast-degrees">12</span>
          <strong>°</strong>
        </div>
      </div>
      <div className="col">
        <p>
          <i className="forecast-icon wi wi-owm-night-804"></i>
        </p>
        <div className="forecast-time">02:00</div>
        <div>
          <span className="forecast-degrees">11</span>
          <strong>°</strong>
        </div>
      </div>
      <div className="col">
        <p>
          <i className="forecast-icon wi wi-owm-day-801"></i>
        </p>
        <div className="forecast-time">05:00</div>
        <div>
          <span className="forecast-degrees">10</span>
          <strong>°</strong>
        </div>
      </div>
      <div className="col">
        <p>
          <i className="forecast-icon wi wi-owm-day-800"></i>
        </p>
        <div className="forecast-time">08:00</div>
        <div>
          <span className="forecast-degrees">9</span>
          <strong>°</strong>
        </div>
      </div>
    </div>
  );
}
