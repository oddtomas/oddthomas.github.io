import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["fast", "scalable", "creative"];



class Demo extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    // paragraphIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        // paragraphIndex: this.state.paragraphIndex + 1,
      });
    }, 100);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
        <section>
          {/* <h2>Fast transition.</h2> */}
          <section className="swapText">
            I enjoy creating
            <ReactTextTransition
              text={texts[this.state.textFastIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 7px" }}
              inline
              overflow
            />
            applications.
          </section>
        </section>

      </React.Fragment>
    );
  }
}

export default Demo;
