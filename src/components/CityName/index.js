import React from "react";
import { Form, Button, Container } from "react-bootstrap";

const CityName = ({ city, setCity, fetchWeather }) => {
  const [error, setError] = React.useState("");

  const handleCityInput = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = () => {
    if (!city) {
      setError("City field is empty");
    } else {
      setError("");
      fetchWeather();
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City Name</Form.Label>
          <Form.Control
            value={city}
            type="text"
            placeholder="Enter city name"
            onChange={handleCityInput}
          />
          <p className="text-danger">{error}</p>
        </Form.Group>

        <Button type="button" onClick={handleSubmit} variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CityName;
