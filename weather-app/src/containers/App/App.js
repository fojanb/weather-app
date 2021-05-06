import "./App.css";
import React, { useState } from "react";

function App() {
  const api_key = "4b3e61d509a14cd79c90d406e79d5d1a";
  const base_api_url = "https://api.openweathermap.org/data/2.5/";

  // **********************************************************
  const [form, setForm] = useState({ city: "", country: "" });
  // **********************************************************

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ city: value });
    }

    if (name === "country") {
      setForm({ country: value });
    }
    // console.log(form.city, form.country);
  };
  // -----API fetching-----
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Please insert valid date");
    } else {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${api_key}`
      ).then(data => console.log(data.json()));
    }
  }
  // ***********************************************************
  let d = new Date();
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year} `;
  };
  return (
    <div className="app">
      <main>
        <form className="search-box">
          <input
            type="text"
            onChange={(e) => inputHandler(e)}
            className="search-bar"
            placeholder="City..."
            name="city"
          ></input>
          <input
            type="text"
            onChange={(e) => inputHandler(e)}
            className="search-bar"
            placeholder="Country..."
            name="country"
          ></input>
          <button
            type="submit"
            onClick={(e) => weatherData(e)}
            className="search-button"
          >
            serach
          </button>
        </form>

        <div className="location-box">
          <div className="location">British Columbia , CA</div>
          <div className="date">{dateBuilder(d)}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15°C</div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
