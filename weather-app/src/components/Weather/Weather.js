import React, { useState } from "react";
import Main from "./../Main/Main";
import Wind from "./../Wind/Wind";
import Dt from "./../Dt/Dt";
import Sys from "./../Sys/Sys";

function Weather() {
  const api1 = {
    key: process.env.REACT_APP_API_KEY_1,
    baseURL: process.env.REACT_APP_API_BASE_URL,
  };
  const api2 = {
    key: process.env.REACT_APP_API_KEY_2,
    baseURL: process.env.REACT_APP_API_BASE_URL,
  };
  // *************************<States>*************************
  const [form, setForm] = useState({ city: "" });
  const [weather, setWeather] = useState([]); //(Current Weather Data)Array of objects(json) or JSON array
  const [forecast, setForecast] = useState([]); //16 Days Forecast Data
  const [degree, setDegree] = useState("C"); // Default degree is Celsius.
  // **********************************************************
  // *********************Event handlers***********************
  // -----this is API fetching and also event's handler for serach button-----
  const weatherData = async (e) => {
    e.preventDefault();
    if (form.city === "") {
      alert("Please insert valid data");
    } else {
      const data = await fetch(
        // First API Call (data = City's Current Weather) :
        `${api1.baseURL}weather?q=${form.city}&appid=${api1.key}`
      )
        .then((res) => res.json())
        .then((data) => data);
      // console.log(data);
      setWeather({ weather: data });
      // now All data goes to 'weather' so far.
      setForm({ city: "" }); //Form has been reset !
      // console.log(data.coord.lat);

      const fdata = await fetch(
        // Second API Call (fdata = City's 7 days Forcast):
        `${api2.baseURL}onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${api2.key}`
      )
        .then((res) => res.json())
        .then((fdata) => fdata);
      // console.log(fdata);
      setForecast({ forecast: fdata });
    }
  };
  const inputHandler = (e) => {
    let value = e.target.value;
    setForm({ city: value });

    // console.log(form.city);
  };
  const toggleDegree = () => {
    let kelvin = weather.weather.main.temp;
    let celsius = Math.floor(kelvin - 273.15);
    if (degree === "F") {
      setDegree("C");
      const Cel = document.querySelector(".degree");
      Cel.innerHTML = celsius;
    } else if (degree === "C") {
      setDegree("F");
      const Fhr = document.querySelector(".degree");
      Fhr.innerHTML = Math.round(celsius * 1.8 + 32);
    }
  };
  // ***********************************************************
  // ***************none event handlers functions***************
  let d = new Date();
  let today = "";
  let nextDay = [];
  const dateBuilder = (d) => {
    let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    today = day;
    for (let i = 1; i <= 7; i++) {
      nextDay[i] = days[d.getDay() + i];
    }

    return `${day} ${date} ${month} ${year} `;
  };
  // ------------------------------
  const kelvinToCelsius = () => {
    let kelvin = weather.weather.main.temp;
    let celsius = Math.floor(kelvin - 273.15);
    return celsius;
  };
  const kToCForcasting = (props) => {
    let kelvinForcast = props;
    let celsiusForcast = Math.floor(kelvinForcast - 273.15);
    return celsiusForcast;
  };
  const weatherDescription = ["Rain", "Clouds", "Clear"];
  // ------------------------------
  return (
    // Dynamic CSS
    <div
      className={
        weather.weather !== undefined
          ? weather.weather.main.temp > 289.15
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
        <form className="search-box">
          <input
            type="text"
            size="10"
            onChange={(e) => inputHandler(e)}
            className="search-bar"
            placeholder="City..."
            name="city"
            value={form.city}
            autoComplete="off"
            required
          ></input>
          <button type="reset" onClick={weatherData} className="search-button">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/detective.png"
              alt="searchButton"
            />
          </button>
        </form>
        {/* *** */}
        {weather.weather !== undefined ? (
          <div className="display">
            <div className="circleContainer">
              <div className="location-box">
                <div className="location">
                  <img
                    alt="location"
                    src="https://img.icons8.com/fluent-systems-filled/48/ffffff/worldwide-location.png"
                  />
                  {weather.weather.name}, {weather.weather.sys.country}
                </div>
                <div className="date">
                  <div>{dateBuilder(d)}</div>
                  {/* OR use this :<div>{new Date().toLocaleDateString()}</div> */}
                </div>
              </div>
              <div className="weather-box">
                <div className="temp">
                  <span className="degree">{kelvinToCelsius()}</span>
                  <sup>o</sup>
                  <button onClick={toggleDegree}>{degree}</button>
                  <div className="weather">
                    {weather.weather.weather[0].main}
                  </div>
                </div>
              </div>
            </div>
            <Dt weatherDt={weather.weather.dt} />
            {/* Forcasting for 6 days starting from tomorrow(nextDay) :*/}
            {forecast.forecast !== undefined ? (
              <div className="details">
                <div className="today">
                  <div>
                    {today}
                    <span>Today</span>
                  </div>
                  <div className="feelsLike">
                    Feels {weather.weather.main.feels_like}
                  </div>
                  <div className="humidity">
                    Humid{" "}
                    <img src="https://img.icons8.com/metro/15/ffffff/water.png" />
                    {weather.weather.main.humidity}%
                  </div>
                  <div className="cloudiness">
                    Cloudy{" "}
                    <img src="https://img.icons8.com/fluent-systems-filled/22/ffffff/partly-cloudy-day.png" />{" "}
                    {weather.weather.clouds.all}%
                  </div>
                </div>
                <div className="nextDays">
                  <div>{nextDay[1]}</div>
                  <div>{forecast.forecast.daily[0].weather[0].main}</div>
                  <div>
                    {kToCForcasting(forecast.forecast.daily[0].temp.day)}
                    <sup>o</sup>C
                  </div>
                </div>
                <div className="nextDays">
                  <div>{nextDay[2]}</div>
                  <div>{forecast.forecast.daily[1].weather[0].main}</div>
                  <div>
                    {kToCForcasting(forecast.forecast.daily[1].temp.day)}
                    <sup>o</sup>C
                  </div>
                </div>
                <div className="nextDays">
                  <div>{nextDay[3]}</div>
                  <div>{forecast.forecast.daily[2].weather[0].main}</div>
                  <div>
                    {kToCForcasting(forecast.forecast.daily[2].temp.day)}
                    <sup>o</sup>C
                  </div>
                </div>
                <div className="nextDays">
                  <div>{nextDay[4]}</div>
                  <div>{forecast.forecast.daily[3].weather[0].main}</div>
                  <div>
                    {kToCForcasting(forecast.forecast.daily[3].temp.day)}
                    <sup>o</sup>C
                  </div>
                </div>
                <div className="nextDays">
                  <div>{nextDay[5]}</div>
                  <div>{forecast.forecast.daily[4].weather[0].main}</div>
                  <div>
                    {kToCForcasting(forecast.forecast.daily[4].temp.day)}
                    <sup>o</sup>C
                  </div>
                </div>
                <div className="nextDays">
                  <div>{nextDay[6]}</div>
                  <div>{forecast.forecast.daily[5].weather[0].main}</div>
                  <div>
                    {kToCForcasting(forecast.forecast.daily[5].temp.day)}
                    <sup>o</sup>C
                  </div>
                </div>
              </div>
            ) : null}

            {/* My Components realted to api1 (weather) : */}
            <div className="myComponents">
              <Main
                weatherMain={weather.weather.main}
                convertKtoC={kelvinToCelsius}
              />
              <Wind weatherWind={weather.weather.wind} />
              <Sys weatherSys={weather.weather.sys} />
            </div>
          </div>
        ) : null}
        {/* *** */}
      </main>
    </div>
  );
}
export default Weather;
