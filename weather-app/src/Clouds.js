import React from "react";
import "./Clouds.css";
const Clouds = (props) => {
  return (
    <div className="weatherClouds-box">
      <div className="clouds">Clodiness {props.weatherClouds.all}%</div>
    </div>
  );
};
export default Clouds;
