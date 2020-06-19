import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="main-banner img-container dark-color" id="main-banner">
          <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
              <img
                alt="banner"
                className="main-banner__img"
                src="https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              />
              <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">Sportmatic</p>
                <p> Find The Best Coaches</p>
                <Link to="/courses" className="button">
                  Choose your Event
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
