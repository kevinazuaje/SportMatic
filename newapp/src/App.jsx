import React from "react";
import Form from "./components/Form";
import "./styles/styles.scss";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CourseInfo from "./components/Courseinfo";
import MainMenu from "./components/MainMenu";
const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Banner} />
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
