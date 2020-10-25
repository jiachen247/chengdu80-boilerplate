import React, { Component } from "react";

class LogoutContainer extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {};

  render() {
    localStorage.removeItem("user");
    return <div>You have successfully logged out!</div>;
  }
}

export default LogoutContainer;
