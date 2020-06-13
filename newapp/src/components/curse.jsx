import React, { Component } from "react";
import PropType from "prop-types";

export default class curse extends Component {
  render() {
    const mayor = (age) => age > 18;

    const person = {
      name: "kevin",
      sname: "azuaje",
      age: 21,
      image:
        "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/97062444_256669122377752_5522323495834353664_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=galmLzM818YAX_s-20f&_nc_ht=scontent-mia3-2.xx&oh=20c23e187fcb771d9a358dc18922a51e&oe=5F0A4599",
    };

    const sport = {
      name: "Sprint",
      price: 40,
      image:
        "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    };

    return (
      <div>
        <article class="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={sport.image} alt="city" />
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h2 className="t5 s-mb-2 s-center">{sport.name}</h2>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src={person.image} alt="" />
                  </div>
                </div>
                <span className="Small">
                  {mayor(person.age) ? (
                    <h3>{person.name}</h3>
                  ) : (
                    <p>No tengo permitido el ingreso</p>
                  )}
                </span>
              </div>
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">
                Buy {sport.price}$ duration
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
