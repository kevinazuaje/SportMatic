import React, { Fragment } from "react";

import "./styles/styles.scss";

import Curse from "./components/curse";
function App() {
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
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="/" className="button">
                Botón del banner
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Curse />
      </div>
    </div>
  );
}

export default App;
