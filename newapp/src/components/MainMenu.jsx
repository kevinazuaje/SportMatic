import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MainMenu extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
          <div className="s-cols-4 l-cols-1 s-cross-center ">
            <a href="/">
              <img
                src="https://ed.team/static/images/logo-premium.svg"
                alt="Logo"
              />
            </a>
          </div>
          <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
            <nav className="main-menu" id="main-menu">
              <ul>
                <li>
                  <NavLink exact to="/" activeClassName="active">
                    {" "}
                    Main
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/curses" activeClassName="active">
                    {" "}
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forms" activeClassName="active">
                    {" "}
                    Form
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
          </div>
        </div>
      </header>
    );
  }
}
