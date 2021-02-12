import React from "react";
import { Container } from "react-bootstrap";
import "./styles.css";

const CityWeather = ({ weather, setWeather }) => {
  //   const [temp, setTemp] = React.useState("");
  //   console.log(weather.weather);
  //   if (weather.weather) {
  // setTemp(weather.weather.main.temp);
  //   }
  //   const temp = weather.weather.main.temp;
  //   const humidity = weather.weather.main.humidity;
  //   console.log(temp);

  return (
    <Container>
      {weather.cod === 200 ? (
        <div>
          <p>Temperature : {weather.main.temp}&#8451;</p>
          <p>Humidity : {weather.main.humidity}%;</p>
        </div>
      ) : null}
    </Container>
  );
};

export default CityWeather;
