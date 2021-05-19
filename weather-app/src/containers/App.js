import Weather from "../components/Weather/Weather";
console.log(process.env.REACT_APP_API_KEY_1);
function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
