import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

class WeatherForm extends Component {
  state = {
    isLoading: true,
    cityNotFound: "",
    high: "",
    low: "",
    desc: ""
  };

  componentDidMount() {
    fetch("/search-location-weather")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.data.cod === "404") {
          this.setState({
            cityNotFound: "404"
          });
        }
        this.setState({
          isLoading: false,
          high: data.data.main.temp_max,
          low: data.data.main.temp_min,
          desc: data.data.weather[0].description
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const WeatherCardError = <div>Error</div>;

    const LoadingDisplay = <div>Loading</div>;

    const WeatherConditions =
      this.state.cityNotFound == 404 ? (
        <div>{WeatherCardError}</div>
      ) : (
        <>
          <div>{this.state.high}</div>
          <div>{this.state.low}</div>
          <div>{this.state.desc}</div>
        </>
      );

    const CurrentWeatherCard =
      this.state.isLoading === true ? (
        <div>{LoadingDisplay}</div>
      ) : (
        <div>{WeatherConditions}</div>
      );
    return (
      <div>
        <form method="POST" action="/search-location">
          <input type="text" placeholder={this.props.searchtype} name={this.props.searchtype} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default WeatherForm;
