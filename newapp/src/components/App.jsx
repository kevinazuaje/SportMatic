import React from "react";
import Form from "./Pages/Form";
import "../styles/styles.scss";
import Courses from "./Pages/Courses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseInfo from "./Organisms/Courseinfo";
import MainMenu from "./Organisms/MainMenu";
import Home from "./Pages/Home";

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Courses/:id" component={CourseInfo} />

      <Route path="/Courses" component={Courses} />

      <Route path="/form" component={Form} />
      <Route
        exact
        component={() => (
          <div className="ed-grid">
            <h1>Error 404 </h1>
            <span>Page not found</span>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;
