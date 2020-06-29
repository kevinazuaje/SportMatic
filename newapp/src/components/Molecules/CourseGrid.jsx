import React from "react";
import CourseCard from "./CourseCard";
import withLoader from "../HOC/withLoader";
const CourseGrid = ({ courses }) => (
  <div className="ed-grid m-grid-4">
    {courses.length === 0 ? (
      <h1 className="t3"> Loading...</h1>
    ) : (
      courses.map((c) => (
        <CourseCard
          key={c.id}
          id={c.id}
          title={c.title}
          teacher={c.teacher}
          timage={c.timage}
          price={c.price}
          cimage={c.cimage}
        />
      ))
    )}
  </div>
);

export default withLoader(CourseGrid);
