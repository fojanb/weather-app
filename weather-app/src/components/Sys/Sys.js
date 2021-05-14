import React from "react";
import './Sys.css';
const Sys = (props) => {
    const convertTimestamptoTime = (props) => {
        let unixTimestamp = props;
        // convert to milliseconds and
        // then create a new Date object
        let dateObj = new Date(unixTimestamp);
        let utcString = dateObj.toUTCString();
    
        let time = utcString.slice(-11, -4);
        return time;
      };
  return (
    <div className="weatherSys-box">
      <div className="sys">
          <div>Sunrise {convertTimestamptoTime(props.weatherSys.sunrise)} AM</div>
          <div>Sunset {convertTimestamptoTime(props.weatherSys.sunset)} PM</div>

      </div>
    </div>
  );
};
export default Sys;
