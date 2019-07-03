import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import CurrentWeather from './components/Weather/CurrentWeather';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/current-weather" component={CurrentWeather} />
          </Layout>
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
