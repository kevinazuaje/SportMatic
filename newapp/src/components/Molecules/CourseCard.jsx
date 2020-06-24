import React from "react";
import { Link } from "react-router-dom";
// import curses from "./Curses";
// import PropType from "prop-types";

const Course = ({ cimage, id, timage, title, teacher, price }) => (
  <div>
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <Link to={`./courses/${id}`}>
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

//  de esta manera establecemos que valor es esperado, y que valor es
//  asignado por defecto respectivamente
// curse.PropTypes ={
//   name: PropType.string,
//   sname: PropType.string,

// }

// curse.defaultProps = {
//   title: "no se encontró un nombre",
//   // age: "no se ingresó la edad",
//   cimage: "error al cargar archivo",
// };
export default Course;
