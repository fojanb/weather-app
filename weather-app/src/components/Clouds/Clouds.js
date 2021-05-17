import React from "react";
import "./Clouds.css";
const Clouds = (props) => {
  return (
    <div className="weatherClouds-box">
      <div className="clouds">
        Cloudiness {props.weatherClouds.all}%{" "}
        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/partly-cloudy-day--v1.png" />
      </div>
    </div>
  );
};
export default Clouds;
