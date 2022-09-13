import React, { Component } from "react";
import loading from "./loading.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className="loading">
        <h1>
          <img src={loading} alt="loading" />
        </h1>
      </div>
    );
  }
}
