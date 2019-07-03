import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { kelvinToFahrenheit } from "../../helpers/helpers";

class CurrentWeather extends Component {
  render() {
    const WeatherCardError = <div>Error</div>;

    const LoadingDisplay = <div>Loading</div>;

    const WeatherConditions =
      this.props.cityNotFound === 404 ? (
        <div>{WeatherCardError}</div>
      ) : (
        <>
          <div>High: {kelvinToFahrenheit(this.props.high)}</div>
          <div>Low: {kelvinToFahrenheit(this.props.low)}</div>
          <div>Description: {this.props.desc}</div>
        </>
      );

    const CurrentWeatherCard =
      this.props.isLoading === true ? (
        <div>{LoadingDisplay}</div>
      ) : (
        <div>{WeatherConditions}</div>
      );
    return (
      <Grid
        item
        xs={7}
        style={{
          flexGrow: 1,
          textAlign: "center",
          alignItems: "center",
          justify: "center"
        }}
      >
        <Paper
          style={{
            textAlign: "center",
            alignItems: "center",
            justify: "center"
          }}
        >
          <div>{CurrentWeatherCard}</div>
        </Paper>
      </Grid>
    );
  }
}
export default CurrentWeather;
