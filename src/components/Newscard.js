import React, { Component } from "react";

export default class Newscard extends Component {
  render() {
    const { title, descrption, imgUrl, url, date, author } = this.props;
    return (
      <div className="cardContainer">
        <img
          className="cardImg"
          src={
            imgUrl
              ? imgUrl
              : "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?cs=srgb&dl=pexels-brotin-biswas-518543.jpg&fm=jpg"
          }
          alt="newsimg"
        />
        <div className="cardInfo">
          <h3 className="cardHeading">{title}</h3>
          <p className="card description">{descrption}</p>
          <div className="readmorebtn-con">
            <button className="readmorebtn">
              <a href={url} rel="noreferrer" target="_blank">
                read more..
              </a>
              <br />
            </button>
          </div>
          <p className="publishedDate">
            By {author ? author : "unknown"} on {new Date(date).toGMTString()}
          </p>
        </div>
      </div>
    );
  }
}
