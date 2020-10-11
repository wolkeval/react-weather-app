import React from "react";
import "./Greeting.css";

export default function Greeting(props) {
  return (
    <div
      className="Greeting row justify-content-center"
      id="current-city-date-time"
    >
      <div className="col-12" id="greet-city">
        <span id="greeting">{props.greeting}</span>,{" "}
        <span id="current-city">{props.currentCity}</span>.
      </div>
      <div className="col-12" id="current-date-time">
        <span id="current-time">{props.currentTime}</span>
        <br />
        <span id="current-date">{props.currentDate}</span>
      </div>
    </div>
  );
}
