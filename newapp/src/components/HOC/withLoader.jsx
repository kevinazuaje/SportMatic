import React, { Component } from "react";

const withLoader = (propsValue) => (WrapedComponent) => {
  return class Withloader extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return this.props[propsValue].length === 0 ? (
        <h1 className="t4">Loading...</h1>
      ) : (
        <WrapedComponent {...this.props} />
      );
    }
  };
};

export default withLoader;
