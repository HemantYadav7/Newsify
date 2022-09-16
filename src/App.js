import "./App.css";
import Navbar from "./components/Navbar";

import React, { Component } from "react";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = "30f6eead50a348d7a6b4e342a80867fe";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"general"}
                  newsTitle="Top Headlines"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"business"}
                  newsTitle="Business News"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"entertainment"}
                  newsTitle="Entertainment News"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"health"}
                  newsTitle="Health News"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"science"}
                  newsTitle="Science News"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"sports"}
                  newsTitle="Sports News"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={this.apiKey}
                  key={"technology"}
                  newsTitle="Technology News"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
<News category="general" />;
