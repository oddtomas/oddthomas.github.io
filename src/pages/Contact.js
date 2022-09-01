import React, { Component } from "react";
import CopyMailTo from "react-copy-mailto";

class Contact extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="page">
        <h1 className="form">
          Let's Talk @{" "}
          <a>
            <CopyMailTo email="thomas.nguyense@gmail.com" />
          </a>
        </h1>

      </div>
    );
  }
}

export default Contact;
