import React from "react";
import "./Dt.css";
const Dt = (props) => {
    let dateObj = new Date();
    let hours = dateObj.toUTCstring(props.weatherDt).slice(-11,-4);
  return (
    <div className="weatherDt-box">
      <div className="dt">Time of Calculations : {hours}</div>
    </div>
  );
};
export default Dt;
