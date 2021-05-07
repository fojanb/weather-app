import "./App.css";
import React, { useState } from "react";

function App() {
  const api = {
    key : "4b3e61d509a14cd79c90d406e79d5d1a",
    baseURL : "https://api.openweathermap.org/data/2.5/"
  }
  
  // **********************************************************
  const [form, setForm] = useState({ city: "", country: "" });
  const [weather, setWeather] = useState([]); //Array of objects(json)
  // **********************************************************

  const inputHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }

    if (name === "country") {
      setForm({ ...form, country: value });
    }
    // console.log(form.city, form.country);
  };
  // -----this is API fetching and also event handler for serach button-----
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Please insert valid date");
    } else {
      const response = await fetch(
        `${api.baseURL}weather?q=${form.city},${form.country}&appid=${api.key}`
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((data) => setWeather(data)).then(() => setForm(''));
        // now All data goes to weather so far.
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
          <div className="location">{form.city} , {form.country}</div>
          <div className="date">{dateBuilder(d)}</div>
        </div>
        <div className="weather-box">
          <div className="temp"></div>
          <div className="weather">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
