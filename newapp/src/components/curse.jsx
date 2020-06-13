import React, { Component } from "react";

export default class curse extends Component {
  render() {
    return (
      <div>
        <article class="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img
              src="https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="city"
            />
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
              Programación orientada a objetos con Go
            </h3>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img
                      src="https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500/img"
                      alt=""
                    />
                  </div>
                </div>
                <span className="small">Alexys Lozada</span>
              </div>
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">
                $ 20USD
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
