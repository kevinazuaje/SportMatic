import React, { Component } from "react";

export default class TopBar extends Component {
  render() {
    return (
      <div>
        <div class="topbar">
          <div class="ed-grid">
            <h2>contenido</h2>
          </div>
        </div>

        <div class="topbar">
          <div class="ed-grid m-grid-2">
            <p class="s-mb-1 m-mb-0 s-center m-left"></p>
            <a class="button--cta button--tiny s-to-center m-to-right" href="#">
              Register
            </a>
          </div>
        </div>
      </div>
    );
  }
}
