import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const showNav = () => {
      const hideBtn = document.querySelector(".hideBtn");
      const navbarContainer = document.querySelector(".navbarContainer");
      hideBtn.addEventListener("click", (e) => {
        navbarContainer.classList.toggle("showNav");
        // console.log("pressed");
        setTimeout(() => {
          navbarContainer.classList.remove("showNav");
        }, 2000);
      });
    };
    return (
      <div className="nav">
        <div className="navbarContainer">
          <div className="headingBTN">
            <h2 className="heading">Newsify</h2>
            <div onClick={showNav} className="hideBtn showList">
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
          <div className="list">
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
        </div>
      </div>
    );
  }
}
