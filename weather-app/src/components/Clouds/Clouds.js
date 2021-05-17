import React from "react";
import "./Clouds.css";
const Clouds = (props) => {
  return (
    <div className="weatherClouds-box">
      <div className="clouds">
        Cloudiness {props.weatherClouds.all}%{" "}
        <img src="https://img.icons8.com/ios-filled/22/ffffff/cloud.png" />
      </div>
    </div>
  );
};
export default Clouds;
