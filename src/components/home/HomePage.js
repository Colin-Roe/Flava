import React, { Component } from "react";
import { Link } from "react-router";

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Flava</h1>
        <p>A daily journal</p>
        <Link to="about" class="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    );
  }
}

export default HomePage;
