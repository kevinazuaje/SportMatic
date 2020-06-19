import React, { Component } from "react";
import CourseCard from "../Molecules/CourseCard";
export default class CourseGrid extends Component {
  render() {
    const courses = [
      {
        id: 1,
        title: "Sport Driving",
        price: 130,
        cimage:
          "https://images.pexels.com/photos/248747/pexels-photo-248747.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "kevin azuaje",
        timage:
          "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/97062444_256669122377752_5522323495834353664_o.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=galmLzM818YAX_s-20f&_nc_ht=scontent-mia3-2.xx&oh=20c23e187fcb771d9a358dc18922a51e&oe=5F0A4599",
      },
      {
        id: 2,
        title: "Swim",
        price: "70",
        cimage:
          "https://images.pexels.com/photos/565999/pexels-photo-565999.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        timage:
          "https://images.pexels.com/photos/3754637/pexels-photo-3754637.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "teacher2",
      },
      {
        id: 3,
        title: "Boxing",
        price: "20",
        cimage:
          "https://images.pexels.com/photos/163403/box-sport-men-training-163403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        timage:
          "https://images.pexels.com/photos/935965/pexels-photo-935965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "teacher3",
      },
      {
        id: 4,
        title: "Sprint",
        price: "40",
        cimage:
          "https://images.pexels.com/photos/40751/running-runner-long-distance-fitness-40751.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "teacher 4",
        timage:
          "https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 5,
        title: "Off Road Driving",
        price: 110,
        cimage:
          "https://images.pexels.com/photos/761815/pexels-photo-761815.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "Teacher 5",
        timage:
          "https://images.pexels.com/photos/4307725/pexels-photo-4307725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 6,
        title: " Climbing",
        price: 60,
        cimage:
          "https://images.pexels.com/photos/449609/pexels-photo-449609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "Teacher 6",
        timage:
          "https://images.pexels.com/photos/946337/pexels-photo-946337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 7,
        title: "Moto Gp",
        price: 199,
        cimage:
          "https://images.pexels.com/photos/34535/lorenzo-jorge-moto-gp-motorcycle.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: " Teacher7",
        timage:
          "https://images.pexels.com/photos/4054069/pexels-photo-4054069.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
      {
        id: 8,
        title: " Extreme cycling ",
        price: 40,
        cimage:
          "https://images.pexels.com/photos/2158963/pexels-photo-2158963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        teacher: "teacher 8",
        timage:
          "https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      },
    ];
    return (
      <div>
        <h2 className="ed-grid center">
          <strong>Sign up and choose one of our events</strong>
        </h2>
        <br />
        <div className="ed-grid m-grid-4">
          {courses.map((c) => (
            <CourseCard
              key={c.id}
              id={c.id}
              title={c.title}
              teacher={c.teacher}
              timage={c.timage}
              price={c.price}
              cimage={c.cimage}
            />
          ))}
        </div>
      </div>
    );
  }
}
