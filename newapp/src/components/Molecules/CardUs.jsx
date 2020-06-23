import React from "react";
import { Link } from "react-router-dom";

const CardUs = () => (
  <div>
    <article class="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to="">
          {" "}
          <img src={cimage} alt="sport driving" />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h2 className="t5 s-mb-2 s-center">{title}</h2>
        <div className="s-mb-2 s-main-center">
          <div className="card__teacher s-cross-center">
            <div className="card__avatar s-mr-1">
              <div className="circle img-container">
                <img src={timage} alt="teacher" />
              </div>
            </div>
            <span className="small">
              <strong>{teacher}</strong>
            </span>
          </div>
        </div>

        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny " href="/">
            Buy {price}$
          </a>
        </div>
      </div>
    </article>
  </div>
);

export default CardUs;
