import React from "react";
import "./Main.css";

function Main(props) {
  //   console.log(props);
  return (
    
      <div className="weatherMain-box">
        <div className="main">
          <div>
            Feels Like {props.convertKtoC(props.weatherMain.feels_like)}°C
          </div>
          <div>Humidity {props.weatherMain.humidity}%</div>
          <div>Temp_max {props.convertKtoC(props.weatherMain.temp_max)}°C</div>
          <div>Temp_min {props.convertKtoC(props.weatherMain.temp_min)}°C</div>
        </div>
      </div>
    
  );
}
export default Main;
