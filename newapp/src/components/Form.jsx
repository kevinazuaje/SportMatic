import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    name: "",
    emai: "",
  };

  render() {
    return (
      <div className="ed-grid">
        <h1>Contact</h1>
        <form>
          <div>
            <label htmlFor="name">Full Name</label>
            <input id="name" type="text" placeholder="Full Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="example@email.com" />
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input id="date" type="date" />
          </div>
          <br />

          <div>
            <button>Send</button>
          </div>
        </form>
        <div>
          {this.props.name} , {this.props.email}
        </div>
      </div>
    );
  }
}
