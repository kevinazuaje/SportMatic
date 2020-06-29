import React, { Component } from "react";
import CourseGrid from "../Molecules/CourseGrid";
export default class Courses extends Component {
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
      <div className="ed-grid">
        <h2 className="ed-grid center">
          <strong>Sign up and choose one of our events</strong>
        </h2>
        <br />
        <div className="ed-grid">{<CourseGrid courses={courses} />}</div>
      </div>
    );
  }
}
