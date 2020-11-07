import React from "react";
import {
  getTargetTimestamp,
  formatDate,
  formatTime,
} from "./commonFunctions.js";

import "./Greeting.css";

export default function Greeting(props) {
  function greetUser(timestamp) {
    let now = new Date(timestamp);
    let hours = now.getHours();
    if (hours >= 5 && hours < 12) {
      return "Good morning";
    } else if (hours >= 12 && hours < 18) {
      return "Good afternoon";
    } else if (hours >= 18 && hours < 22) {
      return "Good evening";
    } else {
      return "Good night";
    }
  }

  let timestamp = getTargetTimestamp(null, props.data.timezone);
  let greeting = greetUser(timestamp);
  let date = formatDate(timestamp);
  let time = formatTime(timestamp);

  return (
    <div
      className="Greeting row justify-content-center"
      id="current-city-date-time"
    >
      <div className="col-12" id="greet-city">
        <span id="greeting">{greeting}</span>,{" "}
        <span id="current-city">{props.data.city}</span>.
      </div>
      <div className="col-12" id="current-date-time">
        <span id="current-time">{time}</span>
        <br />
        <span id="current-date">{date}</span>
      </div>
    </div>
  );
}
