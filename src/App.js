import React, { Component } from "react";
import "./App.css";
import github from "../src/pictures/github.png";
import linkedin from "../src/pictures/linkedin.png";
import canvas from "../src/pictures/canvas.jpg";
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
                href="/"
                onClick={this.githubClick}
                onMouseDown={this.githubClick}
              >
                <img src={github} alt="github" width="50" height="50" />
              </a>

              <a
                href="/"
                onClick={this.linkedInClick}
                onMouseDown={this.linkedInClick}
              >
                {" "}
                <img src={linkedin} alt="linkedin" width="50" height="50" />
              </a>
            </p>
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
