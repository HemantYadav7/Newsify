import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <h2 className="heading">Newsify</h2>
        <ul className="btnlist">
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    );
  }
}
