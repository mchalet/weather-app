import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import List from "./components/List";
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
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
