import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Container from "@material-ui/core/Container";
import WeatherContainer from "./components/Weather/WeatherContainer";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Container maxidth="lg">
            <Layout>
              <Route
                path="/"
                render={() => {
                  return (
                    <WeatherContainer
                      title="Current Weather"
                      formfields={["city"]}
                      searchtype="city"
                      formaction="/search-location"
                      fetch="/search-location-weather"
                    />
                  );
                }}
              />
              <Route
                path="/"
                render={() => {
                  return (
                    <WeatherContainer
                      title="Weather Forcast"
                      formfields={["city", "count"]}
                      searchtype="multiday"
                      formaction="/search-location-days"
                      fetch="/search-location-days-weather"
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
