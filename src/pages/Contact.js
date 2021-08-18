import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="page">
        <form
          action="https://formsubmit.co/oddthomas@csu.fullerton.edu"
          method="POST"
          id="form"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
          ></input>
          <input type="text" name="name" required placeholder="name"></input>
          <input
            type="text"
            name="message"
            required
            placeholder="Write your message here"
          ></input>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}

export default Contact;
