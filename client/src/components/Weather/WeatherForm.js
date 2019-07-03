import React, { Component } from "react";

import CurrentWeather from "./CurrentWeather";

class WeatherForm extends Component {
  state = {
    isLoading: true,
    cityNotFound: "",
    high: "",
    low: "",
    desc: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(this.props.fetch)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.data.cod === "404") {
          this.setState({
            cityNotFound: "404"
          });
        }
        if (this.props.searchtype === "multiday") {
          this.setState({
            isLoading: false,
            high: Object.values(data.data.list).map(item => {
              return item.temp.max;
            }),
            low: Object.values(data.data.list).map(item => {
              return item.temp.min;
            }),
            desc: Object.values(data.data.list).map(item => {
              return item.weather[0].description;
            })
          });
        } else {
          this.setState({
            isLoading: false,
            high: data.data.main.temp_max,
            low: data.data.main.temp_min,
            desc: data.data.weather[0].description
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form onSubmit={this.handleSubmit} action={this.props.formaction}>
          {this.props.formfields.map(field => {
            return (
              <input
                type={field === "count" ? "number" : "text"}
                placeholder={field}
                name={field}
                key={field}
              />
            );
          })}
          <button>Submit</button>
        </form>
        {/* Dynamically show one or more CurrentWeather components */}
        {!this.state.isLoading &&
          this.props.searchtype === "multiday" &&
          this.state.high.map((high, index) => {
            return (
              <CurrentWeather
                high={this.state.high[index]}
                low={this.state.low[index]}
                desc={this.state.desc[index]}
                key={index}
              />
            );
          })}
        {!this.state.isLoading && this.props.searchtype === "city" && (
          <CurrentWeather
            high={this.state.high}
            low={this.state.low}
            desc={this.state.desc}
          />
        )}
      </div>
    );
  }
}

export default WeatherForm;
