import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbarContainer">
        <h2 className="heading">Newsify</h2>
        <ul className="btnlist">
          <li>
            <Link to="/">Top Headlines</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/entertainment">Entertainment</Link>
          </li>
          <li>
            <Link to="/health">Health</Link>
          </li>
          <li>
            <Link to="/science">Science</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </div>
    );
  }
}
