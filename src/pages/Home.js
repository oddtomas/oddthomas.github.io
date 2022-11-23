import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import js from "../pictures/javascript.png";
import html from "../pictures/html.png";
import css from "../pictures/css.png";
import react from "../pictures/react.png";
import Demo from "./demo";

class Home extends Component {
  render() {
    return (
      <div className="page">
        <div id="typewriter">
          <Typewriter
            options={{
              strings: ["Hi! I'm Thomas your next Web Developer"],
              autoStart: true,
              // loop: true,
            }}
          />
        </div>
        <br></br>
        <Demo id="demo"></Demo>
        {/* <p className="about">
          I'm Thomas a web developer with a passion for clean, creative, and
          efficient code. I'm transitioning from the medical field in the Army
          where problem solving was my day to day job so the switch to
          programming felt very natural. Like medicine, coding is never ending
          journey of change and learning.
        </p> */}
        <div className="skills">
          <h4 className="skillText"> Skills</h4>
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
        </div>
      </div>
    );
  }
}

export default Home;
