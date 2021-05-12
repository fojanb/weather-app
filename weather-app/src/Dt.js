import React from "react";
import "./Dt.css";
const Dt = (props) => {
  const convertTimestamptoTime = (props) => {
    let unixTimestamp = props.weatherDt;
    // convert to milliseconds and
    // then create a new Date object
    let dateObj = new Date(unixTimestamp * 1000);
    let utcString = dateObj.toUTCString();

    let time = utcString.slice(-11, -4);
    return time;
  };
  return (
    <div className="weatherDt-box">
      <div className="dt">
        Time of Calculations : {convertTimestamptoTime(props)}
      </div>
    </div>
  );
};
export default Dt;
