import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CurrentWeather from "./components/Weather/CurrentWeather";
import Layout from "./components/Layout/Layout";
import Container from "@material-ui/core/Container";
import WeatherContainer from "./components/Weather/WeatherContainer";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Container maxWidth="lg">
            <Layout>
              <Route
                path="/"
                render={() => {
                  return (
                    <WeatherContainer formfields={["city"]} searchtype="city" />
                  );
                }}
              />
              <Route
                path="/"
                render={() => {
                  return (
                    <WeatherContainer
                      formfields={["city", "count"]}
                      searchtype="city"
                    />
                  );
                }}
              />
            </Layout>
          </Container>
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
