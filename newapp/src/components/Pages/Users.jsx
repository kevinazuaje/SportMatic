import React, { Component } from "react";
import UserCard from "../Molecules/UserCard";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users", { method: "get" })
      .then((response) => response.json())
      .then((response2) => this.setState({ users: response2 }));
  }

  render() {
    const { users } = this.state;
    return (
      <div className="ed-grid">
        <h1>Usuarios</h1>
        <div className="ed-grid s-grid-2 m-grid-3 l-grid-4">
          {users.map((u) => (
            <UserCard
              key={u.id}
              name={u.name}
              email={u.email}
              username={u.username}
            />
          ))}
        </div>
      </div>
    );
  }
}
