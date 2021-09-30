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
            <CopyMailTo email="oddthomas@csu.fullerton.edu" />
          </a>
        </h1>

        {/* <form
          action="https://formsubmit.co/oddthomas@csu.fullerton.edu"
          method="POST"
          className="form"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="form"
          ></input>
          <input
            type="text"
            name="name"
            required
            placeholder="name"
            className="form"
          ></input>
          <input
            type="text"
            name="message"
            required
            placeholder="Write your message here"
            className="form"
          ></input>
          <button type="submit" className="form">
            Send
          </button>
        </form> */}
      </div>
    );
  }
}

export default Contact;
