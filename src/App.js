import React, { Component } from "react";
import "./App.css";
import github from "../src/pictures/github.png";
import linkedin from "../src/pictures/linkedin.png";
import {
  Route,
  BrowserRouter as Router,
  NavLink,
  Switch,
} from "react-router-dom"; //has to be saved?
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import paint from "../src/pictures/paint.mp4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  githubClick = () => {
    window.open("https://github.com/oddtomas");
  };
  linkedInClick = () => {
    window.open("https://www.linkedin.com/in/thomas-nguyen-9665761a7/");
  };
  render() {
    return (
      <Router>
        <>
          <video id="videoTag" autoPlay muted>
            <source src={paint} type="video/mp4" />
          </video>
          <script>
            var bgvideo = document.getElementById("videoTag"); bgvideo.muted =
            true; bgvideo.play();
          </script>
          {/* style={{ backgroundImage: `url(${canvas})` }} */}
          <div className="App">
            <p id="links">
              <a href="/" onClick={this.githubClick}>
                <img
                  src={github}
                  alt="github"
                  width="50"
                  height="50"
                  className="linklogo"
                />
              </a>

              <a href="/" onClick={this.linkedInClick}>
                {" "}
                <img
                  src={linkedin}
                  alt="linkedin"
                  width="50"
                  height="50"
                  className="linklogo"
                />
              </a>
            </p>
            {/* <h4 id="name">Thomas Nguyen</h4> */}
            <div className="nav">
              <ul>
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="navigation"
                >
                  Home
                </NavLink>

                <p>
                  {" "}
                  <NavLink
                    to="/about"
                    activeClassName="active"
                    className="navigation"
                  >
                    About
                  </NavLink>{" "}
                </p>
                <p>
                  {" "}
                  <NavLink
                    to="/projects"
                    activeClassName="active"
                    className="navigation"
                  >
                    Projects
                  </NavLink>{" "}
                </p>
                <p>
                  {" "}
                  <NavLink
                    to="/contact"
                    activeClassName="active"
                    className="navigation"
                  >
                    Contact
                  </NavLink>{" "}
                </p>
              </ul>
            </div>
            <Route /*renders transition group all the time  */
              render={({ location }) => (
                <TransitionGroup>
                  <CSSTransition
                    key={
                      location.key
                    } /* unique identifier for individual transition groups */
                    timeout={450}
                    classNames="fade"
                  >
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/projects" component={Projects} />
                      <Route path="/contact" component={Contact} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}
            />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
