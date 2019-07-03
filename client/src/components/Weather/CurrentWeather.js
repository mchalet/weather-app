import React, { Component } from "react";

class CurrentWeather extends Component {
  state = {
    isLoading: true,
    currentTemp: "",
    cityNotFound: ""
  };

  componentDidMount() {
    fetch("/search-location-weather")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.data.cod === "404") {
          this.setState({
            cityNotFound: "404"
          });
        } else {
          let weatherId = data.data.weather[0].id;
        }
        this.setState({
          isLoading: false,
          currentTemp: data.data.main.temp
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const WeatherCardError = <div>Error</div>;

    const LoadingDisplay = <div>Loading</div>;

    const WeatherConditions = (
      this.state.cityNotFound == 404 ? <div>{WeatherCardError}</div> : <div>{this.state.currentTemp}</div>
  )

    const CurrentWeatherCard =
      this.state.isLoading === true ? (
        <div>{LoadingDisplay}</div>
      ) : (
        <div>{WeatherConditions}</div>
      );

    return <div>{CurrentWeatherCard}</div>;
  }
}

export default CurrentWeather;
