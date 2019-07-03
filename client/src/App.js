import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CurrentWeather from './components/Weather/CurrentWeather';
import Layout from './components/Layout/Layout';
import Container from '@material-ui/core/Container';
import WeatherContainer from "./components/Weather/WeatherContainer";

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Container maxWidth="lg">
          <Layout>
            <Route exact path="/" component={WeatherContainer} />
            <Route path="/current-weather" component={CurrentWeather} />
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
