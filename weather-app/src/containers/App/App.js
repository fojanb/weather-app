import "./App.css";
const api_key = {
  api_key: "4b3e61d509a14cd79c90d406e79d5d1a",
  base_api_url: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <form>
            <input type="text" onChange="" className="serach-bar" placeholder="search..."></input>
            <button type="submit" onClick="" className="search-button">
              serach
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default App;
