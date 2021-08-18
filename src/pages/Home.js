import React, { Component } from "react";
import { render } from "react-dom";
import Typewriter from "typewriter-effect";
import doge from "./doge.png";
import Demo from "./demo";
render(<Demo />, document.getElementById("root"));

class Home extends Component {
  render() {
    return (
      <div className="page">
        <h1 id="inProgress">
          IN PROGRESS <img src={doge} alt="doge" height="250" widht="250"></img>
        </h1>

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
      </div>
    );
  }
}

export default Home;
