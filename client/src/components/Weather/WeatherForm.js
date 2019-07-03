import React, { Component } from "react";

class WeatherForm extends Component {
    state = {
        isLoading: true,
        currentTemp: "",
        cityNotFound: "",
        high: '',
        low: '',
        desc: '',
    }
    
      componentDidMount() {
        fetch("/search-location-weather")
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.data.cod === "404") {
              this.setState({
                cityNotFound: "404"
              });
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
    return (
      <div>
        <form method="POST" action="/search-location">
          <input type="text" placeholder="zip" name="zip" />
          <button>Submit</button>
        </form>
        <div>{CurrentWeatherCard}</div>;
      </div>
    );
  }
}

export default WeatherForm;
