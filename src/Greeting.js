import React from "react";
import "./Greeting.css";

export default function Greeting(props) {

// GREETING ===================================================================
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

// DATE & TIME HANDLER // =====================================================
// Given target offset wrt UTC (in sec), returns target timestamp (in ms),
// where target is a specific city
function getTargetTimestamp(targetTimestampInSec, targetOffsetInSec) {
  let now = new Date();
  if (targetTimestampInSec !== null) {
    now = new Date(targetTimestampInSec * 1000);
  }
  // now.getTimezoneOffset() returns local offset wrt UTC in minutes as UTC time - your local time
  let localOffsetInMs = now.getTimezoneOffset() * 60 * 1000;
  let targetOffsetInMs = targetOffsetInSec * 1000;
  return now.getTime() + localOffsetInMs + targetOffsetInMs;
}

// Displays single-digit numbers with leading zero
function leadingZero(value) {
  if (value < 10) {
    return (value = `0${value}`);
  } else {
    return value;
  }
}

function formatDate(timestamp) {
  let now = new Date(timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekday = days[now.getDay()];
  let day = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();
  return `${weekday}, ${day} ${month} ${year}`;
}

function formatTime(timestamp) {
  let now = new Date(timestamp);
  let hours = now.getHours();
  let minutes = now.getMinutes();
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

let timestamp = getTargetTimestamp(null, props.data.timezone);
let greeting = greetUser(timestamp)
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
