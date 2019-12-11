import React, { Component } from "react";
import logo from "./logo.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img src={logo} className="footer-logo" alt="logo" />
        React News by RemoteWorkChannel
      </footer>
    )
  }
}
export default Footer