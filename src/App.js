import React, { Component } from 'react';
// import Navbar from './components/Navbar.js'
import './App.css';
import background from "../src/pictures/background.jpg"
import github from '../src/pictures/github.png'; 
import linkedin from '../src/pictures/linkedin.png'; 
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"



class App extends Component {
  constructor (props){
    super(props)
this.state = {

}

  }
  render () {
  return (
    <Router>
    <>
    <div className="App" style={{ backgroundImage: `url(${background})` }}
    >
      <p id="links">
      
      <a href="https://github.com/oddtomas"><img src={github} alt="github" width="50" height="50" /></a>
      
        <a href="https://www.linkedin.com/in/thomas-nguyen-9665761a7/"> <img src={linkedin} alt="linkedin" width="50" height="50" /></a>
    </p>
      <nav>
          <ul>
            
              <Link to="/">home</Link>
              
             <p> <Link to="/about">About</Link> </p>
             <p> <Link to="/projects">Projects</Link> </p>

              
          </ul>
      </nav>
      <div>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      </div>
</div>
</>
</Router>
  )
  }
}

export default App;
