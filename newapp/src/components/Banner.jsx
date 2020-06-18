import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div>
        <div className="main-banner img-container" id="main-banner">
          <div className="ed-grid lg-grid-6">
            <div className="lg-cols-4 lg-x-2">
              <img
                alt="banner"
                className="main-banner__img"
                src="https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              />
              <div className="main-banner__data s-center">
                <p className="t2 s-mb-0">Sportmatic</p>
                <p> Find The Best Coaches</p>
                <a href="/forms" className="button">
                  Register!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
