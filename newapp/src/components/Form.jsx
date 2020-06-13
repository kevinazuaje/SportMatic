import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
    };
    this.ChangeName = this.ChangeName.bind(this);
    this.ChangeEmail = this.ChangeEmail.bind(this);
  }

  ChangeName(e) {
    const changeName = () => this.setState({ name: e.target.value });
  }

  ChangeEmail(e) {
    const changeEmail = (e) => this.setState({ email: e.target.value });
  }

  render() {
    return (
      <div className="ed-grid">
        <h1>Contact</h1>
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
            />
          </div>

          <br />

          <div>
            <button>Enviar</button>
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
