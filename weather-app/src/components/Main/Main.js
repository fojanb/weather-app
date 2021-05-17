import React from "react";
import "./Main.css";

function Main(props) {
  //   console.log(props);
  return (
    <div className="weatherMain-box">
      <div className="main">
        <div className="feelsLike">
          Feels Like {props.convertKtoC(props.weatherMain.feels_like)}
          <sup>o</sup>C
        </div>
        <div className="humidity">
          <div>
            Humidity{" "}
            <img src="https://img.icons8.com/metro/15/ffffff/water.png" />
            {" "}
            {props.weatherMain.humidity}%
          </div>
        </div>
        <div className="max-temp">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/thermometer-up.png" />
          {props.convertKtoC(props.weatherMain.temp_max)}
          <sup>o</sup>C
        </div>
        <div className="min-temp">
          <img src="https://img.icons8.com/ios-filled/30/ffffff/thermometer-down.png" />
          {props.convertKtoC(props.weatherMain.temp_min)}
          <sup>o</sup>C
        </div>
      </div>
    </div>
  );
}
export default Main;
