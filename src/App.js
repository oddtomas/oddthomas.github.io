import React, { Component } from "react";
import "./App.css";
import github from "../src/pictures/github.png";
import linkedin from "../src/pictures/linkedin.png";
// import canvas from "../src/pictures/canvas.jpg";
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
  // const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);
  // const [height, setHeight] = useState(window.innerHeight);
  // const [width, setWidth] = useState(window.innerWidth);
  // const handleResize = () => {
  //   setIsMobile(window.innerWidth <= 500);
  //   setHeight(window.innerHeight);
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
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
          {/* style={{ backgroundImage: `url(${canvas})` }} */}
          <div className="App">
            <p id="links">
              <a href="/" onClick={this.githubClick}>
                <img src={github} alt="github" width="50" height="50" />
              </a>

              <a href="/" onClick={this.linkedInClick}>
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
            {/* 
          <h1>{isMobile ? "Mobile app" : "Normal App"}</h1>
          <p>Width: {width}</p>
          <p>Height {height}</p> */}
          </div>
        </>
      </Router>
    );
  }
}

export default App;
