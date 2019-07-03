import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>Weather</h1>
        <form method="POST" action="/search-location">
          <input type='text' placeholder="zip" name='zip' />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default Home;
