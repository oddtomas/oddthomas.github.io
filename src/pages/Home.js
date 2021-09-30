import React, { Component } from "react";
// import { render } from "react-dom";
import Typewriter from "typewriter-effect";
// import doge from "../pictures/doge.png";
import js from "../pictures/javascript.png";
import html from "../pictures/html.png";
import css from "../pictures/css.png";
import react from "../pictures/react.png";
import rails from "../pictures/rails.png";
import postgresql from "../pictures/postgresql.png";
import jest from "../pictures/jest.png";

import Demo from "./demo";
// render(<Demo />, document.getElementById("root"));

class Home extends Component {
  render() {
    return (
      <div className="page">
        {/* <h1 id="inProgress">
          IN PROGRESS <img src={doge} alt="doge" height="2100" width="2100"></img>
        </h1> */}

        <div id="typewriter">
          <Typewriter
            options={{
              strings: [
                "Hi! I'm Thomas, a full stack web developer! ",
                "Welcome to my website!",
              ],
              autoStart: true,
              // loop: true,
            }}
          />
        </div>
        <br></br>
        <Demo id="demo"></Demo>
        <div className="skills">
          <h4> Skills</h4>

          <img
            src={js}
            alt="javascript logo"
            height="50"
            width="50"
            className="logo"
          ></img>
          <img
            src={html}
            alt="html logo"
            height="50"
            width="50"
            className="logo"
          ></img>
          <img
            src={css}
            alt="css logo"
            height="50"
            width="50"
            className="logo"
          ></img>
          <img
            src={react}
            alt="react logo"
            height="50"
            width="50"
            className="logo"
          ></img>
          <img
            src={rails}
            alt="rails logo"
            height="50"
            width="50"
            className="logo"
          ></img>
          <img
            src={postgresql}
            alt="postgresql logo"
            height="50"
            width="50"
            className="logo"
          ></img>
          <img
            src={jest}
            alt="jest logo"
            height="50"
            width="50"
            className="logo"
          ></img>
        </div>
      </div>
    );
  }
}

export default Home;
