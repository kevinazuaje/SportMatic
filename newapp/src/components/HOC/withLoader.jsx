import React, { Component } from "react";

const withLoader = (WrapedComponent) => {
  return class Withloader extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <WrapedComponent {...this.props} />;
    }
  };
};

export default withLoader;
