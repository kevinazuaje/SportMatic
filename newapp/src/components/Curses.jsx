import React, { Component } from "react";
import Curse from "./curse";
export default class Curses extends Component {
  render() {
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
}
