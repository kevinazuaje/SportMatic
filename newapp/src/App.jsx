import React from "react";
import Form from "./components/Form";
import "./styles/styles.scss";
import Banner from "./components/Banner";
import Curses from "./components/Curses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/Curses" exact component={Curses} />
      <Route path="/Curses/:id" exact component={Curses} />

      <Route path="/forms" exact component={Form} />
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
