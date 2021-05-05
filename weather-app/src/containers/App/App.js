import "./App.css";

const api_key = {
  api_key: "4b3e61d509a14cd79c90d406e79d5d1a",
  base_api_url: "https://api.openweathermap.org/data/2.5/",
};
function App() {
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
        <div className="search-box">
          <form>
            <input
              type="text"
              onChange=""
              className="search-bar"
              placeholder="search..."
            ></input>
            {/* <button type="submit" onClick="" className="search-button">
              serach
            </button> */}
          </form>
        </div>
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
