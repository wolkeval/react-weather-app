import React from "react";
import Greeting from "./Greeting";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Main() {
  return (
    <div className="Main">
      <Greeting
        greeting="Good morning"
        currentCity="Berlin"
        currentTime="21:21"
        currentDate="Saturday, 27/09/2020"
      />
      <CurrentWeather
        currentDegrees={13}
        feelsLike={15}
        humidity={71}
        wind={2}
        description="Heavy showers"
      />
      <Forecast />
    </div>
  );
}
