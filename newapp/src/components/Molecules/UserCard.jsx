import React, { Component } from "react";

export default class UserCard extends Component {
  render() {
    return (
      <article class="card">
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h2 className="t5 s-mb-2 s-center">{this.props.name}</h2>

          <span className="small">
            <strong>{this.props.username}</strong>
          </span>
        </div>

        <div className="s-main-center">
          <a className="button--ghost-alert button--tiny " href="/">
            {this.props.email}
          </a>
        </div>
      </article>
    );
  }
}
