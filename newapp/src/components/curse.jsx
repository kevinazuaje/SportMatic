import React, { Component } from "react";
// import PropType from "prop-types";

export default class curse extends Component {
  render() {
    return (
      <div>
        <article class="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={this.props.cimage} alt="Imagen del curso" />
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h2 className="t5 s-mb-2 s-center">{this.props.title}</h2>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src={this.props.timage} alt="teacher" />
                  </div>
                </div>
                <span className="Small">
                  <h3>{this.props.teacher}</h3>
                </span>
              </div>
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">
                Buy {this.props.price}$
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

//  de esta manera establecemos que valor es esperado, y que valor es
//  asignado por defecto respectivamente
// curse.PropTypes ={
//   name: PropType.string,
//   sname: PropType.string,

// }

// curse.defaultProps = {
//   name: "no se encontró un nombre",
//   age: "no se ingresó la edad",
//   image: "error al cargar archivo",
// };
