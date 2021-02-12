import React from "react";
import "./App.css";
import CityName from "./components/CityName";
import CityWeather from "./components/CityWeather";

function App() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState({});

  const fetchWeather = () => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c496af33d732297c30b641b3b235e47`
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.cod);
        setWeather(result);
      });
  };

  return (
    <>
      <CityName city={city} setCity={setCity} fetchWeather={fetchWeather} />
      <CityWeather weather={weather} setWeather={setWeather} />
    </>
  );
}

export default App;
