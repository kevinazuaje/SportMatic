import React, { Component } from "react";
import CourseCard from "../Molecules/CourseCard";
export default class CourseGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }
  componentDidMount() {
    fetch("http://my-json-server.typicode.com/kevinazuaje/json-db/courses", {
      method: "get",
    })
      .then((response) => response.json())
      .then((response2) => this.setState({ courses: response2 }));
  }

  render() {
    const { courses } = this.state;
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
