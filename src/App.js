import React, { Component } from "react";
// import Navbar from './components/Navbar.js'
import "./App.css";
import github from "../src/pictures/github.png";
import linkedin from "../src/pictures/linkedin.png";
import canvas from "../src/pictures/canvas.jpg";
import { Route, BrowserRouter as Router, Link } from "react-router-dom"; //has to be saved?
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
// import Footer from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  githubClick = (props) => {
    window.open("https://github.com/oddtomas");
  };
  linkedInClick = (props) => {
    window.open("https://www.linkedin.com/in/thomas-nguyen-9665761a7/");
  };

  render() {
    return (
      <Router>
        <>
          <div className="App" style={{ backgroundImage: `url(${canvas})` }}>
            <p id="links">
              {/* left or middle mouse click takes you off page when creating new tab*/}
              <a
                href="_self"
                onClick={this.githubClick}
                onMouseDown={this.githubClick}
              >
                <img src={github} alt="github" width="50" height="50" />
              </a>

              <a
                href="_self"
                onClick={this.linkedInClick}
                onMouseDown={this.linkedInClick}
              >
                {" "}
                <img src={linkedin} alt="linkedin" width="50" height="50" />
              </a>
            </p>
            <nav>
              <ul>
                <Link to="/">home</Link>

                <p>
                  {" "}
                  <Link to="/about">About</Link>{" "}
                </p>
                <p>
                  {" "}
                  <Link to="/projects">Projects</Link>{" "}
                </p>
              </ul>
            </nav>
            <div>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/projects" component={Projects} />
            </div>
          </div>
        </>
        {/* <Footer></Footer> */}
      </Router>
    );
  }
}

export default App;
