import React from "react";

import "./styles/styles.scss";

import Curse from "./components/curse";
function App() {
  const cursos = [
    {
      title: "sprint",
      price: "40",
      cimage:
        "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      teacher: "kevin azuaje",
      timage:
        "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/97062444_256669122377752_5522323495834353664_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=galmLzM818YAX_s-20f&_nc_ht=scontent-mia3-2.xx&oh=20c23e187fcb771d9a358dc18922a51e&oe=5F0A4599",
    },
    {
      title: "swim",
      price: "70",
      cimage:
        "https://images.pexels.com/photos/565999/pexels-photo-565999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      timage:
        "https://images.pexels.com/photos/3754637/pexels-photo-3754637.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      teacher: "teacher1",
    },
    {
      title: "boxeo",
      price: "20",
      cimage:
        "https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      timage:
        "https://images.pexels.com/photos/935965/pexels-photo-935965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      teacher: "teacher2",
    },
  ];

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
      <div></div>

      {cursos.map((c) => (
        <Curse
          title={c.title}
          teacher={c.teacher}
          timage={c.timage}
          price={c.price}
          cimage={c.cimage}
        />
      ))}
    </div>
  );
}

export default App;
