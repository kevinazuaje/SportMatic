import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
    this.changeName = this.changeName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className="ed-grid m-grid-4">
        <form>
          <div>
            <label htmlFor="name">
              <strong>Full Name</strong>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              onChange={this.changeName}
              required
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              onChange={this.changeEmail}
              required
            />
          </div>

          <br />

          <div className="ed-grid s-grid-3">
            <button>Send</button>
          </div>
        </form>
        <div>
          <h2>Hello: {this.state.name}</h2>
          <p>Your Email: {this.state.email}</p>
        </div>
      </div>
    );
  }
}
