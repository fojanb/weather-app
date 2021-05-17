import React from "react";
import "./Wind.css";
const Wind = (props) => {
  return (
    <div className="weatherWind-box">
      <div className="wind">
        <div>Wind-Speed {props.weatherWind.speed} meter / sec</div>
        <img src="https://img.icons8.com/material/20/ffffff/speed--v2.png" />

        <div>Wind-Direction {props.weatherWind.deg} deg</div>
      </div>
    </div>
  );
};
export default Wind;
